// Contains components for home screen
function showcasePosterComponent({ imgUrl, rating, imgAlt }) {
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
    class: "poster-card shadow-sm transition hover:cursor-pointer",
    children: [imgContainer, footer],
  });

  return main;
}
