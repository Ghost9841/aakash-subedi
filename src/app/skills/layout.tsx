import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills - Aakash Subedi",
  description: "Technical skills, technologies, and tools mastered by Aakash Subedi",
  keywords: ["skills", "technologies", "programming languages", "tools", "fullstackdeveloper","frontenddeveloper","backenddeveloper"],
};

export default function SkillsLayout({
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