#!/bin/bash

# Docker build script for MelodyCircle
set -e

echo "🐳 Building MelodyCircle Docker image..."

# Build the production image
docker build -t melodycircle:latest .

echo "✅ Docker image built successfully!"
echo "📦 Image: melodycircle:latest"
echo ""
echo "🚀 To run the application:"
echo "   docker run -p 3000:80 melodycircle:latest"
echo ""
echo "🌐 Or use docker-compose:"
echo "   docker-compose up"
