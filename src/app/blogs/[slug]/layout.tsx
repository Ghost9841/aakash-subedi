import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bloog - Aakash Subedi",
  description: "All the blogs written by Aakash Subedi",
  keywords: ["skills", "technologies", "programming languages", "tools", "fullstackdeveloper","frontenddeveloper","backenddeveloper"],
};

export default function BlogsDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="skills-layout">
      {children}
    </section>
  );
}