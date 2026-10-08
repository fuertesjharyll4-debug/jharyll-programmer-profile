import "./globals.css";

export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <a href="#home" className="logo">JH.</a>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-text">
          <p className="eyebrow">WELCOME TO MY PORTFOLIO</p>
          <h1>Hi, I'm <span>Jharyll!</span></h1>
          <h2>A College Student & Aspiring Programmer</h2>
          <p>
    Hi! I’m a college student and an aspiring programmer
            who is passionate about learning technology and
            improving my skills in programming. I enjoy exploring
            new ideas, creating simple projects, and learning how
            technology can solve everyday problems. I’m still
            growing as a programmer, but I’m always willing to
            learn, practice, and improve.
          </p>
          <a className="primary-btn" href="#about">Discover More ↓</a>
        </div>

        <div className="flower-art" aria-label="Decorative CSS flowers">
          <div className="sun"></div>
          <div className="flower flower-one">
            <i></i><i></i><i></i><i></i><i></i>
            <b></b>
          </div>
          <div className="flower flower-two">
              <i></i><i></i><i></i><i></i><i></i>
            <b></b>
          </div>
          <div className="flower flower-two">
            <i></i><i></i><i></i><i></i><i></i>
            <b></b>
          </div>
          <div className="stem stem-one"></div>
          <div className="stem stem-two"></div>
          <div className="leaf leaf-one"></div>
          <div className="leaf leaf-two"></div>
          <div className="leaf leaf-three"></div>
          <div className="ground"></div>
        </div>
      </section>

      <section id="about" className="content-section">
        <p className="eyebrow">GET TO KNOW ME</p>
        <h2>About <span>Me</span></h2>
        <p>
              I am a college student who is interested in technology
          and programming. I enjoy learning new things, exploring
          different programming skills, and working on projects
          that help me improve. I may still be learning, but I am
          hardworking, willing to learn, and always trying to
          become better at what I do.
        </p>
        <div className="info-grid">
          <article className="info-card">
            <h3>My Background</h3>
            <p>
              I am a third-year BS Information Technology student
              at Nueva Vizcaya State University.
            </p>
          </article>
          <article className="info-card">
            <h3>My Interests</h3>
            <p>
              Programming, web development, networking, and
              database management.
            </p>
          </article>
          <article
  className="info-card">
            <h3>My Learning Goals</h3>
            <p>
              To strengthen my coding skills, build useful
              projects, and become a better programmer.
            </p>
          </article>
        </div>
      </section>

      <section id="education" className="content-section tinted">
        <p className="eyebrow">MY ACADEMIC JOURNEY</p>
        <h2>Education</h2>
        <article className="education-card">
          <p className="tag">CURRENTLY STUDYING</p>
          <h3>Nueva Vizcaya State University</h3>
          <h4>Bachelor of Science in Information Technology</h4>
          <p>Major in Network and Data Management (NDM)</p>
          <p>Section: 3A · Third Year</p>
  <hr />
          <p>
            I am currently a third-year college student learning
            about programming, networking, database management,
            and other areas of Information Technology.
          </p>
        </article>
      </section>

      <section id="projects" className="content-section">
        <p className="eyebrow">WHAT I'M WORKING ON</p>
        <h2>My Projects</h2>
        <article className="project-card">
          <div className="project-icon">⌘</div>
          <p className="tag">IN PROGRESS</p>
          <h3>Computer Registration System</h3>
          <p>
            A simple computer registration system designed for
            a computer laboratory. It allows students to register
            using their Student ID and record their computer
  usage, including time-in and time-out.
          </p>
          <p>
            The system helps keep track of which students are
            using each computer and makes laboratory monitoring
            more organized.
          </p>
          <div className="tech-list">
            <span>System Development</span>
            <span>Student Registration</span>
            <span>Computer Laboratory</span>
          </div>
        </article>
      </section>

      <section id="contact" className="content-section contact-section">
        <p className="eyebrow">LET'S CONNECT</p>
        <h2>Contact <span>Me</span></h2>
        <p>
              Feel free to contact me for school projects,
          collaboration, or other inquiries.
        </p>
        <div className="contact-card">
          <p><strong>Email</strong></p>
          <a href="mailto:fuertesjharyll15@gmail.com">
            fuertesjharyll15@gmail.com
          </a>
          <p><strong>Contact Number</strong></p>
          <a href="tel:09072991650">09072991650</a>
        </div>
      </section>

      <footer>
        <p>© 2026 Jharyll · Programmer Profile</p>
        <p>Built with Next.js and CSS</p>
      </footer>
    </main>
  );
}
