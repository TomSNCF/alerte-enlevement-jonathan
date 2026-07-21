/*
========================================================
Alerte Player
Configuration générale
========================================================
*/

const CONFIG = {

    appName: "Alerte Player",
    version: "1.1.0",

    files: {
        image: "affiche.png",
        audio: "musique.wav"
    },

    texts: {
        loading: "Chargement de l'alerte...",
        title: "MESSAGE IMPORTANT",
        subtitle: "Touchez l'écran"
    },

    appearance: {
        background: "#000",
        initialZoom: 1.10,
        finalZoom: 1.00
    },

    fullscreen: true,
    wakeLock: true

};

Object.freeze(CONFIG);
