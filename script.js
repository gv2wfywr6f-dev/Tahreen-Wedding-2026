document.addEventListener("DOMContentLoaded", () => {

    const enterBtn = document.getElementById("enterBtn");
    const loading = document.getElementById("loading");
    const envelopeSection = document.getElementById("envelopeSection");
    const openCard = document.getElementById("openCard");
    const cardSection = document.getElementById("cardSection");
    const continueBtn = document.getElementById("continueBtn");

    // Hide sections initially
    envelopeSection.style.display = "none";
    cardSection.style.display = "none";

    // Open Invitation Button
    enterBtn.addEventListener("click", () => {

        enterBtn.innerHTML = "Opening...";

        loading.style.transition = "1s";
        loading.style.opacity = "0";

        setTimeout(() => {

            loading.style.display = "none";

            envelopeSection.style.display = "flex";
            envelopeSection.style.opacity = "0";

            setTimeout(() => {

                envelopeSection.style.transition = "1s";
                envelopeSection.style.opacity = "1";

            }, 100);

        }, 1000);

    });

    // Open Envelope
    openCard.addEventListener("click", () => {

        document.querySelector(".letter").style.transform = "translateY(-140px)";

        setTimeout(() => {

            envelopeSection.style.display = "none";
            cardSection.style.display = "flex";

        }, 1200);

    });

    // Continue Button (Temporary)
    continueBtn.addEventListener("click", () => {

        alert("Next section coming in Part 4 ✨");

    });

});