function benefits() {
  return `
  <div class="flex">
  <h1 class="benefits-title">Beneficios de Mercado Puntos</h1>
  <h2>Ver todos los beneficios</h2>
</div>
<div class="benefits">
  <div class="flex">
    <div class="benefits img">
      <a class="border-radius">
        <img
          src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/disney/hub-widget-disney-star/Widget_Multicontent_Latam_768-x-566px.jpg"
        />
      </a>
    </div>
    <div class="benefits img border-radius">
      <img
        src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbo/widget/HBOMax_widgetmulti_mobdsk_mco_@2x.webp"
      />
      <div>
        <img
          src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/disneyplus/comboplus-square.jpg"
        />
        <div>
          <span>Sin cargo con el nivel 6</span>
          <span>Disney+yStar+</span>
        </div>
      </div>
    </div>
    <div class="benefits img border-radius">
      <img
        src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/paramount/widget-multip/paramount_widgetmulti_mobdsk_mco_@2x.jpg"
      />
    </div>
  </div>
</div>
    
    `;
}

function renderBenefits() {
  document.querySelector(".benefits").innerHTML = benefits();
}
renderBenefits();
