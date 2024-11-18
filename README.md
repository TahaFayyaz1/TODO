# TODO

This is a feature-rich TODO application built as a practice project, with React for the frontend and Django for the backend. It helps users manage their tasks efficiently with a clean, intuitive interface and powerful backend support.

## Features

- **User Authentication**
  - Secure signup and login functionality
  - Uses JWT (JSON Web Token) for secure authentication and data exhange between frontend and the backend


- **Task Management**
  - Create, read, update, and delete TODO items
  - Mark tasks as complete/incomplete
  - Prioritize tasks


- **Responsive Design**
  - Fully responsive web app, works on desktop and mobile devices

## Technologies Used

- Frontend:
  - React 17
  - React Router for navigation

- Backend:
  - Django
  - Django Rest Framework for API development

- Database:
  - SQLite

- Authentication:
  - JWT (JSON Web Tokens) for secure authentication
 
- Designing:
  - Tailwind CSS


## Installation

### Prerequisites

- Node.js
- Python 3.x
- pip

### Backend Setup

1. Clone the repository:

       https://github.com/TahaFayyaz1/TODO.git
       cd TODO

3. Create a virtual environment and activate it:

       python -m venv venv
       source venv/bin/activate  # On Windows use venv\Scripts\activate

4. Install the required packages:

       pip install -r requirements.txt

6. Run migrations:

       cd TODOBackend
       python manage.py makemigrations API
       python manage.py migrate

8. Start the Django development server:

       python manage.py runserver
   
### Frontend Setup

1. Navigate to the frontend directory:

       cd todo-frontend

3. Install the required npm packages:

       npm install react-router-dom@6 jwt-decode@3
       npm install -D tailwindcss
       npx tailwindcss init

5. Start the React development server:
   
       npm start

## Contact

Taha Fayyaz - taha.fayyaz1@gmail.com

Project Link: [https://github.com/TahaFayyaz1/TODO](https://github.com/TahaFayyaz1/TODO)
       

