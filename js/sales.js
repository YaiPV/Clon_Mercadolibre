function getSalesData() {
  const data = [
    {
      image:
        "https://http2.mlstatic.com/D_Q_NP_966614-MCO53157175681_012023-AB.webp",
      price: "$480.740 51% OFF",
      description: `<p>Torre Ducha Para Baño Con</p>
      <p>Manguera 127x16x45 Cm</p>`,
    },
    {
      image:
        "https://http2.mlstatic.com/D_Q_NP_609214-MCO44055199470_112020-AB.webp",
      price: "$192.900 55% OFF",
      description: `<p>Radio Carro Bluetooth + Camara</p>
      <p>Usb Sd Pantalla 7 Hd Mod 2020</p>`,
    },
    {
      image:
        "https://http2.mlstatic.com/D_Q_NP_965363-MCO49118958071_022022-AB.webp",
      price: " $139.690 58% OFF",
      description: "<p>Almohada Emma Memory Adapt</p>",
    },
    {
      image:
        "https://http2.mlstatic.com/D_Q_NP_617775-MCO51777055795_092022-AB.webp",
      price: "$253.705 6% OFF",
      description: `<p>Combo 2 Cámara Ptz Robótica</p>
      <p>Ip Wifi 2mp 1080hd Exterior 360</p>`,
    },
    {
      image:
        "https://http2.mlstatic.com/D_Q_NP_939569-MCO48363983361_112021-AB.webp",
      price: "$504.900 27% OFF",
      description: `<p>Camilla Para Masajes</p>
      <p>Profesional Plegable Spa Tatto</p>`,
    },
  ];
  return data;
}

function sales() {
  const salesData = getSalesData();
  return `<h3 class="offerts-header">Ofertas</h3>
    <div class="card-container flex">
    ${salesData
      .map(
        (item) => `
    <div class="card">
        <div class="card-image-container">
          <img
            src="${item.image}"
          />
        </div>
        <div class="card-information">
          ${item.price}
          <p>Envio gratis FULL</p>
        </div>
        <div class="hidden">
        <div class="card-information2">
        ${item.description}
        </div>
          
        </div>
      </div>
    `
      )
      .join("")}
      
    </div>`;
}

function renderSales() {
  document.querySelector(".sales").innerHTML = sales();
}
renderSales();
