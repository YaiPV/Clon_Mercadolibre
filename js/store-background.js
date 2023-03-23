async function storeBackgroundData() {
  const data = await getData("http://localhost:3000");
  return data;
}

async function storeBackground() {
  const storeData = await storeBackgroundData();
  return `
  <div class="flex justify-start">
  <h1 class="store-header">Las mejores tiendas te esperan</h1>
  <h2 class="p-x-2">Ver tiendas</h2>
  </div>

<div class="flex">
  ${storeData
    .map(
      (item) => `

  <div>
    <div class="stores-container">
      <div>
        <div class="stores1">
          <img src="${item.image1}" />
        </div>
        <div class="stores2">
          <img
            src="${item.image2}"
          />
        </div>
      </div>
      <div class="stores-detail-container">
        <div class="stores-name"><h1>${item.description1}</h1></div>
        <div class="flex">
          <div class="">
            <img
              src="${item.image3}"
            />
          </div>
          <div>
            <img
              src="${item.image4}"
            />
          </div>
          <div>
            <img
              src="${item.image5}"
            />
          </div>
        </div>
        <div class="stores3">
          <p>${item.description2}</p>
        </div>
      </div>
    </div>
  </div>

`
    )
    .join("")}

</div>`;
}

async function renderStoreBackground() {
  document.querySelector(".store-background").innerHTML =
    await storeBackground();
}
renderStoreBackground();
