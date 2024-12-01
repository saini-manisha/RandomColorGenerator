const main=document.querySelector(".main");
const colorCode=document.querySelector(".colorCode");
const button= document.querySelector("button");
let letters="0123456789ABCDEF";
colorCode.innerHTML="#38a5d0";
button.addEventListener("click",()=>{
    let color="#";
    for(let i=0;i<6;i++){
        color+=letters[Math.floor(Math.random()*16)];
    }
    colorCode.innerHTML=color;
    main.style.backgroundColor=color;
})