#!/usr/bin/env bash
set -euo pipefail

# Config git (solo la primera vez en tu máquina)
git config --global user.name "Diana Guerrero"
git config --global user.email "diana.guerreropi9@gmail.com"

# Inicializa repo y primer push
git init
git add .
git commit -m "chore: initial vulnerable samples (for testing only)"
git branch -M main
git remote add origin "https://github.com/DianaPGPF/vuln-samples.git"
git push -u origin main
