document.addEventListener("DOMContentLoaded", () => {

  /* =========================================================
     PRODUCT TABS
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
        panel.classList.toggle("active", panel.id === target);
      });

    });

  });


  /* =========================================================
     DURATION BUTTONS
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
     STUDENT MATCH BUTTON
  ========================================================= */

  document.querySelectorAll(".find-button, .hero-match-button").forEach(button => {

    button.addEventListener("click", () => {

      const original = button.textContent;

      button.disabled = true;
      button.textContent = "Finding best match...";

      setTimeout(() => {

        button.textContent = "Match found ✓";

        if (button.classList.contains("find-button")) {
          button.classList.add("success");
        }

      }, 900);

      setTimeout(() => {

        button.textContent = original;
        button.disabled = false;

        if (button.classList.contains("find-button")) {
          button.classList.remove("success");
        }

      }, 2400);

    });

  });


  /* =========================================================
     CALENDAR
  ========================================================= */

  document.querySelectorAll(".calendar-day").forEach(day => {

    day.addEventListener("click", () => {

      document.querySelectorAll(".calendar-day").forEach(item => {
        item.classList.remove("active");
      });

      day.classList.add("active");

    });

  });


  document.querySelectorAll(".time-slot").forEach(slot => {

    slot.addEventListener("click", () => {
      slot.classList.toggle("selected");
    });

  });


  /* =========================================================
     MATCHING MODEL
  ========================================================= */

  const averageRange = document.getElementById("averageRange");
  const fundingRange = document.getElementById("fundingRange");
  const subjectRange = document.getElementById("subjectRange");
  const availabilityRange = document.getElementById("availabilityRange");
  const qualityRange = document.getElementById("qualityRange");

  const averageValue = document.getElementById("averageValue");
  const fundingValue = document.getElementById("fundingValue");
  const subjectValue = document.getElementById("subjectValue");
  const availabilityValue = document.getElementById("availabilityValue");
  const qualityValue = document.getElementById("qualityValue");

  const matchScore = document.getElementById("matchScore");

  const studentPriorityScore =
    document.getElementById("studentPriorityScore");

  const qualityScore =
    document.getElementById("qualityScore");

  const subjectScore =
    document.getElementById("subjectScore");

  const availabilityScore =
    document.getElementById("availabilityScore");

  const studentPriorityBar =
    document.getElementById("studentPriorityBar");

  const qualityBar =
    document.getElementById("qualityBar");

  const subjectBar =
    document.getElementById("subjectBar");

  const availabilityBar =
    document.getElementById("availabilityBar");


  function updateMatchingModel() {

    if (!averageRange) return;

    const average = Number(averageRange.value);
    const funding = Number(fundingRange.value);
    const subject = Number(subjectRange.value);
    const availability = Number(availabilityRange.value);
    const quality = Number(qualityRange.value);

    /*
      Student priority is higher when the student has:
      - lower academic average
      - greater funding need

      This is an illustrative interface model.
    */

    const academicNeed = 100 - average;

    const studentPriority = Math.round(
      academicNeed * 0.55 +
      funding * 0.45
    );

    /*
      Overall match visualization.
      Subject fit, availability and tutor quality have the
      strongest direct effect on the tutor match.
    */

    const score = Math.round(
      studentPriority * 0.20 +
      subject * 0.30 +
      availability * 0.20 +
      quality * 0.30
    );

    averageValue.textContent = average;
    fundingValue.textContent = funding;
    subjectValue.textContent = subject;
    availabilityValue.textContent = availability;
    qualityValue.textContent = quality;

    matchScore.textContent = `${score}%`;

    studentPriorityScore.textContent = studentPriority;
    qualityScore.textContent = quality;
    subjectScore.textContent = subject;
    availabilityScore.textContent = availability;

    studentPriorityBar.style.width = `${studentPriority}%`;
    qualityBar.style.width = `${quality}%`;
    subjectBar.style.width = `${subject}%`;
    availabilityBar.style.width = `${availability}%`;

  }


  [
    averageRange,
    fundingRange,
    subjectRange,
    availabilityRange,
    qualityRange
  ].forEach(input => {

    if (input) {
      input.addEventListener("input", updateMatchingModel);
    }

  });

  updateMatchingModel();


  /* =========================================================
     TUTOR TEACHING ASSESSMENT
  ========================================================= */

  const assessmentButton =
    document.getElementById("assessmentButton");

  const teachingAnswer =
    document.getElementById("teachingAnswer");

  const assessmentResult =
    document.getElementById("assessmentResult");


  if (assessmentButton) {

    assessmentButton.addEventListener("click", () => {

      assessmentButton.disabled = true;
      assessmentButton.textContent = "Assessing teaching...";

      setTimeout(() => {

        assessmentButton.textContent = "Assessment complete ✓";

        assessmentResult.classList.add("assessment-visible");

      }, 1000);

      setTimeout(() => {

        assessmentButton.disabled = false;
        assessmentButton.textContent = "Run teaching assessment →";

      }, 2200);

    });

  }


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
        ".workflow-card, .ai-card, .offline-steps > div, .africa-stat"
      )
      .forEach(element => {

        observer.observe(element);

      });

  }

});