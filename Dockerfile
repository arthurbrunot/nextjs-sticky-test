# Use an official Node.js 18 runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN pnpm install

# Copy all application code to the container's working directory
COPY . .

# Build the Next.js app for production
RUN pnpm build

# Expose port 3000 for the application
EXPOSE 3000

# Start the application
CMD ["pnpm", "start"]
