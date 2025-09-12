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
                  <i className="fa-regular fa-calendar"></i> Feb 2024 - Present
                </div>
                <h3>Frontend Developer - ExpertexAi</h3>
                <p>
                  Front-End Developer at ExpertexAi, focused on building modern,
                  responsive, and user-friendly web applications. I work mainly
                  with React.js, TypeScript, and JavaScript, and I use tools
                  like MUI, Bootstrap, and CSS3 to create clean and attractive
                  user interfaces. My goal is to build fast, reliable, and
                  easy-to-maintain web apps that meet both user and business
                  needs.
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
