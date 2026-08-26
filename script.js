document.addEventListener("DOMContentLoaded", () => {

  /* -----------------------------
     PRODUCT TABS
  ----------------------------- */

  const productTabs = document.querySelectorAll(".product-tab");
  const productPanels = document.querySelectorAll(".product-panel");

  productTabs.forEach(tab => {

    tab.addEventListener("click", () => {

      const target = tab.dataset.product;

      productTabs.forEach(item => {
        item.classList.toggle("active", item === tab);
      });

      productPanels.forEach(panel => {
        panel.classList.toggle("active", panel.id === target);
      });

    });

  });


  /* -----------------------------
     WORKFLOW INTERACTION
  ----------------------------- */

  const workflowSteps = document.querySelectorAll(".workflow-step");

  const workflowNumber = document.getElementById("workflowNumber");
  const workflowTitle = document.getElementById("workflowTitle");
  const workflowDescription = document.getElementById("workflowDescription");
  const workflowDemo = document.getElementById("workflowDemo");

  const workflowData = {

    1: {
      number: "01",
      title: "Student submits a microtopic",
      description:
        "Instead of simply asking for math help, a student identifies the exact concept they are struggling with.",
      demo: `
        <div class="student-request-ui">
          <div class="ui-title">
            <strong>New help request</strong>
            <span>1 / 3</span>
          </div>

          <label>What are you struggling with?</label>

          <div class="input-box">
            I understand Newton's laws, but I struggle with elevator problems.
          </div>

          <label>Course</label>

          <div class="select-box">
            Grade 11 Physics <span>⌄</span>
          </div>

          <div class="demo-bottom">
            <div>
              <label>Study time</label>
              <div class="duration-options">
                <button>30m</button>
                <button class="selected">60m</button>
                <button>90m</button>
              </div>
            </div>

            <button class="demo-button">Find my match →</button>
          </div>
        </div>
      `
    },

    2: {
      number: "02",
      title: "Bridge matches a tutor",
      description:
        "The system compares student need, tutor proficiency and compatible availability before assigning available tutoring time.",
      demo: `
        <div class="student-request-ui">

          <div class="ui-title">
            <strong>Best available matches</strong>
            <span>Bridge AI</span>
          </div>

          <div class="mock-match">
            <div class="match-person">
              <div class="mini-avatar">AL</div>
              <div>
                <strong>Alex L.</strong>
                <span>Physics · Forces & Motion</span>
              </div>
            </div>

            <div class="match-score">
              <strong>96%</strong>
              <span>match</span>
            </div>
          </div>

          <div class="mock-match">
            <div class="match-person">
              <div class="mini-avatar">MK</div>
              <div>
                <strong>Maya K.</strong>
                <span>Physics · Mechanics</span>
              </div>
            </div>

            <div class="match-score">
              <strong>88%</strong>
              <span>match</span>
            </div>
          </div>

          <button class="demo-button" style="margin-top:15px;width:100%">
            Select best available tutor →
          </button>

        </div>
      `
    },

    3: {
      number: "03",
      title: "Tutor teaches with AI assistance",
      description:
        "The human tutor remains responsible for teaching while AI can generate visuals, examples, translations and practice questions.",
      demo: `
        <div class="student-request-ui">

          <div class="ui-title">
            <strong>Live tutoring session</strong>
            <span>AI assisting</span>
          </div>

          <div class="ai-live-ui">

            <div class="live-toolbar">
              <span>BRIDGE AI</span>
              <button>Visual</button>
              <button>Translate</button>
              <button>Question</button>
            </div>

            <div class="live-content">

              <div class="physics-visual">
                <div class="force-arrow">→ F</div>
                <div class="box">m</div>
                <div class="ground"></div>
              </div>

              <div class="live-note">
                <small>AI ASSIST</small>
                <strong>
                  Try showing how increasing mass changes acceleration.
                </strong>
              </div>

            </div>

          </div>

        </div>
      `
    },

    4: {
      number: "04",
      title: "Student continues learning",
      description:
        "After the session, Bridge creates follow-up resources and checks whether the student can explain the concept independently.",
      demo: `
        <div class="student-request-ui">

          <div class="ui-title">
            <strong>After-session resources</strong>
            <span>Completed</span>
          </div>

          <div class="resource-item">
            <div class="resource-icon pdf">PDF</div>
            <div>
              <strong>Lesson summary</strong>
              <span>Explanation + examples</span>
            </div>
            <button>↓</button>
          </div>

          <div class="resource-item">
            <div class="resource-icon practice">Q</div>
            <div>
              <strong>Practice questions</strong>
              <span>10 questions</span>
            </div>
            <button>→</button>
          </div>

          <div class="resource-item">
            <div class="resource-icon test">✓</div>
            <div>
              <strong>Diagnostic check</strong>
              <span>81% understanding</span>
            </div>
            <button>→</button>
          </div>

        </div>
      `
    }

  };


  workflowSteps.forEach(step => {

    step.addEventListener("click", () => {

      const data = workflowData[step.dataset.step];

      workflowSteps.forEach(item => {
        item.classList.remove("active");
      });

      step.classList.add("active");

      workflowNumber.textContent = data.number;
      workflowTitle.textContent = data.title;
      workflowDescription.textContent = data.description;

      workflowDemo.style.opacity = "0";

      setTimeout(() => {
        workflowDemo.innerHTML = data.demo;
        workflowDemo.style.opacity = "1";
      }, 150);

    });

  });


  /* -----------------------------
     STUDENT MATCHING SCORE
  ----------------------------- */

  const averageSlider = document.getElementById("averageSlider");
  const fundingSlider = document.getElementById("fundingSlider");

  const averageValue = document.getElementById("averageValue");
  const fundingValue = document.getElementById("fundingValue");
  const needScore = document.getElementById("needScore");

  function updateNeedScore() {

    const average = Number(averageSlider.value);
    const funding = Number(fundingSlider.value);

    averageValue.textContent = `${average}%`;
    fundingValue.textContent = `${funding}%`;

    /*
      Illustrative visualization of the proposed scoring idea.
      A production matching system would require a validated formula.
    */

    const academicNeed = 100 - average;
    const accessNeed = 100 - funding;

    const score = Math.round(
      academicNeed * 0.55 +
      accessNeed * 0.45
    );

    needScore.textContent = score;
  }

  averageSlider.addEventListener("input", updateNeedScore);
  fundingSlider.addEventListener("input", updateNeedScore);

  updateNeedScore();


  /* -----------------------------
     TUTOR SUGGESTION BUTTONS
  ----------------------------- */

  document.querySelectorAll(".suggestion button").forEach(button => {

    button.addEventListener("click", () => {

      const original = button.textContent;

      button.textContent = "Added ✓";
      button.style.background = "#d9f4e9";
      button.style.color = "#18855b";

      setTimeout(() => {

        button.textContent = original;
        button.style.background = "";
        button.style.color = "";

      }, 1800);

    });

  });


  /* -----------------------------
     CALENDAR INTERACTION
  ----------------------------- */

  document.querySelectorAll(".days button").forEach(day => {

    day.addEventListener("click", () => {

      document.querySelectorAll(".days button").forEach(item => {
        item.classList.remove("selected");
      });

      day.classList.add("selected");

    });

  });


  /* -----------------------------
     OFFLINE STEPS
  ----------------------------- */

  const offlineSteps = document.querySelectorAll(".offline-step");

  offlineSteps.forEach(step => {

    step.addEventListener("click", () => {

      offlineSteps.forEach(item => {
        item.classList.remove("active");
      });

      step.classList.add("active");

    });

  });


  /* -----------------------------
     SMOOTH REVEAL
  ----------------------------- */

  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

            observer.unobserve(entry.target);

          }

        });

      },
      {
        threshold: .08
      }
    );

    document.querySelectorAll(
      ".stat-card, .product-panel, .ai-stage, .offline-step, .quality-ui"
    ).forEach(element => {

      element.style.opacity = "0";
      element.style.transform = "translateY(15px)";
      element.style.transition = "opacity .5s ease, transform .5s ease";

      observer.observe(element);

    });

  }

});