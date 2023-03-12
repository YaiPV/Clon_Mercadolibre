function getPaymentData() {
  const data = [
    {
      image:
        "https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/credit-card.svg",
      description: `<p>Hasta 48 cuotas</p>
      <p>Ver mas</p>`,
    },
    {
      image:
        "https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/transfer.svg",
      description: `<p>Transferencia desde tu banco</p>
      <p>Ver mas</p>`,
    },
    {
      image:
        "https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/payment-agreement.svg",
      description: `<p>Paga en efectivo</p>
      <p>Ver mas</p>`,
    },
    {
      image:
        "https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/view-more.svg",
      description: ` <p>Mas medios de pago</p>
      <p>Ver mas</p>`,
    },
  ];
  return data;
}

function payment() {
  const paymentData = getPaymentData();
  return `
  <div class="payment-box">
  
    
    ${paymentData
      .map(
        (item) => `
        <div class="payment-pic">
        <img
        src="${item.image}"/>
       
        <div>
        ${item.description}
        </div>    
  </div>
    `
      )
      .join("")}
      
    </div>`;
}

function renderpayment() {
  document.querySelector(".payment").innerHTML = payment();
}
renderpayment();
