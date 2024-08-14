# Use the official Node.js 18 image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and install dependencies
COPY package*.json .
RUN npm install --omit=dev --verbose

# Copy the rest of the application code
COPY ./src ./src

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]
