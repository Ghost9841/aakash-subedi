import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        The blog post you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link 
        href="/blogs" 
        className="px-6 py-2 bg-dark text-light dark:bg-light dark:text-dark rounded-lg hover:opacity-80 transition-opacity"
      >
        Back to Blogs
      </Link>
    </div>
  )
}