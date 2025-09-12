import { useEffect, useState } from "react";

export default function Hero() {
  const [showTop, setShowTop] = useState<boolean>(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY >= 200);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section className="home show-animate" id="home">
      {showTop && (
        <button
          className="icon-top"
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
        >
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      )}
      <div className="home-content">
        <h1>
          Hi, I'am <span>Mahmoud</span>
          <span className="animate" style={{ ["--i" as any]: 2 }}></span>
        </h1>
        <div className="text-animate">
          <h3>Frontend Developer</h3>
          <span className="animate" style={{ ["--i" as any]: 3 }}></span>
        </div>
        <p>
          Hi, I'm <span className="dev-name">Mahmoud Khaled</span>, a passionate
          <span className="dev-name"> Front-End Developer</span> specializing in
          building modern, responsive, and user-friendly web applications. With
          a strong focus on React.js, I bring ideas to life by crafting seamless
          and interactive user experiences.
          <span className="animate" style={{ ["--i" as any]: 4 }}></span>
        </p>
        <div className="btn-box">
          <a href="#about" className="btn">
            Hire Me
          </a>
          <a href="#contact" className="btn">
            Let's Talk
          </a>
          <span className="animate" style={{ ["--i" as any]: 5 }}></span>
        </div>
        <div className="social-icons">
          <a href="https://github.com/makh128" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/mahmoud-khaled128"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <span className="animate" style={{ ["--i" as any]: 6 }}></span>
        </div>
      </div>
      <div className="home-imageHover"></div>
      <span className="animate show-img" style={{ ["--i" as any]: 7 }}></span>
    </section>
  );
}
