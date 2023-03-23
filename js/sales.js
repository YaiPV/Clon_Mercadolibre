async function getSalesData() {
  const data = await getData("http://localhost:3000/sales");
  return data;
}

async function sales() {
  const salesData = await getSalesData();
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

async function renderSales() {
  document.querySelector(".sales").innerHTML = await sales();
}
renderSales();
