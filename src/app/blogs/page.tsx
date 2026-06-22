'use client'
import Link from "next/link"
import { FaSearch, FaCalendarAlt, FaClock } from 'react-icons/fa'
import React, { useState } from "react"

const blogPosts = [
  {
    id: "getting-started-nextjs",
    question: "How do I get started with Next.js as a full-stack developer?",
    excerpt: "A complete guide to setting up your first Next.js application with TypeScript, Tailwind CSS, and understanding the App Router.",
    date: "2024-02-01",
    category: "Next.js",
    readTime: "8 min",
    tags: ["Next.js", "TypeScript", "Full Stack"],
  },
  {
    id: "dark-mode-tailwind",
    question: "How do I implement dark mode in my Next.js app using Tailwind CSS?",
    excerpt: "Step-by-step guide to adding dark mode support with Tailwind CSS, including theme switching and persistence with localStorage.",
    date: "2024-01-28",
    category: "CSS",
    readTime: "6 min",
    tags: ["Tailwind CSS", "Dark Mode", "Next.js"],
  },
  {
    id: "api-routes-nextjs",
    question: "What are API routes in Next.js and how do I use them effectively?",
    excerpt: "Understanding server-side API endpoints, middleware, and best practices for building robust APIs in Next.js.",
    date: "2024-01-20",
    category: "Backend",
    readTime: "10 min",
    tags: ["API Routes", "Backend", "Next.js"],
  },
  {
    id: "react-hooks-explained",
    question: "What are React Hooks and how do I use them in my projects?",
    excerpt: "A deep dive into useState, useEffect, useContext, and custom hooks with practical examples from real projects.",
    date: "2024-01-15",
    category: "React",
    readTime: "12 min",
    tags: ["React", "Hooks", "State Management"],
  },
  {
    id: "state-management-redux",
    question: "How do I manage state in large React applications with Redux?",
    excerpt: "Comprehensive guide to Redux Toolkit, state management patterns, and handling complex application state.",
    date: "2024-01-10",
    category: "State Management",
    readTime: "15 min",
    tags: ["Redux", "React", "State Management"],
  },
  {
    id: "ecommerce-nextjs",
    question: "How do I build a full-featured e-commerce website with Next.js?",
    excerpt: "Building a complete e-commerce platform with Next.js, payment integration (Stripe, Esewa), and database management.",
    date: "2024-01-05",
    category: "E-commerce",
    readTime: "20 min",
    tags: ["E-commerce", "Next.js", "Stripe"],
  },
  {
    id: "mobile-app-expo",
    question: "How do I build mobile apps with React Native and Expo?",
    excerpt: "A practical guide to developing cross-platform mobile applications using React Native, Expo, and best practices.",
    date: "2023-12-28",
    category: "Mobile",
    readTime: "14 min",
    tags: ["React Native", "Expo", "Mobile Development"],
  },
  {
    id: "debugging-react",
    question: "How do I effectively debug React applications?",
    excerpt: "Tools, techniques, and strategies for debugging React apps, including React DevTools, error boundaries, and common pitfalls.",
    date: "2023-12-20",
    category: "Debugging",
    readTime: "10 min",
    tags: ["Debugging", "React", "Developer Tools"],
  },
  {
    id: "performance-optimization",
    question: "How do I optimize Next.js applications for better performance?",
    excerpt: "Performance optimization techniques including image optimization, code splitting, lazy loading, and Core Web Vitals.",
    date: "2023-12-15",
    category: "Performance",
    readTime: "18 min",
    tags: ["Performance", "Optimization", "Core Web Vitals"],
  },
  {
    id: "database-mongodb",
    question: "How do I integrate MongoDB with Next.js applications?",
    excerpt: "Setting up MongoDB, creating schemas, performing CRUD operations, and handling database connections in Next.js.",
    date: "2023-12-10",
    category: "Database",
    readTime: "12 min",
    tags: ["MongoDB", "Database", "Next.js"],
  },
  {
    id: "typescript-nextjs",
    question: "Why should I use TypeScript with Next.js and how do I get started?",
    excerpt: "Benefits of TypeScript, setting up types, interfaces, and common patterns in Next.js applications.",
    date: "2023-12-05",
    category: "TypeScript",
    readTime: "9 min",
    tags: ["TypeScript", "Next.js", "JavaScript"],
  },
  {
    id: "ui-ux-design",
    question: "How do I improve UI/UX in my web applications?",
    excerpt: "UI/UX principles, design patterns, and practical tips for creating user-centered digital experiences.",
    date: "2023-12-01",
    category: "Design",
    readTime: "11 min",
    tags: ["UI/UX", "Design", "User Experience"],
  },
  {
    id: "authentication-nextjs",
    question: "How do I implement authentication in Next.js applications?",
    excerpt: "Complete guide to authentication using NextAuth.js, JWT, and session management with real-world examples.",
    date: "2023-11-25",
    category: "Security",
    readTime: "16 min",
    tags: ["Authentication", "Security", "Next.js"],
  },
  {
    id: "deployment-options",
    question: "What are the best deployment options for Next.js applications?",
    excerpt: "Comparing Vercel, Netlify, AWS, and other deployment platforms with pros, cons, and pricing considerations.",
    date: "2023-11-20",
    category: "Deployment",
    readTime: "13 min",
    tags: ["Deployment", "Vercel", "AWS"],
  },
  {
    id: "data-fetching",
    question: "How do I fetch data in Next.js: SSR, SSG, or ISR?",
    excerpt: "Understanding different data fetching methods in Next.js and when to use each approach.",
    date: "2023-11-15",
    category: "Data Fetching",
    readTime: "12 min",
    tags: ["SSR", "SSG", "ISR", "Data Fetching"],
  },
]

const categories = ['all', ...new Set(blogPosts.map(post => post.category))]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    const matchesSearch = post.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <main className="min-h-screen bg-white dark:bg-dark text-dark dark:text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            Questions & Answers
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-base">
            Common questions about web development
          </p>
        </header>

        {/* Search & Filter */}
        <div className="space-y-4 mb-10">
          {/* Search Bar */}
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 
                bg-white dark:bg-dark focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                text-sm placeholder:text-gray-400"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1 rounded-full text-xs font-medium capitalize transition-colors
                  ${selectedCategory === category 
                    ? 'bg-dark text-light dark:bg-light dark:text-dark' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
        </p>

        {/* Blog List */}
        <div className="space-y-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">No posts found</p>
            </div>
          ) : (
            filteredPosts.map((post) => (
              <Link key={post.id} href={`/blogs/${post.id}`}>
                <article className="group p-4 rounded-lg border border-gray-200 dark:border-gray-700 
                  hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
                  
                  {/* Meta info */}
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                    <span className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-lg sm:text-xl font-semibold mt-1.5 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.question}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-2.5">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Link>
            ))
          )}
        </div>
      </div>
    </main>
  )
}