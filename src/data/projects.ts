// src/data/projects.ts

export const projects = [
  {
    id: "01",
    title: "POS Management System",
    description:
      "A fullstack POS system with authentication, role management, product management, order processing and reporting dashboard.",
    tech: ["React", "NestJS", "PostgreSQL", "Docker"],
    image: "/projects/pos-system.png",
    github: "#",
    demo: "#",
  },
  {
    id: "02",
    title: "Face Recognition Login",
    description:
      "Authentication system using Azure Face API for secure facial verification and login.",
    tech: ["Node.js", "TypeScript", "Azure Face API"],
    image: "/projects/face-login.png",
    github: "#",
    demo: "#",
  },
  {
    id: "03",
    title: "CI/CD Deployment Platform",
    description:
      "Automated deployment platform using Docker, GitHub Actions and Azure infrastructure.",
    tech: ["Docker", "Azure", "GitHub Actions", "Nginx"],
    image: "/projects/cicd-platform.png",
    github: "#",
    demo: "#",
  },
];
