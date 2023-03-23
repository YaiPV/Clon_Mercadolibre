async function dataImageContainer() {
  const data = await getData("http://localhost:3000/sales");
  return data;
}
async function imageContainer() {
  const containerData = await dataImageContainer();
  return `
    <div class="flex">
    ${containerData
      .map(
        (item) => `
    <div>
      <img 
      onclick="sayMessage('imagen1')"
        src="${item.image}"
      />
    </div>
    `
      )
      .join("")}
  </div>
    `;
}

function renderImageContainer() {
  document.querySelector(".image-container").innerHTML = imageContainer();
}
renderImageContainer();

function sayMessage(message) {
  alert(message);
}
