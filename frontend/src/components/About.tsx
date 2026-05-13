import { Box } from "@mui/material";

export default function About() {
  return (
    <section className="about" id="about">
      <h1 className="heading">
        About <span>Me</span>
        <span className="animate scroll" style={{ ["--i" as any]: 1 }}></span>
      </h1>
      <div className="about-image">
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            width: "80%",
            borderRadius: "50%",
            overflow: "hidden",
            backgroundColor: " var(--main-color)",
            transition: "0.5s",
            pt: 2,
          }}
        >
          <img src="/images/MyPhoto5.webp" style={{ width: "100%" }} />
        </Box>
        <span className="circle-span"></span>
        <span className="animate scroll" style={{ ["--i" as any]: 2 }}></span>
      </div>
      <div className="about-content">
        <h3>
          What I Do!
          <span className="animate scroll" style={{ ["--i" as any]: 3 }}></span>
        </h3>
        <div className="paragraphs">
          <p style={{ lineHeight: "28px" }}>
            Frontend Engineer with hands-on experience building scalable,
            production-grade React and TypeScript applications. Proven track
            record of delivering feature-rich SPA platforms (AI Tooling, Brand
            Monitoring, Admin Dashboards) using modern tooling including Vite,
            TanStack React Query, Tailwind CSS, Radix UI, and Material UI.
            Comfortable working across the full frontend stack — from
            architecture design and API integration to CI/CD pipelines with
            Docker and Nginx. Contributor to multi-developer projects following
            Domain-Driven Design and Feature-First architectural patterns.
          </p>
          <p className="hidden-para">
            To streamline development and collaboration, I work with a variety
            of Technical Tools such as Git & GitHub for version control, Visual
            Studio and Visual Studio Code for coding, Postman for API testing,
            pgAdmin for database management, Swagger for API documentation, and
            Microsoft Jira for project management and task tracking. My goal is
            to deliver high-quality, performant, and maintainable solutions that
            meet both user and business needs.
          </p>
          <span className="animate scroll" style={{ ["--i" as any]: 4 }}></span>
        </div>
      </div>
    </section>
  );
}
