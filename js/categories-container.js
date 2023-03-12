function getCategoriesData() {
  const data = [
    {
      image: "./img/car.png",
      description: `<p class="categories-description">Carros, Motos y Otros</p>`,
    },
    {
      image: "./img/compu.png",
      description: `<p class="categories-description">Computación</p>`,
    },
    {
      image: "./img/tshirt.png",
      description: `<p class="categories-description">Ropa y Accesorios</p>`,
    },
    {
      image: "./img/sofa.png",
      description: `<p class="categories-descriptionS">Hogar y Muebles</p>`,
    },
    {
      image: "./img/carwheel.png",
      description: ` <p class="categories-description">Accesorios para Vehículos</p>`,
    },
    {
      image: "./img/stove.png",
      description: `<p class="categories-description">Electrodomésticos</p>`,
    },
    {
      image: "./img/camara.png",
      description: `<p class="categories-description">Cámaras y Accesorios</p>`,
    },
    {
      image: "./img/cellphone.png",
      description: `<p class="categories-description">Celulares y Teléfonos</p>`,
    },
    {
      image: "./img/lipstick.svg",
      description: `<p class="categories-description">Belleza y Cuidado Personal</p>`,
    },
    {
      image: "./img/football.png",
      description: `<p class="categories-description">Deportes y Fitness</p>`,
    },
    {
      image: "./img/microphone.png",
      description: `<p class="categories-description">Electrónica, Audios y Video</p>`,
    },
    {
      image: "./img/videogame.png",
      description: `<p class="categories-description">Consolas y Videojuegos</p>`,
    },
    {
      image: "./img/bear.png",
      description: `<p class="categories-description">Juegos y Juguetes</p>`,
    },
    {
      image: "./img/tool.png",
      description: `<p class="categories-description">Herramientas</p>`,
    },
  ];
  return data;
}

function categoriesContainer() {
  const categoriesData = getCategoriesData();
  return `      <div>
  <h1 class="categories-header">Categorias populares</h1>
  <div class="flex space-around card-image-icon wrap">
  ${categoriesData
    .map(
      (item) =>
        `
    <div class="categories-picture">
    <div class="categories-item">
      <img src="${item.image}" />
      ${item.description}
      </div>
    </div>
 
    `
    )
    .join("")}
    </div>
</div>`;
}

function renderCategoriesContainer() {
  document.querySelector(".categories-container").innerHTML =
    categoriesContainer();
}
renderCategoriesContainer();
