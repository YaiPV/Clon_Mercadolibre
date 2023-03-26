async function getBenefitsData() {
  const data = await getData("http://localhost:3000/benefits");
  return data;
}

async function benefits() {
  const benefitsData = await getBenefitsData();
  return `
  <div class="flex">
  <h1 class="benefits-title">Beneficios de Mercado Puntos</h1>
  <h2>Ver todos los beneficios</h2>
</div>
<div class="benefits">
  <div class="flex">
    
   ${benefitsData
     .map(
       (item) => `
       <div class="benefits img">
   <a class="border-radius">
   <img
     src="${item.image}"
   />
 </a>
 </div>
   `
     )
     .join("")}
  
</div>
</div>  
    `;
}

async function renderBenefits() {
  document.querySelector(".benefits").innerHTML = await benefits();
}
renderBenefits();
