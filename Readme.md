Claro! Aqui está o README atualizado com essa informação logo no início, mantendo a estrutura profissional e em inglês:

---

# 🕷️ Amazon Scraper

**Full-stack web scraping project built for a trainee job application test.**  
It consists of a Bun-powered backend that scrapes Amazon product data and a simple frontend built with vanilla JavaScript to display the results.

---

## How to Run (with Bun)

1. Clone the repository:

```bash
git clone https://github.com/LianMiranda/Amazon-product-listings
```

---

## 📦 Backend (`scraping-backend`)

### ⚙️ Tech Stack

- [Bun](https://bun.sh) v1.2.10
- Node.js web scraping libraries

### 🚀 Getting Started

1. Navigate to the backend directory:

```bash
cd scraping-backend/
```

2. Install dependencies:

```bash
bun install
```

3. Start the development server:

```bash
bun run dev
```

> The backend will be running at `http://localhost:3000`.

> ⚠️ This project was initialized with `bun init`.

---

## 🖼️ Frontend (`scraping-frontend`)

### 🧰 Tech Stack

- HTML, CSS, Vanilla JavaScript
- [Bootstrap 5](https://getbootstrap.com/)
- [Vite](https://vitejs.dev/)
- [Bun](https://bun.sh)

### 🚀 Getting Started

1. Navigate to the frontend folder:

```bash
cd scraping-frontend/
```

2. Install dependencies:

```bash
bun install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser at:

```
http://localhost:5173
```

> Make sure the backend is running at `http://localhost:3000`.

---

## ✨ Features

- Keyword-based product search
- Displays:
  - Product title
  - Rating
  - Number of reviews
  - Product image
- Responsive and clean UI using Bootstrap

---