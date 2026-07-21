const preloader = new Preloader();

window.addEventListener("load", async () => {

    try {

        await preloader.load();

        Utils.hide("loader");

        Utils.show("intro");

    }

    catch (error) {

        document.body.innerHTML = `

            <div style="
                display:flex;
                justify-content:center;
                align-items:center;
                width:100%;
                height:100%;
                background:black;
                color:white;
                text-align:center;
                padding:30px;
                font-size:24px;
            ">

                ❌<br><br>${error}

            </div>

        `;

    }

});
