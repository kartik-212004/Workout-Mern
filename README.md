
# Workout Tracker Application

I have successfully completed a Workout Tracker application, which enables users to create and manage their workout routines. This project was developed as part of my ongoing learning journey and showcases my proficiency in modern web development technologies.

## Technologies Used

**Frontend:**
- **React**: Utilized for building dynamic and interactive user interfaces.
- **React Router DOM**: Implemented for handling client-side routing, allowing smooth navigation between different views of the application.
- **Tailwind CSS**: Used for styling the application with utility-first CSS, enabling rapid and responsive design.
- **Vite**: Employed as the build tool to provide a faster and leaner development experience.
- **ESLint**: Configured for maintaining code quality and consistency across the project.

**Backend:**
- **Express**: Used as the web application framework for building the server-side logic and handling API requests.
- **MongoDB**: A NoSQL database used for storing workout data and user information.

## NPM Packages

**Frontend:**
- \`react\`
- \`react-dom\`
- \`react-router-dom\`
- \`validator\`
- \`@types/react\`
- \`@types/react-dom\`
- \`@vitejs/plugin-react\`
- \`autoprefixer\`
- \`eslint\`
- \`eslint-plugin-react\`
- \`eslint-plugin-react-hooks\`
- \`eslint-plugin-react-refresh\`
- \`postcss\`
- \`tailwindcss\`
- \`vite\`

**Backend:**
- \`bcrypt\`: For hashing passwords and ensuring secure user authentication.
- \`cors\`: To enable Cross-Origin Resource Sharing, allowing the frontend to communicate with the backend.
- \`dotenv\`: For managing environment variables securely.
- \`express\`: As the core web application framework.
- \`jsonwebtoken\`: For implementing secure JWT-based authentication.
- \`mongoose\`: As the ODM (Object Data Modeling) library for MongoDB, facilitating schema-based data validation and interaction.
- \`nodemon\`: For automatically restarting the server during development when file changes are detected.
- \`validator\`: For validating and sanitizing user input.

## React Hooks Used
- **useState**: For managing local component state.
- **useEffect**: For performing side effects in function components, such as data fetching and updating the DOM.
- **useContext**: For managing and sharing state across multiple components without passing props down manually at every level.
- **useRef**: For creating references to DOM elements and persisting values between renders.

## Project Highlights
- Developed a full-stack application using modern web development technologies.
- Implemented user authentication and secure data handling.
- Designed a responsive and user-friendly interface with Tailwind CSS.
- Built RESTful APIs with Express to handle CRUD operations for workout data.
- Utilized MongoDB for efficient and flexible data storage.
- Employed various React hooks for efficient state management and side effect handling.

This project demonstrates my ability to build comprehensive web applications from scratch, utilizing both frontend and backend technologies to deliver a seamless user experience.

## Installation Steps

### Frontend
1. Clone the repository:
    \`\`\`
    git clone <repository-url>
    \`\`\`
2. Navigate to the frontend directory:
    \`\`\`
    cd frontend
    \`\`\`
3. Install the dependencies:
    \`\`\`
    npm install
    \`\`\`
4. Start the development server:
    \`\`\`
    npm run dev
    \`\`\`

### Backend
1. Navigate to the backend directory:
    \`\`\`
    cd backend
    \`\`\`
2. Install the dependencies:
    \`\`\`
    npm install
    \`\`\`
3. Create a \`.env\` file and add the necessary environment variables:
    \`\`\`
    MONGODB_URI=<your-mongodb-uri>
    JWT_SECRET=<your-jwt-secret>
    \`\`\`
4. Start the development server:
    \`\`\`
    npm run dev
    \`\`\`
