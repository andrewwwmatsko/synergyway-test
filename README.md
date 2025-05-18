# Synergyway Test Project

A React-based dashboard application that displays company information using react-mosaic-component for layout management.

## Prerequisites

- Docker installed on your system
- Git (optional, for cloning the repository)

## Running the Project with Docker

1. Clone the repository (if you haven't already):

```bash
git clone https://github.com/andrewwwmatsko/synergyway-test.git
cd synergyway-test
```

2. Build the Docker image:

```bash
docker build -t synergyway-test .
```

3. Run the container:

```bash
docker run -d -p 8080:80 synergyway-test
```

4. Open your browser and navigate to:

```
http://localhost:8080
```

## Project Features

- Responsive dashboard layout using react-mosaic-component
- Company information display with multiple views
- Mobile-friendly design
- Dynamic window management (add/remove/split windows)

## Development

If you want to run the project in development mode without Docker:

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

## Building for Production

To build the project without Docker:

```bash
npm run build
```

The build output will be in the `dist` directory.

## Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- react-mosaic-component
- BlueprintJS
