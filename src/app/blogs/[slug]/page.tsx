import Link from "next/link"
import { notFound } from "next/navigation"
import { FaArrowLeft, FaCalendarAlt, FaClock } from 'react-icons/fa'

const blogContent: Record<
  string,
  {
    question: string
    date: string
    readTime: string
    category: string
    tags: string[]
    sections: Array<{ type: "answer" | "question"; content: string }>
  }
> = {
  "getting-started-nextjs": {
    question: "How do I get started with Next.js as a full-stack developer?",
    date: "2024-02-01",
    readTime: "8 min",
    category: "Next.js",
    tags: ["Next.js", "TypeScript", "Full Stack"],
    sections: [
      {
        type: "answer",
        content:
          "Next.js is a powerful React framework that makes building full-stack web applications easier. It provides server-side rendering, static site generation, and API routes all in one package.",
      },
      {
        type: "question",
        content: "What are the prerequisites?",
      },
      {
        type: "answer",
        content:
          "You should have a basic understanding of HTML, CSS, and JavaScript. Familiarity with React is helpful but not required. You'll also need Node.js version 18.17 or later installed on your machine.",
      },
      {
        type: "question",
        content: "How do I create my first project with TypeScript?",
      },
      {
        type: "answer",
        content:
          'Run the command "npx create-next-app@latest my-app --typescript --tailwind --eslint" in your terminal. This will set up a new project with TypeScript, Tailwind CSS, and ESLint pre-configured.',
      },
      {
        type: "question",
        content: "What is the App Router and why should I use it?",
      },
      {
        type: "answer",
        content:
          "The App Router is Next.js's newer routing system that supports Server Components, nested layouts, loading states, and error boundaries. It's the recommended approach for new projects.",
      },
      {
        type: "question",
        content: "How do I deploy my Next.js app?",
      },
      {
        type: "answer",
        content:
          "Next.js apps can be deployed to Vercel (recommended), Netlify, AWS, or any platform that supports Node.js. Vercel offers the easiest deployment with automatic preview deployments and serverless functions.",
      },
    ],
  },
  "dark-mode-tailwind": {
    question: "How do I implement dark mode using Tailwind CSS?",
    date: "2024-01-28",
    readTime: "6 min",
    category: "CSS",
    tags: ["Tailwind CSS", "Dark Mode", "Next.js"],
    sections: [
      {
        type: "answer",
        content:
          "Implementing dark mode in a Next.js app with Tailwind CSS is straightforward. You can use Tailwind's built-in dark mode support by adding the 'dark:' prefix to your utility classes.",
      },
      {
        type: "question",
        content: "What are the setup steps?",
      },
      {
        type: "answer",
        content:
          "First, enable dark mode in your tailwind.config.js with 'darkMode: class'. Then, create a ThemeProvider component to manage the theme state and toggle functionality.",
      },
      {
        type: "question",
        content: "How do I persist the user's theme preference?",
      },
      {
        type: "answer",
        content:
          "You can use localStorage to save the user's theme preference. When the app loads, check localStorage for the saved theme and apply it. This prevents the flash of the wrong theme on page load.",
      },
    ],
  },
  "api-routes-nextjs": {
    question: "What are API routes and how do I use them?",
    date: "2024-01-20",
    readTime: "10 min",
    category: "Backend",
    tags: ["API Routes", "Backend", "Next.js"],
    sections: [
      {
        type: "answer",
        content:
          "API routes in Next.js allow you to create backend endpoints within your Next.js application. They run on the server and can handle database operations, authentication, and other server-side logic.",
      },
      {
        type: "question",
        content: "Where do I create API routes?",
      },
      {
        type: "answer",
        content:
          "In the App Router, you create API routes by adding a route.ts or route.js file inside the app directory. For example, app/api/users/route.ts would create an endpoint at /api/users.",
      },
      {
        type: "question",
        content: "What HTTP methods are supported?",
      },
      {
        type: "answer",
        content:
          "You can export functions named GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS. Each function handles the corresponding HTTP method, making it easy to create RESTful APIs.",
      },
    ],
  },
  "react-hooks-explained": {
    question: "What are React Hooks and how do I use them?",
    date: "2024-01-15",
    readTime: "12 min",
    category: "React",
    tags: ["React", "Hooks", "State Management"],
    sections: [
      {
        type: "answer",
        content:
          "React Hooks are functions that let you use state and other React features without writing class components. They were introduced in React 16.8 and have become the standard way to write React components.",
      },
      {
        type: "question",
        content: "What are the most common hooks?",
      },
      {
        type: "answer",
        content:
          "The most commonly used hooks are useState for state management, useEffect for side effects, useContext for context consumption, and useRef for referencing DOM elements.",
      },
    ],
  },
  "state-management-redux": {
    question: "How do I manage state with Redux Toolkit?",
    date: "2024-01-10",
    readTime: "15 min",
    category: "State Management",
    tags: ["Redux", "React", "State Management"],
    sections: [
      {
        type: "answer",
        content:
          "Redux Toolkit is the recommended way to write Redux logic. It simplifies the Redux setup process and reduces boilerplate code. It includes tools like createSlice, createAsyncThunk, and the Redux DevTools integration.",
      },
      {
        type: "question",
        content: "How do I set up Redux Toolkit?",
      },
      {
        type: "answer",
        content:
          "Install @reduxjs/toolkit and react-redux. Create a store using configureStore, wrap your app with the Provider component, and use slices to manage your state.",
      },
    ],
  },
  "ecommerce-nextjs": {
    question: "How do I build an e-commerce website with Next.js?",
    date: "2024-01-05",
    readTime: "20 min",
    category: "E-commerce",
    tags: ["E-commerce", "Next.js", "Stripe"],
    sections: [
      {
        type: "answer",
        content:
          "Building an e-commerce website with Next.js involves several components: product listing, shopping cart, checkout process, payment integration, and order management.",
      },
      {
        type: "question",
        content: "What payment gateways can I integrate?",
      },
      {
        type: "answer",
        content:
          "You can integrate Stripe, PayPal, or local payment gateways like Esewa. Stripe offers the most comprehensive documentation and is widely used in Next.js applications.",
      },
    ],
  },
  "mobile-app-expo": {
    question: "How do I build mobile apps with React Native and Expo?",
    date: "2023-12-28",
    readTime: "14 min",
    category: "Mobile",
    tags: ["React Native", "Expo", "Mobile Development"],
    sections: [
      {
        type: "answer",
        content:
          "Expo is a framework and platform for building React Native applications. It provides a set of tools and services that make mobile app development easier, including a managed workflow and over 40 built-in libraries.",
      },
      {
        type: "question",
        content: "How do I get started with Expo?",
      },
      {
        type: "answer",
        content:
          "Run 'npx create-expo-app my-app' to create a new project. Then use 'npx expo start' to start the development server. You can preview your app on your phone using the Expo Go app.",
      },
    ],
  },
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogContent[params.slug]

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white dark:bg-dark text-dark dark:text-white">
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link 
          href="/blogs" 
          className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-dark dark:hover:text-white transition-colors mb-8"
        >
          <FaArrowLeft className="w-3 h-3" />
          Back to all questions
        </Link>

        {/* Post Header */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
            <span className="flex items-center gap-1">
              <FaCalendarAlt className="w-3.5 h-3.5" />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <FaClock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
            <span className="px-2.5 py-0.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium">
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
            {post.question}
          </h1>

          <div className="flex flex-wrap gap-1.5 mt-3">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400">
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* Content */}
        <div className="space-y-6">
          {post.sections.map((section, index) => (
            <div key={index}>
              {section.type === "question" ? (
                <h2 className="text-xl font-semibold mt-8 mb-3 text-dark dark:text-white">
                  {section.content}
                </h2>
              ) : (
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                  {section.content}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Last updated: {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </footer>
      </div>
    </main>
  )
}

export function generateStaticParams() {
  return Object.keys(blogContent).map((slug) => ({
    slug,
  }))
}