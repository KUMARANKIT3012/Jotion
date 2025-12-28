# Jotion - Notion Clone 📝

A full-stack Notion clone built with modern web technologies, featuring real-time collaboration, rich text editing, and document management capabilities.

![Jotion Screenshot](https://img.shields.io/badge/Status-In%20Development-yellow)
![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.x-38B2AC?logo=tailwind-css)

## 🚀 Features

- ⚡ **Real-time Collaboration** - Work together with real-time updates
- 📝 **Rich Text Editor** - Advanced text editing with formatting options
- 🔐 **Authentication** - Secure user authentication with Clerk
- 🎨 **Modern UI/UX** - Clean and intuitive interface with dark/light mode
- 📱 **Responsive Design** - Works seamlessly on all devices
- 🗄️ **Document Management** - Create, organize, and manage your documents
- ⚡ **Fast Performance** - Optimized for speed and user experience

## 🛠️ Tech Stack

### Frontend
- **[Next.js 16.1.1](https://nextjs.org/)** - React framework for production
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful icons
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme switching

### Backend & Database
- **[Convex](https://convex.dev/)** - Real-time backend platform
- **[Clerk](https://clerk.dev/)** - Authentication and user management

### UI Components
- **[shadcn/ui](https://ui.shadcn.com/)** - Reusable component library
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** or **pnpm**
- **Convex account** for backend services
- **Clerk account** for authentication

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/KUMARANKIT3012/Jotion.git
cd notion-clone
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Environment Variables Setup

Create a `.env.local` file in the root directory and add your environment variables:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Convex
CONVEX_DEPLOYMENT=your_convex_deployment_id
NEXT_PUBLIC_CONVEX_URL=your_convex_url
```

> ⚠️ **Security Note**: Never commit your `.env` files to version control. These files contain sensitive information.

### 4. Set up Convex

```bash
npx convex dev
```

### 5. Configure Clerk

1. Create a new application in your [Clerk Dashboard](https://dashboard.clerk.dev/)
2. Configure your sign-in and sign-up pages
3. Add your Clerk keys to your environment variables

### 6. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## 🏗️ Project Structure

```
notion-clone/
├── app/                    # Next.js App Router
│   ├── (main)/            # Main application pages
│   │   ├── _components/   # Private components for main layout
│   │   └── (routes)/      # Protected routes
│   ├── (marketing)/       # Marketing/landing pages
│   │   └── _components/   # Marketing page components
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable UI components
│   ├── ui/               # shadcn/ui components
│   └── providers/        # Context providers
├── convex/               # Convex backend configuration
│   ├── _generated/       # Auto-generated types and API
│   └── auth.config.js    # Authentication configuration
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── public/              # Static assets
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. Push your code to GitHub
2. Import your project to Vercel
3. Add your environment variables in the Vercel dashboard
4. Deploy!

### Other Deployment Options

- **Netlify**
- **Railway**
- **Docker** (create a Dockerfile for containerized deployment)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Convex](https://convex.dev/) for the real-time backend
- [Clerk](https://clerk.dev/) for authentication
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful components
- [Notion](https://notion.so/) for the inspiration

## 📞 Support

If you have any questions or need help, please:

1. Check the [Issues](https://github.com/KUMARANKIT3012/Jotion/issues) page
2. Create a new issue if your question isn't already answered
3. Join our community discussions

---

**Made with ❤️ by [KUMARANKIT3012](https://github.com/KUMARANKIT3012)**

> ⭐ If you found this project helpful, please give it a star on GitHub!
