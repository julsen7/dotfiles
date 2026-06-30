#!/usr/bin/env bash

# Hier können Sie später die Pfade zu Ihren Vorschaubildern/Icons eintragen
BW_ICON=""
COLOR_ICON=""

# Menü-Einträge für Rofi vorbereiten (unterstützt Text und optionale Icons)
menu_items="blackwhite\0icon\x1f${BW_ICON}\ncolorful\0icon\x1f${COLOR_ICON}\n"

# Rofi-Menü anzeigen und Auswahl speichern
SELECTED_THEME=$(echo -e "$menu_items" | rofi -dmenu -p "Theme Selector")

# Falls eine Auswahl getroffen wurde
if [[ -n "$SELECTED_THEME" ]]; then
    
    if [[ "$SELECTED_THEME" == "blackwhite" ]]; then
        # Befehle für das Schwarz-Weiß-Theme
        # Matugen generiert Farben basierend auf einem Graustufenbild oder gesetzten Farben
        # Beispiel: Matugen mit einem standardmäßigen dunklen Modus füttern
        matugen image "/home/julsen/wallpaper/ihr_standard_bw_bild.png" -m "dark" >/dev/null 2>&1
        
        dunstify "Theme" "Schwarz-Weiß-Theme aktiviert"
        
    elif [[ "$SELECTED_THEME" == "colorful" ]]; then
        # Befehle für das farbenfrohe Theme
        # Beispiel: Matugen im "light" oder einem kontrastreichen Modus ausführen
        matugen image "/home/julsen/wallpaper/ihr_buntes_bild.png" -m "dark" >/dev/null 2>&1
        
        dunstify "Theme" "Colorful-Theme aktiviert"
    fi
fi
