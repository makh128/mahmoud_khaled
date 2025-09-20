import { Box, IconButton, Tooltip, Typography, Zoom } from "@mui/material";
import CallMadeRoundedIcon from "@mui/icons-material/CallMadeRounded";

export default function Projects() {
  const Projects = [
    {
      name: "Expertex.ai",
      description:
        "Expertex AI solution helps content creators and businesses create, monitor, and automate high-quality digital content.",
      url: "https://expertex.ai/",
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
  ];

  const goToProjectWebsite = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
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
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <h3>{n.name}</h3>
                    <Tooltip
                      title={`Go to ${n.name}`}
                      placement="right"
                      arrow
                      slots={{
                        transition: Zoom,
                      }}
                      slotProps={{
                        tooltip: {
                          sx: {
                            backgroundColor: "var(--bg-color)",
                            fontSize: "1.2rem",
                          },
                        },
                        arrow: {
                          sx: {
                            color: "var(--bg-color)",
                          },
                        },
                      }}
                    >
                      <IconButton
                        sx={{
                          color: "var(--text-color)",
                          fontSize: "1.5rem",
                          "&:hover": {
                            color: "var(--main-color)",
                          },
                        }}
                        onClick={() => goToProjectWebsite(n.url)}
                      >
                        <CallMadeRoundedIcon />
                      </IconButton>
                    </Tooltip>
                  </Box>
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
