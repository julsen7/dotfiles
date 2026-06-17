#!/usr/bin/env bash

tmp_official=$(mktemp)
tmp_aur=$(mktemp)
tmp_fw=$(mktemp)

cleanup() {
    rm -f "$tmp_official" "$tmp_aur" "$tmp_fw"
}
trap cleanup EXIT

checkupdates > "$tmp_official" 2>/dev/null &
pid_official=$!

yay -Qua > "$tmp_aur" 2>/dev/null &
pid_aur=$!

fwupdmgr get-updates --json > "$tmp_fw" 2>/dev/null &
pid_fw=$!

wait $pid_official $pid_aur $pid_fw

official_updates=$(cat "$tmp_official")
aur_updates=$(cat "$tmp_aur")
fw_json=$(cat "$tmp_fw")

if [ -n "$fw_json" ]; then
    fw_updates=$(echo "$fw_json" | jq -r '.Devices[].Name' 2>/dev/null)
else
    fw_updates=""
fi

count_official=$(echo -n "$official_updates" | grep -c '^' || echo 0)
count_aur=$(echo -n "$aur_updates" | grep -c '^' || echo 0)
count_fw=$(echo -n "$fw_updates" | grep -c '^' || echo 0)

total_updates=$((count_official + count_aur + count_fw))

if [ "$total_updates" -gt 0 ]; then
    text="$total_updates"
    tooltip=""

    [ "$count_official" -gt 0 ] && tooltip+="Official ($count_official):\n$official_updates\n\n"
    [ "$count_aur" -gt 0 ]      && tooltip+="AUR ($count_aur):\n$aur_updates\n\n"
    [ "$count_fw" -gt 0 ]       && tooltip+="Firmware ($count_fw):\n$fw_updates\n\n"

    tooltip=$(printf "%b" "$tooltip" | sed -e :a -e '/^\n*$/{$d;N;ba;}')

    if [ "$count_fw" -gt 0 ]; then
        class="fw-updates"
    else
        class="has-updates"
    fi
else
    text="0"
    tooltip="System und Firmware sind auf dem neuesten Stand"
    class="updated"
fi

jq -c -n \
  --arg text "$text" \
  --arg tooltip "$tooltip" \
  --arg class "$class" \
  '{"text": $text, "tooltip": $tooltip, "class": $class}'
