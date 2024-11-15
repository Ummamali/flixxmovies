# 🎥 Flixx Movies  

Flixx Movies is a frontend web application built with Vanilla JavaScript that provides users with an engaging experience for exploring movies and TV series. It fetches data dynamically from the **The Movie Database (TMDb)** REST API to display popular content, search results, and detailed information about movies and TV series.  

---

## 📌 Project Overview  

### **Type of Project**  
Frontend application developed using Vanilla JavaScript.  

### **Methodology**  
Fetches and displays data from [themoviedb.org](https://www.themoviedb.org/) REST API.  

---

## 🔧 Technologies Used  

- **Node.js**: Backend runtime for setting up the development environment.  
- **Webpack**: Module bundler for efficient asset management and optimized builds.  
- **TailwindCSS**: Utility-first CSS framework for creating responsive and visually appealing designs.  
- **Babel**: JavaScript compiler for ensuring compatibility with older browsers.  
- **HTML**: Markup language for structuring the application.  
- **Vanilla CSS**: Custom styling for fine-tuned design and layout.  
- **Vanilla JavaScript**: Core scripting language for dynamic behavior and API integration.  

---

## 🚀 Features  

- **Showcase**: Display featured movies or TV series on the homepage.  
- **Popular Movies**: Browse trending and top-rated movies.  
- **Search Movies**: Find specific movies using the search functionality.  
- **Search TV Series**: Locate TV series by name or keyword.  
- **View Movie Details**: Access detailed information about a selected movie, including cast, reviews, and ratings.  
- **View TV Series Details**: Explore detailed information about a TV series, including seasons, episodes, and cast.  

---

## 🌐 API Integration  

This project uses [TMDb API](https://www.themoviedb.org/documentation/api) to fetch data.  

---


### **Endpoints Used**  

| Method   | Endpoint                              | Description                          |
|----------|---------------------------------------|--------------------------------------|
| **GET**  | `/movie/popular`                      | Fetch popular movies                |
| **GET**  | `/tv/popular`                         | Fetch popular TV series             |
| **GET**  | `/search/movie`                       | Search for movies                   |
| **GET**  | `/search/tv`                          | Search for TV series                |
| **GET**  | `/movie/{movie_id}`                   | Get details of a specific movie     |
| **GET**  | `/tv/{tv_id}`                         | Get details of a specific TV series |

---

## 📦 Running the Application 

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/ummamali/flixxmovies.git
   cd flixxmovies
   npm install
   npm run dev
   npm run build
