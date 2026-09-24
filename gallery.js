"use strict";


/* ========================================
   DATA
======================================== */

const galleryData = {

  grade1: [

    {
      id: "1A",
      label: "1A",
      image: "images/gallery/1a.jpg",
      colorClass: "color-a",
      mapColor: "#ef3e45",
      x: 41,
      y: 22
    },

    {
      id: "1B",
      label: "1B",
      image: "images/gallery/1b.jpg",
      colorClass: "color-b",
      mapColor: "#1474d4",
      x: 60,
      y: 67
    },

    {
      id: "1C",
      label: "1C",
      image: "images/gallery/1c.jpg",
      colorClass: "color-c",
      mapColor: "#ffd632",
      x: 48,
      y: 50
    },

    {
      id: "1D",
      label: "1D",
      image: "images/gallery/1d.jpg",
      colorClass: "color-d",
      mapColor: "#222222",
      x: 57,
      y: 78
    },

    {
      id: "1E",
      label: "1E",
      image: "images/gallery/1e.jpg",
      colorClass: "color-e",
      mapColor: "#38a965",
      x: 55,
      y: 38
    }

  ],



  grade2: [

    {
      id: "2A",
      label: "2A",
      image: "images/gallery/2a.jpg",
      colorClass: "color-a",
      mapColor: "#ef3e45",
      x: 50,
      y: 67
    },

    {
      id: "2B",
      label: "2B",
      image: "images/gallery/2b.jpg",
      colorClass: "color-b",
      mapColor: "#1474d4",
      x: 55,
      y: 28
    },

    {
      id: "2C",
      label: "2C",
      image: "images/gallery/2c.jpg",
      colorClass: "color-c",
      mapColor: "#ffd632",
      x: 32,
      y: 47
    },

    {
      id: "2D",
      label: "2D",
      image: "images/gallery/2d.jpg",
      colorClass: "color-d",
      mapColor: "#222222",
      x: 22,
      y: 37
    },

    {
      id: "2E",
      label: "2E",
      image: "images/gallery/2e.jpg",
      colorClass: "color-e",
      mapColor: "#38a965",
      x: 48,
      y: 57
    }

  ],



  grade3: [

    {
      id: "3A",
      label: "3A",
      image: "images/gallery/3a.jpg",
      colorClass: "color-a",
      mapColor: "#ef3e45",
      x: 48,
      y: 22
    },

    {
      id: "3B",
      label: "3B",
      image: "images/gallery/3b.jpg",
      colorClass: "color-b",
      mapColor: "#1474d4",
      x: 39,
      y: 47
    },

    {
      id: "3C",
      label: "3C",
      image: "images/gallery/3c.jpg",
      colorClass: "color-c",
      mapColor: "#ffd632",
      x: 64,
      y: 89
    },

    {
      id: "3D",
      label: "3D",
      image: "images/gallery/3d.jpg",
      colorClass: "color-d",
      mapColor: "#222222",
      x: 22,
      y: 30
    },

    {
      id: "3E",
      label: "3E",
      image: "images/gallery/3e.jpg",
      colorClass: "color-e",
      mapColor: "#38a965",
      x: 46,
      y: 89
    }

  ],



  other: [

    {
      id: "art",
      label: "美術部",
      image: "images/gallery/art.jpg",
      mapColor: "#ff4f93",
      x: 49,
      y: 82
    },

    {
      id: "homeeconomics",
      label: "家庭部",
      image: "images/gallery/homeeconomics.jpg",
      mapColor: "#ff4f93",
      x: 49,
      y: 82
    },

    {
      id: "tea",
      label: "茶道部",
      image: "images/gallery/tea.jpg",
      mapColor: "#ff4f93",
      x: 47,
      y: 72
    },

    {
      id: "alumni",
      label: "同窓会",
      image: "images/gallery/alumni.jpg",
      mapColor: "#ff4f93",
      x: 58,
      y: 44
    },

    {
      id: "pta",
      label: "PTA",
      image: "images/gallery/pta.jpg",
      mapColor: "#ff4f93",
      x: 63,
      y: 44
    },

    {
      id: "student-council",
      label: "生徒会",
      image: "images/gallery/student-council.jpg",
      mapColor: "#ff4f93",
      x: 48,
      y: 53
    },

    {
      id: "japanese-school",
      label: "日本語学院",
      image: "images/gallery/japanese-school.jpg",
      mapColor: "#ff4f93",
      x: 32,
      y: 23
    },

    {
      id: "commerce",
      label: "商業科",
      image: "images/gallery/commerce.jpg",
      mapColor: "#ff4f93",
      x: 66,
      y: 52
    }

  ]

};



/* ========================================
   CURRENT PAGE
======================================== */

const group =
  document.body.dataset.galleryGroup;

const items =
  galleryData[group] || [];



/* ========================================
   ELEMENTS
======================================== */

const indexContainer =
  document.getElementById("classIndex");

const adsContainer =
  document.getElementById("adsContainer");

const imageModal =
  document.getElementById("imageModal");

const modalImage =
  document.getElementById("modalImage");

const mapModal =
  document.getElementById("mapModal");

