# Deployment Guide

## Environment Variables Setup

### Frontend (Client)

Create a `.env` file in the `client/` directory with the following variables:

```env
# API Configuration
REACT_APP_API_URL=https://your-backend-url.com/api
REACT_APP_API_TOKEN=your_strapi_api_token
```

**Important Notes:**
- For **development**: `REACT_APP_API_URL=http://localhost:1337/api`
- For **production**: `REACT_APP_API_URL=https://your-production-backend.com/api`
- React environment variables MUST start with `REACT_APP_`
- These variables are embedded at **BUILD TIME**, not runtime

### Backend (Strapi)

Create a `.env` file in the `backend/` directory with the following variables:

```env
# Server Configuration
HOST=0.0.0.0
PORT=1337

# App Keys (generate using: openssl rand -base64 32)
APP_KEYS=key1,key2,key3,key4

# Database Configuration (PostgreSQL)
PGHOST=your_postgres_host
PGPORT=5432
PGDATABASE=your_database_name
PGUSER=your_database_user
PGPASSWORD=your_database_password

# Secrets (generate unique values for production)
ADMIN_JWT_SECRET=your_admin_jwt_secret
API_TOKEN_SALT=your_api_token_salt
JWT_SECRET=your_jwt_secret
TRANSFER_TOKEN_SALT=your_transfer_token_salt
```

## Building for Production

### Why Products Don't Show on Live Site

If you see products in development but not in production, it's likely because:

1. **Hardcoded URLs**: The app had hardcoded backend URLs that were fixed
2. **Build with wrong env vars**: You built with development URLs embedded
3. **Missing environment variables**: Production environment doesn't have the vars set
4. **Wrong API permissions**: Strapi API tokens or permissions are different

### How to Fix

#### Step 1: Set Production Environment Variables

**On your hosting platform (Vercel, Netlify, etc.):**

Add these environment variables in your hosting dashboard:
- `REACT_APP_API_URL` = Your production backend URL (e.g., `https://strapi-production-a8c7.up.railway.app/api`)
- `REACT_APP_API_TOKEN` = Your Strapi API token

#### Step 2: Rebuild Your Application

The frontend MUST be rebuilt with the correct environment variables:

```bash
cd client
npm install
npm run build
```

The `build/` folder will now contain the production build with the correct URLs embedded.

#### Step 3: Deploy the New Build

Deploy the contents of the `client/build/` folder to your hosting platform.

### For Different Hosting Platforms

#### Vercel
1. Add environment variables in Project Settings > Environment Variables
2. Trigger a new deployment (it will automatically rebuild)

#### Netlify
1. Add environment variables in Site Settings > Build & Deploy > Environment
2. Trigger a new deployment

#### Railway
1. Add environment variables in your service settings
2. Redeploy the service

## Strapi API Configuration

### Create API Token

1. Login to Strapi admin panel (`https://your-backend-url.com/admin`)
2. Go to Settings > API Tokens > Create new API Token
3. Set Token type to "Full access" or customize permissions
4. Copy the generated token
5. Add it to your frontend `.env` as `REACT_APP_API_TOKEN`

### Check Permissions

1. Go to Settings > Users & Permissions Plugin > Roles > Public
2. Ensure the following permissions are enabled:
   - **Product**: `find`, `findOne`
   - **Category**: `find`, `findOne`
   - **Sub-category**: `find`, `findOne`
3. Save the permissions

## Common Issues

### Issue: Products show in dev but not production
**Solution**: Rebuild frontend with production environment variables

### Issue: CORS errors in browser console
**Solution**: Check backend `config/middlewares.js` and ensure your frontend domain is allowed

### Issue: 403 Forbidden errors
**Solution**: Check Strapi permissions for Public role and verify API token

### Issue: Images not loading
**Solution**: Check `REACT_APP_UPLOAD_URL` environment variable and Strapi upload settings

## Development vs Production

### Development
```bash
# Backend
cd backend
npm run develop

# Frontend (in another terminal)
cd client
npm start
```

### Production Build Testing
```bash
# Build frontend
cd client
npm run build

# Serve the build locally to test
npx serve -s build
```

## Verification Checklist

Before deploying to production:

- [ ] Environment variables set in hosting platform
- [ ] Frontend rebuilt with production environment variables
- [ ] Backend deployed and accessible
- [ ] Database connected and migrations run
- [ ] Strapi API tokens generated
- [ ] Public permissions enabled in Strapi
- [ ] CORS configured for frontend domain
- [ ] Test API endpoints directly (use Postman or curl)
- [ ] Check browser console for errors

## Testing Your Setup

### Test Backend API
```bash
curl https://your-backend-url.com/api/products?populate=*
```

### Test with API Token
```bash
curl -H "Authorization: Bearer YOUR_API_TOKEN" \
  https://your-backend-url.com/api/products?populate=*
```

If these work but the frontend doesn't show products, the issue is with the frontend build or environment variables.

