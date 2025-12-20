---

# arch-linux-configs

## Overview

This repository contains my personal configuration files, scripts, and utilities for Arch Linux. It serves as a centralized place for managing and sharing various system setups, dotfiles, and custom tools that improve workflow and system usability.

---

## Included Configurations and Scripts

* **`.config/`** — User-specific configuration files for various applications.
* **`AnimeBackgrounds/`** — Anime-themed wallpapers and backgrounds.
* **`Sugar-Candy.hyde/`** — Custom theme or style configurations (likely for a specific app or desktop environment).
* **`nvim/`** — Neovim configuration files and plugins.
* **`video_wallpapers/`** — Scripts or resources related to video wallpapers.
* **Shell scripts**:

  * `cloudflareSetup.sh` — Setup automation for Cloudflare services.
  * `cloudflaredServer.sh` — Server scripts for Cloudflare tunneling or proxying.
  * `postgres.sh` — PostgreSQL related setup or maintenance scripts.
  * `switchjava.sh` — Script to switch between different Java versions.
  * `termux-url-opener` — Utility to open URLs in Termux, especially for downloading YouTube videos.
  * `ChangeOpenjdk.sh` — Script for managing OpenJDK versions.
* **`hyprland.txt`** — Configuration or notes related to the Hyprland Wayland compositor.
* **`virtual-camera-wayland-arch.md`** — A detailed guide on setting up a virtual camera in Arch Linux with Wayland and Firefox.
* **Dotfiles**:

  * `.zshenv`, `.zshrc` — Zsh shell environment and configuration files.
* **`.gitmodules`** — Contains references to Git submodules used in this repository.
* **README.md** — This file.

---

## Purpose

The goal of this repository is to:

* Maintain **personalized and portable Arch Linux configurations**.
* Provide **automated scripts** for common setup tasks.
* Share useful tips and guides, such as the **virtual camera setup on Wayland**.
* Organize system tweaks, themes, and environment customizations for quick deployment.

---

## How to Use

1. Clone the repository:

   ```bash
   git clone https://github.com/rohitsaini81/arch-linux-configs.git
   cd arch-linux-configs
   ```

2. Review and customize config files before applying.

3. Run setup scripts as needed, for example:

   ```bash
   bash cloudflareSetup.sh
   ```

4. Follow specific README or `.md` guides inside the repo for detailed instructions (e.g., `virtual-camera-wayland-arch.md`).

---

## Contribution

This is a personal repo, but pull requests or suggestions are welcome. Feel free to open issues if you encounter bugs or want to request features.

---

## License

This repository is open source and available under the [MIT License](LICENSE) (or specify your preferred license).

---
