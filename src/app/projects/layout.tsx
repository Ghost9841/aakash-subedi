import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Aakash Subedi",
  description: "Explore Aakash Subedi's portfolio of web development projects and applications",
  keywords: ["projects", "portfolio", "web applications", "react", "nextjs"],
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="projects-layout">
      {children}
    </section>
  );
}