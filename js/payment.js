async function getPaymentData() {
  const data = await getData("http://localhost:3000/payment");
  return data;
}

async function payment() {
  const paymentData = await getPaymentData();
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

async function renderpayment() {
  document.querySelector(".payment").innerHTML = await payment();
}
renderpayment();
