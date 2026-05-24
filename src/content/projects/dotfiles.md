---
title: "Dotfiles"
description: "macOS-first dotfiles with Linux and WSL support, managed with GNU Stow, XDG-friendly config, a Brewfile, and platform setup scripts."
repo: "https://github.com/vakesz/dotfiles"
stack: ["Shell", "zsh"]
order: 40
---

My personal workstation baseline for macOS, with Linux and WSL support:
zsh, Starship, Git, Ghostty, fd, ripgrep, tealdeer, topgrade, and the
small bits of shell environment that make a fresh machine feel familiar.

The repo is organized around GNU Stow and the XDG base directory layout:
`home/` gets linked into `$HOME`, `config/` gets linked into
`$XDG_CONFIG_HOME`, and `bootstrap.sh` is the single entrypoint for
restowing everything. The macOS layer includes a Brewfile, defaults,
keyboard and power tweaks, plus an optional script for pushing Microsoft
app updates through topgrade instead of their own auto-updaters.
