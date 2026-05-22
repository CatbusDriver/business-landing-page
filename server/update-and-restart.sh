#!/bin/bash
# Nightly system update + Caddy container restart
# Add to crontab: sudo crontab -e
# 0 3 * * * /opt/scripts/update-and-restart.sh >> /var/log/nightly-update.log 2>&1

set -e

echo "=== Nightly Update: $(date) ==="

# System update
apt-get update -y
apt-get upgrade -y
apt-get autoremove -y
apt-get autoclean -y

# Restart Caddy container (adjust path if needed)
cd /opt/caddy
docker compose pull
docker compose down
docker compose up -d

# Check if reboot is required
if [ -f /var/run/reboot-required ]; then
    echo "Reboot required – rebooting in 1 minute"
    shutdown -r +1 "Scheduled reboot after system update"
fi

echo "=== Update complete: $(date) ==="
