function getBenefitsData() {
  const data = [
    {
      image:
        "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/disney/hub-widget-disney-star/Widget_Multicontent_Latam_768-x-566px.jpg",
    },
    {
      image:
        "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbo/widget/HBOMax_widgetmulti_mobdsk_mco_@2x.webp",
    },
    {
      image:
        "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/paramount/widget-multip/paramount_widgetmulti_mobdsk_mco_@2x.jpg",
    },
  ];
  return data;
}

function benefits() {
  const benefitsData = getBenefitsData();
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

function renderBenefits() {
  document.querySelector(".benefits").innerHTML = benefits();
}
renderBenefits();
