import { Box, IconButton, Tooltip, Typography, Zoom } from "@mui/material";
import CallMadeRoundedIcon from "@mui/icons-material/CallMadeRounded";
import { ProjectsData } from "./ProjectsHelper";

export default function Projects() {
  const goToProjectWebsite = (url: string) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
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
            {ProjectsData.map((n) => (
              <div className="education-content" key={n.name}>
                <div className="content">
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <h3>{n.name}</h3>
                    {n.url && (
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
                    )}
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
