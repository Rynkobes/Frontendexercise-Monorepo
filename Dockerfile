# Use Node.js 16.x as the base image
FROM node:16

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to /app
COPY package*.json ./

# Install the dependencies
RUN npm install --production

# Copy the rest of the project files to /app
COPY . .

# Build the app
RUN npm run build

# Start the app
CMD ["npm", "start"]
