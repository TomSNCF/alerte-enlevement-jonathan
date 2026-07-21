const audio = document.getElementById("audio");
const overlay = document.getElementById("overlay");
const poster = document.getElementById("poster");

let started = false;

function startExperience() {

    if (started) return;
    started = true;

    // On masque le message
    overlay.style.display = "none";

    // Écran noir
    poster.style.opacity = "0";

    // Démarrage du son
    audio.volume = 1;

    audio.play().catch((e) => {
        console.log(e);
    });

    // Réapparition progressive de l'image
    setTimeout(() => {

        poster.style.transition = "opacity 2s";

        poster.style.opacity = "1";

    }, 500);

}

document.addEventListener("click", startExperience);
document.addEventListener("touchstart", startExperience);
