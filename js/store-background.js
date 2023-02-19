function storeBackground() {
  return `
  <div class="flex justify-start">
  <h1 class="store-header">Las mejores tiendas te esperan</h1>
  <h2 class="p-x-2">Ver tiendas</h2>
</div>

<div class="flex">
  <div>
    <div class="stores-container">
      <div>
        <div class="stores1">
          <img src="img/background_home201911060615.jpg" />
        </div>
        <div class="stores2">
          <img
            src="https://http2.mlstatic.com/D_Q_NP_633143-MLA25899256305_082017-AE.webp"
          />
        </div>
      </div>
      <div class="stores-detail-container">
        <div class="stores-name"><h1>Mabe</h1></div>
        <div class="flex">
          <div class="">
            <img
              src="https://http2.mlstatic.com/D_Q_NP_714062-MCO52875866338_122022-R.webp"
            />
          </div>
          <div>
            <img
              src="https://http2.mlstatic.com/D_Q_NP_738330-MCO52875230225_122022-R.webp"
            />
          </div>
          <div>
            <img
              src="https://http2.mlstatic.com/D_Q_NP_658996-MCO52814090925_122022-R.webp"
            />
          </div>
        </div>
        <div class="stores3">
          <p>Ver tienda</p>
        </div>
      </div>
    </div>
  </div>

  <div class="">
    <div class="stores-container">
      <div class="storecontainer2">
        <div class="stores1">
          <img src="img/background2.jpg" />
        </div>
        <div class="stores2">
          <img
            src="https://http2.mlstatic.com/D_Q_NP_976768-MLA25899130908_082017-AE.webp"
          />
        </div>
      </div>
      <div class="stores-detail-container">
        <div class="stores-name2"><h1>Whirlpool</h1></div>
        <div class="flex">
          <div class="">
            <img
              src="https://http2.mlstatic.com/D_Q_NP_874162-MCO49577768507_042022-R.webp"
            />
          </div>
          <div>
            <img
              src="https://http2.mlstatic.com/D_Q_NP_891899-MCO44349386129_122020-R.webp"
            />
          </div>
          <div>
            <img
              src="https://http2.mlstatic.com/D_Q_NP_697588-MCO49055843605_022022-R.webp"
            />
          </div>
        </div>
        <div class="stores3"><p>Ver tienda</p></div>
      </div>
    </div>
  </div>

  <div>
    <div class="stores-container">
      <div class="storecontainer2">
        <div class="stores1">
          <img src="img/background3.jpg" />
        </div>
        <div class="stores2">
          <img
            src="https://mla-s2-p.mlstatic.com/942448-MLA45062603291_032021-AE.webp"
          />
        </div>
      </div>
      <div class="stores-detail-container">
        <div class="stores-name"><h1>Asus</h1></div>
        <div class="flex">
          <div class="">
            <img
              src="https://http2.mlstatic.com/D_Q_NP_785702-MCO52775072883_122022-R.webp"
            />
          </div>
          <div>
            <img
              src="https://http2.mlstatic.com/D_Q_NP_603948-MCO52992910669_122022-R.webp"
            />
          </div>
          <div>
            <img
              src="https://http2.mlstatic.com/D_Q_NP_836067-MCO49845514245_052022-R.webp"
            />
          </div>
        </div>
        <div class="stores3"><p>Ver tienda</p></div>
      </div>
    </div>
  </div>

  <div>
    <div class="stores-container">
      <div class="storecontainer2">
        <div class="stores1">
          <img src="img/background4.jpg" />
        </div>
        <div class="stores2">
          <img
            src="https://mla-s2-p.mlstatic.com/845606-MLA43271968697_082020-AE.webp"
          />
        </div>
      </div>
      <div class="stores-detail-container">
        <div class="stores-name"><h1>Sony</h1></div>
        <div class="flex">
          <div class="">
            <img
              src="https://http2.mlstatic.com/D_Q_NP_825382-MCO43470898276_092020-R.webp"
            />
          </div>
          <div>
            <img
              src="https://http2.mlstatic.com/D_Q_NP_956579-MCO50972147980_082022-R.webp"
            />
          </div>
          <div>
            <img
              src="https://http2.mlstatic.com/D_Q_NP_664047-MCO50303251437_062022-R.webp"
            />
          </div>
        </div>
        <div class="stores3"><p>Ver tienda</p></div>
      </div>
    </div>
  </div>
</div>
      `;
}

function renderStoreBackground() {
  document.querySelector(".store-background").innerHTML = storeBackground();
}
renderStoreBackground();
