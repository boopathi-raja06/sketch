const container=document.querySelector(".container")

function creategrid(n){
    for(let i=0;i<n*n;i++){
    
    const div=document.createElement("div")
    div.className="grid-items"
    div.style.width=`${600/n}px`
    div.style.height=`${600/n}px`
    div.style.border = "1px solid #000";
    
    container.appendChild(div)
    }
}
creategrid(16)
const items=document.querySelectorAll(".grid-items");

items.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = 'black';
    });
});
    
