import { Box } from "@mui/material";
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
          <h3>Frontend Engineer</h3>
          <span className="animate" style={{ ["--i" as any]: 3 }}></span>
        </div>
        <p>
          Frontend Engineer with hands-on experience building scalable, 
          production-grade React and TypeScript applications. Specializing in 
          modern AI platforms, brand monitoring, and complex admin dashboards.
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
      <div className="home-imageHover">
        <Box sx={{ height: "80%", overflow: "hidden", zIndex: "-1" }}>
          <img
            src="/images/MyPhoto5.webp"
            alt="Mahmoud Khaled"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
      </div>
      <span className="animate show-img" style={{ ["--i" as any]: 7 }}></span>
    </section>
  );
}
