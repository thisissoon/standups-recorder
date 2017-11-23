# Use an official node runtime as a parent image
FROM mhart/alpine-node:8.9

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in package.json
RUN npm install

# Run build application into dist folder
RUN npm run build




# Use an official nginx runtime as a parent image
FROM nginx

# Copy the nginx config into the container
COPY ./nginx.conf /etc/nginx/nginx.conf

# Make recorder file to house static files
RUN mkdir -p /recorder/dist

# Copy the built app from previous docker build stage config
COPY --from=0 /app/dist /recorder

# Make port 80 available to the world outside this container
EXPOSE 80