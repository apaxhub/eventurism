# Eventurism — Full-Stack Next.js Website

## Tech Stack
Next.js 14 App Router · TypeScript · Tailwind CSS · Prisma (MongoDB) · NextAuth.js · Cloudinary · TipTap

## Quick Start

### 1. Install
```bash
npm install
npx prisma generate
```

### 2. Environment Variables — fill in `.env.local`
```env
DATABASE_URL="mongodb+srv://user:pass@cluster.mongodb.net/eventurism"
NEXTAUTH_SECRET="generate-with: openssl rand -base64 32"
NEXTAUTH_URL="http://localhost:3000"
CLOUDINARY_CLOUD_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your_cloud_name"
```

### 3. Seed Database
```bash
npm run dev
# then in another terminal:
curl -X POST http://localhost:3000/api/seed
```

**Admin login after seed:**
- Email: `admin@eventurism.com`
- Password: `Eventurism@Admin2025`

### 4. Run
```bash
npm run dev   # http://localhost:3000
```

---

## Pages
| Route | Description |
|-------|-------------|
| `/` | Homepage with featured packages |
| `/tours` | All packages with category filter |
| `/tours/[slug]` | Individual package detail |
| `/about` | About / brand story |
| `/gallery` | Photo gallery |
| `/contact` | Contact form + map |
| `/admin/login` | Admin login (secured) |
| `/admin/dashboard` | Stats overview |
| `/admin/packages` | Manage packages |
| `/admin/packages/new` | Create package |
| `/admin/packages/[id]` | Edit package |
| `/admin/enquiries` | View & manage enquiries |

## API Routes
| Endpoint | Methods | Auth |
|----------|---------|------|
| `/api/packages` | GET, POST | POST requires admin |
| `/api/packages/[id]` | GET, PATCH, DELETE | PATCH/DELETE require admin |
| `/api/enquiries` | GET, POST | GET requires admin |
| `/api/enquiries/[id]` | PATCH, DELETE | requires admin |
| `/api/upload` | POST | requires admin |
| `/api/seed` | POST | dev only |

## Image Rules
- Max 5 images per package (1 cover + 4 gallery)
- Max 2MB per image
- Formats: JPEG, PNG, WebP
- Stored in Cloudinary folder: `eventurism/packages`

## Security
- Passwords hashed with bcrypt (12 rounds)
- JWT sessions, 8h expiry
- Client-side rate limiting (5 attempts, 30s lockout)
- Middleware route protection on all `/admin/*` paths
- Admin pages are `noindex, nofollow`

## Deploy to Vercel
```bash
vercel --prod
```
Set all env vars from `.env.local` in your Vercel project settings.
