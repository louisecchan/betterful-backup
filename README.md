# Betterful

A modern e-commerce platform built with React and Strapi CMS, featuring a full-featured online shopping experience with user authentication, product management, and integrated payment processing.

## 🚀 Tech Stack

### Frontend
- **React** 18.0.0 - UI framework
- **Redux Toolkit** - State management
- **React Router** - Navigation
- **Sass** - Styling
- **Stripe** - Payment processing
- **Axios** - HTTP client
- **Material-UI & Ant Design** - UI components
- **FontAwesome** - Icons

### Backend
- **Strapi** 4.12.1 - Headless CMS
- **PostgreSQL** - Database
- **Cloudinary** - Image storage
- **Stripe** - Payment processing

## 📁 Project Structure

```
betterful-backup/
├── client/          # React frontend application
│   ├── src/
│   │   ├── components/  # Reusable React components
│   │   ├── pages/       # Page components
│   │   ├── redux/       # Redux store and reducers
│   │   ├── context/     # React context providers
│   │   └── hooks/       # Custom React hooks
│   └── build/       # Production build
│
└── backend/         # Strapi CMS backend
    ├── config/      # Strapi configuration
    ├── src/
    │   ├── api/     # API endpoints (products, orders, categories)
    │   └── extensions/  # Custom extensions
    └── database/    # Database migrations
```

## ✨ Features

- 🛍️ **Product Catalog** - Browse products by categories and subcategories
- 🛒 **Shopping Cart** - Add, remove, and manage cart items
- 👤 **User Authentication** - Register, login, and manage user profiles
- 💳 **Payment Integration** - Secure checkout with Stripe
- 🔍 **Product Search & Filter** - Find products easily
- 📱 **Responsive Design** - Works seamlessly on all devices
- ⭐ **Featured & Trending Products** - Curated product selections
- 📦 **Order Management** - Track and manage orders
- 🏪 **Store Locator** - Find physical store locations

## 🛠️ Installation

### Prerequisites
- Node.js >= 18.20.2 < 19
- npm >= 6.0.0
- PostgreSQL database

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the backend directory with the following variables:
```env
HOST=0.0.0.0
PORT=1337
APP_KEYS=your-app-keys
API_TOKEN_SALT=your-api-token-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
TRANSFER_TOKEN_SALT=your-transfer-token-salt
JWT_SECRET=your-jwt-secret

# Database
DATABASE_CLIENT=postgres
DATABASE_HOST=your-db-host
DATABASE_PORT=5432
DATABASE_NAME=your-db-name
DATABASE_USERNAME=your-db-username
DATABASE_PASSWORD=your-db-password
DATABASE_SSL=false

# Cloudinary (for image storage)
CLOUDINARY_NAME=your-cloudinary-name
CLOUDINARY_KEY=your-cloudinary-key
CLOUDINARY_SECRET=your-cloudinary-secret

# Stripe
STRIPE_SECRET_KEY=your-stripe-secret-key
```

4. Start the development server:
```bash
npm run develop
# or
yarn develop
```

The Strapi admin panel will be available at `http://localhost:1337/admin`

### Frontend Setup

1. Navigate to the client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the client directory:
```env
REACT_APP_API_URL=http://localhost:1337
REACT_APP_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
```

4. Start the development server:
```bash
npm start
# or
yarn start
```

The application will be available at `http://localhost:3000`

## 🚀 Production Build

### Backend
```bash
cd backend
npm run build
npm start
```

### Frontend
```bash
cd client
npm run build
```

The production-ready files will be in the `client/build` directory.

## 📝 API Endpoints

The backend provides the following main API endpoints:

- `/api/products` - Product management
- `/api/categories` - Category management
- `/api/sub-categories` - Subcategory management
- `/api/orders` - Order management
- `/api/auth/local` - User authentication
- `/api/users` - User management

## 🔑 First Time Setup

1. Start the backend server
2. Visit `http://localhost:1337/admin` to create your admin user
3. Configure your content types and add initial data
4. Start the frontend server
5. Begin shopping!

## 🤝 Contributing

This is a backup repository. For contributions, please refer to the main repository.

## 📄 License

MIT

## 🔒 Security Notes

- Never commit `.env` files or expose API keys
- Images are stored in Cloudinary to persist between deployments
- Always use secure HTTPS connections in production
- Keep dependencies up to date for security patches

## 📧 Support

For issues or questions, please open an issue in the repository.

