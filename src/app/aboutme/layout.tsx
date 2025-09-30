import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me - Aakash Subedi",
  description: "Learn more about Aakash Subedi's background, skills, and journey in web development",
  keywords: ["about", "background", "experience", "web developer"],
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="about-layout">
      {children}
    </section>
  );
}