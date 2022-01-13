const container = document.querySelector(".container")
const btnBlack = document.createElement("button")
const btnRgb = document.createElement("button")
const btnGray = document.createElement("button")
const btnSize = document.createElement("button")
const section= document.querySelector(".section")
const btnContainer= document.querySelector(".buttons")



window.onload = () => {
    const divs = container.querySelectorAll('.div')
    div.forEach(item => item.addEventListener('mouseover', () => {
        item.style.background = 'black'
    }))
}


 function createGrid(columns , rows) {
     for(let i = 0; i < (columns * rows); i++ ){
         const div = document.createElement("div")
         div.style.border = "1px solid wheat"
         container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
         container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;;
         container.appendChild(div).classList.add("div")

     }
 }

createGrid(20,20)

function gray(){
    const divs = container.querySelectorAll(".div")
    btnGray.textContent = "Gray"
    btnGray.addEventListener("click", ()=>{
        divs.forEach(item => item.addEventListener("mouseover", ()=>{
            let random = Math.floor(Math.random() * 256);
            let grayscale = `rgb(${random},${random},${random})`
            item.style.background = grayscale;
        }))
    })
    btnContainer.appendChild(btnGray).classList.add("btn")
}
gray()



function black(){
    const divs = container.querySelectorAll(".div")
    btnBlack.textContent = "Black"
    btnBlack.addEventListener("click", ()=>{
        divs.forEach(item => item.addEventListener("mouseover", ()=>{
            item.style.background = "black";
        }))
    })
    btnContainer.appendChild(btnBlack).classList.add("btn")
}
black()

function rgbColors() {
    
    const divs = container.querySelectorAll('.div')
    btnRgb.textContent = "Rgb"
    btnRgb.addEventListener('click' ,() => {
        divs.forEach(item => item.addEventListener('mouseover', () => {
            let R = Math.floor(Math.random() * 256);
            let G = Math.floor(Math.random() * 256);
            let B = Math.floor(Math.random() * 256);
            const RGB = `rgb(${R},${G},${B})`;
            item.style.background = RGB;
        }))
    })
    btnContainer.appendChild(btnRgb).classList.add('btn')
}
rgbColors()

function reset() {
    const divs = container.querySelectorAll('.div')
    divs.forEach(item => {
        item.remove();
    })
}

function resize_grid() {
    btnSize.textContent= "Grid Size"
    btnSize.addEventListener("click" , () => {
        let user = prompt("What size do you want your grid to be? (From 2 to 100)")
        if(user === null || user < 1){
            reset()
            createGrid(16,16)
            black()
            gray()
            rgbColors()
            
        }
        else{
            reset()
            createGrid(user,user)
            black()
            gray()
            rgbColors()
            
        }
    })
    btnContainer.appendChild(btnSize).classList.add("btn")
}
resize_grid()