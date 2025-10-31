# Samia's Portfolio

A modern, animated portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- ✨ Smooth animations and transitions
- 🎨 Dark theme with cyan & purple accents
- 📱 Fully responsive design
- ⚡ Fast performance with Next.js
- 🚀 Easy deployment to Vercel
- 🎯 Multiple sections (Hero, About, Projects, Skills, Contact)

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn installed

### Installation

1. Clone or download this repository
2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Edit Your Information

All content is stored in `data/portfolio.ts`. Update this file with:

- Your name, email, phone
- Social media links
- Bio and about text
- Projects (title, description, tech stack, links)
- Experience details
- Skills

### Colors

Modify the color scheme in `tailwind.config.js`:
- `cyan-accent`: Primary accent color
- `purple-accent`: Secondary accent color
- `dark-bg`: Background color
- `dark-card`: Card background color

### Add Project Links

In `data/portfolio.ts`, update the `github` and `demo` links for each project. When you're ready, link to your actual GitHub repos and live demos.

## Deployment to Vercel

1. Push your project to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "New Project" and select your repository
4. Click "Deploy" - Vercel will automatically detect Next.js settings
5. Your portfolio will be live at a URL like `your-project.vercel.app`

### Custom Domain (Optional)

1. In Vercel dashboard, go to Settings → Domains
2. Add your custom domain
3. Update DNS records according to Vercel's instructions

## Project Structure

```
samia-portfolio/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Header navigation
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Projects.tsx        # Projects showcase
│   ├── Skills.tsx          # Skills section
│   └── Contact.tsx         # Contact section
├── data/
│   └── portfolio.ts        # All content data
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## Technologies Used

- **Next.js 14** - React framework
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **lucide-react** - Icon library
- **TypeScript** - Type safety

## Quick Tips

1. **Update links**: Replace `#` with actual GitHub and demo URLs
2. **Add more projects**: Duplicate a project object in `data/portfolio.ts`
3. **Change fonts**: Modify `app/globals.css`
4. **Add sections**: Create new component in `components/` and import in `app/page.tsx`

## Support

For Next.js documentation, visit: https://nextjs.org/docs
For Vercel deployment help: https://vercel.com/docs

---

Happy deploying! 🚀
