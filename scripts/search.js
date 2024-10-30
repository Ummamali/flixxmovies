const resultEl = document.getElementById("result");
const pgBtnsContain = document.getElementById("page-btns");
const headingSpan = document.getElementById("heading");

const searchUrls = {
  MOVIE: "https://api.themoviedb.org/3/search/movie",
  SERIES: "https://api.themoviedb.org/3/search/tv",
};

async function searchAndRenderPage(page, query, movieType = "MOVIE") {
  const resObj = await fetchFromMoviesDB(
    `${searchUrls[movieType]}?page=${page}&query=${query}`
  );

  resObj.results.forEach((r) => {
    resultEl.appendChild(
      movieCardComponent({
        imgAlt: "Poster for " + r.title,
        imgUrl:
          r.poster_path !== null
            ? `https://image.tmdb.org/t/p/w342/${r.poster_path}`
            : "../images/no-image.jpg",
        title: movieType === "MOVIE" ? r.title : r.name,
        releaseTitle: "Air Date:",
        releaseDate: movieType === "MOVIE" ? r.release_date : r.first_air_date,
        movieId: r.id,
        movieType: movieType,
      })
    );
  });

  return resObj;
}

document.addEventListener("DOMContentLoaded", (e) => {
  const query = new URL(window.location.href).searchParams.get("q");
  const movieType = new URL(window.location.href).searchParams.get("type");

  if (query.length === 0) {
    headingSpan.innerText = `Unable to find results, please search again`;
    headingSpan.classList.add(
      "text-red-400/70",
      "text-sm",
      "font-light",
      "italic"
    );
    return false;
  }

  searchAndRenderPage(1, query, movieType).then(
    ({ total_pages, total_results }) => {
      headingSpan.innerText = `Showing ${total_results} result for "${query}"`;
      enablePagination(
        pgBtnsContain,
        resultEl,
        async (pageIdx) => {
          resultEl.innerHTML = "";
          window.scroll({ top: 0, behavior: "smooth" });
          searchAndRenderPage(pageIdx, query, movieType);
        },
        total_pages
      );
    }
  );
});
