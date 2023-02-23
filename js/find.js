function find() {
  return `
  <h3 class="discount-header1">Descubre</h3>
  <div class="flex">
    <div class="flex box-size">
      <div class="card2-2 border-radius-topLeft-bottomLeft">
        <p>MUNDO GAMING</p>
        <h3>CONSOLAS T MAS</h3>
        <h3>HASTA 25% OFF</h3>
        <button>Ver más</button>
      </div>
      <div class="discount1-pic">
        <img
          src="https://http2.mlstatic.com/D_NQ_617042-MLA50725391034_072022-C.webp"
        />
      </div>
    </div>

    <div class="flex discount2-2">
      <div class="card2-2 border-radius-topLeft-bottomLeft">
        <p>SUSCRIBETE AL NIVEL 6</p>
        <h3>POR SOLO</h3>
        <h3>$17.899 CADA MES</h3>
        <button>Suscribeme</button>
      </div>
      <div class="discount1-pic">
        <img
          src="https://http2.mlstatic.com/D_NQ_609726-MLA51855640992_102022-C.webp"
        />
      </div>
    </div>
  </div>
    `;
}

function renderFind() {
  document.querySelector(".find").innerHTML = find();
}
renderFind();
