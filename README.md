# Flights & Search Service

A robust backend service for managing and searching for flights, built with Node.js, Express, and Sequelize.

---

## Project Setup

Follow these steps to get the project running on your local machine.

### 1. Prerequisites

-   [Node.js](https://nodejs.org/) (v16 or higher)
-   [MySQL](https://www.mysql.com/)

### 2. Installation

-   Clone the project repository:
    ```bash
    git clone <your-repository-url>
    ```
-   Navigate to the project's root directory:
    ```bash
    cd FlightsAndSearch
    ```
-   Install all the required npm packages:
    ```bash
    npm install
    ```

### 3. Environment Configuration

-   Create a `.env` file in the root directory and add the following environment variable. This will be the port your server runs on.
    ```env
    PORT=3000
    ```
-   Inside the `src/config` folder, create a new file named `config.json` and add the following JSON. Replace the placeholders with your actual MySQL database credentials.

    ```json
    {
      "development": {
        "username": "<YOUR_DB_LOGIN_NAME>",
        "password": "<YOUR_DB_PASSWORD>",
        "database": "Flights_Search_DB_DEV",
        "host": "127.0.0.1",
        "dialect": "mysql"
      }
    }
    ```

### 4. Database Setup

-   From the `src` folder in your terminal, run the following commands to set up your database and tables.

-   Create the database:
    ```bash
    npx sequelize db:create
    ```
-   Run the database migrations to create the tables:
    ```bash
    npx sequelize db:migrate
    ```

### 5. Running the Server

-   Start the server using nodemon (for development):
    ```bash
    npm run dev
    ```
-   The server should now be running on the port specified in your `.env` file (e.g., `http://localhost:3000`).

---

## Database Design

### Entity Relationships

-   **City & Airport**: A City can have many Airports, but an Airport belongs to exactly one City (One-to-Many).
-   **Airplane & Flight**: An Airplane can be used for many Flights, but a Flight is operated by exactly one Airplane (One-to-Many).
-   **Airport & Flight**: An Airport can serve as the departure or arrival point for many Flights. A Flight has one specific departure Airport and one specific arrival Airport (Many-to-Many through the Flight model).

### Table Schemas

-   **City**
    -   `id` (Primary Key)
    -   `name`
    -   `created_at`, `updated_at`

-   **Airport**
    -   `id` (Primary Key)
    -   `name`
    -   `address`
    -   `city_id` (Foreign Key to City)
    -   `created_at`, `updated_at`

-   **Airplane**
    -   `id` (Primary Key)
    -   `modelNumber`
    -   `capacity`
    -   `created_at`, `updated_at`

-   **Flight**
    -   `id` (Primary Key)
    -   `flightNumber`
    -   `airplaneId` (Foreign Key to Airplane)
    -   `departureAirportId` (Foreign Key to Airport)
    *   `arrivalAirportId` (Foreign Key to Airport)
    *   `departureTime`
    *   `arrivalTime`
    *   `price`
    *   `boardingGate`
    *   `totalSeats`
    -   `created_at`, `updated_at`