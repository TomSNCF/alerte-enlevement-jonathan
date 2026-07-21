/*
========================================================
Alerte Player
Configuration générale
========================================================
*/

const CONFIG = {

    appName: "Alerte Player",

    version: "1.0.0",

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

        background: "#000000",

        initialZoom: 1.00

    }

};

Object.freeze(CONFIG);
Object.freeze(CONFIG.files);
Object.freeze(CONFIG.texts);
Object.freeze(CONFIG.appearance);
