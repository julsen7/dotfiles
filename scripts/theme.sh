#!/usr/bin/env bash

KITTY_DIR="$HOME/.config/kitty"

BW_ICON="$HOME/Dotfiles/scripts/blackwhite.jpg"
COLOR_ICON="$HOME/Dotfiles/scripts/colorful.jpg"

themes=(
    "Black & White\0icon\x1f${BW_ICON}"
    "Colorful\0icon\x1f${COLOR_ICON}"
)

SELECTED_THEME=$(printf "%b\n" "${themes[@]}" | rofi -dmenu -p "Theme Selector")

if [[ -n "$SELECTED_THEME" ]]; then
    
    rm -f "$KITTY_DIR/current-theme.conf"

    if [[ "$SELECTED_THEME" == "Black & White" ]]; then
        ln -s "$KITTY_DIR/themes/blackwhite.conf" "$KITTY_DIR/current-theme.conf"
        dunstify "Theme Selector" "Black-White theme selected" -i "$BW_ICON"
        
    elif [[ "$SELECTED_THEME" == "Colorful" ]]; then
        ln -s "$KITTY_DIR/themes/colorful.conf" "$KITTY_DIR/current-theme.conf"
        dunstify "Theme Selector" "Colorful theme selected" -i "$COLOR_ICON"
    fi

    killall -SIGUSR1 kitty 2>/dev/null
fi
