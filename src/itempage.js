console.log("item.js loaded");

function setup(){
    const x = window.location;
        console.log(x);
        const urlParams = new URLSearchParams(window.location.search);
        const title = urlParams.get("title");
        const cost = urlParams.get("cost");
        const src = urlParams.get("src");
        console.log(title, cost, src);
        //alert(`Title: ${title} cost: ${cost} path: ${src}`)
        //alert("LULZ...you did it!");
        
        const container = document.createElement("div");
        container.className = "itemContainer";

        const image = document.createElement("img");
        image.src = src;
        image.className = "item__image";

        const titleElement = document.createElement("h2");
        titleElement.textContent = title;
        titleElement.className = "item__title"

        const description = "Tehniliselt siia voiks tulla mingi tore tekst selle konkreetse asja kohta";

        const textElement = document.createElement("p");
        textElement.textContent = description;
        textElement.className = "item__description"

        const costElement = document.createElement("div");
        costElement.textContent = cost;
        costElement.className = "item__price"

        console.log("image", image);

        container.append(image);
        container.append(titleElement);
        container.append(textElement);
        container.append(costElement);

        const app = document.getElementById("item-body");
        if(!app) return;
        app.append(container);
}

module.exports = {
    setup,
};