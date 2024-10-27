// Elements

const slider = document.getElementById("slider");
const popularMovies = document.getElementById("pmovies");
const pMoviesContainer = document.getElementById("pmovies-container");

function init() {
  slider.appendChild(
    showcasePosterComponent({
      imgUrl: "../images/thrones.jpg",
      rating: 8.9,
      imgAlt: "test",
    })
  );
  slider.appendChild(
    showcasePosterComponent({
      imgUrl: "../images/thrones.jpg",
      rating: 8.9,
      imgAlt: "test",
    })
  );
  slider.appendChild(
    showcasePosterComponent({
      imgUrl: "../images/thrones.jpg",
      rating: 8.9,
      imgAlt: "test",
    })
  );
  slider.appendChild(
    showcasePosterComponent({
      imgUrl: "../images/thrones.jpg",
      rating: 8.9,
      imgAlt: "test",
    })
  );

  // popular movies
  pMoviesContainer.appendChild(
    movieCardComponent({
      imgAlt: "alt",
      imgUrl: "../images/thrones.jpg",
      title: "Some title",
      releaseDate: "12-08-2019",
    })
  );
  pMoviesContainer.appendChild(
    movieCardComponent({
      imgAlt: "alt",
      imgUrl: "../images/thrones.jpg",
      title: "Some title",
      releaseDate: "12-08-2019",
    })
  );
  pMoviesContainer.appendChild(
    movieCardComponent({
      imgAlt: "alt",
      imgUrl: "../images/thrones.jpg",
      title: "Some title",
      releaseDate: "12-08-2019",
    })
  );
  pMoviesContainer.appendChild(
    movieCardComponent({
      imgAlt: "alt",
      imgUrl: "../images/thrones.jpg",
      title: "Some title",
      releaseDate: "12-08-2019",
    })
  );
  pMoviesContainer.appendChild(
    movieCardComponent({
      imgAlt: "alt",
      imgUrl: "../images/thrones.jpg",
      title: "Some title",
      releaseDate: "12-08-2019",
    })
  );
  pMoviesContainer.appendChild(
    movieCardComponent({
      imgAlt: "alt",
      imgUrl: "../images/thrones.jpg",
      title: "Some title",
      releaseDate: "12-08-2019",
    })
  );
}

document.addEventListener("DOMContentLoaded", init);
