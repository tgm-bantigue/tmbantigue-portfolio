FROM node:20.10.0-alpine

# Node alpine need this
RUN apk add --no-cache libc6-compat

# Install NPM
RUN npm install -g npm@10.5.2

# Validate NPM Installation
RUN npm -v

# Copy source files
COPY ./ /app

# Install dependencies
WORKDIR /app
RUN npm install

# Set ENV

# Set Port
EXPOSE 8000

# Start app
CMD npm run dev