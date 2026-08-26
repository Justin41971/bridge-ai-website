document.addEventListener("DOMContentLoaded", () => {


    /* =========================
       ELEMENTS
    ========================= */

    const form =
        document.getElementById("tutorForm");

    const firstName =
        document.getElementById("firstName");

    const lastName =
        document.getElementById("lastName");

    const school =
        document.getElementById("school");

    const average =
        document.getElementById("average");

    const weeklyLimit =
        document.getElementById("weeklyLimit");


    const previewName =
        document.getElementById("previewName");

    const previewSchool =
        document.getElementById("previewSchool");

    const previewAverage =
        document.getElementById("previewAverage");


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

            const stats =
                document.querySelector(
                    ".preview-stats div:nth-child(2) strong"
                );


            if (stats) {

                stats.textContent =
                    weeklyLimit.value
                        .replace(" hours", "h")
                        .replace(" hour", "h");

            }

        }
    );


    /* =========================
       APPLICATION SUBMISSION
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
                    document.getElementById("grade").value,

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
                "Application information saved ✓";

            button.style.background =
                "#35c98b";


            setTimeout(() => {

                button.disabled = false;

                button.textContent =
                    "Continue to teaching assessment →";

                button.style.background =
                    "";

            }, 3000);

        }
    );


    /* =========================
       AI TEACHING SIMULATION
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

                        <span>
                            NEED AN ANSWER
                        </span>

                        <strong>
                            Explain the concept first.
                        </strong>

                    </div>

                `;

                return;

            }


            /*
             * FRONTEND DEMO
             *
             * This is not a real AI model.
             * A production Bridge implementation would
             * send the teaching response to an AI backend.
             */


            let knowledgeScore = 72;

            let clarityScore = 70;

            let adaptationScore = 68;

            let pacingScore = 70;


            const lower =
                answer.toLowerCase();


            /* Knowledge */

            if (
                lower.includes("velocity") ||
                lower.includes("acceleration") ||
                lower.includes("change")
            ) {

                knowledgeScore += 10;

            }


            /* Explanation */

            if (
                answer.length > 150
            ) {

                clarityScore += 8;

            }


            /* Adaptation */

            if (
                lower.includes("example") ||
                lower.includes("imagine") ||
                lower.includes("think") ||
                lower.includes("for example")
            ) {

                adaptationScore += 10;

            }


            /* Pacing */

            if (
                lower.includes("first") ||
                lower.includes("then") ||
                lower.includes("step")
            ) {

                pacingScore += 8;

            }


            knowledgeScore =
                Math.min(
                    knowledgeScore,
                    100
                );

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

            pacingScore =
                Math.min(
                    pacingScore,
                    100
                );


            const overall =
                Math.round(
                    (
                        knowledgeScore +
                        clarityScore +
                        adaptationScore +
                        pacingScore
                    ) / 4
                );


            evaluationResult.innerHTML = `

                <div class="evaluation-header">

                    <div>

                        <span>
                            ILLUSTRATIVE AI EVALUATION
                        </span>

                        <strong>
                            Teaching simulation
                        </strong>

                    </div>

                    <strong>
                        ${overall}/100
                    </strong>

                </div>


                <div class="evaluation-bars">

                    <div class="evaluation-row">

                        <span>
                            Knowledge
                        </span>

                        <div>
                            <i style="width:${knowledgeScore}%"></i>
                        </div>

                        <b>
                            ${knowledgeScore}
                        </b>

                    </div>


                    <div class="evaluation-row">

                        <span>
                            Clarity
                        </span>

                        <div>
                            <i style="width:${clarityScore}%"></i>
                        </div>

                        <b>
                            ${clarityScore}
                        </b>

                    </div>


                    <div class="evaluation-row">

                        <span>
                            Adaptation
                        </span>

                        <div>
                            <i style="width:${adaptationScore}%"></i>
                        </div>

                        <b>
                            ${adaptationScore}
                        </b>

                    </div>


                    <div class="evaluation-row">

                        <span>
                            Pacing
                        </span>

                        <div>
                            <i style="width:${pacingScore}%"></i>
                        </div>

                        <b>
                            ${pacingScore}
                        </b>

                    </div>

                </div>


                <p class="evaluation-note">

                    Demonstration only. A real Bridge implementation
                    would use a structured teaching rubric, AI evaluation
                    and appropriate human review.

                </p>

            `;

        }
    );

});