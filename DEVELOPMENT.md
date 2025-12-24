# Development Setup

## Running Client and Server Separately

### Terminal 1 - Client (UI on Port 5000)
```bash
cd /client
npm run dev
```
This starts the frontend on http://localhost:5000

### Terminal 2 - Server (API on Port 3001)
```bash
cd /server
npm start
```
This starts the backend API on http://localhost:3001 (API only, no UI)

## Project Structure

```
project-root/
├── client/              # React frontend
│   ├── src/
│   ├── package.json     # Client dev scripts
│   └── ...
├── server/              # Express backend
│   ├── index.ts
│   ├── package.json     # Server start scripts
│   ├── routes.ts
│   └── ...
├── shared/              # Shared types
├── package.json         # Root dependencies
└── ...
```

## How They Work Together

- **Client** (Port 5000): User interface
- **Server** (Port 3001): API endpoints
- They communicate via HTTP requests between the two ports

## Install Dependencies (From Root)

```bash
npm install
```

Then you can run client and server from their respective directories!
