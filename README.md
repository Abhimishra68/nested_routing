
# React Nested Routing App

A React application demonstrating **client-side routing and nested routing** using **React Router v6**. The app uses `NavLink` for navigation with an active route system and a shared layout using Navbar and Footer components.

## 🚀 Features

* React Router v6 for navigation
* `NavLink` for active route styling
* Nested routing inside Product page
* Reusable Navbar and Footer
* 404 page handling
* Clean and scalable folder structure

## 📁 Project Structure

```
src/
│── components/
│   ├── Navbar.jsx
│   └── Footer.jsx
│
│── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Product.jsx
│   ├── Men.jsx
│   ├── Women.jsx
│   ├── Nestedroute.jsx
│   └── Note.jsx
│
│── App.jsx
│── main.jsx
```

## 🧭 Navbar Navigation

The Navbar uses **`NavLink`** from `react-router-dom` instead of traditional anchor tags to enable SPA navigation without page reload.

```jsx
<NavLink to="/">Home</NavLink>
<NavLink to="/about">About</NavLink>
<NavLink to="/product">Product</NavLink>
```

### Why `NavLink`?

* Prevents full page reload
* Allows active link styling
* Better UX and performance

## 🛣️ Routes Overview

| Path             | Component       |
| ---------------- | --------------- |
| `/`              | Home            |
| `/about`         | About           |
| `/product`       | Product         |
| `/product/men`   | Men             |
| `/product/women` | Women           |
| `*`              | Note (404 Page) |

Nested routes (`men`, `women`) are declared **inside the Product route**, which is the recommended approach.

## 🧩 Technologies Used

* React
* React Router DOM v6
* Tailwind CSS

## ▶️ How to Run the Project

1. Clone the repository

   ```bash
   git clone <your-repo-url>
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the development server

   ```bash
   npm run dev
   ```


## 📄 License

This project is open-source and intended for learning and practice.

---
<img width="1863" height="875" alt="Screenshot 2026-01-04 111414" src="https://github.com/user-attachments/assets/2905707d-612a-4b9c-afa1-269c9fcd793b" />


* Add **active link styling example**
* Shorten this README
* Make it **resume / portfolio ready**
* Add **deployment steps (Vercel / Netlify)**

Just tell me 👌
