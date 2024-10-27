// Contains components for home screen

// --------------------- Showcase poster
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

// -------------------------- Movie mini card

function movieCardComponent({ imgUrl, imgAlt, title, releaseDate }) {
  const img = createCustomElement("img", {
    src: imgUrl,
    alt: imgAlt,
  });

  // text footer
  const footer = createCustomElement("div", {
    class: "py-3 text-sm",
    children: [
      createCustomElement("p", {
        children: [title],
        class: "font-bold text-white",
      }),
      createCustomElement("p", {
        children: `Release: ${releaseDate}`,
        class: "text-white/40",
      }),
    ],
  });

  // assembling
  const main = createCustomElement("div", {
    children: [img, footer],
    class: "bg-black/40 p-2.5 rounded hover:cursor-pointer hover:bg-black/30",
  });

  return main;
}
