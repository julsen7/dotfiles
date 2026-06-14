wallpaper() {
    local DIR="/home/julsen/wallpaper"
    local -a WALLS
    clear

    if [[ ! -d "$DIR" ]]; then
        echo -e "\e[31m  ✗ Ordner existiert nicht: $DIR\e[0m"
        return
    fi

    for f in "$DIR"/*; do
        if [[ -f "$f" ]]; then
            WALLS+=("${f:t}")
        fi
    done

    if (( ${#WALLS} == 0 )); then
        echo -e "\e[31m  ✗ Der Ordner $DIR ist leer.\e[0m"
        return
    fi

    echo -e "\e[36m=== Hyprpaper Selector ===\e[0m"
    for i in {1..${#WALLS}}; do
        echo -e "  \e[35m$i\e[0m) ${WALLS[$i]}"
    done
    echo ""

    echo -ne "\e[36m❯ Nummer wählen: \e[0m"
    read SELECTION

    if [[ "$SELECTION" =~ ^[0-9]+$ ]] && (( SELECTION >= 1 && SELECTION <= ${#WALLS} )); then
        local SELECTED_WALL="${WALLS[$SELECTION]}"
        local FULL_PATH="$DIR/$SELECTED_WALL"

        echo -e "\e[36m     Wende Hintergrund & Farben an...\e[0m"

        hyprctl hyprpaper unload all > /dev/null 2>&1
        hyprctl hyprpaper preload "$FULL_PATH" > /dev/null 2>&1
        sleep 0.1
        hyprctl hyprpaper wallpaper ",$FULL_PATH" > /dev/null 2>&1

        wal -i "$FULL_PATH" > /dev/null 2>&1

        if [[ -f ~/.cache/wal/sequences ]]; then
            cat ~/.cache/wal/sequences
        fi

        cp ~/.cache/wal/hyprtoolkit.conf ~/.config/hypr/hyprtoolkit.conf

        killall hyprlauncher 2>/dev/null
        sleep 0.1
        hyprctl dispatch exec hyprlauncher -d > /dev/null 2>&1

        killall -SIGUSR2 waybar

        wal -s -t -i "$FULL_PATH" -o ~/.config/wal/postrun.sh > /dev/null 2>&1

        echo -e "\e[32m  ✓ Aktiviert: $SELECTED_WALL\e[0m"
    else
        echo -e "\e[31m  ✗ Ungültige Auswahl!\e[0m"
    fi
}
