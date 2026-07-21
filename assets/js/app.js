/*
========================================================
Alerte Player
Application principale
Version 1.0
========================================================
*/

"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {

    applyTexts();

    checkFiles()
        .then(showIntro)
        .catch(showError);

}

/* ======================================================
   CONFIGURATION DES TEXTES
====================================================== */

function applyTexts() {

    document.getElementById("loadingText").textContent =
        CONFIG.texts.loading;

    document.getElementById("title").textContent =
        CONFIG.texts.title;

    document.getElementById("subtitle").textContent =
        CONFIG.texts.subtitle;

}

/* ======================================================
   VERIFICATION DES FICHIERS
====================================================== */

async function checkFiles() {

    await checkImage();

    await checkAudio();

}

async function checkImage() {

    return new Promise((resolve, reject) => {

        const image = new Image();

        image.onload = () => resolve();

        image.onerror = () => reject("Impossible de charger affiche.png");

        image.src = CONFIG.files.image;

    });

}

async function checkAudio() {

    try {

        const response = await fetch(CONFIG.files.audio, {
            method: "HEAD"
        });

        if (!response.ok) {

            throw new Error();

        }

    }

    catch {

        throw "Impossible de charger musique.wav";

    }

}

/* ======================================================
   INTRO
====================================================== */

function showIntro() {

    document.getElementById("loader").classList.add("hidden");

    document.getElementById("intro").classList.remove("hidden");

    document.getElementById("intro")
        .addEventListener("click", startExperience, {
            once: true
        });

}

/* ======================================================
   EXPERIENCE
====================================================== */

function startExperience() {

    const intro = document.getElementById("intro");

    const poster = document.getElementById("poster");

    const player = document.getElementById("player");

    intro.classList.add("hidden");

    poster.classList.remove("hidden");

    player.src = CONFIG.files.audio;

    player.play().catch(() => {

        console.log("Lecture audio refusée.");

    });

}

/* ======================================================
   ERREUR
====================================================== */

function showError(message) {

    const loader = document.getElementById("loader");

    loader.innerHTML = `

        <div class="content">

            <h1 style="color:#ff5555;margin-bottom:20px;">

                ❌ Erreur

            </h1>

            <p>${message}</p>

        </div>

    `;

}
