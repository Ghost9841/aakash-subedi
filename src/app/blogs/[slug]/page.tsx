import Link from "next/link"
import { notFound } from "next/navigation"

const blogContent: Record<
  string,
  {
    question: string
    date: string
    sections: Array<{ type: "answer" | "question"; content: string }>
  }
> = {
  "getting-started": {
    question: "How do I get started with Next.js?",
    date: "2024-01-15",
    sections: [
      {
        type: "answer",
        content:
          "Next.js is a powerful React framework that makes building web applications easier. To get started, you'll need Node.js installed on your computer. Once you have that, you can create a new Next.js project using the create-next-app command.",
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
        content: "How do I create my first project?",
      },
      {
        type: "answer",
        content:
          'Run the command "npx create-next-app@latest" in your terminal. This will guide you through setting up a new project with all the necessary configurations. You can choose between TypeScript or JavaScript, and select additional features like Tailwind CSS.',
      },
    ],
  },
  "dark-mode": {
    question: "How do I implement dark mode in my app?",
    date: "2024-01-10",
    sections: [
      {
        type: "answer",
        content:
          'Implementing dark mode in a Next.js app with Tailwind CSS is straightforward. You can use Tailwind\'s built-in dark mode support by adding the "dark:" prefix to your utility classes.',
      },
      {
        type: "question",
        content: "What approach should I use?",
      },
      {
        type: "answer",
        content:
          "There are two main approaches: class-based and media-based. The class-based approach gives you more control, allowing users to toggle between themes. The media-based approach automatically follows the user's system preferences.",
      },
      {
        type: "question",
        content: "How do I persist the theme choice?",
      },
      {
        type: "answer",
        content:
          "You can use localStorage to save the user's theme preference. When the app loads, check localStorage for the saved theme and apply it. Make sure to handle the initial load to prevent a flash of the wrong theme.",
      },
    ],
  },
  "api-routes": {
    question: "What are API routes and how do I use them?",
    date: "2024-01-05",
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
          "You can export functions named GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS. Each function handles the corresponding HTTP method. This makes it easy to create RESTful APIs.",
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
    <div className="min-h-screen bg-white dark:bg-dark text-dark dark:text-white">
      <header className="border-b border-dark dark:border-gray-700 bg-white dark:bg-dark sticky top-0 h-full z-10">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between max-w-3xl">
          <Link href="/blog" className="text-dark dark:text-gray-400 hover:text-dark dark:hover:text-white transition-colors">
            ← Back to Blog
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <article>
          <time className="text-sm text-gray-500 dark:text-gray-400">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>

          <h1 className="text-4xl font-bold mt-4 mb-12 text-balance leading-tight">{post.question}</h1>

          <div className="space-y-8">
            {post.sections.map((section, index) => (
              <div key={index}>
                {section.type === "question" ? (
                  <h2 className="text-2xl font-semibold mb-4 text-dark dark:text-white">{section.content}</h2>
                ) : (
                  <p className="text-lg leading-relaxed text-dark dark:text-gray-400">{section.content}</p>
                )}
              </div>
            ))}
          </div>
        </article>
      </main>
    </div>
  )
}

export function generateStaticParams() {
  return Object.keys(blogContent).map((slug) => ({
    slug,
  }))
}