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
