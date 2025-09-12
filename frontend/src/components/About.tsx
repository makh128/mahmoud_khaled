import { useState } from "react";

export default function About() {
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <section className={`about ${expanded ? "active" : ""}`} id="about">
      <h1 className="heading">
        About <span>Me</span>
        <span className="animate scroll" style={{ ["--i" as any]: 1 }}></span>
      </h1>
      <div className="about-image">
        <img src="/images/about.jpg" />
        <span className="circle-span"></span>
        <span className="animate scroll" style={{ ["--i" as any]: 2 }}></span>
      </div>
      <div className="about-content">
        <h3>
          What I Do!
          <span className="animate scroll" style={{ ["--i" as any]: 3 }}></span>
        </h3>
        <div className="paragraphs">
          <p>
            As a dedicated Front-End Developer, I special ize in creating modern,
            responsive, and user-friendly web applications using cutting-edge
            technologies. My expertise includes crafting pixel-perfect designs
            with CSS & CSS3, Bootstrap, React Bootstrap, and MUI to ensure
            visually appealing and responsive interfaces. I leverage JavaScript
            and TypeScript to build dynamic and scalable applications, with a
            strong focus on React.js for creating interactive and efficient user
            experiences. Additionally, I utilize React Query for seamless data
            fetching and state management, along with Redux & Redux Toolkit to
            manage complex application states effectively. My goal is to deliver
            high-quality, performant, and maintainable solutions that meet both
            user and business needs.
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
        <div className="btn-box btns">
          <a
            href="#about"
            className="btn"
            id="red-more"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              setExpanded((v: boolean) => !v);
            }}
          >
            {expanded ? "Show Less" : "Read More"}
          </a>
          <span className="animate scroll" style={{ ["--i" as any]: 5 }}></span>
        </div>
      </div>
    </section>
  );
}
