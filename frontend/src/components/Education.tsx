export default function Education() {
  return (
    <section className="education" id="education">
      <h1 className="heading">
        My <span>Journey</span>
        <span className="animate scroll" style={{ ["--i" as any]: 1 }}></span>
      </h1>
      <div className="education-row">
        <div className="education-column">
          <h3 className="title">
            Eduction
            <span
              className="animate scroll"
              style={{ ["--i" as any]: 1 }}
            ></span>
          </h3>
          <div className="education-box">
            <div className="education-content">
              <div className="content">
                <div className="year">
                  <i className="fa-regular fa-calendar"></i> 2021 - 2025
                </div>
                <h3>Bachelor's Degree - College of Languages</h3>
                <p>
                  I graduated in 2025 from the College of Languages with a
                  bachelor's degree. My studies equipped me with strong
                  linguistic and communication skills, as well as a deep
                  understanding of cultural contexts.
                </p>
              </div>
            </div>
            <div className="education-content">
              <div className="content">
                <div className="year">
                  <i className="fa-regular fa-calendar"></i> 2022 - Present
                </div>
                <h3>Relevant Coursework</h3>
                <p>
                  I have completed courses in JavaScript, ReactJS, and other
                  relevant technologies such as HTML, CSS, Node.js, and database
                  management. These courses have provided me with a solid
                  foundation in web development and programming.
                </p>
              </div>
            </div>
            <span
              className="animate scroll"
              style={{ ["--i" as any]: 6 }}
            ></span>
          </div>
        </div>
        <div className="education-column">
          <h3 className="title">
            Work Experience
            <span
              className="animate scroll"
              style={{ ["--i" as any]: 2 }}
            ></span>
          </h3>
          <div className="education-box">
            <div className="education-content">
              <div className="content">
                <div className="year">
                  <i className="fa-regular fa-calendar"></i> January 2026 - Present
                </div>
                <h3>Frontend Engineer - Skillizer LLC</h3>
                <p>
                  Lead the development of the Lintari platform, focusing on modern AI-powered brand monitoring. 
                  Participate in Agile (Scrum) workflows using Jira and ClickUp. Optimized global application 
                  performance via Azure Front Door and CDN. Managed real-time messaging with Azure SignalR.
                </p>
              </div>
            </div>
            <div className="education-content">
              <div className="content">
                <div className="year">
                  <i className="fa-regular fa-calendar"></i> May 2025 - Present
                </div>
                <h3>Frontend Engineer - ExpertexAI</h3>
                <p>
                  Architected a high-performance React 19 + Vite 7 SPA following DDD and Feature-First principles. 
                  Led development of 19+ self-contained feature modules. Integrated Azure SignalR for real-time 
                  updates and managed multi-region delivery via Azure Front Door & CDN.
                </p>
              </div>
            </div>
            <span
              className="animate scroll"
              style={{ ["--i" as any]: 3 }}
            ></span>
          </div>
        </div>
      </div>
    </section>
  );
}
