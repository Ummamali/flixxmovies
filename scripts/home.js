// Elements

const slider = document.getElementById("slider");

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
}

document.addEventListener("DOMContentLoaded", init);
