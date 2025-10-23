#!/bin/bash

# Docker development script for MelodyCircle
set -e

echo "🐳 Starting MelodyCircle in development mode..."

# Build and run development container
docker-compose --profile dev up --build

echo "✅ Development server started!"
echo "🌐 Application available at: http://localhost:8080"
echo "📝 Hot reload is enabled for development"
