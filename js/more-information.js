function moreInformation() {
  return `
    <div class="w-80 m-auto">
        <div class="flex space-evenly text-center">
          <div>
            <div class="pay-container">
              <img
                src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/payment.svg"
              />
              <p class="pay-title1">Paga con tarjeta o efectivo</p>
              <p class="pay-info">
                Con Mercado Pago, paga en cuotas y aprovecha la comodidad de
                financiación que te da tu banco, o hazlo con efectivo en puntos
                de pago. ¡Y siempre es seguro
              </p>
              <p class="pay-title2">Como pagar con Mercado Pago</p>
            </div>
          </div>
          <div>
            <div class="pay-container">
              <img
                src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/shipping.svg"
              />
              <p class="pay-title1">Envio gratis desde $ 90.000</p>
              <p class="pay-info">
                Con solo estar registrado en Mercado Libre, tienes envíos gratis
                en miles de productos seleccionados.
              </p>
              <p class="pay-title2">Conoce mas sobre este beneficio</p>
            </div>
          </div>
          <div>
            <div class="pay-container no-border">
              <img
                src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/protected.svg"
              />
              <p class="pay-title1">Seguridad, de principio a fin</p>
              <p class="pay-info">
                ¿No te gusta? ¡Devuélvelo! En Mercado Libre, no hay nada que no
                puedas hacer, porque estás siempre protegido.
              </p>
              <p class="pay-title2">Como te protegemos</p>
            </div>
          </div>
        </div>

        <div>
          <p class="text-center pointer" onclick="toggleContainer()">Más información</p>
        </div>
        <div class="d-none more-information-data">
          <ul class="flex">
            <li>
              <p><b>Acerca de</b></p>
              <br />
              <p>Mercado Libre</p>
              <p>Investor relations</p>
              <p>Tendencias</p>
              <p>Sustentabilidad</p>
            </li>
            <li>
              <p><b>Otros sitios</b></p>
              <br />
              <p>Developers</p>
              <p>Mercado Pago</p>
              <p>Mercado Envios</p>
              <p>Mercado Shops</p>
              <p>Mercado Ads</p>
            </li>
            <li>
              <p><b>Ayuda/ PQR</b></p>
              <br />
              <p>Comprar</p>
              <p>Vender</p>
              <p>Resolucion de problemas</p>
              <p>Centro de seguridad</p>
            </li>
            <li>
              <p><b>Redes sociales</b></p>
              <br />
              <p>Twitter</p>
              <p>Facebook</p>
              <p>YouTube</p>
            </li>

            <li>
              <p><b>Mi cuenta</b></p>
              <br />
              <p>Ingresa</p>
              <p>Vender</p>
            </li>

            <li>
              <p><b>Mercado Puntos</b></p>
              <br />
              <p>Nivel 6</p>
              <p>Disney+</p>
              <p>Star+</p>
              <p>HBO MAX</p>
              <p>Paramount+</p>
            </li>
          </ul>
        </div>
      </div>
    `;
}

function renderMoreInformation() {
  document.querySelector(".more-information").innerHTML = moreInformation();
}
renderMoreInformation();

function toggleContainer() {
  document.querySelector(".more-information-data").classList.toggle("d-none");
  console.log(`hola`);
}
