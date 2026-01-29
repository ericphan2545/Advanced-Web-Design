"use strict";

let dataList = [];

function save() {
  let quantity = parseFloat(document.getElementById("productQuantity").value) || 0;
  let price = parseFloat(document.getElementById("productPrice").value) || 0;

  let amount = quantity * price;
  let discount = amount * 0.15; 
  let total = amount - discount;

  let item = {
    customerName: document.getElementById("customerName").value,
    productId: document.getElementById("productId").value,
    productName: document.getElementById("productName").value,
    productQuantity: quantity,
    productPrice: price,
    discount: discount.toFixed(1),
    amount: amount.toFixed(0),
    total: total.toFixed(1),
  };

  dataList.push(item);
  alert("Saved!");
}

function show() {
  let orderTableBody = "";
  for (let item in dataList) {
    orderTableBody += `<tr>
            <td>${parseInt(item) + 1}</td>
            <td>${dataList[item].customerName}</td>
            <td>${dataList[item].productId}</td>
            <td>${dataList[item].productName}</td>
            <td>${dataList[item].productQuantity}</td>
            <td>${dataList[item].productPrice}</td>
            <td>${dataList[item].discount}</td>
            <td>${dataList[item].amount}</td>
            <td>${dataList[item].total}</td>
        </tr>`;
  }
  document.getElementById("orderTableBody").innerHTML = orderTableBody;
}

function reset() {
  document.getElementById("customerName").value = "";
  document.getElementById("productId").value = "";
  document.getElementById("productName").value = "";
  document.getElementById("productQuantity").value = "";
  document.getElementById("productPrice").value = "";
}
