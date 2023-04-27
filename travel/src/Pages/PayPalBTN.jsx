import React, { useEffect } from "react";

const PayPalButton = () => {

  useEffect(() => {
    const PayPal = window.paypal.Buttons({
      createOrder: () => {
        return fetch("/my-server/create-paypal-order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cart: [
              {
                sku: "YOUR_PRODUCT_STOCK_KEEPING_UNIT",
                quantity: "YOUR_PRODUCT_QUANTITY",
              },
            ],
          }),
        })
          .then((res) => res.json())
          .then((order) => order.id);
      },
      onApprove: (data) => {
        return fetch("/my-server/capture-paypal-order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            orderID: data.orderID,
          }),
        })
          .then((res) => res.json())
          .then((orderData) => {
            console.log(
              "Capture result",
              orderData,
              JSON.stringify(orderData, null, 2)
            );
            const transaction =
              orderData.purchase_units[0].payments.captures[0];
            alert(
              `Transaction ${transaction.status}: ${transaction.id}\n\nSee console for all available details`
            );
            // const element = document.getElementById('paypal-button-container');
            // element.innerHTML = '<h3>Thank you for your payment!</h3>';
            // Or go to another URL:  window.location.href = 'thank_you.html';
          });
      },
    });
    PayPal.render("#paypal-button-container");
  }, []);

  return (
    <div>
      <script
        src="https://www.paypal.com/sdk/js?client-id=test&currency=USD"
        async
      ></script>
      <div id="paypal-button-container"> j </div>
    </div>
  );
};

export default PayPalButton;
