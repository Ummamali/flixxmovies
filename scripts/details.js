const textElementsIds = {
  title: "mv-title",
  rating: "mv-rating",
  releaseDate: "mv-release",
  description: "mv-description",
  budget: "mv-budget",
  revenue: "mv-revenue",
  runtime: "mv-runtime",
  status: "mv-status",
  productionCompanies: "mv-pdcompanies",
};

const imgEl = document.getElementById("mv-poster");
const genresEl = document.getElementById("mv-genres");
const mainSection = document.getElementById("main-section");

function hydratePage(movieData) {
  for (const [attribute, elementId] of Object.entries(textElementsIds)) {
    document.getElementById(elementId).innerText = movieData[attribute];
  }

  imgEl.setAttribute("src", movieData.posterUrl);

  movieData.genre.forEach((g) =>
    genresEl.appendChild(createCustomElement("li", { children: [g] }))
  );
}

async function fetchData(id, movieType) {
  const resObj = await fetchFromMoviesDB(
    `${backendUrls.details[movieType]}${id}`
  );

  return {
    posterUrl: `https://image.tmdb.org/t/p/w500/${resObj.poster_path}`,
    title: movieType === "SERIES" ? resObj.name : resObj.title,
    releaseDate:
      movieType === "SERIES" ? resObj.first_air_date : resObj.release_date,
    description: resObj.overview,
    revenue: movieType === "SERIES" ? "Not Available" : resObj.revenue,
    runtime:
      movieType === "SERIES"
        ? `${resObj.number_of_episodes} episodes`
        : resObj.runtime,
    status: resObj.status,
    budget: movieType === "SERIES" ? "Not Available" : resObj.budget,
    rating: resObj.vote_average.toFixed(1),
    genre: resObj.genres.map((g) => g.name),
    productionCompanies: resObj.production_companies
      .map((c) => c.name)
      .join(", "),
  };
}

document.addEventListener("DOMContentLoaded", (e) => {
  const id = new URL(window.location.href).searchParams.get("id");
  let movieType = new URL(window.location.href).searchParams.get("type");
  movieType = movieType ? movieType : "MOVIE";

  fetchData(id, movieType).then(hydratePage);
  fetchFromMoviesDB(
    `https://api.themoviedb.org/3/${
      movieType === "MOVIE" ? "movie" : "tv"
    }/${id}/images`
  ).then((resObj) => {
    const backdropUrl = `https://image.tmdb.org/t/p/w1280/${resObj.backdrops[0].file_path}`;

    mainSection.style.backgroundImage = `url("${backdropUrl}")`;
  });
});
