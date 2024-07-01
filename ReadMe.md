# eCommerce Website

An eCommerce platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This project includes features for both users and admins.

## Features

### User Features
- **User Registration and Login**: Users can create an account and log in to access their profile.
- **Product Browsing**: Users can browse through a list of products with details.
- **Product Search**: Users can search for products by name, category, etc.
- **Product Details**: Users can view detailed information about a product.
- **Add to Cart**: Users can add products to their cart.
- **Checkout**: Users can place orders by providing shipping information and payment details.
- **Order History**: Users can view their past orders and order details.

### Admin Features
- **Admin Dashboard**: A dashboard for admins to manage the website.
- **Product Management**: Admins can add, edit, or delete products.
- **User Management**: Admins can view and manage user accounts.
- **Order Management**: Admins can view and update the status of orders.

## Technologies Used
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **State Management**: Redux
- **Styling**: Tailwind CSS

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ecommerce-website.git
   cd ecommerce-website
   ```

2. Install dependencies for the backend:
   ```bash
   cd backend
   npm install
   ```

3. Install dependencies for the frontend:
   ```bash
   cd ../frontend
   npm install
   ```

## Setup Environment Variables

Create a `.env` file in the `backend` directory and add the following:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

## Running the Application

1. Start the backend server:
   ```bash
   cd backend
   npm start
   ```

2. Start the frontend server:
   ```bash
   cd frontend
   npm start
   ```

## Usage

### User Interface

- **Home Page**: Browse products, search for items.
- **Product Page**: View detailed information about a product.
- **Cart Page**: View and manage items in the cart.
- **Checkout Page**: Enter shipping and payment details to place an order.
- **Profile Page**: View and manage account details, order history.

### Admin Interface

- **Dashboard**: Overview of the site metrics.
- **Manage Products**: Add new products, edit existing ones, or delete them.
- **Manage Users**: View all users, edit their information, or delete accounts.
- **Manage Orders**: View all orders, update order status.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request.

## License

This project is licensed under the MIT License.