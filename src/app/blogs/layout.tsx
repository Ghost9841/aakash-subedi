import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Aakash Subedi",
  description: "Read technical blogs, tutorials, and thoughts on web development by Aakash Subedi",
  keywords: ["blog", "tutorials", "web development", "programming"],
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="blogs-layout min-h-screen">
      {children}
    </section>
  );
}