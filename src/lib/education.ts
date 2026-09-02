export interface Education {
  id: string;
  stage: "Graduation" | "Higher Secondary" | "Secondary Education";
  degree: string;
  institution: string;
  location?: string;
  duration: string;
  scoreType: "CGPA" | "Percentage";
  score: string;
  field?: string;
  description?: string[];
  skills?: string[];
  featured?: boolean;
}

export const educationData: Education[] = [
  {
    id: "graduation",
    stage: "Graduation",
    degree: "Bachelor of Engineering (B.E.) in Information Science & Engineering",
    institution: "T. John Institute of Technology (VTU)",
    location: "Bangalore, India",
    duration: "2023 - 2027",
    scoreType: "CGPA",
    score: "8.3 / 10", // Placeholder: User can customize or provide exact score
    field: "Information Science & Engineering",
    description: [
      "Focused on Core Java, Data Structures & Algorithms, Database Management Systems, and Web Technologies.",
      "Published research paper on cognitive load reduction in digital interfaces.",
      "Active participant in hackathons, competitive programming, and technical workshops."
    ],
    skills: ["Java", "Spring Boot", "Data Structures", "PostgreSQL", "Next.js", "TypeScript"],
    featured: true,
  },
  {
    id: "higher-secondary",
    stage: "Higher Secondary",
    degree: "Class XII (Senior Secondary / Intermediate)",
    institution: "Jai Prakash College Arrah",
    location: "India",
    duration: "2021 - 2023",
    scoreType: "Percentage",
    score: "69%", // Placeholder: User can customize
    field: "Science Stream (PCM - Physics, Chemistry, Mathematics)",
    description: [
      "Strong analytical foundation in Mathematics and Physics.",
      "Developed an early passion for problem-solving and computer science fundamentals."
    ],
    skills: ["Mathematics", "Physics", "Computer Fundamentals"],
    featured: false,
  },
  {
    id: "secondary",
    stage: "Secondary Education",
    degree: "Class X (Matriculation)",
    institution: "High School",
    location: "India",
    duration: "2020 - 2021",
    scoreType: "Percentage",
    score: "82%", // Placeholder: User can customize
    field: "General Science & Mathematics",
    description: [
      "Graduated with distinction with high academic standing across science and mathematics.",
      "Participated in science exhibitions, quiz competitions, and extracurricular activities."
    ],
    skills: ["Mathematics", "Science", "Logical Reasoning"],
    featured: false,
  },
];
