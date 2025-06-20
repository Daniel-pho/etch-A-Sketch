function canvas() {

    const containerDiv = document.querySelector(".container");
    let squares = 16
    for (let i = 0; i < squares; i++) {
        const canvasDiv = document.createElement("div");
        canvasDiv.classList.add("canvas-box");
        containerDiv.appendChild(canvasDiv);


        canvasDiv.addEventListener("mouseover", () => {
            canvasDiv.style.backgroundColor = "blue"

        })

    }

    let button = document.createElement("button");
    button.textContent = "# of Squares"


    // button logic
    button.addEventListener("click", () => {

        let squaresButton = prompt("How many squares per side?")
        if (squaresButton > 100) {
            alert("Please enter a number less than 100")
        } else {
            squares = `${Number(squaresButton) * Number(squaresButton)}`
        }
        console.log(squares);

        containerDiv.replaceChildren();
        (function () {
            for (let i = 0; i < squares; i++) {
                const canvasDiv = document.createElement("div");
                canvasDiv.classList.add("canvas-box");
                containerDiv.appendChild(canvasDiv);


                canvasDiv.addEventListener("mouseover", () => {
                    canvasDiv.style.backgroundColor = "blue"

                })

                // canvas resize logic
                let calculatedWidth = squaresButton / 2
                canvasDiv.style.width = `${960 / squaresButton}px`;
                canvasDiv.style.height = `${960 / squaresButton}px`;
                // canvasDiv.style.width = "2px"

            }
        })();



        return squares

    })
    document.body.prepend(button);
}

//hover



canvas();