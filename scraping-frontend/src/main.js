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
 * The function `renderStars` takes a rating as input and returns a string of stars and empty stars to
 * represent the rating out of 5.
 * @param rating - The `renderStars` function takes a `rating` parameter as input. This parameter
 * represents a numerical rating value, typically ranging from 0 to 5 stars. The function calculates
 * the number of full stars and empty stars based on this rating to visually represent the rating using
 * star symbols (★ for full
 * @returns The function `renderStars` returns a string of stars and empty stars based on the input
 * rating. The full stars are represented by '★' and the empty stars are represented by '☆'.
 */
function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;
  return '★'.repeat(fullStars) + '☆'.repeat(emptyStars);
}

/**
 * Render a single product card
 * @param {*} item 
 * @returns {string} The HTML string for the product card
 */
function renderCard(item) {
  const stars = renderStars(parseFloat(item.rating));

  return `
   <div class="card mb-4 border-0 rounded-3 shadow-sm hover-shadow">
  <div class="row g-0 align-items-center">
    <div class="col-auto p-3 d-flex align-items-center justify-content-center">
      <img src="${item.image}" alt="${item.title}" class="img-fluid" style="max-height: 100px;">
    </div>
    <div class="col">
      <div class="card-body py-3">
        <h5 class="card-title mb-2 text-truncate">${item.title}</h5>
        <div class="d-flex align-items-center mb-2">
          <span class="me-2 text-warning">${stars}</span>
          <small class="text-muted">${item.rating}</small>
        </div>
        <span class="badge bg-secondary">
          <i class="bi bi-chat-left-text-fill me-1"></i> ${item.reviews}
        </span>
      </div>
    </div>
  </div>
</div>

  `;
}
