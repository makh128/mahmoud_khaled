import { useEffect, useState } from "react";

function useActiveSection() {
  const [activeId, setActiveId] = useState<string>("home");
  useEffect(() => {
    const handler = () => {
      const sections = Array.from(document.querySelectorAll("section"));
      const top = window.scrollY;
      for (const sec of sections) {
        const offset = sec.offsetTop - 100;
        const height = sec.offsetHeight;
        if (top >= offset && top < offset + height) {
          setActiveId(sec.id);
          sec.classList.add("show-animate");
        } else {
          sec.classList.remove("show-animate");
        }
      }
      const header = document.querySelector(".header");
      if (header) header.classList.toggle("sticky", window.scrollY > 100);
    };
    window.addEventListener("scroll", handler);
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return activeId;
}

export default function Navbar() {
  const activeId = useActiveSection();
  const [open, setOpen] = useState<boolean>(false);
  useEffect(() => {
    setOpen(false);
  }, [activeId]);
  return (
    <header className="header">
      <div className="logo">
        <a href="#home">
          <span className="year">Mahmoud</span> Khaled
          <span className="animate" style={{ ["--i" as any]: 1 }}></span>
        </a>
      </div>
      <div
        className={`fa-solid ${open ? "fa-x" : "fa-bars"}`}
        id="menu-icon"
        onClick={() => setOpen((v: boolean) => !v)}
      ></div>
      <nav className={`nav-bar ${open ? "active" : ""}`}>
        <a href="#home" className={activeId === "home" ? "active" : ""}>
          Home
        </a>
        <a href="#about" className={activeId === "about" ? "active" : ""}>
          About
        </a>
        {/* <a href="#projects" className={activeId === "projects" ? "active" : ""}>
          Projects
        </a> */}
        <a
          href="#education"
          className={activeId === "education" ? "active" : ""}
        >
          Journey
        </a>
        <a href="#skills" className={activeId === "skills" ? "active" : ""}>
          Skills
        </a>
        <a href="#contact" className={activeId === "contact" ? "active" : ""}>
          Contact
        </a>
        <span className="active-nav"></span>
        <span className="animate" style={{ ["--i" as any]: 2 }}></span>
      </nav>
    </header>
  );
}
