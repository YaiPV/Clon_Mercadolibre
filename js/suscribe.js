function suscribe() {
  return `
<div class="suscribe-container">
<div class="flex card-suscribe padding-special">
  <p>Suscribete al nivel 6</p>
  <p>17.900/mes</p>
</div>
<div class="padding-special">
  <p>Consigue los mejores beneficios en Mercado Libre</p>
</div>
<div class="flex border-bottom padding-special">
  <div class="flex">
    <img
      src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/widget-l6/dplus.svg"
    />
    <p>Disney+ sin cargo</p>
  </div>
  <div class="flex">
    <img
      src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/widget-l6/dplus.svg"
    />
    <p>Disney+ sin cargo</p>
  </div>
  <div class="flex">
    <img
      src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/widget-l6/dplus.svg"
    />
    <p>Disney+ sin cargo</p>
  </div>
</div>
<div class="card-footer">
  <button>suscribe</button>
</div>
</div>`;
}

function renderSuscribe() {
  document.querySelector(".suscribe").innerHTML = suscribe();
}
renderSuscribe();
