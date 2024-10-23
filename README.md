# Express API Template

**Express API Template** is a starter template for building RESTful APIs using Node.js, Express, and Sequelize, following the MVC (Model-View-Controller) architecture. It helps you quickly set up an organized API structure with database integration.

## Features

- ⚙️ Node.js and Express for backend development.
- 📚 Sequelize ORM for managing database models.
- 🗂️ Follows MVC (Model-View-Controller) design pattern.
- 🛠️ Easy to configure and extend for various API needs.
- 🔄 CRUD operations setup for quick API endpoints.
- 📑 Uses environment variables for secure database configuration.

## Table of Contents

- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Database Configuration](#database-configuration)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites

- Node.js (v14+)
- npm or yarn
- PostgreSQL, MySQL, or SQLite (for Sequelize ORM)

### Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/whilmarbitoco/express-api-template.git
    ```

2. Navigate to the project directory:

    ```bash
    cd express-api-template
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file at the root of the project for environment variables (see [Database Configuration](#database-configuration)):

    ```bash
    touch .env
    ```

5. Run the development server:

    ```bash
    npm run dev
    ```

## Project Structure

This template follows the MVC architecture for a clean separation of concerns:

```bash
.
├── config/         # Database configuration (Sequelize)
├── controllers/    # Controller logic for handling requests
├── models/         # Sequelize models (database tables)
├── routes/         # Express routes for API endpoints
├── migrations/     # Sequelize migrations
├── index.js          # Main entry point of the application
├── package.json    # Project dependencies and scripts
└── .env            # Environment variables (e.g., database credentials)
```

### Example Folder Breakdown

- **models/**: Contains Sequelize models that map to database tables.
- **controllers/**: Contains logic for handling requests, processing input, and interacting with models.
- **routes/**: Defines the API routes and maps them to specific controller methods.

## Usage

1. After installation, the API server runs at `http://localhost:3000` by default.

2. Use the following scripts to manage the server:

   - **Run in development mode** (auto-reloads on file changes):

     ```bash
     npm run dev
     ```

   - **Run database migrations**:
   
     ```bash
     npx sequelize-cli db:migrate
     ```

   - **Seed the database** (optional):

     ```bash
     npx sequelize-cli db:seed:all
     ```

## Database Configuration

The project uses Sequelize to interact with your database. The database configuration is managed through a `config.json` file, located in the `config/` folder. You can modify the connection settings for different environments (development, test, production).

### Example `config/config.json`:

```json
{
  "development": {
    "username": "your_username",
    "password": "your_password",
    "database": "your_database_name",
    "host": "127.0.0.1",
    "dialect": "postgres"  // or mysql, sqlite, etc.
  },
  "test": {
    "username": "your_username",
    "password": "your_password",
    "database": "test_database_name",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "your_production_username",
    "password": "your_production_password",
    "database": "production_database_name",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
```

### Sequelize Migrations

To manage database schema changes, you can use Sequelize migrations:

- **Create a migration**:

    ```bash
    npx sequelize-cli migration:generate --name your-migration-name
    ```

- **Run migrations**:

    ```bash
    npx sequelize-cli db:migrate
    ```

## Contributing

We welcome contributions to improve this template! Here’s how you can contribute:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

---

Made with ❤️ by Whilmar M. Bitoco

This `README.md` includes everything needed for an Express API template using Sequelize, from installation instructions to project structure and usage examples. Let me know if you need any further modifications or features!
