class Preloader {

    constructor() {

        this.image = null;
        this.audio = null;

    }

    async load() {

        await Promise.all([
            this.loadImage(),
            this.loadAudio()
        ]);

        return true;

    }

    loadImage() {

        return new Promise((resolve, reject) => {

            this.image = new Image();

            this.image.onload = () => resolve();

            this.image.onerror = () => reject("Impossible de charger l'image.");

            this.image.src = CONFIG.assets.image;

        });

    }

    loadAudio() {

        return new Promise((resolve, reject) => {

            this.audio = new Audio();

            this.audio.preload = "auto";

            this.audio.oncanplaythrough = () => resolve();

            this.audio.onerror = () => reject("Impossible de charger le son.");

            this.audio.src = CONFIG.assets.audio;

        });

    }

}
