#!/bin/bash

# Bricht bei Fehlern ab (-e), fängt ungebundene Variablen ab (-u) 
# und sichert Pipeline-Fehler (-o pipefail)
set -euo pipefail

echo "==> Aktualisiere System..."
sudo pacman -Syu --noconfirm

echo "==> Installiere Basis-Abhängigkeiten..."
sudo pacman -S --needed --noconfirm base-devel git stow

# AUR-Helfer 'yay' installieren, falls nicht vorhanden
if ! command -v yay &> /dev/null; then
    echo "==> Installiere yay (AUR-Helper)..."
    # Nutze mktemp für ein garantiertes und sauberes Temp-Verzeichnis
    YAY_DIR=$(mktemp -d)
    git clone https://aur.archlinux.org/yay.git "$YAY_DIR"
    # Subshell verwenden, um das aktuelle Verzeichnis nicht dauerhaft zu wechseln
    (cd "$YAY_DIR" && makepkg -si --noconfirm)
    rm -rf "$YAY_DIR"
fi

# Paketlisten installieren (vorab prüfen, ob die Dateien existieren)
if [[ -f "pkglist.txt" ]]; then
    echo "==> Installiere offizielle Pakete aus pkglist.txt..."
    sudo pacman -S --needed --noconfirm - < pkglist.txt
fi

if [[ -f "aurlist.txt" ]]; then
    echo "==> Installiere AUR-Pakete aus aurlist.txt..."
    yay -S --needed --noconfirm - < aurlist.txt
fi

# DOTFILES MIT GNU STOW VERLINKEN (Ersetzt die fehleranfällige cp-Schleife)
echo "==> Verlinke Dotfiles mit GNU Stow..."
if [[ -d ~/dotfiles ]]; then
    # Wechselt in den dotfiles-Ordner
    cd ~/dotfiles
    
    # Geht durch jeden Ordner im dotfiles-Verzeichnis (Stow-Pakete)
    for dir in */; do
        # Entfernt den Slash am Ende des Ordnernamens
        dir=${dir%/}
        
        # Ignoriere den .git Ordner und den "other"-Ordner (falls vorhanden)
        if [[ "$dir" != ".git" && "$dir" != "other" ]]; then
            echo "    Stowing: $dir"
            stow -R "$dir"
        fi
    done
    cd - > /dev/null
else
    echo "[WARNUNG] ~/dotfiles Ordner wurde nicht gefunden! Überspringe Stowing."
fi

# Systemkonfigurationen (Ly Display Manager)
if [[ -f ~/dotfiles/config.ini ]]; then
    echo "==> Konfiguriere Ly Display Manager..."
    sudo mkdir -p /etc/ly/
    sudo cp ~/dotfiles/config.ini /etc/ly/
fi

# Systemd-Dienste aktivieren
echo "==> Aktiviere Systemd-Dienste..."
for service in NetworkManager bluetooth.service ly.service ufw.service power-profiles-daemon.service; do
    if systemctl list-unit-files | grep -q "^$service"; then
        sudo systemctl enable "$service"
    else
        echo "[INFO] Dienst $service nicht gefunden oder Name abweichend. Überspringe."
    fi
done

# Firewall aktivieren
echo "==> Aktiviere UFW..."
sudo ufw --force enable

echo "========================================= "
echo " Installation abgeschlossen! Starte neu."
echo "========================================="
