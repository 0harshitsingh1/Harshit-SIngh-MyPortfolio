export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
}

export const projectsData: Project[] = [
  {
    id: "classync",
    title: "ClasSync – Student Task Manager",
    shortDescription: "A task and assignment manager built for students to organize coursework and deadlines.",
    fullDescription: "ClasSync is a comprehensive task management platform designed specifically for students. It allows users to track assignments, organize coursework by subject, and manage upcoming deadlines with ease. Features include calendar views, priority sorting, and automated reminders to ensure you never miss a due date again.",
    techStack: ["Java", "Spring Boot", "React", "MySQL"],
    imageUrl: "/placeholder-project.jpg", // TODO: Replace with real image
    githubUrl: "https://github.com/yourusername/classync", // TODO: Replace with real URL
    liveUrl: "https://classync.example.com", // TODO: Replace with real URL
  },
  {
    id: "studymate",
    title: "Smart StudyMate AI",
    shortDescription: "An AI-powered tool that generates summaries and quizzes from study material.",
    fullDescription: "Smart StudyMate AI leverages large language models to help students learn faster. Users can upload lecture notes or PDFs, and the system automatically generates concise summaries, flashcards, and practice quizzes to test their knowledge. It drastically cuts down reading time and improves retention through active recall.",
    techStack: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS"],
    imageUrl: "/placeholder-project.jpg", // TODO: Replace with real image
    githubUrl: "https://github.com/yourusername/studymate", // TODO: Replace with real URL
    liveUrl: "", // Coming soon
  },
  {
    id: "airbnb-clone",
    title: "Airbnb Clone",
    shortDescription: "A full-stack clone of Airbnb's core browsing and booking UI.",
    fullDescription: "A pixel-perfect, full-stack recreation of the core Airbnb platform. This project includes property listings, search functionality, interactive map integration, date pickers for booking, and a complete user authentication flow. It was built to demonstrate proficiency in building complex, responsive user interfaces and managing state across a large application.",
    techStack: ["React", "Node.js", "MongoDB", "Prisma"],
    imageUrl: "/placeholder-project.jpg", // TODO: Replace with real image
    githubUrl: "https://github.com/yourusername/airbnb-clone", // TODO: Replace with real URL
    liveUrl: "https://airbnb-clone.example.com", // TODO: Replace with real URL
  },
];
