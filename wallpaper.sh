#!/usr/bin/env bash

DIR="/home/julsen/wallpaper"

if [[ ! -d "$DIR" ]]; then
    dunstify "Wallpaper Error" "Folder $DIR does not exist!" -u critical
    exit 1
fi

shopt -s nullglob
WALLS=( "$DIR"/*.{png,jpg,jpeg,webp} )
shopt -u nullglob

if (( ${#WALLS[@]} == 0 )); then
    dunstify "Wallpaper Error" "Folder $DIR does not contain correct images!" -u critical
    exit 1
fi

menu_items=""
for full_path in "${WALLS[@]}"; do
    basename=$(basename "$full_path")
    menu_items+="${basename}\0icon\x1f${full_path}\n"
done

SELECTED_NAME=$(echo -e "$menu_items" | rofi -dmenu)

if [[ -n "$SELECTED_NAME" ]]; then
    FULL_PATH="$DIR/$SELECTED_NAME"
    
    awww img "$FULL_PATH" --transition-type center
    
    matugen image "$FULL_PATH" -m "dark" >/dev/null 2>&1

    dunstify "Wallpaper" "Set $SELECTED_NAME as wallpaper" -i "$FULL_PATH"
fi
