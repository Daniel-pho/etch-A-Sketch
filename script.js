function canvas() {

    const containerDiv = document.querySelector(".container");

    for (let i = 0; i < 16; i++) {
        const canvasDiv = document.createElement("div");
        canvasDiv.classList.add("canvas-box");
        containerDiv.appendChild(canvasDiv);
    }
}

canvas();