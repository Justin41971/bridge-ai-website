document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* =================================================
           ELEMENTS
        ================================================= */

        const form =
            document.getElementById(
                "tutorForm"
            );


        const firstName =
            document.getElementById(
                "firstName"
            );


        const lastName =
            document.getElementById(
                "lastName"
            );


        const school =
            document.getElementById(
                "school"
            );


        const average =
            document.getElementById(
                "average"
            );


        const weeklyLimit =
            document.getElementById(
                "weeklyLimit"
            );


        const previewName =
            document.getElementById(
                "previewName"
            );


        const previewSchool =
            document.getElementById(
                "previewSchool"
            );


        const previewAverage =
            document.getElementById(
                "previewAverage"
            );


        const previewWeekly =
            document.getElementById(
                "previewWeekly"
            );


        /* =================================================
           LIVE PROFILE
        ================================================= */

        function updateProfile() {


            const first =
                firstName.value.trim()
                || "Alex";


            const last =
                lastName.value.trim()
                || "Morgan";


            const schoolName =
                school.value.trim()
                || "Your school";


            const avg =
                average.value.trim()
                || "95";


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


        /* =================================================
           WEEKLY LIMIT
        ================================================= */

        if (weeklyLimit) {

            weeklyLimit.addEventListener(
                "change",
                () => {

                    const value =
                        weeklyLimit.value;


                    if (!previewWeekly) {

                        return;

                    }


                    previewWeekly.textContent =
                        value
                            .replace(
                                " minutes",
                                "m"
                            )
                            .replace(
                                " minute",
                                "m"
                            );

                }
            );

        }


        /* =================================================
           AVAILABILITY VISUAL
        ================================================= */

        const timeButtons =
            document.querySelectorAll(
                ".time-grid button"
            );


        timeButtons.forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    button.classList.toggle(
                        "time-active"
                    );

                }
            );

        });


        /* =================================================
           TUTOR FORM
        ================================================= */

        if (form) {

            form.addEventListener(
                "submit",
                event => {

                    event.preventDefault();


                    const subjects =
                        Array.from(
                            document.querySelectorAll(
                                ".checkbox-grid input:checked"
                            )
                        ).map(
                            checkbox =>
                                checkbox.value
                        );


                    if (
                        subjects.length === 0
                    ) {

                        alert(
                            "Please select at least one subject you can teach."
                        );

                        return;

                    }


                    const availability =
                        Array.from(
                            document.querySelectorAll(
                                ".availability input:checked"
                            )
                        ).length;


                    if (
                        availability === 0
                    ) {

                        alert(
                            "Please select at least one day when you are available."
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

                        dailyLimit:
                            document.getElementById(
                                "dailyLimit"
                            ).value,

                        experience:
                            document.getElementById(
                                "experience"
                            ).value,

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
                        "Profile submitted ✓";

                    button.style.background =
                        "#35c98b";


                    setTimeout(
                        () => {

                            button.disabled =
                                false;

                            button.textContent =
                                "Submit another application →";

                            button.style.background =
                                "";

                        },
                        4000
                    );

                }
            );

        }


        /* =================================================
           AI TEACHING SIMULATION
        ================================================= */

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


        if (
            evaluateButton &&
            teachingAnswer &&
            evaluationResult
        ) {


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
                                    Write your explanation first.
                                </strong>

                            </div>

                        `;

                        return;

                    }


                    /*
                     * This remains a FRONTEND DEMO.
                     *
                     * A real Bridge implementation would
                     * send the response to an AI evaluation
                     * backend using a structured rubric.
                     */


                    let clarityScore = 70;

                    let adaptationScore = 68;

                    let reasoningScore = 70;

                    let communicationScore = 72;


                    /* LENGTH */

                    if (
                        answer.length > 180
                    ) {

                        clarityScore += 8;

                        adaptationScore += 5;

                    }


                    if (
                        answer.length > 350
                    ) {

                        communicationScore += 5;

                    }


                    const lower =
                        answer.toLowerCase();


                    /* PHYSICS CONCEPTS */

                    if (
                        lower.includes(
                            "accelerat"
                        ) ||
                        lower.includes(
                            "force"
                        ) ||
                        lower.includes(
                            "mass"
                        ) ||
                        lower.includes(
                            "newton"
                        )
                    ) {

                        reasoningScore += 10;

                    }


                    /* EXAMPLES */

                    if (
                        lower.includes(
                            "example"
                        ) ||
                        lower.includes(
                            "imagine"
                        ) ||
                        lower.includes(
                            "think"
                        ) ||
                        lower.includes(
                            "bicycle"
                        ) ||
                        lower.includes(
                            "car"
                        )
                    ) {

                        adaptationScore += 9;

                    }


                    /* SIMPLE LANGUAGE */

                    if (
                        lower.includes(
                            "simply"
                        ) ||
                        lower.includes(
                            "basically"
                        ) ||
                        lower.includes(
                            "means"
                        ) ||
                        lower.includes(
                            "because"
                        )
                    ) {

                        clarityScore += 7;

                    }


                    /* STUDENT CHECK */

                    if (
                        lower.includes(
                            "understand"
                        ) ||
                        lower.includes(
                            "question"
                        ) ||
                        lower.includes(
                            "does that make sense"
                        )
                    ) {

                        communicationScore += 8;

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


                    communicationScore =
                        Math.min(
                            communicationScore,
                            100
                        );


                    const overall =
                        Math.round(
                            (
                                clarityScore +
                                adaptationScore +
                                reasoningScore +
                                communicationScore
                            ) / 4
                        );


                    evaluationResult.innerHTML = `

                        <div
                            class="evaluation-header"
                        >

                            <span>
                                ILLUSTRATIVE AI EVALUATION
                            </span>

                            <strong>
                                ${overall}/100
                            </strong>

                        </div>


                        <div
                            class="evaluation-bars"
                        >


                            <div>

                                <span>
                                    Clarity
                                </span>

                                <div class="eval-bar">

                                    <i
                                        style="width:${clarityScore}%"
                                    ></i>

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

                                    <i
                                        style="width:${adaptationScore}%"
                                    ></i>

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

                                    <i
                                        style="width:${reasoningScore}%"
                                    ></i>

                                </div>

                                <b>
                                    ${reasoningScore}
                                </b>

                            </div>


                            <div>

                                <span>
                                    Communication
                                </span>

                                <div class="eval-bar">

                                    <i
                                        style="width:${communicationScore}%"
                                    ></i>

                                </div>

                                <b>
                                    ${communicationScore}
                                </b>

                            </div>


                        </div>


                        <p class="evaluation-note">

                            This score is illustrative only.
                            A real Bridge implementation should
                            use a structured AI rubric, validation
                            and potentially human review.

                        </p>

                    `;

                }
            );

        }

    }
);