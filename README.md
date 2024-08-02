# Project Name

This project automates the deployment of a Strapi application using GitHub Actions. The workflow is designed to build, test, and deploy the application when changes are pushed to the `main` branch.

## Prerequisites

- **GitHub account**: Ensure you have an active GitHub account with a repository for your Strapi project.
- **Self-hosted Runner**: Set up a self-hosted runner on your remote server.
- **Environment Variables**: Configure the following secrets in your GitHub repository:
  - `PROD_ENV_FILE`: The content of your production `.env` file.

## Workflow Steps
- **Backup: Copies the uploads directory to a backup location.
- **Build: Performs the following steps:
- **Checkout: Checks out the latest code from the main branch.
- **Setup Node.js: Uses the specified Node.js version.
- **Install dependencies: Installs project dependencies.
- **Create .env file: Creates the .env file using the secret.
- **Build project: Builds the Strapi project.
- **Restart server: Restarts the server using PM2.



## How to Use
- Fork the repository: Fork this GitHub repository to your own account.
- Set up a self-hosted runner: Follow GitHub's documentation to set up a self-hosted runner on your remote server.
- Configure secrets: Add the PROD_ENV_FILE secret to your GitHub repository settings.
- Commit changes: Push your changes to the main branch to trigger the workflow.
