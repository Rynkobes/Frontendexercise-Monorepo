# Use latest Node.js as the base image

FROM node:latest

WORKDIR /app

# Copy the package.json and package-lock.json files to /app
COPY package*.json ./
COPY lerna.json ./

# Install the dependencies
RUN npm install -g lerna && \
    npm install
RUN lerna bootstrap

# Copy the rest of the project files to /app
COPY . .

# Build the app
RUN lerna run build

# Start the app
CMD ["lerna", "run", "start"]