FROM node:17-alpine

# Specify the working directory within the image
WORKDIR /app

# Copy the package.json file to the working directory and install the dependencies
COPY package.json .
RUN npm install

# Copy the actual source code to the working directory
COPY . .

EXPOSE 3000

# Run the application
CMD ["npm", "start"]
