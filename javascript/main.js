function getfilms(done){
    const results = fetch("https://ghibliapi.vercel.app/films");

    results
        .then(response => response.json())
        .then(data =>{
            done(data)
        });
}

getfilms(data => {
    
    data.forEach(pelicula => {
        const article = document.createRange().createContextualFragment(`
        <article>
            <div class="image-container">
                <img src="${pelicula.image}" alt="Pelicula">
            </div>
            <h2>${pelicula.title}</h2>
        </article>`);
        const main = document.querySelector("main");

        main.append(article);
    });
})

// INTENTO

const romanticas = [
    {
        titulo: "How's Moving Castle",
        imagen: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/TkTPELv4kC3u1lkloush8skOjE.jpg"
    }
]

const contenedor = document.getElementById("romanticas");

romanticas.forEach(pelicula => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${pelicula.imagen}" alt="${pelicula.titulo}">
    <h2>${pelicula.titulo}</h2>
  `;

  contenedor.appendChild(card);
});