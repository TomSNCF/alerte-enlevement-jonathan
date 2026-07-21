/*
=========================================================
Alerte Player
Sprint 2
Partie 1/2
=========================================================
*/

"use strict";

const loader = document.getElementById("loader");
const intro = document.getElementById("intro");
const poster = document.getElementById("poster");
const player = document.getElementById("player");

let started = false;

document.addEventListener("DOMContentLoaded", init);

function init() {

    applyConfig();

    checkFiles()
        .then(showIntro)
        .catch(showError);

}

function applyConfig() {

    document.getElementById("loadingText").textContent =
        CONFIG.texts.loading;

    document.getElementById("title").textContent =
        CONFIG.texts.title;

    document.getElementById("subtitle").textContent =
        CONFIG.texts.subtitle;

    poster.style.backgroundImage =
        `url("${CONFIG.files.image}")`;

}

async function checkFiles() {

    await Promise.all([
        checkImage(),
        checkAudio()
    ]);

}

function checkImage() {

    return new Promise((resolve, reject) => {

        const img = new Image();

        img.onload = () => resolve();

        img.onerror = () =>
            reject("Impossible de charger " + CONFIG.files.image);

        img.src = CONFIG.files.image;

    });

}

async function checkAudio() {

    const response = await fetch(CONFIG.files.audio, {
        method: "HEAD"
    });

    if (!response.ok) {

        throw "Impossible de charger " + CONFIG.files.audio;

    }

}

function showIntro() {

    loader.classList.add("hidden");

    intro.classList.remove("hidden");

    intro.addEventListener(
        "click",
        startExperience,
        {
            once: true
        }
    );

}

async function startExperience() {

    if (started) return;

    started = true;

    vibrate();

    await flashSequence();

    intro.classList.add("hidden");

    await wait(500);

    poster.classList.remove("hidden");

    poster.classList.add("fade-in");

    player.src = CONFIG.files.audio;

    player.volume = 1;

    try {

        await player.play();

    }
    catch (e) {

        console.log(e);

    }

}
/*
=========================================================
Sprint 2
Partie 2/2
=========================================================
*/

async function flashSequence() {

    const flash = document.createElement("div");

    flash.style.position = "fixed";
    flash.style.inset = "0";
    flash.style.background = "#a00000";
    flash.style.opacity = "0";
    flash.style.pointerEvents = "none";
    flash.style.transition = "opacity 120ms linear";
    flash.style.zIndex = "9999";

    document.body.appendChild(flash);

    await wait(80);

    flash.style.opacity = "1";
    await wait(120);

    flash.style.opacity = "0";
    await wait(120);

    flash.style.opacity = "1";
    await wait(180);

    flash.style.background = "#000";
    flash.style.opacity = "1";
    await wait(450);

    flash.style.opacity = "0";
    await wait(300);

    flash.remove();

}

function vibrate() {

    if ("vibrate" in navigator) {

        navigator.vibrate([
            120,
            80,
            120,
            80,
            250
        ]);

    }

}

function wait(ms) {

    return new Promise(resolve => {

        setTimeout(resolve, ms);

    });

}

function showError(error) {

    console.error(error);

    loader.classList.remove("hidden");

    loader.innerHTML = `
        <div style="
            max-width:320px;
            text-align:center;
            color:#ff5555;
            font-family:Arial,sans-serif;
            padding:20px;
        ">
            <h2>Erreur</h2>
            <p>${error}</p>
        </div>
    `;

}

player.addEventListener("ended", () => {

    player.currentTime = 0;
    player.play();

});

document.addEventListener("visibilitychange", () => {

    if (
        !document.hidden &&
        started &&
        player.paused
    ) {

        player.play().catch(() => {});

    }

});

window.addEventListener("error", event => {

    console.error(
        "Erreur JavaScript :",
        event.message
    );

});

window.addEventListener("unhandledrejection", event => {

    console.error(
        "Promise rejetée :",
        event.reason
    );

});
