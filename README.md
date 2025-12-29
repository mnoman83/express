Express.js Product Management System

A secure Product Management System built using Node.js, Express.js, and MySQL.
This project provides user authentication and CRUD operations for products with search and pagination support.

Features

User Authentication

Login using email & password

JWT-based authentication

Only authenticated users can access APIs

Product Management

Create products

View product list

Update product details

Delete products

Search & Pagination

Search products by name or keywords

Pagination support for large datasets

Database

Secure data storage using MySQL

Environment-based configuration

Security

Password hashing

JWT token authorization

Protected API routes

API-Based Architecture

Secure communication between frontend and backend

RESTful API design

🛠️ Tech Stack

Backend: Node.js, Express.js

Database: MySQL

Authentication: JWT (JSON Web Token)

ORM / DB Driver: Sequelize / MySQL2

Security: bcrypt

Environment Management: dotenv

📂 Project Structure
project-root/
│
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── config/
│   └── app.js
│
├── .env
├── package.json
├── README.md
└── server.js

🔑 Authentication Flow

User logs in using email & password

Server validates credentials

JWT token is generated

Token must be included in request headers:

Authorization: Bearer <token>


Only authenticated users can access protected routes

📡 API Endpoints
🔐 Auth
Method	Endpoint	Description
POST	/api/auth/login	User login
📦 Products (Protected)
Method	Endpoint	Description
POST	/api/products	Create product
GET	/api/products	Get products (search & pagination)
GET	/api/products/:id	Get product by ID
PUT	/api/products/:id	Update product
DELETE	/api/products/:id	Delete product
🔍 Search & Pagination Example
GET /api/products?search=laptop&page=1&limit=10

⚙️ Environment Variables (.env)
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=product_db
JWT_SECRET=your_secret_key

▶️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/yourusername/express-product-system.git

2️⃣ Install Dependencies
npm install

3️⃣ Configure Environment Variables

Create a .env file and add required values.

4️⃣ Run Database Migrations (if applicable)
npx sequelize db:migrate

5️⃣ Start the Server
npm run dev


Server will run at:

http://localhost:5000

🧪 Testing

Use Postman or Swagger to test APIs.
Make sure to include the JWT token in request headers.

📤 GitHub Upload Instructions

Initialize git:

git init


Commit changes:

git add .
git commit -m "Initial commit - Express Product Management System"


Push to GitHub:

git branch -M main
git remote add origin https://github.com/yourusername/repository-name.git
git push -u origin main

📌 Future Enhancements

User registration

Role-based access (Admin/User)

Product image upload

Swagger API documentation

Refresh tokens

👨‍💻 Author

Mohammad Noman
Full Stack Developer
📧 Email: your-email@example.com

🌐 GitHub: https://github.com/yourusername
