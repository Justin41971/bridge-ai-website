document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       INTERFACE TABS
    ========================= */

    const interfaceTabs =
        document.querySelectorAll(".interface-tab");

    const interfacePanels =
        document.querySelectorAll(".interface-panel");


    interfaceTabs.forEach(tab => {

        tab.addEventListener("click", () => {

            const target =
                tab.dataset.interface;


            interfaceTabs.forEach(item => {
                item.classList.remove("active");
            });


            interfacePanels.forEach(panel => {
                panel.classList.remove("active");
            });


            tab.classList.add("active");


            const targetPanel =
                document.getElementById(target);


            if (targetPanel) {
                targetPanel.classList.add("active");
            }

        });

    });


    /* =========================
       STUDENT DURATION
    ========================= */

    const durationButtons =
        document.querySelectorAll(
            ".duration-row button"
        );


    durationButtons.forEach(button => {

        button.addEventListener("click", () => {

            durationButtons.forEach(item => {
                item.classList.remove("selected");
            });


            button.classList.add("selected");

        });

    });


    /* =========================
       STUDENT CALENDAR
    ========================= */

    const calendarButtons =
        document.querySelectorAll(
            ".calendar-row button"
        );


    calendarButtons.forEach(button => {

        button.addEventListener("click", () => {

            calendarButtons.forEach(item => {
                item.classList.remove(
                    "calendar-selected"
                );
            });


            button.classList.add(
                "calendar-selected"
            );

        });

    });


    /* =========================
       FIND MATCH BUTTON
    ========================= */

    const matchButton =
        document.querySelector(
            ".student-ui .interface-button"
        );


    if (matchButton) {

        matchButton.addEventListener(
            "click",
            () => {

                const originalText =
                    matchButton.textContent;


                matchButton.textContent =
                    "Bridge is finding your best match...";


                matchButton.style.opacity =
                    "0.7";


                setTimeout(() => {

                    matchButton.textContent =
                        "Best match found ✓";

                    matchButton.style.opacity =
                        "1";

                }, 1200);


                setTimeout(() => {

                    matchButton.textContent =
                        originalText;

                }, 3000);

            }
        );

    }


    /* =========================
       SCROLL REVEAL
    ========================= */

    const revealElements =
        document.querySelectorAll(
            ".workflow-card, .ai-card, .language-card, .quality-step, .global-card"
        );


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                });

            },
            {
                threshold: 0.08
            }
        );


    revealElements.forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(15px)";

        element.style.transition =
            "opacity .5s ease, transform .5s ease";


        observer.observe(element);

    });


    /* =========================
       ADD REVEAL CLASS
    ========================= */

    const style =
        document.createElement("style");


    style.textContent = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;


    document.head.appendChild(style);

});