function categoriesContainer() {
  return `      <div>
  <h1 class="categories-header">Categorias populares</h1>
</div>
<div>
  <div class="flex space-around card-image-icon">
    <div class="categories-picture">
      <img src="./img/car.png" />
      <p class="categories-description">Carros, Motos y Otros</p>
    </div>
    <div class="categories-picture">
      <img src="./img/compu.png" />
      <p class="categories-description">Computación</p>
    </div>
    <div class="categories-picture">
      <img src="./img/tshirt.png" />
      <p class="categories-description">Ropa y Accesorios</p>
    </div>

    <div class="categories-picture">
      <img src="./img/sofa.png" />
      <p class="categories-descriptionS">Hogar y Muebles</p>
    </div>
    <div class="categories-picture">
      <img src="./img/carwheel.png" />
      <p class="categories-description">Accesorios para Vehículos</p>
    </div>
    <div class="categories-picture">
      <img src="./img/stove.png" />
      <p class="categories-description">Electrodomésticos</p>
    </div>
    <div class="categories-picture">
      <img src="./img/camara.png" />
      <p class="categories-description">Cámaras y Accesorios</p>
    </div>
  </div>

  <div class="flex space-around card-image-icon">
    <div class="categories-picture">
      <img src="./img/cellphone.png" />
      <p class="categories-description">Celulares y Teléfonos</p>
    </div>
    <div class="categories-picture">
      <img src="./img/lipstick.png" />
      <p class="categories-description">Belleza y Cuidado Personal</p>
    </div>
    <div class="categories-picture">
      <img src="./img/football.png" />
      <p class="categories-description">Deportes y Fitness</p>
    </div>

    <div class="categories-picture">
      <img src="./img/microphone.png" />
      <p class="categories-description">Electrónica, Audios y Video</p>
    </div>
    <div class="categories-picture">
      <img src="./img/videogame.png" />
      <p class="categories-description">Consolas y Videojuegos</p>
    </div>
    <div class="categories-picture">
      <img src="./img/bear.png" />
      <p class="categories-description">Juegos y Juguetes</p>
    </div>
    <div class="categories-picture">
      <img src="./img/tool.png" />
      <p class="categories-description">Herramientas</p>
    </div>
  </div>
</div>
    
      `;
}

function renderCategoriesContainer() {
  document.querySelector(".categories-container").innerHTML =
    categoriesContainer();
}
renderCategoriesContainer();
