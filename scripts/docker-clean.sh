#!/bin/bash

# Docker cleanup script for MelodyCircle
set -e

echo "🧹 Cleaning up Docker resources..."

# Stop and remove containers
docker-compose down

# Remove the application image
docker rmi melodycircle:latest 2>/dev/null || echo "Image not found, skipping..."

# Remove development image
docker rmi melodycircle-dev:latest 2>/dev/null || echo "Dev image not found, skipping..."

# Clean up unused images
docker image prune -f

# Clean up unused containers
docker container prune -f

# Clean up unused networks
docker network prune -f

echo "✅ Docker cleanup completed!"
echo "🗑️  Removed containers, images, and unused resources"
