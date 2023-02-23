function sales() {
  return `<h3 class="offerts-header">Ofertas</h3>
    <div class="card-container flex">
      <div class="card">
        <div class="card-image-container">
          <img
            src="https://http2.mlstatic.com/D_Q_NP_966614-MCO53157175681_012023-AB.webp"
          />
        </div>
        <div class="card-information">
          $480.740 51% OFF
          <p>Envio gratis FULL</p>
        </div>
        <div class="hidden">
          <p>Torre Ducha Para Baño Con</p>
          <p>Manguera 127x16x45 Cm</p>
        </div>
      </div>

      <div class="card">
        <div class="card-image-container">
          <img
            src="https://http2.mlstatic.com/D_Q_NP_609214-MCO44055199470_112020-AB.webp"
          />
        </div>
        <div>
          $192.900 55% OFF
          <p>Envio gratis</p>
        </div>
        <div class="hidden">
          <p>Radio Carro Bluetooth + Camara</p>
          <p>Usb Sd Pantalla 7 Hd Mod 2020</p>
        </div>
      </div>

      <div class="card">
        <div class="card-image-container">
          <img
            src="https://http2.mlstatic.com/D_Q_NP_965363-MCO49118958071_022022-AB.webp"
          />
        </div>
        <div>
          $139.690 58% OFF
          <p>Envio gratis FULL</p>
        </div>
        <div class="hidden">
          <p>Almohada Emma Memory Adapt</p>
        </div>
      </div>

      <div class="card">
        <div class="card-image-container">
          <img
            src="https://http2.mlstatic.com/D_Q_NP_617775-MCO51777055795_092022-AB.webp"
          />
        </div>
        <div>
          $253.705 6% OFF
          <p>Envio gratis</p>
        </div>
        <div class="hidden">
          <p>Combo 2 Cámara Ptz Robótica</p>
          <p>Ip Wifi 2mp 1080hd Exterior 360</p>
        </div>
      </div>

      <div class="card">
        <div class="card-image-container">
          <img
            src="https://http2.mlstatic.com/D_Q_NP_939569-MCO48363983361_112021-AB.webp"
          />
        </div>
        <div>
          $504.900 27% OFF
          <p>Envio gratis</p>
        </div>
        <div class="hidden">
          <p>Camilla Para Masajes</p>
          <p>Profesional Plegable Spa Tatto</p>
        </div>
      </div>
    </div>`;
}

function renderSales() {
  document.querySelector(".sales").innerHTML = sales();
}
renderSales();
