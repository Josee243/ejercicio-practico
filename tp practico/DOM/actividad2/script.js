const products = [
  { id: 1, nombre: "Remera de River", precio: 120000, categoria: "Ropa", imagen: "camiseta.jpg", descripcion: "Una camisa de años de historia" },
  { id: 2, nombre: "Botines", precio: 100000, categoria: "Calzado", imagen: "botines.jpg", descripcion: "Buenos y cómodos botines" },
  { id: 3, nombre: "Canilleras Adidas", precio: 50000, categoria: "Accesorios", imagen: "canilleras.jpg", descripcion: "Canilleras con muy buena protección" },
];

// Function to display products
function displayProducts() {
  let productsHTML = '';
  products.forEach(product => {
      productsHTML += `
          <div class="product">
              <h2>${product.nombre}</h2>
              <img src="${product.imagen}" alt="${product.nombre}">
              <p>Precio: ${product.precio}</p>
              <p>Categoría: ${product.categoria}</p>
              <p>${product.descripcion}</p>
          </div>
      `;
  });
  document.getElementById('products').innerHTML = productsHTML;
}

// Call the function on page load
window.onload = displayProducts;

