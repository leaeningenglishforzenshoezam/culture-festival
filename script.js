document.addEventListener(
  "DOMContentLoaded",
  () => {


    /* =========================
       FADE
    ========================== */

    const fadeElements =
      document.querySelectorAll(
        ".fade"
      );


    const observer =
      new IntersectionObserver(

        (entries) => {

          entries.forEach(
            (entry) => {

              if (
                entry.isIntersecting
              ) {

                entry.target
                  .classList
                  .add(
                    "is-visible"
                  );


                observer
                  .unobserve(
                    entry.target
                  );

              }

            }
          );

        },

        {
          threshold:
            0.12
        }

      );


    fadeElements
      .forEach(
        (element) => {

          observer
            .observe(
              element
            );

        }
      );





    /* =========================
       IMAGE MODAL
    ========================== */

    const clickableImages =
      document
        .querySelectorAll(
          ".clickable-image"
        );


    const modal =
      document
        .getElementById(
          "imageModal"
        );


    const modalImage =
      document
        .getElementById(
          "imageModalContent"
        );


    const closeButton =
      document
        .getElementById(
          "imageModalClose"
        );




    function openModal(
      image
    ) {

      modalImage.src =
        image.src;


      modalImage.alt =
        image.alt;


      modal
        .classList
        .add(
          "is-open"
        );


      modal
        .setAttribute(
          "aria-hidden",
          "false"
        );


      document
        .body
        .style
        .overflow =
        "hidden";

    }




    function closeModal() {

      modal
        .classList
        .remove(
          "is-open"
        );


      modal
        .setAttribute(
          "aria-hidden",
          "true"
        );


      modalImage.src =
        "";


      document
        .body
        .style
        .overflow =
        "";

    }




    clickableImages
      .forEach(
        (image) => {

          image
            .addEventListener(
              "click",
              () => {

                openModal(
                  image
                );

              }
            );

        }
      );




    closeButton
      .addEventListener(
        "click",
        closeModal
      );




    modal
      .addEventListener(
        "click",
        (event) => {

          if (
            event.target ===
            modal
          ) {

            closeModal();

          }

        }
      );




    document
      .addEventListener(
        "keydown",
        (event) => {

          if (
            event.key ===
            "Escape"
            &&
            modal
              .classList
              .contains(
                "is-open"
              )
          ) {

            closeModal();

          }

        }
      );


  }
);

/* ========================================
   IMAGE SLIDER
======================================== */

document.querySelectorAll("[data-slider]").forEach((slider) => {

  const slides =
    slider.querySelectorAll(".art-slide");

  const dots =
    slider.querySelectorAll(".slider-dot");

  const prevButton =
    slider.querySelector(".slider-prev");

  const nextButton =
    slider.querySelector(".slider-next");

  const counter =
    slider.querySelector(".slider-current");

  const interval =
    Number(slider.dataset.interval) || 4000;

  let currentIndex = 0;
  let timer;

  let touchStartX = 0;
  let touchEndX = 0;


  function showSlide(index) {

    if (index < 0) {
      index = slides.length - 1;
    }

    if (index >= slides.length) {
      index = 0;
    }

    slides.forEach((slide, i) => {
      slide.classList.toggle(
        "active",
        i === index
      );
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle(
        "active",
        i === index
      );
    });

    currentIndex = index;

    if (counter) {
      counter.textContent =
        currentIndex + 1;
    }
  }


  function nextSlide() {
    showSlide(currentIndex + 1);
  }


  function prevSlide() {
    showSlide(currentIndex - 1);
  }


  function startSlider() {

    clearInterval(timer);

    timer = setInterval(() => {
      nextSlide();
    }, interval);
  }


  nextButton.addEventListener(
    "click",
    (event) => {

      event.stopPropagation();

      nextSlide();
      startSlider();
    }
  );


  prevButton.addEventListener(
    "click",
    (event) => {

      event.stopPropagation();

      prevSlide();
      startSlider();
    }
  );


  dots.forEach((dot, index) => {

    dot.addEventListener(
      "click",
      (event) => {

        event.stopPropagation();

        showSlide(index);
        startSlider();
      }
    );
  });


  /* スマホのスワイプ */

  slider.addEventListener(
    "touchstart",
    (event) => {

      touchStartX =
        event.changedTouches[0].screenX;
    },
    { passive: true }
  );


  slider.addEventListener(
    "touchend",
    (event) => {

      touchEndX =
        event.changedTouches[0].screenX;

      const diff =
        touchStartX - touchEndX;

      if (Math.abs(diff) > 45) {

        if (diff > 0) {
          nextSlide();
        }
        else {
          prevSlide();
        }

        startSlider();
      }
    },
    { passive: true }
  );


  showSlide(0);
  startSlider();

});
