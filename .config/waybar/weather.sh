#!/usr/bin/env bash

STADT=Aachen

text=$(curl -s "https://wttr.in/${STADT}?format=1" | sed -E 's/\s+/ /g')

if [ -z "$text" ] || [[ "$text" == "Error" ]]; then
    echo '{"text": "N/A", "tooltip": "Weather sevice not reachable"}'
    exit 1
fi

tooltip=$(curl -s "https://wttr.in/${STADT}?format=%l:+%C+%t+%w+%m" | sed -E 's/\s+/ /g')

echo "{\"text\":\"$text\", \"tooltip\":\"$tooltip\"}"