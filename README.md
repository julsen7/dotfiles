# Arch Linux Post-Installation Setup

This guide helps you set up a fresh Arch Linux installation, configure the network, and deploy your dotfiles using GNU Stow.

## Prerequisites

### 1. Base Installation & User Setup
Complete the manual base installation and create a non-root user with sudo privileges.
* 📖 [Arch Linux Installation Guide](https://wiki.archlinux.org/title/Installation_guide)
* 📖 [General Recommendations & User Setup](https://wiki.archlinux.org/title/General_recommendations)

---

## Step-by-Step Configuration

### 2. Install Required Packages
Ensure you are logged into your new system (or inside the chroot environment) and install the necessary base utilities:
```bash
sudo pacman -S base linux linux-firmware nano sudo stow
sudo pacman -S --needed git base-devel
```

### 3. Network Configuration (systemd-networkd)
Enable and configure the built-in systemd network daemon for wired connections.

1. Enable the network and DNS services:
   ```bash
   systemctl enable --now systemd-networkd
   systemctl enable --now systemd-resolved
   ```
2. Create a network configuration file:
   ```bash
   sudo nano /etc/systemd/network/20-wire.network
   ```
3. Paste the following configuration to enable DHCP on all Ethernet interfaces:
   ```ini
   [Match]
   Name=en*

   [Network]
   DHCP=yes
   ```
4. Verify your internet connection:
   ```bash
   ping google.com
   ```

### 4. Enable Multilib Repository
Required for running 32-bit applications (e.g., Steam, Wine).

1. Open the pacman configuration file:
   ```bash
   sudo nano /etc/pacman.conf
   ```
2. Scroll down and uncomment the `[multilib]` section by removing the `#` symbols:
   ```ini
   [multilib]
   Include = /etc/pacman.d/mirrorlist
   ```
3. Synchronize the package databases and update the system:
   ```bash
   sudo pacman -Syu
   ```

---

## Dotfiles & Software Deployment

### 5. Clone and Stow Dotfiles
Clone your personal configuration files into your home directory and link them using `stow`.
```bash
git clone https://github.com/julsen7/dotfiles
cd ~/dotfiles
stow .
```

### 6. Run the Installation Script
Execute the custom post-install script to install the rest of your software environment:
```bash
cd ~/dotfiles/other
chmod +x install.sh
./install.sh
```