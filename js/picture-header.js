function pictureHeader() {
  return `  <div class="flex">
  <div class="picture-header-column1">
    <div class="container-picture">
      <img
        src="https://http2.mlstatic.com/D_NQ_636886-MLA51537302207_092022-OO.jpg"
      />
    </div>
  </div>

  <div class="picture-header-column2">
    <div class="benefits-message">
      <p class="benefits-title1">Ofertas del dia</p>
      <h3 class="benefits-title2">APROVECHA LAS</h3>
      <h3>Las mejores ofertas</h3>
      <p>Ver mas ></p>
    </div>
  </div>
</div>
  `;
}

function renderPictureHeader() {
  document.querySelector(".picture-header").innerHTML = pictureHeader();
}
renderPictureHeader();
