#!/bin/bash

set -e

sudo pacman -Syu --noconfirm

sudo pacman -S --needed base-devel git --noconfirm

if ! command -v yay &> /dev/null; then
    git clone https://aur.archlinux.org/yay.git /tmp/yay
    cd /tmp/yay
    makepkg -si --noconfirm
    cd -
fi

sudo pacman -S --needed - < pkglist.txt --noconfirm
yay -S --needed - < aurlist.txt --noconfirm

shopt -s dotglob
for file in ~/dotfiles/*; do
    basename_file=$(basename "$file")
    if [[ "$basename_file" != ".git" && "$basename_file" != "config.ini" && "$basename_file" != "pkglist.txt" && "$basename_file" != "aurlist.txt" && "$basename_file" != "install.sh" && "$basename_file" != "bootstrap.sh" ]]; then
        cp -rf "$file" ~/
    fi
done
shopt -u dotglob

sudo mkdir -p /etc/ly/
sudo cp ~/dotfiles/config.ini /etc/ly/

sudo systemctl enable NetworkManager
sudo systemctl enable bluetooth.service
sudo systemctl enable ly@tty1.service
sudo systemctl enable ufw.service
sudo systemctl enable power-profiles-daemon.service

sudo ufw --force enable

echo "Installation abgeschlossen! Starte dein System neu."
