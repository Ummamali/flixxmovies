// This file contains code for navbar and other shared stuff

// configurations
const readAccessToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWRiNDE3NWE3YjZiYjU4ZWNhYzFiNGUyY2VhYWY4YSIsIm5iZiI6MTczMDI3NzM2My4wMjE5MDY2LCJzdWIiOiI2MDI0YzcwNGJjMmNiMzAwM2RhNTQwNjAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.42CC0Tk1Q8sZVTaI-pvyqZUt5eBT15yYnB0FSfwXlss";

const backendUrls = {
  details: {
    MOVIE: "https://api.themoviedb.org/3/movie/",
    SERIES: "https://api.themoviedb.org/3/tv/",
  },
};

// ------------- useful functions

async function fetchFromMoviesDB(url) {
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${readAccessToken}`,
      accept: "application/json",
    },
  });

  if (res.ok) {
    return await res.json();
  } else {
    throw new Error("Fetch Failed: Some error Occured");
  }
}

// navbar

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 5) {
    navbar.classList.add("bg-black/50", "backdrop-blur");
  } else {
    navbar.classList.remove("bg-black/50", "backdrop-blur");
  }
});

// -------------------------- Movie mini card

function movieCardComponent({
  imgUrl,
  imgAlt,
  title,
  releaseDate,
  movieId,
  releaseTitle = "Release:",
  movieType = "MOVIE",
}) {
  const img = createCustomElement("img", {
    src: imgUrl,
    alt: imgAlt,
  });

  // text footer
  const footer = createCustomElement("div", {
    class:
      "absolute bottom-0 left-0 w-full text-sm p-4 bg-black/60 backdrop-blur ",
    children: [
      createCustomElement("p", {
        children: [title],
        class: "text-white/90 mb-1",
      }),
      createCustomElement("p", {
        children: `${releaseTitle} ${releaseDate}`,
        class: "text-xs text-white/40",
      }),
    ],
  });

  // assembling
  const main = createCustomElement("div", {
    children: [img, footer],
    class:
      "relative shadow-sm rounded overflow-hidden hover:cursor-pointer hover:brightness-75",
  });

  // click event handler
  main.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = `./details.html?id=${movieId}&type=${movieType}`;
  });

  return main;
}

function enablePagination(
  buttonsContainer,
  renderElement,
  onChange,
  totalPages,
  startFrom = 1
) {
  function buttonClickHandler(e) {
    const pageIdx = parseInt(e.target.dataset.page);
    onChange(pageIdx).then(() => {
      renderElement.setAttribute("data-page", pageIdx);
      renderButtons(pageIdx);
    });
  }

  function renderButtons(currentPage) {
    buttonsContainer.innerHTML = "";
    const btns = [
      createCustomElement("button", {
        children: [currentPage.toString()],
        class: "text-cyan-400 font-bold",
      }),
    ];

    let i = currentPage - 1;
    let unshiftCount = 0;
    while (i > 0 && unshiftCount < 2) {
      const newBtn = createCustomElement("button", {
        children: [i.toString()],
        "data-page": i,
      });
      newBtn.addEventListener("click", buttonClickHandler);
      btns.unshift(newBtn);
      i -= 1;
      unshiftCount += 1;
    }

    let j = currentPage + 1;
    let pushCount = unshiftCount - 2;
    while (j <= totalPages && pushCount < 2) {
      const newButton = createCustomElement("button", {
        children: [j.toString()],
        "data-page": j,
      });

      newButton.addEventListener("click", buttonClickHandler);

      btns.push(newButton);
      j += 1;
      pushCount += 1;
    }

    if (currentPage > 1) {
      const prevBtn = createCustomElement("button", {
        children: ["prev"],
        "data-page": currentPage - 1,
      });
      prevBtn.addEventListener("click", buttonClickHandler);
      btns.unshift(prevBtn);
    }

    if (currentPage < totalPages) {
      const nextBtn = createCustomElement("button", {
        children: ["next"],
        "data-page": currentPage + 1,
      });
      nextBtn.addEventListener("click", buttonClickHandler);
      btns.push(nextBtn);
    }

    // now going to the DOM
    renderElement.setAttribute("data-page", currentPage);
    btns.forEach((btn) => buttonsContainer.appendChild(btn));
  }

  renderButtons(startFrom);
}
