document.addEventListener("DOMContentLoaded", () => {


    /* =========================
       ELEMENTS
    ========================= */

    const form = document.getElementById("tutorForm");

    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const school = document.getElementById("school");
    const average = document.getElementById("average");
    const weeklyLimit = document.getElementById("weeklyLimit");

    const previewName = document.getElementById("previewName");
    const previewSchool = document.getElementById("previewSchool");
    const previewAverage = document.getElementById("previewAverage");


    /* =========================
       LIVE PROFILE
    ========================= */

    function updateProfile() {

        const first =
            firstName.value.trim() || "Alex";

        const last =
            lastName.value.trim() || "Morgan";

        const schoolName =
            school.value.trim() || "Your school";

        const avg =
            average.value.trim() || "95";

        previewName.textContent =
            `${first} ${last}`;

        previewSchool.textContent =
            schoolName;

        previewAverage.textContent =
            `${avg}%`;

    }


    [
        firstName,
        lastName,
        school,
        average
    ].forEach(input => {

        input.addEventListener(
            "input",
            updateProfile
        );

    });


    /* =========================
       WEEKLY LIMIT
    ========================= */

    weeklyLimit.addEventListener(
        "change",
        () => {

            const limitText =
                weeklyLimit.value;

            const stats =
                document.querySelector(
                    ".preview-stats div:nth-child(2) strong"
                );

            if (stats) {

                stats.textContent =
                    limitText.replace(" hours", "h")
                             .replace(" hour", "h");

            }

        }
    );


    /* =========================
       FORM SUBMISSION
    ========================= */

    form.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const subjects =
                Array.from(
                    document.querySelectorAll(
                        '.checkbox-grid input:checked'
                    )
                ).map(
                    checkbox => checkbox.value
                );


            if (subjects.length === 0) {

                alert(
                    "Please select at least one subject you can teach."
                );

                return;

            }


            const applicationData = {

                name:
                    `${firstName.value} ${lastName.value}`,

                school:
                    school.value,

                grade:
                    document.getElementById(
                        "grade"
                    ).value,

                average:
                    average.value,

                subjects:
                    subjects,

                weeklyLimit:
                    weeklyLimit.value,

                motivation:
                    document.getElementById(
                        "motivation"
                    ).value

            };


            console.log(
                "Bridge tutor application:",
                applicationData
            );


            const button =
                form.querySelector(
                    ".submit-button"
                );


            button.disabled = true;

            button.textContent =
                "Application submitted ✓";


            button.style.background =
                "#35c98b";


            setTimeout(() => {

                button.disabled = false;

                button.textContent =
                    "Submit another application →";

                button.style.background =
                    "";

            }, 4000);

        }
    );


    /* =========================
       TEACHING SIMULATION
    ========================= */

    const evaluateButton =
        document.getElementById(
            "evaluateTeaching"
        );

    const teachingAnswer =
        document.getElementById(
            "teachingAnswer"
        );

    const evaluationResult =
        document.getElementById(
            "evaluationResult"
        );


    evaluateButton.addEventListener(
        "click",
        () => {

            const answer =
                teachingAnswer.value.trim();


            if (!answer) {

                evaluationResult.innerHTML = `
                    <div>
                        <span>NEED AN ANSWER</span>

                        <strong>
                            Write your explanation first.
                        </strong>
                    </div>
                `;

                return;

            }


            /*
             * This is intentionally a FRONTEND DEMO.
             *
             * A real Bridge implementation would send
             * this response to an AI evaluation backend.
             */


            let clarityScore = 70;

            let adaptationScore = 68;

            let reasoningScore = 72;


            if (answer.length > 180) {
                clarityScore += 8;
                adaptationScore += 6;
            }


            const lower =
                answer.toLowerCase();


            if (
                lower.includes("accelerat") ||
                lower.includes("surface") ||
                lower.includes("normal") ||
                lower.includes("force")
            ) {

                reasoningScore += 8;

            }


            if (
                lower.includes("example") ||
                lower.includes("imagine") ||
                lower.includes("think")
            ) {

                adaptationScore += 8;

            }


            clarityScore =
                Math.min(
                    clarityScore,
                    100
                );

            adaptationScore =
                Math.min(
                    adaptationScore,
                    100
                );

            reasoningScore =
                Math.min(
                    reasoningScore,
                    100
                );


            const overall =
                Math.round(
                    (
                        clarityScore +
                        adaptationScore +
                        reasoningScore
                    ) / 3
                );


            evaluationResult.innerHTML = `

                <div class="evaluation-header">

                    <span>
                        ILLUSTRATIVE AI EVALUATION
                    </span>

                    <strong>
                        ${overall}/100
                    </strong>

                </div>


                <div class="evaluation-bars">

                    <div>

                        <span>
                            Clarity
                        </span>

                        <div class="eval-bar">
                            <i style="width:${clarityScore}%"></i>
                        </div>

                        <b>
                            ${clarityScore}
                        </b>

                    </div>


                    <div>

                        <span>
                            Adaptation
                        </span>

                        <div class="eval-bar">
                            <i style="width:${adaptationScore}%"></i>
                        </div>

                        <b>
                            ${adaptationScore}
                        </b>

                    </div>


                    <div>

                        <span>
                            Reasoning
                        </span>

                        <div class="eval-bar">
                            <i style="width:${reasoningScore}%"></i>
                        </div>

                        <b>
                            ${reasoningScore}
                        </b>

                    </div>

                </div>


                <p class="evaluation-note">

                    A real implementation would use a
                    structured AI rubric and human review
                    rather than relying on this demo score.

                </p>

            `;

        }
    );


});