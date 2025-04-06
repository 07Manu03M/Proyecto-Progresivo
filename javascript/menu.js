const susuwatari = document.getElementById("susuwatari");
const barralateral = document.querySelector(".barra_lateral");
const span = document.querySelector("span")

susuwatari.addEventListener("click",()=>{
    barralateral.classList.toggle("mini_barra_lateral");
    span.classList.toggle("oculto")
})