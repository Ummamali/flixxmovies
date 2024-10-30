const tvShowsContainer = document.getElementById("tvshows");
const pgBtnsContain = document.getElementById("page-btns");

async function fetchAndRenderPage(page) {
  const resObj = await fetchFromMoviesDB(
    "https://api.themoviedb.org/3/tv/popular?page=" + page
  );

  resObj.results.forEach((r) => {
    tvShowsContainer.appendChild(
      movieCardComponent({
        imgAlt: "Poster for " + r.title,
        imgUrl:
          r.poster_path !== null
            ? `https://image.tmdb.org/t/p/w342/${r.poster_path}`
            : "../images/no-image.jpg",
        title: r.name,
        releaseTitle: "Air Date:",
        releaseDate: r.first_air_date,
        movieId: r.id,
        movieType: "SERIES",
      })
    );
  });

  return resObj;
}

document.addEventListener("DOMContentLoaded", (e) => {
  fetchAndRenderPage(1).then(({ total_pages }) => {
    enablePagination(
      pgBtnsContain,
      tvShowsContainer,
      async (pageIdx) => {
        tvShowsContainer.innerHTML = "";
        window.scroll({ top: 0, behavior: "smooth" });
        fetchAndRenderPage(pageIdx);
      },
      total_pages
    );
  });
});
