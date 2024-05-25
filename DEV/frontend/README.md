
# Subvisual Apprenticeship Tech Challenge

## Table of Contents
- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Deployment](#deployment)
- [Usage](#usage)
- [Technical Decisions](#technical-decisions)
- [Automated Tests](#automated-tests)
- [Contact](#contact)

## Introduction
This project is developed as part of the Subvisual Apprenticeship Tech Challenge. The application allows users to search for Pokémon by name, view details, and navigate between Pokémon using a "Previous" and "Next" functionality. The backend is deployed on Render, and the frontend React application is deployed on Vercel.

## Project Structure
\`\`\`
.
├── .gitignore
├── DEV
│   ├── backend
│   │   ├── app.py
│   │   └── requirements.txt
│   └── frontend
│       ├── .gitignore
│       ├── .vercel
│       ├── build
│       ├── package.json
│       ├── public
│       ├── README.md
│       └── src
├── env
│   ├── Lib
│   │   └── site-packages
│   ├── pyvenv.cfg
│   └── Scripts
│       ├── activate
│       ├── activate.bat
│       ├── Activate.ps1
│       ├── corepack
│       ├── corepack.cmd
│       ├── create-react-app
│       ├── create-react-app.cmd
│       ├── create-react-app.ps1
│       ├── deactivate.bat
│       ├── install_tools.bat
│       ├── nodevars.bat
│       ├── npm
│       ├── npm.cmd
│       ├── npm.ps1
│       ├── npx
│       ├── npx.cmd
│       ├── npx.ps1
│       ├── serve
│       ├── serve.cmd
│       └── ...
├── src
├── package.json
└── requirements.txt
\`\`\`

## Setup Instructions

### Backend Setup
1. **Clone the repository**:
   \`\`\`sh
   git clone https://github.com/your-repo-link.git
   cd your-repo-link/DEV/backend
   \`\`\`

2. **Create a virtual environment**:
   \`\`\`sh
   python -m venv env
   source env/Scripts/activate  # On Windows
   # source env/bin/activate    # On Unix or MacOS
   \`\`\`

3. **Install dependencies**:
   \`\`\`sh
   pip install -r requirements.txt
   \`\`\`

4. **Run the backend**:
   \`\`\`sh
   python app.py
   \`\`\`

### Frontend Setup
1. **Navigate to the frontend directory**:
   \`\`\`sh
   cd ../frontend
   \`\`\`

2. **Install dependencies**:
   \`\`\`sh
   npm install
   \`\`\`

3. **Run the frontend**:
   \`\`\`sh
   npm start
   \`\`\`

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
- **Vercel**: Selected for its seamless integration with React applications and ease of deployment.
- **Render**: Chosen for backend deployment due to its simplicity and support for Python applications.

## Automated Tests
The application includes automated tests for key features. To run the tests:
1. **Backend tests**:
   \`\`\`sh
   cd DEV/backend
   pytest
   \`\`\`

2. **Frontend tests**:
   \`\`\`sh
   cd ../frontend
   npm test
   \`\`\`

## Contact
For any questions or clarifications, please contact:

- Davide Silva: [GitHub](https://github.com/davidesilva)
- Gabriel Poça: [GitHub](https://github.com/gabrielpoca)

Feel free to reach out if you need further assistance or have any inquiries regarding the project.
