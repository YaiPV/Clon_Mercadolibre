function promoContainer() {
  return ` <h3 class="supermarket-header">Colecciones: Supermercado</h3>
  <div class="card-container flex">
    <div class="column1">
      <div class="">
        <div class="card-promo">
          <img
            src="https://http2.mlstatic.com/D_NQ_785071-MLA49925593730_052022-OO.webp"
          />
        </div>
        <div class="promo-description border-radius-bottom">
          <div>Descubre</div>
          <div>
            <h1>SUPERMERCADO</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="column2">
      <div class="row1 flex">
        <div class="">
          <div class="mb-10">
            <img
              src="https://http2.mlstatic.com/D_Q_NP_740059-MCO53018520287_122022-AC.webp"
            />
          </div>
        </div>
        <div class="">
          <div class="">
            <img
              src="https://http2.mlstatic.com/D_Q_NP_793611-MCO50848070945_072022-AC.webp"
            />
          </div>
        </div>
        <div class="">
          <div class="">
            <img
              src="https://http2.mlstatic.com/D_Q_NP_618228-MCO49449087674_032022-AC.webp"
            />
          </div>
        </div>
        <div class="">
          <div class="">
            <img
              src="https://http2.mlstatic.com/D_Q_NP_609019-MCO46726627399_072021-AC.webp"
            />
          </div>
        </div>
      </div>
      <div class="row2 flex">
        <div class="">
          <div class="">
            <img
              src="https://http2.mlstatic.com/D_Q_NP_826689-MCO50834314924_072022-AC.webp"
            />
          </div>
        </div>
        <div class="">
          <div class="">
            <img
              src="https://http2.mlstatic.com/D_Q_NP_734105-MCO50543877918_072022-AC.webp"
            />
          </div>
        </div>
        <div class="">
          <div class="">
            <img
              src="https://http2.mlstatic.com/D_Q_NP_607202-MCO49742490264_042022-AC.webp"
            />
          </div>
        </div>
        <div class="">
          <div class="">
            <img
              src="https://http2.mlstatic.com/D_Q_NP_928778-MCO52850237864_122022-AC.webp"
            />
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

function renderPromoContainer() {
  document.querySelector(".promo-container").innerHTML = promoContainer();
}
renderPromoContainer();
