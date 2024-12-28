const container = document.querySelector(".container");

let hw = 16;
display();

const btn = document.querySelector("button");
btn.addEventListener('click', () => {
    hw = prompt("Enter Dimension");
    container.innerHTML = '';
    display();
});

function display(){
    let dimension = 100/hw;

    for(let i = 0; i < hw; i++){
        const row = document.createElement("div");
        row.className = "row";
        row.setAttribute("style", `height:${dimension}%`)
        for(let j = 0; j < hw; j++){
            const cell = document.createElement("div");
            cell.className = "square";
            cell.setAttribute("style", `width:${dimension}%`);
            cell.style.opacity = .1;
            cell.addEventListener('mouseover' ,() => {
                if (!cell.style.backgroundColor) {
                    const r = Math.floor(Math.random() * 256);
                    const g = Math.floor(Math.random() * 256);
                    const b = Math.floor(Math.random() * 256);
                    cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                }
                let currentOpacity = parseFloat(cell.style.opacity);
                if (currentOpacity < 1) {
                    cell.style.opacity = currentOpacity + 0.1;
                }
            });
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}