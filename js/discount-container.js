function discountContainer() {
  return `
  <h3 class="discount-header">Te puede interesar</h3>
  <div class="flex">
    <div class="flex box-size">
      <div class="card2 border-radius-topLeft-bottomLeft">
        <p>LO MEJOR EN</p>
        <h3>TV Y AUDIO</h3>
        <h3>HASTA 40% OFF</h3>
        <button>Ver mas</button>
      </div>
      <div class="discount-pic">
        <img
          src="https://http2.mlstatic.com/D_NQ_685985-MLA50527590879_062022-C.webp"
        />
      </div>
    </div>

    <div class="flex discount2">
      <div class="card2 border-radius-topLeft-bottomLeft">
        <p>LO QUIERES, LO TIENES</p>
        <h3>EN CUOTAS</h3>
        <h3>SIN INTERES</h3>
        <button>Ver mas</button>
      </div>
      <div class="discount-pic">
        <img
          src="https://http2.mlstatic.com/D_NQ_915697-MLA50528287220_062022-C.webp"
        />
      </div>
    </div>
  </div>
    `;
}

function renderDiscountContainer() {
  document.querySelector(".discount-container").innerHTML = discountContainer();
}
renderDiscountContainer();
