# Feautures

- Dotfiles: dunst, modrinth-app, wiremix/pipewire/wireplumber, vscode
- waybar: updates, timer colors, disk größe
- bluetooth-tethering https://wiki.hypr.land/Useful-Utilities/Phone-connect/

# Bugs

- obs: autostart von screen picker
- pywal install-script not working

# Other

- designs: https://www.youtube.com/watch?v=xfYoN0VL9mY

# Merken

~/.config/wlogout/: (Falls für das Power-Menü genutzt) Layout und CSS des Abmeldebildschirms.
~/.config/dunst/: Die Einstellungen für Ihr Benachrichtigungs-System.
~/.config/btop/: Ihr Farbschema und die Layout-Einstellungen des Systemmonitors.
~/.config/udiskie/: Falls Sie automatische Mount-Optionen für USB-Sticks anpassen möchten.
~/.config/pipewire/ oder ~/.config/wireplumber/: Nur notwendig, wenn Sie Standard-Audiogeräte oder Sample-Rates fest vordefinieren.
~/.config/discord/: Nur für spezifische Client-Modifikationen interessant, sonst vernachlässigbar.
~/.config/spotify-launcher.conf: Falls Sie dem Spotify-Launcher spezielle Flags (z. B. für Wayland-Support) mitgeben.

Relevanter Pfad: ~/.config/gh/ [3] 
Was Sie sichern sollten: Nur die Datei config.yml. Hier wird zum Beispiel definiert, welchen Texteditor (nano, nvim) oder welches Git-Protokoll (ssh, https) die CLI standardmäßig nutzt. [3] 
⚠️ Was Sie ignorieren MÜSSEN: Die Datei hosts.yml. In dieser Datei speichert GitHub CLI Ihr geheimes OAuth-Authentifizierungs-Token. Wenn Sie diese Datei auf GitHub hochladen, kann jeder Ihr GitHub-Konto übernehmen. [1] 
Stow-Empfehlung: Fügen Sie hosts.yml unbedingt in Ihre .gitignore-Datei ein. Auf einem neuen Rechner führen Sie einfach einmal gh auth login aus, um eine neue hosts.yml zu erzeugen. [2, 4, 5] 

2. OBS Studio

Relevanter Pfad: ~/.config/obs-studio/
Was Sie sichern sollten: Die Profile und Szenen-Sammlungen.


⚠️ Was Sie ignorieren MÜSSEN: Die globalen Log-Dateien (logs/, crashes/) und vor allem die streamKey-Einträge in den Profil-Konfigurationsdateien.
Stow-Empfehlung: Wenn Sie OBS über Stow synchronisieren, schwärzen Sie den Stream-Schlüssel in der Konfigurationsdatei vor dem Git-Commit oder nutzen Sie OBS-Profile, die Sie lokal unberührt lassen.

3. Modrinth App [6] 

Relevanter Pfad: ~/.local/share/ModrinthApp/ (Achtung: Liegt standardmäßig unter share, nicht unter .config). [7] 
Was Sie sichern sollten: Nichts über Stow.
Warum? Die Modrinth App speichert an diesem Ort nicht nur Einstellungen, sondern die gesamten Minecraft-Instanzen (inklusive Welten, ressourcenintensiven Mod-Dateien und Java-Runtimes) sowie eine lokale SQLite-Datenbank. Dieser Ordner wird schnell viele Gigabyte groß und bringt Git zum Absturz. Zudem speichert Modrinth Ihre Microsoft/Minecraft-Login-Sitzungen lokal. [7, 8] 
Empfehlung: Nutzen Sie stattdessen die in der Modrinth App eingebaute Funktion, um Ihre Modpacks als .mrpack-Datei zu exportieren. Diese kleine Datei können Sie dann in Ihrem Dotfiles-Repository (z. B. in einem Ordner ~/dotfiles/minecraft/) ablegen. [9] 

Struktur-Erweiterung für Ihr Dotfiles-Repo
Wenn Sie diese Tools integrieren, sieht Ihr ~/dotfiles-Ordner idealerweise so aus: [10] 
~/dotfiles/
├── gh/
│   └── .config/
│       └── gh/
│           └── config.yml       <-- (hosts.yml via .gitignore blockieren!)
├── obs/
│   └── .config/
│       └── obs-studio/
│           ├── basic/
│           │   ├── profiles/
│           │   └── scenes/
└── minecraft/
    └── modpacks/
        └── mein_modpack.mrpack  <-- Manueller Export statt Stow


Möchten Sie wissen, wie die exakten Einträge für Ihre .gitignore-Datei aussehen müssen, damit Sie diese sensiblen Ordner niemals aus Versehen zu GitHub hochladen? [1, 2] 

[1] https://www.strcat.de
[2] https://blog.openreplay.com
[3] https://cli.github.com
[4] https://docs.github.com
[5] https://www.youtube.com
[6] https://support.modrinth.com
[7] https://support.modrinth.com
[8] https://github.com
[9] https://github.com
[10] https://www.youtube.com

