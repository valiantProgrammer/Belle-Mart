# 🌟 Quick Start - Database Seeding

## TL;DR

```bash
# Load all dummy data
npm run seed:all
```

That"s it! Your database now has 22 products ready.

## What Gets Loaded?

### 📦 12 Regular Products
- Electronics, Fashion, Sports, Home & Kitchen
- Realistic product data with images, ratings, stock

### 💰 10 Special Deals
- 56-67% discounts
- Premium products at great prices
- Deal expiration dates

## Individual Commands

```bash
# Products only
npm run seed:products

# Deals only
npm run seed:deals

# Both (recommended)
npm run seed:all
```

## Direct Script Execution

```bash
# From website directory
node scripts/seed-products.js
node scripts/seed-deals.js
```

## What You"ll See

```
🔄 Attempting to connect to MongoDB...
✅ Connected to MongoDB successfully
✨ Successfully inserted 12 products

📊 Products Summary:
1. Wireless Bluetooth Headphones
   Price: $89.99 | Stock: 45 | Rating: 4.8⭐
...
✅ Database seeding completed successfully!
```

## Requirement

Must have `.env.local` with:
```env
MONGO_URI=your_mongodb_connection_string
DB_NAME=ecommerce
```

## Errors?

See `website/scripts/SEEDING_GUIDE.md` for troubleshooting.

## Data Info

**Products Collection**:
- 12 regular products marked `isDeal: false`
- Used for `/api/products` endpoint

**Deals Collection**:
- Same collection as products
- 10 items marked `isDeal: true`
- Used for `/api/deals` endpoint

## 🎯 Ready!

After running `npm run seed:all`:
- ✅ Database populated
- ✅ Ready for development
- ✅ `/products` page will show items
- ✅ `/deals` page will show discounts
- ✅ Cart/checkout ready to test

---

For detailed info: Read `website/scripts/SEEDING_GUIDE.md`
