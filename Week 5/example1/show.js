function getProducts(callback) {
  const apiUrl = "https://69382a834618a71d77cf33d3.mockapi.io/products";

  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      callback(null, data);
    })
    .catch(function (error) {
      callback(error, null);
    });
}

function handleProducts(error, data) {
  if (error) {
    console.error("Lỗi khi lấy dữ liệu:", error);
    return;
  }

  const tableBody = document.getElementById("productTableBody");

  data.forEach(function (product) {
    const row = `
            <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.price}</td>
            </tr>
        `;

    tableBody.innerHTML += row;
  });
}

getProducts(handleProducts);
