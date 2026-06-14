#!/usr/bin/env bash

STATE_FILE="/tmp/waybar_timer_state"
START_FILE="/tmp/waybar_timer_start"

stop_timer() {
    rm -f "$STATE_FILE" "$START_FILE"
    echo '{"text": "󱎫 Start", "class": "stopped"}'
    pkill -f "timer.sh continuous"
    exit 0
}

if [ "$1" = "toggle" ]; then
    if [ -f "$STATE_FILE" ]; then
        stop_timer
    else
        echo "running" > "$STATE_FILE"
        date +%s%N > "$START_FILE"
        $0 continuous &
    fi
    exit 0
fi

if [ "$1" = "continuous" ]; then
    while [ -f "$STATE_FILE" ]; do
        START_TIME=$(cat "$START_FILE" 2>/dev/null)
        if [ -z "$START_TIME" ]; then stop_timer; fi

        CURRENT_TIME=$(date +%s%N)
        DIFF=$((CURRENT_TIME - START_TIME))
        if [ $DIFF -lt 0 ]; then DIFF=0; fi

        MINUTES=$((DIFF / 60000000000))
        SECONDS=$(((DIFF % 60000000000) / 1000000000))
        MS=$(((DIFF % 1000000000) / 1000000))

        stdbuf --output=L printf '{"text": "󱎫 %02d:%02d.%03d", "class": "running"}\n' $MINUTES $SECONDS $MS
        
        sleep 0.04
    done
    exit 0
fi

if [ -f "$STATE_FILE" ]; then
    $0 continuous
else
    echo '{"text": "󱎫 Start", "class": "stopped"}'
fi
