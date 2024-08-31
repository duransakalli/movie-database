This project is a full-stack application designed to manage and display movie information, with both backend and frontend components.

## Project Structure

### Backend - `MovieAppBackend`
The backend is built using **Spring Boot** and provides RESTful APIs to manage and retrieve movie data.

### Frontend - `MovieAppFrontend`
The frontend is built using **React** and provides a user interface to interact with the movie data.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- **Backend**:
  - Java 8 or higher
  - Gradle

- **Frontend**:
  - Node.js (version 14 or higher)
  - npm (version 6 or higher)

### Installing

#### Backend Installation

1. Clone the repository and navigate to the backend directory:
    ```bash
    cd MovieAppBackend
    ```
2. Build the project using Gradle:
    ```bash
    ./gradlew build
    ```
3. Run the Spring Boot application:
    ```bash
    ./gradlew bootRun
    ```

#### Frontend Installation

1. Navigate to the frontend directory:
    ```bash
    cd MovieAppFrontend/movie-app
    ```
2. Install the required npm packages:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm start
    ```

### Running the Application

Once both the backend and frontend servers are running, you can access the application by navigating to `http://localhost:3000` in your web browser.

### Built With

- **Spring Boot** - The backend framework used
- **React** - The frontend library used
- **Gradle** - Dependency management for the backend
- **npm** - Dependency management for the frontend

## Contributing

If you would like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.
