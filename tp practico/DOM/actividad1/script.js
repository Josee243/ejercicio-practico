// Define header and footer HTML
const headerHTML = `
  <header>
    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
  </header>
`;

const footerHTML = `
  <footer>
    <p>&copy; 2024 My Website</p>
  </footer>
`;

// Function to insert header and footer
function insertHeaderFooter() {
  document.getElementById('header').innerHTML = headerHTML;
  document.getElementById('footer').innerHTML = footerHTML;
}

// Call the function on page load
window.onload = insertHeaderFooter;
