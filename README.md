# World Explorer 🌍

A web application that serves as a dynamic country information browser. Users can search for any country and view details like its capital, population, region, official name, and currency. This project is built using Node.js for the backend, Express.js for routing, and EJS as the templating engine to render dynamic content. It fetches all country data from the free and open-source **REST Countries API**.

## Features

-   **Browse All Countries:** View a list of all countries with their flags, population, region, and capital.
-   **Country Search:** Find specific countries by typing their name into the search bar.
-   **Detailed Information:** Click on any country to see more in-depth details like its official name, languages, and currency.
-   **Dynamic Content:** Data is fetched in real-time from the REST Countries API.
-   **User-Friendly Interface:** The application is styled with CSS to provide a clean and intuitive user experience.

## Technologies Used

-   **Node.js:** The JavaScript runtime environment.
-   **Express.js:** A minimalist web framework for building the server and handling API requests.
-   **EJS:** An embedded JavaScript templating engine for generating dynamic HTML.
-   **Axios:** A promise-based HTTP client for making API requests to the REST Countries API.
-   **CSS:** For styling and a responsive design.

## Project Structure

├── public/
│   └── styles.css        # Custom styles for the application.
├── views/
│   ├── country-details.ejs # Template for displaying a single country's details.
│   └── index.ejs           # The main homepage template.
├── .gitignore              # Specifies files to ignore from Git.
├── package.json            # Project dependencies and scripts.
├── package-lock.json       # Manages dependency versions.
└── index.js                # The main server file.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

You need to have **Node.js** and **npm** installed on your system.

### Installation

1.  **Clone the repository:**
    
2.  **Install the dependencies:**
   
    This command will install all the required packages listed in `package.json`.

### Running the Application

1.  **Start the server:**
    ```bash
    node index.js
    ```
    or, if you have `nodemon` installed:
    ```bash
    nodemon index.js
    ```
2.  **View the app:** Open your web browser and navigate to `http://localhost:3000`.

## Author

-   **Deekshitha M**

Thanks for checking out the project!
