# Subvisual Apprenticeship Tech Challenge

@ https://frontend-three-silk-87.vercel.app/

## Table of Contents
- [Introduction](#introduction)
- [Setup Instructions](#setup-instructions)
- [Deployment](#deployment)
- [Usage](#usage)
- [Technical Decisions](#technical-decisions)
- [Automated Tests](#automated-tests)
- [Contact](#contact)

## Introduction
This project is developed as part of the Subvisual Apprenticeship Tech Challenge. The application allows users to search for Pokémon by name, view details, and navigate between Pokémon using a "Previous" and "Next" functionality. The backend is deployed on Render, and the frontend React application is deployed on Vercel.

## Setup Instructions

### Backend Setup
1. **Clone the repository**:

   git clone https://github.com/your-repo-link.git
   cd your-repo-link/DEV/backend

2. **Create a virtual environment**:

   python -m venv env
   source env/Scripts/activate  # On Windows
   source env/bin/activate    # On Unix or MacOS

3. **Install dependencies**:

   pip install -r requirements.txt


4. **Run the backend**:

   python app.py


### Frontend Setup
1. **Navigate to the frontend directory**:

   cd ../frontend

2. **Install dependencies**:

   npm install

3. **Run the frontend**:

   npm start

## Deployment

### Backend
The backend is deployed on Render. The deployment instructions for Render can be found [here](https://render.com/docs/deploy-python).

### Frontend
The frontend is deployed on Vercel. The deployment instructions for Vercel can be found [here](https://vercel.com/docs).

## Usage
1. **Navigate to the deployed application URL**.
2. **Search for a Pokémon** by entering the name in the search bar.
3. **View Pokémon details**, including name, number, and sprite.
4. Use the **Previous** and **Next** buttons to navigate between Pokémon.

## Technical Decisions
- **React**: Chosen for the frontend due to its component-based architecture and ease of use with Vercel for deployment.
- **Flask**: Used for the backend to handle API requests efficiently.
- **Levenshtein**: Employed for fuzzy search functionality to provide suggestions for Pokémon names.
- **flask_cors**: Utilized to enable cross-origin resource sharing between the frontend and backend.
- **Vercel**: Selected for its seamless integration with React applications and ease of deployment.
- **Render**: Chosen for backend deployment due to its simplicity and support for Python applications.
- **PokeAPI**: Utilized to fetch Pokémon data for the application.
- **Pytest**: Used for backend testing to ensure the reliability of the application.
- **Jest**: Employed for frontend testing to verify the functionality of the application.
- **React Router**: Utilized for navigation between Pokémon details.

## Automated Tests
The application includes automated tests for key features. To run the tests:
1. **Backend tests**:

   cd DEV/backend
   python pytest

2. **Frontend tests**:

   cd ../frontend
   npm test

Feel free to reach out if you need further assistance or have any inquiries regarding the project.
