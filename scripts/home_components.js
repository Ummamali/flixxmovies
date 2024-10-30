// Contains components for home screen

// --------------------- Showcase poster
function showcasePosterComponent({
  imgUrl,
  rating,
  imgAlt,
  movieId,
  movieType,
}) {
  const img = createCustomElement("img", {
    src: imgUrl,
    alt: imgAlt,
    class: "w-full h-full object-cover",
  });
  const imgContainer = createCustomElement("div", {
    class: "w-full h-full bg-green-500",
    children: [img],
  });

  const footer = createCustomElement("div", {
    class: "bg-gray-900 text-gray-300 py-2",
    children: [
      createCustomElement("i", {
        class: "fa-solid fa-star text-yellow-400 mr-2",
      }),
      createCustomElement("span", { children: `${rating} / 10` }),
    ],
  });

  // assembling
  const main = createCustomElement("div", {
    class:
      "poster-card w-64 shrink-0 shadow-sm transition hover:cursor-pointer hover:brightness-75",
    children: [imgContainer, footer],
  });

  // click event handler
  main.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href =
      "./details.html?id=" + movieId + "&" + "type=" + movieType;
  });

  return main;
}
