const susuwatari = document.getElementById("susuwatari");
const barralateral = document.querySelector(".barra_lateral");
const spans = document.querySelectorAll("span");
const palanca = document.querySelector(".switch");
const circulo = document.querySelector(".circulo");
const header = document.querySelector("header");
const main = document.querySelector("main")

susuwatari.addEventListener("click",()=>{
    barralateral.classList.toggle("mini_barra_lateral");
    header.classList.toggle("min_busqueda");
    main.classList.toggle("min-main")
    
    spans.forEach((span)=>{
        span.classList.toggle("oculto");
    });
});

palanca.addEventListener("click",()=>{
    let body = document.body;
    body.classList.toggle("pink_mode")
    circulo.classList.toggle("prendido");
})