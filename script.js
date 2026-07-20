// Wait for page to load
document.addEventListener("DOMContentLoaded", () => {

    const enterBtn = document.getElementById("enterBtn");
    const loading = document.getElementById("loading");

    enterBtn.addEventListener("click", () => {

        // Button animation
        enterBtn.innerHTML = "Opening...";

        loading.style.transition = "all 1s ease";
        loading.style.opacity = "0";
        loading.style.transform = "scale(1.05)";

        // Next section will be shown here
        setTimeout(() => {

            loading.innerHTML = `
            <div style="display:flex;justify-content:center;align-items:center;height:100vh;flex-direction:column;padding:20px;text-align:center;background:#0d1b2a;color:white;">

                <h1 style="font-family:Cinzel,serif;color:#d4af37;font-size:45px;">
                    ✉️
                </h1>

                <h2 style="margin-top:20px;">
                    Premium Envelope
                </h2>

                <p style="margin-top:15px;font-size:18px;max-width:500px;">
                    Our luxury animated wedding envelope will appear here in the next step.
                </p>

            </div>
            `;

            loading.style.opacity = "1";
            loading.style.transform = "scale(1)";

        },1000);

    });

});
