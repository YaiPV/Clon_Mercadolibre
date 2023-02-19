function imageContainer() {
  return `
    <div class="flex">
    <div>
      <img 
      onclick="sayMessage('imagen1')"
        src="https://http2.mlstatic.com/D_NQ_804166-MLA53400205315_012023-OO.webp"
      />
    </div>
    <div>
      <img
      onclick="sayMessage('imagen2')"
        src="https://http2.mlstatic.com/D_NQ_758597-MLA53395427242_012023-OO.webp"
      />
    </div>
    <div>
      <img
      onclick="sayMessage('imagen3')"
        src="https://http2.mlstatic.com/D_NQ_943733-MLA53398333411_012023-OO.webp"
      />
    </div>
    <div>
      <img
      onclick="sayMessage('imagen4')"
        src="https://http2.mlstatic.com/D_NQ_874147-MLA53401418060_012023-OO.webp"
      />
    </div>
    <div>
      <img
      onclick="sayMessage('imagen5')"
        src="https://http2.mlstatic.com/D_NQ_911876-MLA53400653396_012023-OO.webp"
      />
    </div>
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
