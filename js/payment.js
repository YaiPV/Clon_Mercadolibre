function payment() {
  return `
    <div class="flex">
    <div class="flex">
      <img
        src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/credit-card.svg"
      />
      <div>
        <p>Hasta 48 cuotas</p>
        <p>Ver mas</p>
      </div>
    </div>
    <div class="flex">
      <img
        src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/transfer.svg"
      />
      <div>
        <p>Transferencia desde tu banco</p>
        <p>Ver mas</p>
      </div>
    </div>

    <div class="flex">
      <img
        src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/payment-agreement.svg"
      />
      <div>
        <p>Paga en efectivo</p>
        <p>Ver mas</p>
      </div>
    </div>
    <div class="flex">
      <img
        src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/view-more.svg"
      />
      <div>
        <p>Mas medios de pago</p>
        <p>Ver mas</p>
      </div>
    </div>
  </div>
    `;
}

function renderpayment() {
  document.querySelector(".payment").innerHTML = payment();
}
renderpayment();
