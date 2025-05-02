
---

```markdown
# 🛍️ Product Card React App

This is a basic React application that displays a product card using `create-react-app` and `react-bootstrap`. The app showcases a single product's details (name, price, description, image) using modular React components.

## 📦 Features

- React functional components for each product detail
- Product information stored in a separate JSON object (`product.js`)
- Bootstrap-based card layout
- Personalized greeting with fallback message
- Conditional rendering based on the user's name

## 🚀 Technologies Used

- React
- React Bootstrap
- JavaScript (ES6+)
- CSS via Bootstrap 5

## 📁 Project Structure

```

productsapp/
├── public/
│   └── image.png          # Product image
├── src/
│   ├── App.js             # Root component
│   ├── product.js         # Product data
│   ├── Name.js            # Component to show name
│   ├── Price.js           # Component to show price
│   ├── Description.js     # Component to show description
│   └── Image.js           # Component to show image

````

## 🛠️ Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/productsapp.git
   cd productsapp
````

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm start
   ```

4. **Visit in browser**:
   Open [http://localhost:3000](http://localhost:3000)

## ✏️ Customization

* Update `product.js` to change product details or image.
* Change `firstName` in `App.js` to personalize the greeting.
* Add styling in `App.css` or use more Bootstrap components to enhance visuals.

## 📸 Screenshot

![Product Card Screenshot](public/image.png)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

```

---
