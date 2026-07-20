document.addEventListener("DOMContentLoaded", () => {

    const enterBtn = document.getElementById("enterBtn");
    const loading = document.getElementById("loading");
    const envelopeSection = document.getElementById("envelopeSection");

    // Hide envelope when page loads
    envelopeSection.style.display = "none";

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

            },100);

        },1000);

    });

    const openCard = document.getElementById("openCard");

    openCard.addEventListener("click", () => {

        document.querySelector(".letter").style.transform = "translateY(-140px)";

    });

});