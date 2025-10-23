# 🎵 MelodyCircle - Listen Music Together

A beautiful, family-friendly music listening application designed for women and kids to share music experiences in synchronized listening rooms.

![MelodyCircle](https://img.shields.io/badge/MelodyCircle-Music%20Together-purple?style=for-the-badge&logo=music)

## ✨ Features

- 🎧 **Synchronized Listening Rooms** - Listen to music together in real-time
- 👥 **Social Features** - Connect with friends and see what they're listening to
- 🎨 **Beautiful UI** - Modern, responsive design with custom animations
- 👶 **Family-Friendly** - Safe content curated for women and kids
- 💬 **Live Chat** - Chat with others while listening to music
- 📱 **Mobile Responsive** - Works perfectly on all devices

## 🚀 Quick Start

### 🐳 **Docker Setup (Recommended)**

**No local installation required!** Run the application using Docker.

#### Prerequisites
- **Docker** (version 20.0.0 or higher)
- **Docker Compose** (version 2.0.0 or higher)

#### Check Docker Installation
```bash
docker --version        # Should be 20.0.0+
docker-compose --version # Should be 2.0.0+
```

#### Quick Start with Docker

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/vibe-tribe-party-main.git
   cd vibe-tribe-party-main
   ```

2. **Run with Docker Compose (Production)**
   ```bash
   # Build and start the application
   docker-compose up --build
   
   # Or run in background
   docker-compose up -d --build
   ```

3. **Access the application**
   - Open your browser and go to `http://localhost:3000`
   - The application is now running in a Docker container!

#### Development Mode with Docker

```bash
# Start development server with hot reload
docker-compose --profile dev up --build

# Access at http://localhost:8080
```

#### Docker Helper Scripts

```bash
# Build the Docker image
./scripts/docker-build.sh

# Start development mode
./scripts/docker-dev.sh

# Clean up Docker resources
./scripts/docker-clean.sh
```

### 💻 **Local Development (Alternative)**

If you prefer to run locally without Docker:

#### Prerequisites
- **Node.js** (version 18.0.0 or higher)
- **npm** (version 8.0.0 or higher) or **yarn** (version 1.22.0 or higher)
- **Git** (for cloning the repository)

#### Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/vibe-tribe-party-main.git
   cd vibe-tribe-party-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:8080`
   - The application will automatically reload when you make changes

## 🛠️ Available Scripts

### Docker Commands
| Command | Description |
|---------|-------------|
| `docker-compose up --build` | Build and start production container |
| `docker-compose up -d --build` | Build and start in background |
| `docker-compose --profile dev up` | Start development mode with hot reload |
| `docker-compose down` | Stop and remove containers |
| `./scripts/docker-build.sh` | Build Docker image |
| `./scripts/docker-dev.sh` | Start development mode |
| `./scripts/docker-clean.sh` | Clean up Docker resources |

### Local Development Scripts
| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run build:dev` | Build for development |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |


## 🧪 Development

### Code Quality
- **ESLint** for code linting
- **TypeScript** for type safety
- **Prettier** for code formatting (recommended)

### Adding New Components
```bash
# Install new shadcn/ui components
npx shadcn-ui@latest add [component-name]
```

### Styling Guidelines
- Use Tailwind CSS classes
- Follow the established color system
- Maintain responsive design principles
- Use the `cn()` utility for conditional classes

## 🚀 Deployment

### Docker Deployment (Recommended)

#### Production Build
```bash
# Build production Docker image
docker build -t melodycircle:latest .

# Run production container
docker run -p 3000:80 melodycircle:latest
```

#### Docker Compose Deployment
```bash
# Start production services
docker-compose up -d --build

# Check container status
docker-compose ps

# View logs
docker-compose logs -f
```

### Cloud Deployment Options

#### Docker Hub
```bash
# Tag and push to Docker Hub
docker tag melodycircle:latest yourusername/melodycircle:latest
docker push yourusername/melodycircle:latest
```

#### AWS ECS/Fargate
- Use the provided Dockerfile
- Configure ECS task definition
- Deploy to Fargate for serverless containers

#### Google Cloud Run
```bash
# Build and push to Google Container Registry
gcloud builds submit --tag gcr.io/PROJECT-ID/melodycircle
gcloud run deploy --image gcr.io/PROJECT-ID/melodycircle
```

#### Azure Container Instances
```bash
# Deploy to Azure Container Instances
az container create --resource-group myResourceGroup --name melodycircle --image melodycircle:latest --ports 80
```

### Traditional Deployment (Alternative)

#### Build for Production
```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

#### Static Hosting Options
- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist/` folder
- **GitHub Pages**: Use GitHub Actions for automatic deployment
- **AWS S3**: Upload the `dist/` folder to an S3 bucket

## 🐛 Troubleshooting

### Docker Issues

**Docker not running**
```bash
# Start Docker Desktop or Docker daemon
# On macOS/Windows: Start Docker Desktop
# On Linux: sudo systemctl start docker
```

**Port already in use**
```bash
# Check what's using port 3000
lsof -i :3000

# Kill process using port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
docker run -p 3001:80 melodycircle:latest
```

**Docker build fails**
```bash
# Clean Docker cache
docker system prune -a

# Rebuild without cache
docker build --no-cache -t melodycircle:latest .
```

**Container won't start**
```bash
# Check container logs
docker logs melodycircle-app

# Check container status
docker ps -a

# Restart container
docker restart melodycircle-app
```

### Local Development Issues

**Port 8080 already in use**
```bash
# Kill process on port 8080
npx kill-port 8080
# or
lsof -ti:8080 | xargs kill -9
```

**Node modules issues**
```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors**
```bash
# Check TypeScript configuration
npx tsc --noEmit
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- UI Components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Built with [Vite](https://vitejs.dev/)

---

**Made with ❤️ for music lovers everywhere**