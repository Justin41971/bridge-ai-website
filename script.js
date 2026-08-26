document.addEventListener("DOMContentLoaded", function () {

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetID = this.getAttribute("href");

            if (targetID === "#") {
                return;
            }

            const target = document.querySelector(targetID);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });

});


// Student matching demo
function findMatch() {

    const button = document.querySelector(".match-button");
    const message = document.querySelector("#match-message");

    if (!button || !message) {
        return;
    }

    button.disabled = true;
    button.textContent = "Finding a match...";

    message.textContent = "";

    setTimeout(function () {

        button.textContent = "Tutor Found ✓";
        message.textContent =
            "Bridge found a 96% match based on topic, ability and availability.";

    }, 1000);

    setTimeout(function () {

        button.disabled = false;
        button.textContent = "Find a Tutor →";

    }, 3500);

}