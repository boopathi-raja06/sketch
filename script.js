const container=document.querySelector(".container")
const btn=document.querySelector("button")
let size=16;



CreateGrid(size)
function CreateGrid(size){
    container.innerHTML=""
    for(let i=0;i<size*size;i++){
    
    const div=document.createElement("div")
    div.classList.add("grid-items");
    div.style.width=`${600/size}px`
    div.style.height=`${600/size}px`
    div.style.border = "1px solid #000";
    
    container.appendChild(div)
    }
    addHoverEffects()
}

function addHoverEffects(){
const items=document.querySelectorAll(".grid-items");

items.forEach(item => {
    item.addEventListener('mouseover', () => {
        const r=Math.floor(Math.random()*255)
        const g=Math.floor(Math.random()*255)
        const b=Math.floor(Math.random()*255)
        item.style.backgroundColor = `rgb(${[r,g,b].join(",")})`
    });
});
}
    
function getGridSize(){
    let n=prompt("ENter the size:")
    size=parseInt(n)
   
    CreateGrid(size)
    
}
btn.addEventListener("click",getGridSize)