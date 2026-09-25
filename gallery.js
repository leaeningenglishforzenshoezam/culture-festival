"use strict";


/* ========================================
   DATA
======================================== */

const galleryData = {


  /* ========================================
     1年生
  ======================================== */

  grade1: [

    {
      id: "grade1-exhibition",
      label: "1年生共同展示",
      image: "images/gallery/grade1-exhibition.jpg",

      special: true,

      mapLabel: "昇降口前",
      mapColor: "#ff7fb0",

      x: 29.0,
      y: 78.0
    },

// ==============================
// 1年生
// ==============================

{
  id: "1A",
  label: "1A",
  image: "images/gallery/1a.jpg",
  colorClass: "color-a",
  mapColor: "#ef3e45",
  x: 41.82,
  y: 34.62
},

{
  id: "1B",
  label: "1B",
  image: "images/gallery/1b.jpg",
  colorClass: "color-b",
  mapColor: "#1474d4",
  x: 81.84,
  y: 75.37
},

{
  id: "1C",
  label: "1C",
  image: "images/gallery/1c.jpg",
  colorClass: "color-c",
  mapColor: "#ffd632",
  x: 54.90,
  y: 57.78
},

{
  id: "1D",
  label: "1D",
  image: "images/gallery/1d.jpg",
  colorClass: "color-d",
  mapColor: "#222222",
  x: 75.03,
  y: 85.54
},

{
  id: "1E",
  label: "1E",
  image: "images/gallery/1e.jpg",
  colorClass: "color-e",
  mapColor: "#38a965",
  x: 65.75,
  y: 44.71
},



// ==============================
// 2年生
// ==============================

{
  id: "2A",
  label: "2A",
  image: "images/gallery/2a.jpg",
  colorClass: "color-a",
  mapColor: "#ef3e45",
  x: 64.54,
  y: 75.37
},

{
  id: "2B",
  label: "2B",
  image: "images/gallery/2b.jpg",
  colorClass: "color-b",
  mapColor: "#1474d4",
  x: 65.75,
  y: 37.71,

  qrLink:
    "https://leaeningenglishforzenshoezam.github.io/culture-festival/"
},

{
  id: "2C",
  label: "2C",
  image: "images/gallery/2c.jpg",
  colorClass: "color-c",
  mapColor: "#ffd632",
  x: 36.50,
  y: 54.79
},

{
  id: "2D",
  label: "2D",
  image: "images/gallery/2d.jpg",
  colorClass: "color-d",
  mapColor: "#222222",
  x: 24.90,
  y: 45.44
},

{
  id: "2E",
  label: "2E",
  image: "images/gallery/2e.jpg",
  colorClass: "color-e",
  mapColor: "#38a965",
  x: 54.90,
  y: 68.83
},



  // ==============================
// 3年生
// ==============================

{
  id: "3A",
  label: "3A",
  image: "images/gallery/3a.jpg",
  colorClass: "color-a",
  mapColor: "#ef3e45",
  x: 56.01,
  y: 34.48
},

{
  id: "3B",
  label: "3B",
  image: "images/gallery/3b.jpg",
  colorClass: "color-b",
  mapColor: "#1474d4",
  x: 46.27,
  y: 54.79
},

{
  id: "3C",
  label: "3C",
  image: "images/gallery/3c.jpg",
  colorClass: "color-c",
  mapColor: "#ffd632",
  x: 85.98,
  y: 92.77
},

{
  id: "3D",
  label: "3D",
  image: "images/gallery/3d.jpg",
  colorClass: "color-d",
  mapColor: "#222222",
  x: 24.90,
  y: 34.39
},

{
  id: "3E",
  label: "3E",
  image: "images/gallery/3e.jpg",
  colorClass: "color-e",
  mapColor: "#38a965",
  x: 59.98,
  y: 92.77
},


  /* ========================================
     団体・ゲスト
  ======================================== */

  other: [


    /* 美術部 */

 {
  id: "art",
  label: "美術部",
  image: "images/gallery/art.jpg",

  mapLabel: "美術部",
  mapColor: "#ff4f93",

  x: 59.3,
  y: 87.5
},


    /* 家庭部 */

    {
      id: "homeeconomics",
      label: "家庭部",
      image: "images/gallery/homeeconomics.jpg",

      mapLabel: "家庭部",
      mapColor: "#ff4f93",

      x: 59.3,
      y: 87.5
    },


    /* 茶道部 */

    {
      id: "tea",
      label: "茶道部",
      image: "images/gallery/tea.jpg",

      mapLabel: "茶道",
      mapColor: "#ff4f93",

      x: 55.2,
      y: 82.4
    },


    /* 同窓会 */

    {
      id: "alumni",
      label: "同窓会",
      image: "images/gallery/alumni.jpg",

      mapLabel: "同窓会",
      mapColor: "#ff4f93",

      x: 69.8,
      y: 52.2
    },


    /* PTA */

    {
      id: "pta",
      label: "PTA",
      image: "images/gallery/pta.jpg",

      mapLabel: "PTA",
      mapColor: "#ff4f93",

      x: 76.2,
      y: 52.2
    },


    /* 生徒会 */

    {
      id: "student-council",
      label: "生徒会",
      image: "images/gallery/student-council.jpg",

      mapLabel: "生徒会",
      mapColor: "#ff4f93",

      x: 50.4,
      y: 65.2
    },


    /* 日本語学院 */

   {
  id: "japanese-school",
  label: "大和国際日本語学院",
  image: "images/gallery/japanese-school.jpg",

  mapLabel: "大和国際日本語学院",
  mapColor: "#ff4f93",

  x: 30.5,
  y: 35.0
},


    /* ========================================
       アカペラ部：昇降口前
    ======================================== */

    {
      id: "acappella",
      label: "アカペラ部",
      image: "images/gallery/acappella.jpg",

      mapLabel: "昇降口前",
      mapColor: "#ff4f93",

      x: 29.0,
      y: 78.0
    },


    /* ========================================
       体育館
    ======================================== */

    {
      id: "flower-arrangement",
      label: "華道部",

      image:
        "images/gallery/flower-arrangement.jpg",

      mapLabel: "体育館",
      mapColor: "#ff4f93",

      x: 11.0,
      y: 40.0
    },


    {
      id: "calligraphy",
      label: "書道部",

      image:
        "images/gallery/calligraphy.jpg",

      mapLabel: "体育館",
      mapColor: "#ff4f93",

      x: 11.0,
      y: 40.0
    },


    /* ========================================
       市商祭1日目のみ
    ======================================== */

    {
      id: "brass-band",
      label: "吹奏楽部",

      image:
        "images/gallery/brass-band.jpg",

      day1Only: true,

      notice:
        "市商祭1日目に発表予定の演目です。"
    },


    {
      id: "english-club",
      label: "英語部",

      image:
        "images/gallery/english-club.jpg",

      day1Only: true,

      notice:
        "市商祭1日目に発表予定の演目です。"
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
  document.getElementById(
    "classIndex"
  );


const adsContainer =
  document.getElementById(
    "adsContainer"
  );


const imageModal =
  document.getElementById(
    "imageModal"
  );


const modalImage =
  document.getElementById(
    "modalImage"
  );


const qrHotspot =
  document.getElementById(
    "qrHotspot"
  );


const mapModal =
  document.getElementById(
    "mapModal"
  );


const mapModalTitle =
  document.getElementById(
    "mapModalTitle"
  );


const mapMarker =
  document.getElementById(
    "mapMarker"
  );


const mapMarkerLabel =
  document.getElementById(
    "mapMarkerLabel"
  );


const coverOverlay =
  document.getElementById(
    "coverOverlay"
  );


const coverEnter =
  document.getElementById(
    "coverEnter"
  );



/* ========================================
   FIRST VISIT COVER
======================================== */

function setupCover() {

  if (
    !coverOverlay ||
    !coverEnter
  ) {

    return;

  }


  const alreadySeen =
    sessionStorage.getItem(
      "festivalCoverSeen"
    );


  if (!alreadySeen) {

    coverOverlay.classList.add(
      "is-open"
    );


    coverOverlay.setAttribute(
      "aria-hidden",
      "false"
    );


    document.body.classList.add(
      "cover-open"
    );

  }


  coverEnter.addEventListener(
    "click",
    () => {

      sessionStorage.setItem(
        "festivalCoverSeen",
        "true"
      );


      coverOverlay.classList.add(
        "is-closing"
      );


      setTimeout(
        () => {

          coverOverlay.classList.remove(
            "is-open",
            "is-closing"
          );


          coverOverlay.setAttribute(
            "aria-hidden",
            "true"
          );


          document.body.classList.remove(
            "cover-open"
          );

        },
        420
      );

    }
  );

}



/* ========================================
   BUILD INDEX
======================================== */

function buildIndex() {

  if (!indexContainer) {

    return;

  }


  indexContainer.innerHTML =
    "";


  items.forEach(
    (item) => {

      const link =
        document.createElement(
          "a"
        );


      link.href =
        `#ad-${item.id}`;


      link.className =
        "index-button";


      if (item.colorClass) {

        link.classList.add(
          item.colorClass
        );

      }


      if (item.special) {

        link.classList.add(
          "special-index-button"
        );

      }


      if (group === "other") {

        link.classList.add(
          "other-index-button"
        );

      }


      link.textContent =
        item.special
          ? "共同展示"
          : item.label;


      indexContainer.appendChild(
        link
      );

    }
  );

}



/* ========================================
   BUILD ADS
======================================== */

function buildAds() {

  if (!adsContainer) {

    return;

  }


  adsContainer.innerHTML =
    "";


  items.forEach(
    (item) => {


      const article =
        document.createElement(
          "article"
        );


      article.className =
        "ad-card";


      article.id =
        `ad-${item.id}`;


      if (item.special) {

        article.classList.add(
          "special-card"
        );

      }



      /* HEADING */

      const heading =
        document.createElement(
          "div"
        );


      heading.className =
        "ad-heading";


      const label =
        document.createElement(
          "span"
        );


      label.className =
        "ad-class-label";


      if (item.colorClass) {

        label.classList.add(
          item.colorClass
        );

      }

      else if (item.special) {

        label.classList.add(
          "special-label"
        );

      }

      else {

        label.classList.add(
          "group-label"
        );

      }


      label.textContent =
        item.label;


      heading.appendChild(
        label
      );



      /* IMAGE */

      const frame =
        document.createElement(
          "div"
        );


      frame.className =
        "ad-poster-frame";


      const image =
        document.createElement(
          "img"
        );


      image.src =
        item.image;


      image.alt =
        `${item.label} 広告`;


      image.className =
        "ad-poster";


      image.loading =
        "lazy";


      /*
       * 全広告共通
       * タップ → 拡大
       */

      image.addEventListener(
        "click",
        () => {

          openImageModal(
            item
          );

        }
      );


      frame.appendChild(
        image
      );


      article.appendChild(
        heading
      );


      article.appendChild(
        frame
      );



      /* DAY 1 */

      if (item.day1Only) {

        const notice =
          document.createElement(
            "div"
          );


        notice.className =
          "day1-notice";


        notice.innerHTML = `
          <span class="day1-badge">
            DAY 1
          </span>

          <p>
            ${item.notice}
          </p>
        `;


        article.appendChild(
          notice
        );

      }


      /* LOCATION */

      else {

        const locationButton =
          document.createElement(
            "button"
          );


        locationButton.type =
          "button";


        locationButton.className =
          "location-button";


        locationButton.textContent =
          `${item.label}の場所はこちら`;


        locationButton.addEventListener(
          "click",
          () => {

            openMap(
              item
            );

          }
        );


        article.appendChild(
          locationButton
        );

      }


      adsContainer.appendChild(
        article
      );

    }
  );

}



/* ========================================
   IMAGE MODAL
======================================== */

function openImageModal(
  item
) {

  if (
    !imageModal ||
    !modalImage
  ) {

    return;

  }


  modalImage.src =
    item.image;


  modalImage.alt =
    `${item.label} 広告`;



  /*
   * 2Bだけ
   * QRコード部分をクリック可能にする
   */

  if (
    qrHotspot &&
    item.qrLink
  ) {

    qrHotspot.href =
      item.qrLink;


    qrHotspot.classList.add(
      "is-visible"
    );

  }

  else if (qrHotspot) {

    qrHotspot.classList.remove(
      "is-visible"
    );

  }



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



/* ========================================
   CLOSE IMAGE
======================================== */

function closeImageModal() {

  if (
    !imageModal ||
    !modalImage
  ) {

    return;

  }


  imageModal.classList.remove(
    "is-open"
  );


  imageModal.setAttribute(
    "aria-hidden",
    "true"
  );


  modalImage.src =
    "";


  if (qrHotspot) {

    qrHotspot.classList.remove(
      "is-visible"
    );

  }


  document.body.style.overflow =
    "";

}



/* ========================================
   MAP
======================================== */

function openMap(
  item
) {

  if (
    !mapModal ||
    !mapModalTitle ||
    !mapMarker ||
    !mapMarkerLabel
  ) {

    return;

  }


  mapModalTitle.textContent =
    `${item.label}の場所はこちら`;


  mapMarker.style.left =
    `${item.x}%`;


  mapMarker.style.top =
    `${item.y}%`;


  mapMarkerLabel.textContent =
    item.mapLabel ||
    item.label;


  mapMarker.style.borderColor =
    item.mapColor;


  mapMarker.style.background =
    hexToRgba(
      item.mapColor,
      0.86
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



/* ========================================
   CLOSE MAP
======================================== */

function closeMap() {

  if (!mapModal) {

    return;

  }


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
   COLOR
======================================== */

function hexToRgba(
  hex,
  alpha
) {

  const value =
    hex.replace(
      "#",
      ""
    );


  const bigint =
    parseInt(
      value,
      16
    );


  const r =
    (bigint >> 16) & 255;


  const g =
    (bigint >> 8) & 255;


  const b =
    bigint & 255;


  return (
    `rgba(${r}, ${g}, ${b}, ${alpha})`
  );

}



/* ========================================
   CLOSE BUTTONS
======================================== */

document
  .querySelectorAll(
    "[data-close-modal]"
  )
  .forEach(
    (button) => {

      button.addEventListener(
        "click",
        closeImageModal
      );

    }
  );


document
  .querySelectorAll(
    "[data-close-map]"
  )
  .forEach(
    (button) => {

      button.addEventListener(
        "click",
        closeMap
      );

    }
  );



/* ========================================
   CLICK BACKGROUND
======================================== */

imageModal?.addEventListener(
  "click",
  (event) => {

    if (
      event.target ===
      imageModal
    ) {

      closeImageModal();

    }

  }
);


mapModal?.addEventListener(
  "click",
  (event) => {

    if (
      event.target ===
      mapModal
    ) {

      closeMap();

    }

  }
);



/* ========================================
   ESCAPE
======================================== */

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key !==
      "Escape"
    ) {

      return;

    }


    closeImageModal();

    closeMap();

  }
);



/* ========================================
   START
======================================== */

setupCover();

buildIndex();

buildAds();
