# Modern Portfolio Website

A sleek, animated portfolio website built with Next.js 15, Sanity CMS, and Tailwind CSS. Features a beautiful UI with smooth animations, dark mode support, and a fully customizable content management system with visual editing capabilities.

Original template and UI design by [Dillion Verma](https://github.com/dillionverma), creator of [Magic UI](https://magicui.design/) - an amazing tool for building beautiful UI components. Enhanced with Sanity's visual editing integration and upgraded to Next.js 15 for a seamless content management experience.

![License](https://img.shields.io/badge/license-MIT-blue.svg)

## ✨ Features

- **Modern Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Content Management**: Powered by Sanity CMS with visual editing support
- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark Mode**: Built-in dark mode support with system preference detection
- **Animations**: Smooth animations and transitions using Framer Motion
- **SEO Optimized**: Built-in SEO support with dynamic meta tags
- **Type Safe**: Full TypeScript support throughout the codebase
- **Live Preview**: Real-time content preview with Sanity Studio integration
- **Visual Editing**: Integrated Sanity's visual editing capabilities for intuitive content management

## 🚀 Quick Start

1. Clone the repository:
   `git clone https://github.com/lukef7fywmrp/next-sanity-portfolio.git`

2. Install pnpm if you haven't already:
   `npm install -g pnpm`

3. Install dependencies:
   `pnpm install`

4. Create a `.env.local` file in the root directory with your Sanity credentials:

   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID="your-project-id"
   NEXT_PUBLIC_SANITY_DATASET="your-dataset"
   NEXT_PUBLIC_BASE_URL="your-base-url"
   SANITY_API_TOKEN="your-api-token"
   SANITY_API_READ_TOKEN="your-api-read-token"
   ```

5. Run the development server:
   pnpm dev

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Tech Stack

- [Next.js 15](https://nextjs.org/) - React Framework
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Sanity CMS](https://www.sanity.io/) - Content Management with Visual Editing
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Radix UI](https://www.radix-ui.com/) - UI Components
- [Lucide Icons](https://lucide.dev/) - Icons
- [next-themes](https://github.com/pacocoursey/next-themes) - Dark Mode

## 📝 Project Structure

src/

├── app/ # Next.js app router

├── components/ # React components

├── lib/ # Utility functions

├── sanity/ # Sanity configuration and schemas

└── types/ # TypeScript type definitions

## 🎨 Customization

### Content Management

All content can be managed through Sanity Studio with visual editing capabilities. The studio is accessible at `/studio` route when running locally.

### Theme

Colors and other theme variables can be customized in `src/app/globals.css`.

### Components

The project uses a component-based architecture with [shadcn/ui](https://ui.shadcn.com/) as a base. All components are customizable and can be found in the `src/components` directory.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- [Dillion Verma](https://github.com/dillionverma) for the original template and UI design
- [Magic UI](https://magicui.design/) for inspiring beautiful UI components
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Sanity](https://www.sanity.io/) for the amazing CMS and visual editing capabilities
- [Vercel](https://vercel.com/) for hosting and deployment

---

Built with ❤️ using Next.js and Sanity
