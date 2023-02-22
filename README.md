# Pokedex Monorepo

This is a monorepo for the Pokedex application, which consists of three codebases:

- `components`: Contains reusable UI components that are used in the `pokedex` codebase.
- `utils`: Contains reusable utility functions that are used in the `pokedex` codebase.
- `pokedex`: Contains the main functionality of the Pokedex application.

## Installation

To get started, you'll need to have Docker installed on your machine. You can download Docker from the [official Docker website](https://www.docker.com/products/docker-desktop).

Once you have Docker installed, you can build the Docker image for the Pokedex application using the following command:

`docker build -t pokedex .`


This will create a Docker image with the tag `pokedex` that you can use to run the application.

## Running the Application

To run the Pokedex application, you can use the following command:

`docker run -p 3000:3000 pokedex`

This will start the container and publish port 3000 on the container to port 3000 on the host machine. You can then access the application by navigating to `http://localhost:3000` in your web browser.

## Folder Structure

Here's an overview of the folder structure for this monorepo:

pokedex-monorepo/
├─packages
├── components/
│ ├── ...
│ └── package.json
├── utils/
│ ├── ...
│ └── package.json
├── pokedex/
│ ├── ...
│ └── package.json
├─ dockerfile
├─ lerna.json
├─ package.json
├─tsconfig.json
└─ README.md


- `components`: Contains reusable UI components that are used in the `pokedex` codebase.
- `utils`: Contains reusable utility functions that are used in the `pokedex` codebase.
- `pokedex`: Contains the main functionality of the Pokedex application.
- `dockerfile`: Defines the Docker image for the Pokedex application.
- `lerna.json`: Configures Lerna, a tool for managing monorepos.
- `package.json`: Defines the dependencies and scripts for the entire monorepo.

## Development

To run the Pokedex application in development mode, you can use the following command:

docker run -it -p 3000:3000 -v $(pwd):/app pokedex /bin/bash

This will start the container and mount the current directory to the `/app` directory inside the container. You can then navigate to the `pokedex` directory and start the development server using the following commands:

cd pokedex
npm run dev

This will start the development server and rebuild the application as you make changes to the code. You can then access the application by navigating to `http://localhost:3000` in your web browser.

## Conclusion

This monorepo provides a scalable and efficient way to manage the codebase for the Pokedex application. By using Docker and Lerna, we're able to create a consistent development and deployment environment, and manage shared dependencies and code between the different codebases in the monorepo.