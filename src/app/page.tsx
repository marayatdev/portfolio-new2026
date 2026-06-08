// app/page.tsx

import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function HomePage() {
  return (
    <main>


      <section
        id="about"
        className="min-h-screen"
      >
        <Hero />
      </section>

      <section
        id="skills"
        className="min-h-screen"
      >
        <Skills />
      </section>

      <section
        id="projects"
        className="min-h-screen"
      >
        <Projects />
      </section>

      <section
        id="experience"
        className="min-h-screen"
      >
        <Experience />
      </section>

      <section
        id="contact"
        className="min-h-screen"
      >
        <Contact />
      </section>
    </main>
  );
}