const Utils = {

    $(id) {
        return document.getElementById(id);
    },

    show(id) {
        this.$(id).classList.remove("hidden");
    },

    hide(id) {
        this.$(id).classList.add("hidden");
    },

    setText(id, text) {
        this.$(id).textContent = text;
    }

};
