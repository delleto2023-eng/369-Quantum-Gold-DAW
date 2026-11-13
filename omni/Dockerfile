FROM node:20-alpine
WORKDIR /app
COPY gateway.mjs models.json ./
RUN mkdir -p keys
ENV PORT=8080
CMD ["node","gateway.mjs"]
