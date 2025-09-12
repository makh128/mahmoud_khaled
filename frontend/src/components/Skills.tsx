import { useMemo } from "react";

interface SkillGroup {
  title: string;
  items: string[];
}

export default function Skills() {
  const groups = useMemo<SkillGroup[]>(
    () => [
      {
        title: "FrontEnd",
        items: [
          "ReactJs",
          "React Query",
          "JavaScript",
          "TypeScript",
          "OOP",
          "Redux & Redux Toolkit",
          "Axios",
          "Vite",
          "HTML & HTML5",
          "CSS & CSS3",
          "Bootstrap",
          "React Bootstrap",
          "MUI",
          "Tailwind CSS",
        ],
      },
      {
        title: "Technical Tools",
        items: [
          "Git & GitHub",
          "Cursor AI",
          "Visual Studio",
          "Visual Studio Code",
          "Postman",
          "pgAdmin",
          "Swagger",
          "Microsoft Jira",
          "Figma",
          "Docker",
        ],
      },
      {
        title: "Personality Skills",
        items: [
          "Problem Solving",
          "Communication",
          "Time Management",
          "Flexibility",
          "Self-Motivation",
          "Team Collaboration",
          "Critical Thinking",
          "Decision Making",
          "Conflict Resolution",
        ],
      },
      {
        title: "Language",
        items: ["English : intermediate", "Arabic: native"],
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
