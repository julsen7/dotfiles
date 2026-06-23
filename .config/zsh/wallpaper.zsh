wallpaper() {
    local DIR="/home/julsen/wallpaper"
    local CONFIG_FILE="$HOME/.config/hypr/hyprpaper.conf"
    local -a WALLS
    clear

    if [[ ! -d "$DIR" ]]; then
        echo -e "\e[31m X Folder $DIR does not exist!\e[0m"
        return 1
    fi

    WALLS=( "$DIR"/*(N:t) )

    if (( ${#WALLS} == 0 )); then
        echo -e "\e[31m X Folder $DIR is empty!\e[0m"
        return 1
    fi

    echo -e "\e[36m=== Hyprpaper Selector ===\e[0m\n"
    local i
    for i in {1..${#WALLS}}; do
        echo -e "  \e[35m$i\e[0m) ${WALLS[$i]}"
    done
    echo ""

    echo -ne "\e[36m❯ Choose wallpaper: \e[0m"
    read -r SELECTION

    if ! [[ "$SELECTION" =~ ^[0-9]+$ ]] || (( SELECTION < 1 || SELECTION > ${#WALLS} )); then
        echo -e "\e[31m X Incorrect selection!\e[0m"
        return 1
    fi

    local SELECTED_WALL="${WALLS[$SELECTION]}"
    local FULL_PATH="$DIR/$SELECTED_WALL"

    echo -e "\e[36m Appending wallpaper and color theme...\e[0m"
    
    if [[ -f "$CONFIG_FILE" ]]; then
        sed -i "s|path = .*|path = $FULL_PATH|" "$CONFIG_FILE"
    fi

    hyprctl hyprpaper preload "$FULL_PATH" >/dev/null 2>&1
    hyprctl hyprpaper wallpaper ",$FULL_PATH" >/dev/null 2>&1

    wal -i "$FULL_PATH" >/dev/null 2>&1
    [[ -f ~/.cache/wal/sequences ]] && cat ~/.cache/wal/sequences

    cp ~/.cache/wal/hyprtoolkit.conf ~/.config/hypr/hyprtoolkit.conf
    killall -SIGUSR2 waybar 2>/dev/null

    wal -s -t -i "$FULL_PATH" -o ~/.config/wal/postrun.sh >/dev/null 2>&1

    echo -e "\e[32m Activated: $SELECTED_WALL\e[0m"
}
