function footerContainer() {
  return `     
  <div class="footer-info w-80 m-auto">
  <ul class="flex p-x-0 justify-start">
    <li class="footer-services">Trabaja con nosotros</li>
    <li class="footer-services">Terminos y condiciones</li>
    <li class="footer-services">Como cuidamos tu privacidad</li>
    <li class="footer-services">Accesibilidad</li>
    <li class="footer-services">Ayuda/PQR</li>
    <li class="footer-services">www.sic.gov.co</li>
  </ul>
  <div class="footer-services2">
    <p>Copyright © 1999-2022 MercadoLibre Colombia LTDA</p>
    <p>17 Numero 93 - 09 Piso 3, Bogotá D.C., Colombia</p>
  </div>
  <div class="">
    <img
      src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.21.3/mercadolibre/sic.png"
    />
    <img
      src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.21.3/mercadolibre/pum.png"
    />
  </div>
</div>
        `;
}

function renderFooterContainer() {
  document.querySelector(".footer-container").innerHTML = footerContainer();
}
renderFooterContainer();
