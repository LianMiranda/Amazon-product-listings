import "./style.css";

document.getElementById("search-form").addEventListener("submit", handleSearch);

/**
 * Handle the search form submission
 * @param {*} e 
 * @returns {void}
 */

async function handleSearch(e) {
  e.preventDefault();
  const keyword = document.getElementById("keyword").value;
  const resultsDiv = document.getElementById("results");

  if (!keyword.trim()) {
    resultsDiv.innerHTML = `<div class="alert alert-warning">Keyword is required</div>`;
    return;
  }

  resultsDiv.innerHTML = `<div class="text-center text-muted">Loading...</div>`;

  try {
    const res = await fetch(`http://localhost:3000/api/scrape?keyword=${encodeURIComponent(keyword)}`);
    const data = await res.json();
    renderResults(data);
  } catch (err) {
    resultsDiv.innerHTML = `<div class="alert alert-danger">Error fetching data</div>`;
  }
}

/**
 * Render the search results
 * @param {*} products 
 * @returns {void}
 */
function renderResults(products) {
  const resultsDiv = document.getElementById("results");

  if (products.length === 0) {
    resultsDiv.innerHTML = `<div class="alert alert-info">No products found.</div>`;
    return;
  }

  resultsDiv.innerHTML = products.map(renderCard).join("");
}

/**
 * Render a single product card
 * @param {*} item 
 * @returns {string} The HTML string for the product card
 */
function renderCard(item) {
  return `
    <div class="card mb-4 shadow-sm">
      <div class="row g-0">
        <div class="col-md-2 text-center p-3">
          <img src="${item.image}" class="img-fluid rounded" alt="${item.title}">
        </div>
        <div class="col-md-10">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text mb-1"><strong>Rating:</strong> ${item.rating}</p>
            <p class="card-text"><strong>Reviews:</strong> ${item.reviews}</p>
          </div>
        </div>
      </div>
    </div>
  `;
}
