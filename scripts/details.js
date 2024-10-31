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
const homePageLink = document.getElementById("homepage-link");

// Below is information about the api

const detailsEndpoints = {};

const attributeAPIMappings = {
  MOVIE: {
    title: "title",
    posterUrl: (resObj) =>
      `https://image.tmdb.org/t/p/w500${resObj.poster_path}`,
    backdropUrl: (resObj) =>
      `https://image.tmdb.org/t/p/w1280${resObj.backdrop_path}`,
    releaseDate: "release_date",
    description: "overview",
    homepage: "homepage",
    revenue: "revenue",
    runtime: "runtime",
    status: "status",
    budget: "budget",
    rating: (resObj) => resObj.vote_average.toFixed(1),
    genre: (resObj) => resObj.genres.map((g) => g.name),
    productionCompanies: (resObj) =>
      resObj.production_companies.map((c) => c.name).join(", "),
  },
  SERIES: {
    title: "name",
    posterUrl: (resObj) =>
      `https://image.tmdb.org/t/p/w500/${resObj.poster_path}`,
    backdropUrl: (resObj) =>
      `https://image.tmdb.org/t/p/w1280${resObj.backdrop_path}`,
    releaseDate: "first_air_date",
    description: "overview",
    revenue: () => "Not Available",
    runtime: (resObj) =>
      `${resObj.number_of_seasons} ${
        resObj.number_of_seasons > 1 ? "seasons" : "season"
      }, ${resObj.number_of_episodes} episodes`,
    status: "status",
    homepage: "homepage",

    budget: () => "Not Available",
    rating: (resObj) => resObj.vote_average.toFixed(1),
    genre: (resObj) => resObj.genres.map((g) => g.name),
    productionCompanies: (resObj) =>
      resObj.production_companies.map((c) => c.name).join(", "),
  },
};

function getMappedObject(originalResObj, movieType) {
  const mapped = {};
  for (const [attr, resObjProperty] of Object.entries(
    attributeAPIMappings[movieType]
  )) {
    mapped[attr] =
      typeof resObjProperty === "function"
        ? resObjProperty(originalResObj)
        : originalResObj[resObjProperty];
  }

  return mapped;
}

function hydratePage(movieData) {
  console.log(movieData);
  for (const [attribute, elementId] of Object.entries(textElementsIds)) {
    document.getElementById(elementId).innerText = movieData[attribute];
  }

  imgEl.setAttribute("src", movieData.posterUrl);

  movieData.genre.forEach((g) =>
    genresEl.appendChild(createCustomElement("li", { children: [g] }))
  );

  homePageLink.setAttribute("href", movieData.homepage);

  mainSection.style.backgroundImage = `url("${movieData.backdropUrl}")`;
}

async function fetchData(id, movieType) {
  const resObj = await fetchFromMoviesDB(
    `${backendUrls.details[movieType]}${id}`
  );

  return getMappedObject(resObj, movieType);
}

document.addEventListener("DOMContentLoaded", (e) => {
  const id = new URL(window.location.href).searchParams.get("id");
  let movieType = new URL(window.location.href).searchParams.get("type");
  movieType = movieType ? movieType : "MOVIE";

  fetchData(id, movieType).then(hydratePage);
});
