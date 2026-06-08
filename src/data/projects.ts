// src/data/projects.ts

export const projects = [
  {
    id: "01",
    title: "Starter Auth App",
    description:
      "A fullstack authentication system featuring user registration, secure login, JWT-based authentication with refresh token support, and editable user profile management.",
    tech: ["React", "Node.js", "MongoDB", "Docker"],
    image: "/projects/auth.png",
    github: "https://github.com/marayatdev/auth-web",
    demo: "http://20.189.249.102:3000/",
  },
  {
    id: "02",
    title: "Praksaone App",
    description:
      "A comprehensive platform for managing and tracking the pick-up and drop-off of students in Praeksa Subdistrict and connecting with Line API to notify parents.",
    tech: ["TypeScript", "Next.js", "Prisma", "Line API", "Docker"],
    image: "/projects/praksa.png",
    github: "#",
    demo: "https://praksaone.com/",
  },
  {
    id: "03",
    title: "Test Learning Obec App",
    description:
      "This project is an online test designed to assess English proficiency at the CEFR levels A1 and A2, specifically tailored for students.",
    tech: ["TypeScript", "React", "Express", "Prisma", "Docker"],
    image: "/projects/learning-obec.png",
    github: "#",
    demo: "https://test.learning-obec.com/",
  },
];
