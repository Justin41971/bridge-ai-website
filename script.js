document.addEventListener("DOMContentLoaded", () => {

    /*
     * BRIDGE AI PRODUCT DEMO
     * -----------------------
     * Handles:
     * - Product tabs
     * - Duration selection
     * - Small UI interactions
     */


    /* =========================
       PRODUCT TABS
    ========================= */

    const tabs = document.querySelectorAll(".demo-tab");
    const panels = document.querySelectorAll(".demo-panel");

    tabs.forEach(tab => {

        tab.addEventListener("click", () => {

            const target = tab.dataset.tab;

            tabs.forEach(t => {
                t.classList.remove("active");
            });

            panels.forEach(panel => {
                panel.classList.remove("active");
            });

            tab.classList.add("active");

            const targetPanel = document.getElementById(target);

            if (targetPanel) {
                targetPanel.classList.add("active");
            }

        });

    });


    /* =========================
       DURATION BUTTONS
    ========================= */

    const durationButtons = document.querySelectorAll(
        ".duration-row button"
    );

    durationButtons.forEach(button => {

        button.addEventListener("click", () => {

            durationButtons.forEach(btn => {
                btn.classList.remove("selected");
            });

            button.classList.add("selected");

        });

    });


    /* =========================
       SMOOTH SCROLL
    ========================= */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =========================
       MATCHING FACTORS
    ========================= */

    const factors = document.querySelectorAll(".factor");

    factors.forEach(factor => {

        factor.addEventListener("mouseenter", () => {

            factors.forEach(item => {
                item.classList.remove("active");
            });

            factor.classList.add("active");

        });

    });


    /* =========================
       FAKE MATCHING BUTTON
    ========================= */

    const findButtons = document.querySelectorAll(
        ".interface-button"
    );

    findButtons.forEach(button => {

        button.addEventListener("click", () => {

            const originalText = button.textContent;

            button.textContent = "Finding your best match...";

            button.style.opacity = "0.7";

            setTimeout(() => {

                button.textContent = "Match found ✓";
                button.style.opacity = "1";

            }, 1200);

            setTimeout(() => {

                button.textContent = originalText;

            }, 3000);

        });

    });


    /* =========================
       SCROLL REVEAL
    ========================= */

    const revealElements = document.querySelectorAll(
        ".workflow-card, .ai-card, .language-card, .factor"
    );

    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                }

            });

        },
        {
            threshold: 0.08
        }
    );


    revealElements.forEach(element => {

        element.style.opacity = "0";
        element.style.transform = "translateY(15px)";
        element.style.transition =
            "opacity .5s ease, transform .5s ease";

        observer.observe(element);

    });

});