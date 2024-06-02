# Use the official Node.js image as a base
FROM node:21.1 as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Verify the build output
RUN ls -al /app/build

# Use Nginx to serve the static files
FROM nginx:alpine

# Copy the NGINX configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the build output from the previous stage to the nginx server directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# The default command to run when the container starts
CMD ["nginx", "-g", "daemon off;"]
