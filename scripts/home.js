// Elements

const slider = document.getElementById("slider");
const popularMovies = document.getElementById("pmovies");
const pMoviesContainer = document.getElementById("pmovies-container");
const searchForm = document.getElementById("search-form");

function init() {
  // Hydrating the showcase
  fetchFromMoviesDB("https://api.themoviedb.org/3/movie/top_rated").then(
    (resObj) => {
      console.log(resObj);
      resObj.results.forEach((r) => {
        slider.appendChild(
          showcasePosterComponent({
            imgAlt: "Poster for " + r.title,
            imgUrl: "https://image.tmdb.org/t/p/w500/" + r.poster_path,
            rating: r.vote_average.toFixed(1),
            title: r.title,
            movieId: r.id,
            movieType: "MOVIE",
          })
        );
      });
    }
  );
  // Hydrating the popular movies section
  fetchFromMoviesDB("https://api.themoviedb.org/3/movie/popular").then(
    (resObj) => {
      resObj.results.forEach((r) => {
        pMoviesContainer.appendChild(
          movieCardComponent({
            imgAlt: "Poster for " + r.title,
            imgUrl: "https://image.tmdb.org/t/p/w342/" + r.poster_path,
            title: r.title,
            releaseDate: r.release_date,
            movieId: r.id,
          })
        );
      });
    }
  );

  // fetchFromMoviesDB("https://api.themoviedb.org/3/configuration").then(
  //   console.log
  // );
}

document.addEventListener("DOMContentLoaded", init);
