async function getCategoriesData() {
  const data = await getData("http://localhost:3000/categories");
  return data;
}

async function categoriesContainer() {
  const categoriesData = await getCategoriesData();
  return `      <div>
  <h1 class="categories-header">Categorias populares</h1>
  <div class="flex space-around card-image-icon wrap">
  ${categoriesData
    .map(
      (item) =>
        `
    <div class="categories-picture">
    <div class="categories-item">
      <img src="${item.image}" />
      ${item.description}
      </div>
    </div>
 
    `
    )
    .join("")}
    </div>
</div>`;
}

async function renderCategoriesContainer() {
  document.querySelector(".categories-container").innerHTML =
    await categoriesContainer();
}
renderCategoriesContainer();
