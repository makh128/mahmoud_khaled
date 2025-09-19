import { Typography } from "@mui/material";

export default function Projects() {
  const Projects = [
    {
      name: "Expertex.ai",
      description:
        "Expertex AI solution helps content creators and businesses create, monitor, and automate high-quality digital content.",
      features: [
        {
          title: "Developed the main chat interface",
          details: ["Ensuring a smooth user experience for AI interactions."],
        },
        {
          title: "Built AI content suites",
          details: [
            "Text Suite  – structured editor for prompts & responses.",
            "Image Suite – image generation and management UI.",
            "Video Suite – video creation workflow with customizable settings.",
            "Voice Suite – integrated voice input/output features.",
            "Teams – dashboard for manage team plan and members.",
          ],
        },
        {
          title: "Implemented the Library system",
          details: ["Storing and organizing generated assets."],
        },
        {
          title: "Worked on Workflow feature",
          details: [
            "Enabled users to chain actions across multiple AI tools for automation.",
          ],
        },
        {
          title: "Contributed to additional pages and UI/UX improvements",
          details: [],
        },
        {
          title: "Tech Stack",
          details: [
            "React.js, TypeScript, Material-UI (MUI), API integrations, state management, modern frontend best practices.",
          ],
        },
      ],
    },
    {
      name: "Expertex.ai",
      description:
        "An advanced AI collaboration platform that provides text, image, video, and voice generation suites, a workflow system, and a shared library for managing content.",
      features: [
        {
          title: "Developed the main chat interface",
          details: ["Ensuring a smooth user experience for AI interactions."],
        },
      ],
    },
  ];

  return (
    <section className="education" id="projects">
      <h1 className="heading">
        My <span>Projects</span>
        <span className="animate scroll" style={{ ["--i" as any]: 1 }}></span>
      </h1>
      <div className="education-row">
        <div className="education-column">
          <div className="education-box">
            {Projects.map((n) => (
              <div className="education-content" key={n.name}>
                <div className="content">
                  <h3>{n.name}</h3>
                  <Typography sx={{ mt: 1 }}>{n.description}</Typography>
                  <ol style={{ marginTop: "8px", paddingLeft: "20px" }}>
                    {n.features.map((f, idx) => (
                      <li key={idx}>
                        <Typography variant="body2" fontWeight="bold">
                          {f.title}
                        </Typography>
                        {f.details.length > 0 && (
                          <ul style={{ marginTop: "4px", paddingLeft: "20px" }}>
                            {f.details.map((d, i) => (
                              <li key={i}>
                                <Typography variant="body2">{d}</Typography>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ol>
                </div>
                <span
                  className="animate scroll"
                  style={{ ["--i" as any]: 1 }}
                ></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
