# Build context: repository root
#   docker build -t mahmoud-portfolio .
#   docker run -p 3001:3001 --env-file backend/.env mahmoud-portfolio

# Stage 1: build the Vite + React frontend
FROM node:22-alpine AS frontend-build
WORKDIR /app/frontend

COPY frontend/package.json frontend/package-lock.json ./
RUN npm ci

COPY frontend/ ./
RUN npm run build

# Stage 2: Express server that serves the built site and the /api/contact endpoint
FROM node:22-alpine AS runtime
WORKDIR /app/backend

ENV NODE_ENV=production \
    PORT=3001 \
    FRONTEND_DIR=/app/frontend/dist

COPY backend/package.json backend/package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force

COPY backend/ ./
COPY --from=frontend-build /app/frontend/dist /app/frontend/dist

USER node
EXPOSE 3001

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- "http://127.0.0.1:${PORT}/health" || exit 1

CMD ["node", "server.js"]
