document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       PRODUCT TABS
    ===================================================== */

    const tabs =
        document.querySelectorAll(".demo-tab");

    const panels =
        document.querySelectorAll(".demo-panel");


    tabs.forEach(tab => {

        tab.addEventListener("click", () => {

            const target =
                tab.dataset.tab;


            tabs.forEach(item => {

                item.classList.remove("active");

            });


            panels.forEach(panel => {

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


    /* =====================================================
       STUDENT DURATION
    ===================================================== */

    const durationButtons =
        document.querySelectorAll(
            ".duration-row button"
        );


    durationButtons.forEach(button => {

        button.addEventListener("click", () => {

            durationButtons.forEach(item => {

                item.classList.remove(
                    "selected"
                );

            });


            button.classList.add("selected");

        });

    });


    /* =====================================================
       STUDENT CALENDAR
    ===================================================== */

    const calendarButtons =
        document.querySelectorAll(
            ".calendar-times button"
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


    /* =====================================================
       STUDENT MATCH BUTTON
    ===================================================== */

    const matchButton =
        document.querySelector(
            "#student-demo .interface-button"
        );


    const matchFeedback =
        document.getElementById(
            "studentMatchFeedback"
        );


    if (matchButton) {

        matchButton.addEventListener(
            "click",
            () => {

                const original =
                    matchButton.textContent;


                matchButton.disabled = true;

                matchButton.textContent =
                    "Analyzing your request...";


                if (matchFeedback) {

                    matchFeedback.textContent =
                        "Bridge is comparing tutors, schedules and need.";

                }


                setTimeout(() => {

                    matchButton.textContent =
                        "Best match found ✓";


                    matchButton.style.background =
                        "#35c98b";


                    if (matchFeedback) {

                        matchFeedback.textContent =
                            "Alex Morgan · 96% fit · Tuesday 4 PM";

                    }

                }, 1300);


                setTimeout(() => {

                    matchButton.disabled = false;

                    matchButton.textContent =
                        original;

                    matchButton.style.background =
                        "";


                }, 4000);

            }
        );

    }


    /* =====================================================
       FACTOR HOVER
    ===================================================== */

    const factors =
        document.querySelectorAll(
            ".factor"
        );


    factors.forEach(factor => {

        factor.addEventListener(
            "mouseenter",
            () => {

                factors.forEach(item => {

                    item.classList.remove(
                        "active"
                    );

                });


                factor.classList.add(
                    "active"
                );

            }
        );

    });


    /* =====================================================
       AI LESSON ACTIONS
    ===================================================== */

    const lessonButtons =
        document.querySelectorAll(
            ".lesson-tools button"
        );


    lessonButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const oldText =
                    button.textContent;


                button.textContent =
                    "Generating...";


                setTimeout(() => {

                    button.textContent =
                        "✓ Ready";

                }, 800);


                setTimeout(() => {

                    button.textContent =
                        oldText;

                }, 2200);

            }
        );

    });


    /* =====================================================
       GENERATE EXAMPLE
    ===================================================== */

    const generateExample =
        document.querySelector(
            ".small-action"
        );


    if (generateExample) {

        generateExample.addEventListener(
            "click",
            () => {

                generateExample.textContent =
                    "Example generated ✓";


                setTimeout(() => {

                    generateExample.textContent =
                        "Generate example";

                }, 1800);

            }
        );

    }


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            `
            .connection-card,
            .workflow-card,
            .factor,
            .allocation-grid article,
            .ai-card,
            .language-card,
            .global-stat,
            .quality-card
            `
        );


    if (
        "IntersectionObserver"
        in window
    ) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "revealed"
                            );

                        }

                    });

                },
                {
                    threshold: 0.08
                }
            );


        revealElements.forEach(element => {

            observer.observe(element);

        });

    }


    /* =====================================================
       SMOOTH ANCHOR SCROLL
    ===================================================== */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const targetId =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        targetId === "#"
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (!target) {

                        return;

                    }


                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );

        });


    /* =====================================================
       OFFLINE PACKAGE BUTTON VISUAL
    ===================================================== */

    const offlinePackage =
        document.querySelector(
            ".offline-package"
        );


    if (offlinePackage) {

        offlinePackage.addEventListener(
            "click",
            () => {

                const progress =
                    offlinePackage.querySelector(
                        ".download-progress div"
                    );


                if (!progress) {

                    return;

                }


                progress.style.width =
                    "100%";


                setTimeout(() => {

                    progress.style.width =
                        "82%";

                }, 1500);

            }
        );

    }


});