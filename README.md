#Overview

## This Movie App is a React-based application that allows users to browse movies, search for specific titles, view movie details, and navigate through paginated results. It is built using React, Redux Toolkit, TypeScript, and Tailwind CSS. The app fetches data from an API and provides a user-friendly UI with a slider and pagination features.

#Features

Browse popular movies

Search movies by title

View movie details

Pagination for better navigation

Responsive design with Tailwind CSS

State management using Redux Toolkit

## Smooth UI experience with React Slick for sliders

#Tech Stack

Frontend: React, TypeScript, Redux Toolkit

Styling: Tailwind CSS

Animation: AOS library

State Management: Redux Toolkit

## API Handling: Async Thunks in Redux

#Setup Instructions:

1-Clone the Repository

```
git clone https://github.com/AlaaAyaad74/movieapptask.git
cd movieapptask
```

2-Install Dependencies

```
npm install
```

3-Run the App

```
npm run dev
```

The app will be available at http://localhost:3000/.

---

#Project Structure
movie_app/
├── src/
│ ├── components/ # Reusable UI components
│ ├── store/ # Redux store & slices
│ ├── pages/ # Page components
│ ├── interfaces/ # TypeScript interfaces
│ ├── services/ # API service handlers
│ ├── styles/ # Global styles (Tailwind)
│ ├── assets/ # Images, icons, etc.
│ ├── App.tsx # Main app component
│ ├── main.tsx # Entry point
│
├── public/ # Static assets
├── .gitignore # Git ignore file
├── package.json # Project dependencies
├── README.md # Project documentation
