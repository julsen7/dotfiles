# Feautures

- Dotfiles: dunst, obs-studio, modrinth-app, wiremix/pipewire/wireplumber, vscode, chromium, github cli?
- waybar: updates, timer colors, disk größe
- bluetooth-tethering https://wiki.hypr.land/Useful-Utilities/Phone-connect/
- hyprlauncher austauschen (vlt. rofi, wofi)

# Bugs

- vscode settings & extensions inside .config
- "didum"-headset-sound alle paar minuten fixen
- obs: game capture, autostart von screen picker
- pywal install-script not working

# Other

- designs: https://www.youtube.com/watch?v=xfYoN0VL9mY

# Merken

Hier ist die präzise Liste aller Verzeichnisse aus Ihrem ~/.config/-Ordner (und vereinzelten anderen Pfaden), die exakt zu Ihrer Paketliste passen und über stow gesichert werden sollten.
1. Oberfläche & Desktop (Core)

~/.config/uwsm/: Speichert Umgebungsvariablen und Start-Regeln für Wayland.
~/.config/hypr/: Enthält Ihre hyprland.conf, hyprpaper.conf und zukünftige Sperrbildschirm-Regeln.
~/.config/waybar/: Die Konfigurationsdateien und CSS-Themes für Ihre Statusleiste.
~/.config/wlogout/: (Falls für das Power-Menü genutzt) Layout und CSS des Abmeldebildschirms.
~/.config/dunst/: Die Einstellungen für Ihr Benachrichtigungs-System. [1] 

2. Terminal, Shell & TUI-Tools

~/.config/kitty/: Schriftarten, Farben und Tastenkombinationen Ihres Terminals.
~/.config/yazi/: Einstellungen (yazi.toml) und Tastenbelegungen (keymap.toml) für den Dateimanager.
~/.config/starship.toml: Das komplette Design Ihres Terminal-Prompts (liegt direkt in ~/.config/).
~/.config/btop/: Ihr Farbschema und die Layout-Einstellungen des Systemmonitors.
~/.config/fastfetch/: Die config.jsonc, die bestimmt, welche Systeminfos beim Terminalstart angezeigt werden.

3. Zsh-Spezifisch (Direkt im Home-Verzeichnis)
Diese Dateien liegen nicht in .config, sollten für Stow aber genauso vorbereitet werden:

~/.zshrc: Ihre Aliase, Plugins (zsh-autosuggestions, zsh-syntax-highlighting) und Autostart-Einträge (z. B. für starship und zoxide).

4. System- & Hardware-Konfigurationen

~/.config/environment.d/: Wichtig für globale Wayland-/Qt-Umgebungsvariablen (wird von uwsm ausgelesen).
~/.config/udiskie/: Falls Sie automatische Mount-Optionen für USB-Sticks anpassen möchten.
~/.config/pipewire/ oder ~/.config/wireplumber/: Nur notwendig, wenn Sie Standard-Audiogeräte oder Sample-Rates fest vordefinieren.

5. Anwendungs-Konfigurationen (Apps)

~/.config/Code/User/settings.json: Ihre VS-Code-Einstellungen (sowie keybindings.json). Achtung: Stowen Sie nicht den ganzen Code-Ordner, sondern nur den User-Inhalt.
~/.config/discord/: Nur für spezifische Client-Modifikationen interessant, sonst vernachlässigbar.
~/.config/spotify-launcher.conf: Falls Sie dem Spotify-Launcher spezielle Flags (z. B. für Wayland-Support) mitgeben.

Vorbereitung für GNU Stow
Um diese sauber zu trennen, legen Sie Ihr ~/dotfiles-Verzeichnis am besten so an:
~/dotfiles/
├── hyprland/
│   └── .config/
│       └── hypr/
├── waybar/
│   └── .config/
│       └── waybar/
├── terminal/
│   └── .config/
│       ├── kitty/
│       ├── yazi/
│       ├── btop/
│       ├── fastfetch/
│       └── starship.toml
└── zsh/
    └── .zshrc


Möchten Sie wissen, welche spezifischen Umgebungsvariablen für Qt6, Electron (Discord) und Java Sie in Ihren Dotfiles setzen müssen, damit diese unter Hyprland fehlerfrei laufen?

[1] https://www.reddit.com

# Merken 2

Für die drei Tools GitHub CLI, OBS Studio und Modrinth müssen Sie bei der Verwaltung via Stow und Git sehr vorsichtig vorgehen. Einige dieser Ordner enthalten sensible Zugangsdaten (Tokens) oder riesige Datenmengen, weshalb Sie niemals die kompletten Ordner sichern sollten. [1, 2] 
Hier ist die genaue Aufschlüsselung, was Sie sichern können und was Sie ignorieren müssen:
1. GitHub CLI (gh)

Relevanter Pfad: ~/.config/gh/ [3] 
Was Sie sichern sollten: Nur die Datei config.yml. Hier wird zum Beispiel definiert, welchen Texteditor (nano, nvim) oder welches Git-Protokoll (ssh, https) die CLI standardmäßig nutzt. [3] 
⚠️ Was Sie ignorieren MÜSSEN: Die Datei hosts.yml. In dieser Datei speichert GitHub CLI Ihr geheimes OAuth-Authentifizierungs-Token. Wenn Sie diese Datei auf GitHub hochladen, kann jeder Ihr GitHub-Konto übernehmen. [1] 
Stow-Empfehlung: Fügen Sie hosts.yml unbedingt in Ihre .gitignore-Datei ein. Auf einem neuen Rechner führen Sie einfach einmal gh auth login aus, um eine neue hosts.yml zu erzeugen. [2, 4, 5] 

2. OBS Studio

Relevanter Pfad: ~/.config/obs-studio/
Was Sie sichern sollten: Die Profile und Szenen-Sammlungen.

~/.config/obs-studio/basic/profiles/ (Enthält Bitraten, Audio-Einstellungen, Aufnahmeformate)
~/.config/obs-studio/basic/scenes/ (Enthält Ihre Szenen-Anordnungen, Overlays und Quellen)


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

