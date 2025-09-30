import Link from "next/link"

const blogPosts = [
  {
    id: "getting-started",
    question: "How do I get started with Next.js?",
    excerpt: "Learn the basics of setting up your first Next.js application and understanding the core concepts.",
    date: "2024-01-15",
  },
  {
    id: "dark-mode",
    question: "How do I implement dark mode in my app?",
    excerpt: "A comprehensive guide to adding dark mode support using Tailwind CSS and Next.js.",
    date: "2024-01-10",
  },
  {
    id: "api-routes",
    question: "What are API routes and how do I use them?",
    excerpt: "Understanding server-side API endpoints in Next.js and how to create them effectively.",
    date: "2024-01-05",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark text-dark dark:text-white">
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4 text-balance">Questions & Answers</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Explore common questions and detailed answers about web development.
          </p>
        </div>

        <div className="space-y-6">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blogs/${post.id}`} className="block group">
              <article className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-gray-400 dark:hover:border-gray-500 transition-colors bg-white dark:bg-dark">
                <time className="text-sm text-dark dark:text-white">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <h3 className="text-2xl font-semibold mt-2 mb-3 group-hover:text-black dark:group-hover:text-gray-300 transition-colors">
                  {post.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{post.excerpt}</p>
              </article>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}