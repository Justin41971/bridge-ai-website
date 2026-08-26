document.addEventListener("DOMContentLoaded", () => {

  /* =========================================================
     TABS
  ========================================================= */

  const tabs = document.querySelectorAll(".tab");
  const panels = document.querySelectorAll(".tab-panel");

  tabs.forEach(tab => {

    tab.addEventListener("click", () => {

      const target = tab.dataset.tab;

      tabs.forEach(item => {
        item.classList.toggle("active", item === tab);
      });

      panels.forEach(panel => {
        panel.classList.toggle(
          "active",
          panel.id === target
        );
      });

    });

  });


  /* =========================================================
     STUDENT SESSION LENGTH
  ========================================================= */

  document.querySelectorAll(".duration-row").forEach(row => {

    row.querySelectorAll("button").forEach(button => {

      button.addEventListener("click", () => {

        row.querySelectorAll("button").forEach(item => {
          item.classList.remove("selected");
        });

        button.classList.add("selected");

      });

    });

  });


  /* =========================================================
     FIND MATCH DEMO
  ========================================================= */

  document.querySelectorAll(".find-button").forEach(button => {

    button.addEventListener("click", () => {

      const original = button.textContent;

      button.disabled = true;
      button.textContent = "Finding best match...";

      setTimeout(() => {

        button.textContent = "96% match found ✓";
        button.classList.add("success");

      }, 900);

      setTimeout(() => {

        button.textContent = original;
        button.disabled = false;
        button.classList.remove("success");

      }, 2400);

    });

  });


  /* =========================================================
     SCROLL REVEALS
  ========================================================= */

  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add("revealed");

            observer.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.08
      }
    );


    document
      .querySelectorAll(
        ".workflow-card, " +
        ".ai-card, " +
        ".student-request, " +
        ".africa-stat, " +
        ".offline-steps > div, " +
        ".matching-card, " +
        ".loop-step"
      )
      .forEach(element => {

        observer.observe(element);

      });

  }

});