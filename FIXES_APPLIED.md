# Fixes Applied - Products Not Showing on Live Site

## Problem Summary
Products were visible in development but not on the live/production site, despite having the same `.env` content.

## Root Causes Identified

### 1. **Hardcoded Backend URLs** (CRITICAL)
Two components had hardcoded production URLs instead of using environment variables:
- `client/src/components/FeaturedProducts/FeaturedProducts.jsx`
- `client/src/components/TrendingProducts/TrendingProducts.jsx`

**Issue**: These components were calling `https://strapi-production-a8c7.up.railway.app/api/products` directly, bypassing the environment variable configuration.

### 2. **Database SSL Configuration** (MODERATE)
The backend database config had `ssl: env.bool(true)` which always enabled SSL, even in development.

### 3. **Missing Build Step Documentation**
No clear documentation on how React environment variables work at build time vs runtime.

## Fixes Applied

### Fix 1: Remove Hardcoded URLs
**Files Changed:**
- `client/src/components/FeaturedProducts/FeaturedProducts.jsx`
- `client/src/components/TrendingProducts/TrendingProducts.jsx`

**Before:**
```javascript
const { data, loading, error } = useFetch(
  `https://strapi-production-a8c7.up.railway.app/api/products?populate=*&[filters][type][$eq]=${type}`
);
```

**After:**
```javascript
const { data, loading, error } = useFetch(
  `/products?populate=*&[filters][type][$eq]=${type}`
);
```

**Impact**: Now these components use the `REACT_APP_API_URL` from environment variables via the `makeRequest` axios instance.

### Fix 2: Database SSL Configuration
**File Changed:** `backend/config/database.js`

**Before:**
```javascript
ssl: env.bool(true),
```

**After:**
```javascript
ssl: env.bool("DATABASE_SSL", false),
```

**Impact**: SSL can now be controlled via `DATABASE_SSL` environment variable, defaulting to false for local development.

### Fix 3: Documentation Created
**New File:** `DEPLOYMENT.md`

Comprehensive guide covering:
- Environment variable setup for frontend and backend
- Why products don't show on live site
- Step-by-step production build process
- Strapi API configuration
- Common issues and solutions
- Verification checklist

## Next Steps Required

### IMPORTANT: You MUST rebuild the frontend for changes to take effect

1. **Set Environment Variables** (on your hosting platform or locally):
   ```env
   REACT_APP_API_URL=https://your-production-backend.com/api
   REACT_APP_API_TOKEN=your_strapi_api_token
   ```

2. **Rebuild the Frontend**:
   ```bash
   cd client
   npm run build
   ```

3. **Deploy the New Build**:
   - Upload the `client/build/` folder to your hosting platform
   - OR trigger a new deployment if using CI/CD

4. **For Backend** (if not already set):
   ```env
   DATABASE_SSL=true  # for production with SSL
   DATABASE_SSL=false # for local development
   ```

## Why This Happened

### React Environment Variables at Build Time
React apps embed environment variables during the build process (`npm run build`). This means:

1. If you build locally with dev env vars → Production gets dev URLs
2. If you build on CI/CD without env vars → Production gets undefined
3. Environment variables MUST be set BEFORE building

### The Deployment Flow Should Be:
```
Set Env Vars → Build App → Deploy Build
```

NOT:
```
Build App → Deploy → Set Env Vars ❌
```

## Verification Steps

After rebuilding and deploying:

1. **Check Browser Console**: 
   - Open DevTools → Network tab
   - Look for API calls to `/products`
   - Verify they're calling the correct backend URL

2. **Test API Directly**:
   ```bash
   curl -H "Authorization: Bearer YOUR_TOKEN" \
     https://your-backend.com/api/products?populate=*
   ```

3. **Check Strapi Permissions**:
   - Login to Strapi admin
   - Settings → Roles → Public
   - Ensure Product `find` and `findOne` are checked

4. **Verify Environment Variables**:
   - In your hosting platform dashboard
   - Check that `REACT_APP_API_URL` and `REACT_APP_API_TOKEN` are set

## Common Mistakes to Avoid

1. ❌ Setting env vars AFTER building
2. ❌ Using different env var names (must start with `REACT_APP_`)
3. ❌ Forgetting to rebuild after changing env vars
4. ❌ Not deploying the new build folder
5. ❌ Wrong API token or missing permissions in Strapi

## Files Modified

- ✅ `client/src/components/FeaturedProducts/FeaturedProducts.jsx`
- ✅ `client/src/components/TrendingProducts/TrendingProducts.jsx`
- ✅ `backend/config/database.js`
- ✅ `DEPLOYMENT.md` (created)
- ✅ `FIXES_APPLIED.md` (this file, created)

---

**Status**: Code fixes applied. Rebuild required for production deployment.

