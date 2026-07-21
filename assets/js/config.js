const CONFIG = {

    appName: "Alerte Player",

    version: "3.0.0",

    assets: {

        image: "assets/images/affiche.png",

        audio: "assets/audio/musique.wav"

    },

    intro: {

        loading: "Chargement de l'alerte...",

        title: "MESSAGE IMPORTANT",

        action: "Touchez l'écran"

    },

    animation: {

        initialScale: 1.05,

        finalScale: 1.00,

        introDelay: 500

    },

    flash: {

        color: "#ff2a2a",

        count: 2

    },

    vibration: {

        enabled: true,

        pattern: [120,70,150]

    },

    fullscreen: true,

    wakeLock: true,

    debug: false

};
