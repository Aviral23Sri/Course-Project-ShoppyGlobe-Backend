# 🛍 ShoppyGlobe Backend API

A Node.js + Express + MongoDB backend for the **ShoppyGlobe** e-commerce project with **JWT authentication** and **cart management** features.

---

## 📌 GitHub Repository
🔗 [Course-Project-ShoppyGlobe-Backend](https://github.com/Aviral23Sri/Course-Project-ShoppyGlobe-Backend)

---

## 📂 Project Folder Structure
```
shoppyglobe-backend/
│
├── config/
│ └── db.js
│
├── controllers/
│ ├── authController.js
│ ├── cartController.js
│ └── productController.js
│
├── middleware/
│ └── authMiddleware.js
│
├── models/
│ ├── Cart.js
│ ├── Product.js
│ └── User.js
│
├── routes/
│ ├── authRoutes.js
│ ├── cartRoutes.js
│ └── productRoutes.js
│
├── document/ # Assignment or documentation
├── .env # Environment variables
├── package.json
├── server.js
└── seed.js
```


---

## ⚙️ 1. Prerequisites

Make sure you have installed:

- **Node.js** (>= 16)
- **MongoDB** (Local or MongoDB Atlas)
- **VS Code** (or any editor)
- **Thunder Client / Postman** (for testing APIs)
- **Git** (to clone the repository)

---

## 🚀 2. Clone the Repository

```bash
git clone https://github.com/Aviral23Sri/Course-Project-ShoppyGlobe-Backend.git
```

```bash
cd Course-Project-ShoppyGlobe-Backend
```


---

## 📦 3. Install Dependencies

```bash
npm install
```

---

## 🔑 4. Setup Environment Variables

Create a `.env` file in the root directory and add:

```bash
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/shoppyglobe
JWT_SECRET=supersecretkey
```


> ⚠️ Change `MONGO_URI` if you are using MongoDB Atlas.

---

## 🌱 5. (Optional) Seed Sample Products

```bash
node seed.js
```

This will insert some default **Products** into the database.

---

## ▶️ 6. Run the Server

**For Development** (auto-restart on save):

```bash
npm start
```

---

## 🧪 7. API Endpoints

### **Authentication**
```
| Method | Endpoint      | Description         | Auth Required |
|--------|--------------|--------------------|--------------|
| POST   | /register    | Register new user  | ❌ No        |
| POST   | /login       | Login and get JWT  | ❌ No        |
```

### **Products**
```
| Method | Endpoint         | Description            | Auth Required |
|--------|-----------------|------------------------|--------------|
| GET    | /products       | Get all products       | ❌ No        |
| GET    | /products/:id   | Get product by ID      | ❌ No        |
```

### **Cart**
```
| Method | Endpoint            | Description               | Auth Required |
|--------|--------------------|---------------------------|--------------|
| POST   | /cart              | Add item to cart          | ✅ Yes       |
| PUT    | /cart/:productId   | Update item quantity      | ✅ Yes       |
| DELETE | /cart/:productId   | Remove item from cart     | ✅ Yes       |
```

---

## 🔐 8. Using Authorization

1. Register or Login → Copy the `token` received.
2. In **Thunder Client** or **Postman**:
   - Add Header:
     ```
     Key: Authorization
     Value: Bearer YOUR_TOKEN
     ```
3. Send the request.

---

## 📜 Example Requests (bash cURL)

### Register
```bash
curl -X POST http://localhost:5000/register
-H "Content-Type: application/json"
-d '{"username":"testuser","password":"123456"}'
```


### Login
```bash
curl -X POST http://localhost:5000/login
-H "Content-Type: application/json"
-d '{"username":"testuser","password":"123456"}'
```

### Add to Cart
```bash
curl -X POST http://localhost:5000/cart
-H "Authorization: Bearer YOUR_TOKEN"
-H "Content-Type: application/json"
-d '{"productId":"PASTE_PRODUCT_ID_HERE","quantity":2}'
```

---

## 📌 Notes

- Always fetch **productId** from `/products` before adding to cart.
- JWT Token expires in **1h** by default — login again if expired.
- `seed.js` is optional but useful for quick setup.

---

## 🖊 Aviral Srivastava

Developed for **Course Project — ShoppyGlobe Backend**  
© 2025 All Rights Reserved.



