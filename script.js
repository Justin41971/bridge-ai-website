document.addEventListener("DOMContentLoaded", () => {

  /* -----------------------------
     CONNECTION TABS
  ----------------------------- */

  const interfaceTabs =
    document.querySelectorAll(".interface-tab");

  const interfacePanels =
    document.querySelectorAll(".interface-panel");

  interfaceTabs.forEach(tab => {

    tab.addEventListener("click", () => {

      const target = tab.dataset.interface;

      interfaceTabs.forEach(item => {
        item.classList.toggle("active", item === tab);
      });

      interfacePanels.forEach(panel => {
        panel.classList.toggle(
          "active",
          panel.id === target
        );
      });

    });

  });


  /* -----------------------------
     DURATION BUTTONS
  ----------------------------- */

  document
    .querySelectorAll(".duration-row")
    .forEach(row => {

      row.querySelectorAll("button")
        .forEach(button => {

          button.addEventListener("click", () => {

            row.querySelectorAll("button")
              .forEach(item =>
                item.classList.remove("selected")
              );

            button.classList.add("selected");

          });

        });

    });


  /* -----------------------------
     STUDENT MATCH
  ----------------------------- */

  document
    .querySelectorAll(".find-button")
    .forEach(button => {

      button.addEventListener("click", () => {

        const result =
          document.getElementById("studentMatchResult");

        if (!result) return;

        button.disabled = true;
        button.textContent = "Finding best match...";

        result.textContent =
          "Bridge is comparing topic, student need, tutor skill and availability.";

        setTimeout(() => {

          button.textContent = "Match found ✓";
          button.classList.add("success");

          result.textContent =
            "Best match found: Physics tutor · 96% illustrative fit · Tuesday 4 PM.";

        }, 1000);

        setTimeout(() => {

          button.disabled = false;
          button.textContent = "Find my best match →";
          button.classList.remove("success");

        }, 3500);

      });

    });


  /* -----------------------------
     HERO MATCH BUTTON
  ----------------------------- */

  const heroMatch =
    document.getElementById("heroMatchButton");

  if (heroMatch) {

    heroMatch.addEventListener("click", () => {

      heroMatch.textContent = "Matching...";

      setTimeout(() => {
        heroMatch.textContent = "Tutor found ✓";
      }, 900);

      setTimeout(() => {
        heroMatch.textContent = "Find a tutor →";
      }, 2400);

    });

  }


  /* -----------------------------
     MATCHING ALGORITHM CONTROLS
  ----------------------------- */

  const average =
    document.getElementById("studentAverage");

  const funding =
    document.getElementById("fundingDifference");

  const time =
    document.getElementById("timeFit");

  const averageValue =
    document.getElementById("averageValue");

  const fundingValue =
    document.getElementById("fundingValue");

  const timeValue =
    document.getElementById("timeValue");

  const matchScore =
    document.getElementById("matchScore");

  function updateMatch() {

    if (!average || !funding || !time) return;

    averageValue.textContent = average.value;
    fundingValue.textContent = funding.value;
    timeValue.textContent = time.value;

    /*
      Illustrative prototype calculation.

      The actual Bridge matching algorithm would use
      the project's full student/tutor scoring system.
    */

    const studentNeed =
      100 - Number(average.value);

    const fundingNeed =
      Number(funding.value);

    const timeFit =
      Number(time.value);

    const score = Math.round(
      studentNeed * 0.35 +
      fundingNeed * 0.25 +
      timeFit * 0.40
    );

    matchScore.textContent =
      `${Math.max(50, Math.min(99, score))}%`;

  }

  [average, funding, time].forEach(input => {

    if (input) {
      input.addEventListener("input", updateMatch);
    }

  });

  updateMatch();


  /* -----------------------------
     CALENDAR SLOTS
  ----------------------------- */

  document
    .querySelectorAll(".time-slot")
    .forEach(slot => {

      slot.addEventListener("click", () => {
        slot.classList.toggle("selected");
      });

    });


  /* -----------------------------
     AI WORKFLOW TABS
  ----------------------------- */

  const aiSteps =
    document.querySelectorAll(".ai-step");

  const aiDetails =
    document.querySelectorAll(".ai-detail");

  aiSteps.forEach(step => {

    step.addEventListener("click", () => {

      const target =
        step.dataset.aiStep;

      aiSteps.forEach(item => {
        item.classList.toggle(
          "active",
          item === step
        );
      });

      aiDetails.forEach(detail => {
        detail.classList.toggle(
          "active",
          detail.id === target
        );
      });

    });

  });


  /* -----------------------------
     LANGUAGE SWITCHER
  ----------------------------- */

  const languageCards =
    document.querySelectorAll(".language-card");

  const languageTitle =
    document.getElementById("languageTitle");

  const languageMessages = {
    English:
      "Simplify. Translate. Explain again.",

    Français:
      "Simplifier. Traduire. Expliquer à nouveau.",

    Kiswahili:
      "Rahisisha. Tafsiri. Eleza tena.",

    Amharic:
      "ቀላል አድርግ። ተርጉም። እንደገና አብራራ።",

    "العربية":
      "بسّط. ترجم. اشرح مرة أخرى."
  };

  languageCards.forEach(card => {

    card.addEventListener("click", () => {

      languageCards.forEach(item => {
        item.classList.remove("active");
      });

      card.classList.add("active");

      const language =
        card.querySelector("strong").textContent;

      languageTitle.textContent =
        languageMessages[language] ||
        "Simplify. Translate. Explain again.";

    });

  });


  /* -----------------------------
     OFFLINE STEP INTERACTION
  ----------------------------- */

  const offlineSteps =
    document.querySelectorAll(".offline-step");

  offlineSteps.forEach(step => {

    step.addEventListener("click", () => {

      offlineSteps.forEach(item => {
        item.classList.remove("active");
      });

      step.classList.add("active");

    });

  });


  /* -----------------------------
     SCROLL REVEAL
  ----------------------------- */

  if ("IntersectionObserver" in window) {

    const observer =
      new IntersectionObserver(
        entries => {

          entries.forEach(entry => {

            if (entry.isIntersecting) {

              entry.target.classList.add("revealed");

              observer.unobserve(entry.target);

            }

          });

        },
        {
          threshold:0.12
        }
      );

    document
      .querySelectorAll(
        ".stat-row > div, .student-request, .africa-stat, .quality-item"
      )
      .forEach(element => {
        observer.observe(element);
      });

  }

});