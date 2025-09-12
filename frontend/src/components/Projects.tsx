export default function Projects() {
  // Placeholder grid; you can replace with real data/cards later
  return (
    <section className="education" id="projects">
      <h1 className="heading">
        My <span>Projects</span>
        <span className="animate scroll" style={{ ["--i" as any]: 1 }}></span>
      </h1>
      <div className="education-row">
        <div className="education-column">
          <div className="education-box">
            {[1, 2, 3].map((n) => (
              <div className="education-content" key={n}>
                <div className="content">
                  <h3>Project {n}</h3>
                  <p>
                    Short description of project {n}. Replace with actual
                    projects.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
