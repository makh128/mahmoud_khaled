import { useMemo } from "react";

interface SkillGroup {
  title: string;
  items: string[];
}

export default function Skills() {
  const groups = useMemo<SkillGroup[]>(
    () => [
      {
        title: "FrontEnd & Frameworks",
        items: [
          "React 19",
          "TypeScript",
          "JavaScript (ES2022+)",
          "Redux Toolkit",
          "TanStack React Query",
          "Vite 7",
          "MUI v7",
          "Tailwind CSS",
          "Framer Motion",
          "Radix UI",
          "dnd-kit",
          "HTML5 & CSS3",
        ],
      },
      {
        title: "Data & State Management",
        items: [
          "React Hook Form",
          "Zod",
          "Axios",
          "Azure SignalR",
          "JWT Auth & RBAC",
          "Domain-Driven Design",
          "PostgreSQL",
          "SQL",
          "jwt-decode",
        ],
      },
      {
        title: "Visualization & Tools",
        items: [
          "Recharts",
          "ApexCharts",
          "MUI X Charts",
          "Git & GitHub",
          "Postman",
          "Swagger",
          "ESLint & Prettier",
          "Figma",
        ],
      },
      {
        title: "Build, Testing & DevOps",
        items: [
          "Vitest",
          "React Testing Library",
          "MSW (Mock Service Worker)",
          "Docker (Multi-stage)",
          "Nginx",
          "GitHub Actions",
          "Azure (Front Door, CDN, Storage)",
          "Render & Vercel",
          "Agile (Scrum/Kanban)",
          "Jira & ClickUp",
        ],
      },
      {
        title: "Languages",
        items: ["Arabic: Native", "English: Proficient"],
      },
    ],
    []
  );

  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        My <span>Skills</span>
        <span className="animate scroll" style={{ ["--i" as any]: 1 }}></span>
      </h2>
      <div className="skills-row">
        {groups.map((g, gi) => (
          <div className="skills-column" key={g.title}>
            <h3 className="title">
              {g.title}
              <span
                className="animate scroll"
                style={{ ["--i" as any]: gi + 2 }}
              ></span>
            </h3>
            <div className="skills-box">
              <div className="skills-content">
                {g.items.map((it) => (
                  <div className="progress" key={it}>
                    <h3>{it}</h3>
                  </div>
                ))}
              </div>
              <span
                className="animate scroll"
                style={{ ["--i" as any]: gi + 3 }}
              ></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
