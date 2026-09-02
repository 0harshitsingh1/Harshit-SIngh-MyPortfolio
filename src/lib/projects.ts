export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
  status: "Completed" | "In Progress";
}

export const projectsData: Project[] = [
  {
    id: "stayease",
    title: "StayEase",
    shortDescription: "A backend REST API for a vacation rental platform, supporting property management, bookings, authentication, and secure payments.",
    fullDescription: "StayEase is a backend application built with Spring Boot that provides the core APIs for a vacation rental and accommodation booking platform. It supports user authentication, JWT-based security, role-based access control, property management, booking and reservation handling, reviews, and secure payment processing. The project follows a structured backend architecture with RESTful APIs, service and repository layers, PostgreSQL database integration, and Swagger API documentation.",
    techStack: ["Java 21", "Spring Boot", "Spring Security", "Spring Data JPA", "PostgreSQL", "JWT", "Stripe API", "Maven", "SpringDoc OpenAPI/Swagger"],
    imageUrl: "/StayEse.png",
    githubUrl: "https://github.com/0harshitsingh1/stayease-vacation-rental-backend.git",
    liveUrl: "",
    status: "Completed",
  },
  {
    id: "slotly",
    title: "Slotly",
    shortDescription: "A full-stack appointment booking platform with real-time availability and conflict-free scheduling.",
    fullDescription: "Slotly is a full-stack appointment booking platform designed for local service businesses such as salons, tutors, and clinics. Business owners can manage services, availability, schedule exceptions, bookings, and analytics, while customers can discover businesses and book available slots in real time. The platform prevents double-bookings through server-side validation and database transactions, while also supporting authentication, role-based access, email notifications, password resets, photo uploads, and timezone-aware scheduling.",
    techStack: ["Next.js", "TypeScript", "React", "PostgreSQL", "Prisma ORM", "NextAuth", "Tailwind CSS", "lucide-react", "Vercel", "Neon"],
    imageUrl: "/Sloty.png",
    githubUrl: "https://github.com/0harshitsingh1/Slotly.git",
    liveUrl: "https://slotly-sand.vercel.app/",
    status: "In Progress",
  },
  {
    id: "storelane",
    title: "StoreLane",
    shortDescription: "A digital platform that connects customers with local stores to search products and check real-time availability.",
    fullDescription: "StoreLane bridges the gap between offline retailers and digital consumers by helping users discover products available at nearby local stores. Customers can search for products, view availability status, locate stores, and directly enquire with vendors for real-time stock confirmation. The platform uses a traffic-light availability system and supports product categorization, vendor verification, ratings, wishlists, and simplified inventory updates for local businesses.",
    techStack: ["TypeScript", "Node.js", "Next.js", "React.js", "PostgreSQL", "HTML", "CSS"],
    imageUrl: "/StoreLane.png",
    githubUrl: "https://github.com/CaptainAnant/StoreLane.git",
    liveUrl: "",
    status: "In Progress",
  },
  {
    id: "studymate",
    title: "Smart StudyMate AI",
    shortDescription: "An AI-powered study assistant that summarizes notes, extracts keywords, generates quizzes, and converts content into speech.",
    fullDescription: "Smart StudyMate AI is an AI-based student learning assistant designed to make studying more efficient and interactive. Users can provide notes or study materials to generate concise summaries, identify important keywords and topics, create quiz questions for revision, and convert summaries into audio. The application uses NLP and AI models to process educational content through a simple and user-friendly web interface.",
    techStack: ["Python", "Transformers", "BART", "Gradio", "NLTK", "gTTS"],
    imageUrl: "/Smart StudyMate AI.png",
    githubUrl: "https://github.com/0harshitsingh1/Smart-StudyMate-AI.git",
    liveUrl: "",
    status: "Completed",
  },
  {
    id: "classync",
    title: "ClasSync",
    shortDescription: "A responsive classroom management platform for tracking attendance, accessing academic resources, managing tasks, and staying connected.",
    fullDescription: "ClasSync is a web-based classroom management platform designed to streamline academic activities and improve communication between students and instructors. It provides features for attendance tracking, academic resource sharing, notes, announcements, task and deadline management, user profiles, and authentication. The platform focuses on a clean, responsive, and user-friendly interface for keeping classroom information organized in one place.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Vercel"],
    imageUrl: "/ClasSync.png",
    githubUrl: "https://github.com/0harshitsingh1/ClassSync.git",
    liveUrl: "https://the-classync.vercel.app/index.html",
    status: "Completed",
  },
  {
    id: "counter-state",
    title: "Counter State",
    shortDescription: "A simple React application for practicing state management and dynamic UI updates.",
    fullDescription: "Counter State is a beginner-friendly React application built to practice core React concepts such as component-based development, state management with the useState hook, event handling, and dynamic user interface updates. Users can increase, decrease, reset the counter, or set it to a custom value.",
    techStack: ["React", "Vite", "JavaScript", "CSS"],
    imageUrl: "/Counter State.png",
    githubUrl: "https://github.com/0harshitsingh1/Counter_State.git",
    liveUrl: "",
    status: "Completed",
  },
];
