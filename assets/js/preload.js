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

        this.image.onload = () => {
            console.log("✅ Image chargée");
            resolve();
        };

        this.image.onerror = () => {
            console.error("❌ Impossible de charger :", CONFIG.assets.image);
            reject(`Impossible de charger ${CONFIG.assets.image}`);
        };

        this.image.src = CONFIG.assets.image;

    });

}
    loadAudio() {

    return new Promise((resolve, reject) => {

        this.audio = new Audio();

        this.audio.preload = "auto";

        this.audio.addEventListener("loadedmetadata", () => {
            resolve();
        });

        this.audio.addEventListener("error", () => {
            reject("Impossible de charger le son.");
        });

        this.audio.src = CONFIG.assets.audio;
        this.audio.load();

    });

}