const mapModalTitle =
  document.getElementById("mapModalTitle");

const mapMarker =
  document.getElementById("mapMarker");

const mapMarkerLabel =
  document.getElementById("mapMarkerLabel");



/* ========================================
   BUILD INDEX
======================================== */

function buildIndex() {

  if (!indexContainer) {
    return;
  }

  indexContainer.innerHTML = "";


  items.forEach((item) => {

    const link =
      document.createElement("a");

    link.href =
      `#ad-${item.id}`;

    link.className =
      "index-button";


    if (item.colorClass) {

      link.classList.add(
        item.colorClass
      );

    }


    link.textContent =
      item.label;


    indexContainer.appendChild(
      link
    );

  });

}



/* ========================================
   BUILD ADS
======================================== */

function buildAds() {

  if (!adsContainer) {
    return;
  }


  adsContainer.innerHTML = "";


  items.forEach((item) => {

    const article =
      document.createElement("article");


    article.className =
      "ad-card";

    article.id =
      `ad-${item.id}`;


    /* heading */

    const heading =
      document.createElement("div");

    heading.className =
      "ad-heading";


    const label =
      document.createElement("span");

    label.className =
      "ad-class-label";


    if (item.colorClass) {

      label.classList.add(
        item.colorClass
      );

    }
    else {

      label.style.color =
        "#ffffff";

      label.style.background =
        "linear-gradient(135deg,#ff4f93,#f06b40)";

    }


    label.textContent =
      item.label;


    heading.appendChild(label);



    /* image */

    const frame =
      document.createElement("div");

    frame.className =
      "ad-poster-frame";


    const image =
      document.createElement("img");

    image.src =
      item.image;

    image.alt =
      `${item.label} 広告`;

    image.className =
      "ad-poster";

    image.loading =
      "lazy";


    image.addEventListener(
      "click",
      () => {

        openImageModal(item);

      }
    );


    frame.appendChild(image);



    /* location */

    const locationButton =
      document.createElement("button");

    locationButton.type =
      "button";

    locationButton.className =
      "location-button";

    locationButton.textContent =
      `${item.label}の場所はこちら`;


    locationButton.addEventListener(
      "click",
      () => {

        openMap(item);

      }
    );



    article.appendChild(
      heading
    );

    article.appendChild(
      frame
    );

    article.appendChild(
      locationButton
    );


    adsContainer.appendChild(
      article
    );

  });

}



/* ========================================
   IMAGE MODAL
======================================== */

function openImageModal(item) {

  modalImage.src =
    item.image;

  modalImage.alt =
    `${item.label} 広告`;

  imageModal.classList.add(
    "is-open"
  );

  imageModal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.style.overflow =
    "hidden";

}



function closeImageModal() {

  imageModal.classList.remove(
    "is-open"
  );

  imageModal.setAttribute(
    "aria-hidden",
    "true"
  );

  modalImage.src = "";

  document.body.style.overflow =
    "";

}



/* ========================================
   MAP MODAL
======================================== */

function openMap(item) {

  mapModalTitle.textContent =
    `${item.label}の場所はこちら`;


  mapMarker.style.left =
    `${item.x}%`;

  mapMarker.style.top =
    `${item.y}%`;


  mapMarkerLabel.textContent =
    item.label;


  mapMarker.style.borderColor =
    item.mapColor;

  mapMarker.style.background =
    hexToRgba(
      item.mapColor,
      0.85
    );


  mapModal.classList.add(
    "is-open"
  );

  mapModal.setAttribute(
    "aria-hidden",
    "false"
  );


  document.body.style.overflow =
    "hidden";

}



function closeMap() {

  mapModal.classList.remove(
    "is-open"
  );

  mapModal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.style.overflow =
    "";

}



/* ========================================
   COLOR HELPER
======================================== */

function hexToRgba(
  hex,
  alpha
) {

  const value =
    hex.replace("#", "");

  const bigint =
    parseInt(value, 16);

  const r =
    (bigint >> 16) & 255;

  const g =
    (bigint >> 8) & 255;

  const b =
    bigint & 255;


  return `rgba(${r},${g},${b},${alpha})`;

}



/* ========================================
   CLOSE BUTTONS
======================================== */

document
  .querySelectorAll(
    "[data-close-modal]"
  )
  .forEach((button) => {

    button.addEventListener(
      "click",
      closeImageModal
    );

  });


document
  .querySelectorAll(
    "[data-close-map]"
  )
  .forEach((button) => {

    button.addEventListener(
      "click",
      closeMap
    );

  });



/* click background */

imageModal?.addEventListener(
  "click",
  (event) => {

    if (event.target === imageModal) {
      closeImageModal();
    }

  }
);


mapModal?.addEventListener(
  "click",
  (event) => {

    if (event.target === mapModal) {
      closeMap();
    }

  }
);



/* escape */

document.addEventListener(
  "keydown",
  (event) => {

    if (event.key !== "Escape") {
      return;
    }

    closeImageModal();
    closeMap();

  }
);



/* ========================================
   START
======================================== */

buildIndex();
buildAds();
