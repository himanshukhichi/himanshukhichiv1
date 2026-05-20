export const profile = {
  name: "Himanshu Khichi",
  role: "Backend & Platform Engineer",
  tagline: "I build reliable backend platforms, ML systems, and cloud-native services.",
  email: "himanshukhichi99@gmail.com",
  social: {
    github: "https://github.com/himanshukhichi",
    linkedin: "https://www.linkedin.com/in/himanshukhichi",
    leetcode: "https://leetcode.com/himanshukhichi99",
    codepen: "",
    instagram: "",
    stackoverflow: ""
  },
  about: [
    "I am a Backend and Platform Engineer at Oracle Financial Services Software, where I work on ML platform systems, model serving, backend APIs, and cloud migration.",
    "Across around five years of engineering work, I have built distributed backend services, CI/CD pipelines, dataset profiling systems, drift detection capabilities, and Oracle Cloud Infrastructure based SaaS deployments.",
    "My strongest work sits where correctness, scalability, and operational reliability matter: API design, production ML infrastructure, cloud migration, release automation, and developer experience.",
    "I like turning complex platform problems into systems that are understandable, observable, and dependable for the teams that use them."
  ],
  experience: [
    {
      period: "2024 — Present",
      role: "Software Developer, ML Platform",
      company: "Oracle Financial Services Software",
      companyUrl: "https://www.oracle.com/",
      summary:
        "Design and build platform capabilities for Model Management & Governance, including model serving, SaaS migration to OCI, release automation, and backend APIs for enterprise ML workflows.",
      technologies: ["Java", "Spring Boot", "OCI", "Docker", "Kubernetes", "REST APIs"]
    },
    {
      period: "2021 — 2024",
      role: "Associate Software Developer",
      company: "Oracle Financial Services Software",
      companyUrl: "https://www.oracle.com/",
      summary:
        "Built dataset profiling, analytics, transformation, and data drift capabilities for the ML platform while contributing backend APIs and frontend views used by product teams.",
      technologies: ["Java", "Python", "SQL", "Oracle JET", "CI/CD", "Data Profiling"]
    },
    {
      period: "2017 — 2021",
      role: "Computer Science & Engineering",
      company: "NIT Warangal",
      companyUrl: "https://www.nitw.ac.in/",
      summary:
        "Completed B.Tech coursework focused on data structures, algorithms, databases, operating systems, object-oriented programming, and core computer science fundamentals.",
      technologies: ["Algorithms", "Databases", "Operating Systems", "OOP"]
    }
  ],
  projects: [
    {
      title: "Model Serving Platform",
      href: "/assets/himanshu-khichi-resume.pdf",
      description:
        "Deploys ML models as REST APIs with multi-model hosting, authentication, request-level logging, and Swagger UI based testing.",
      technologies: ["Spring Boot", "REST APIs", "Swagger", "Docker"],
      image: "/images/projects/model-serving.png"
    },
    {
      title: "SaaS Migration to OCI",
      href: "/assets/himanshu-khichi-resume.pdf",
      description:
        "Moved the MMG platform from on-premises deployments to Oracle Cloud Infrastructure with unified packaging and deployment workflows.",
      technologies: ["OCI", "Kubernetes", "Docker", "DevOps"],
      image: "/images/projects/oci-migration.png"
    },
    {
      title: "Dataset Profiling Pipeline",
      href: "/assets/himanshu-khichi-resume.pdf",
      description:
        "Generates compact profile files with per-feature statistics and reduced per-dataset storage by 99.9% across thousands of datasets.",
      technologies: ["Java", "Python", "SQL", "Analytics"],
      image: "/images/projects/data-profiling.png"
    },
    {
      title: "Data Drift Detection Service",
      href: "/assets/himanshu-khichi-resume.pdf",
      description:
        "Compares baseline and target distributions, computes feature-level drift with configurable thresholds, and triggers automated alerts.",
      technologies: ["Platform", "Statistics", "Alerts", "APIs"],
      image: "/images/projects/drift-detection.png"
    }
  ],
  writing: [
    {
      year: "2026",
      title: "Resume: Backend and Platform Engineering",
      href: "/assets/himanshu-khichi-resume.pdf",
      image: "/images/writing/resume-preview.png"
    },
    {
      year: "2026",
      title: "Notes on Building Reliable ML Platform Systems",
      href: "mailto:himanshukhichi99@gmail.com",
      image: "/images/projects/model-serving.png"
    },
    {
      year: "2026",
      title: "OCI Migration and Deployment Playbook",
      href: "mailto:himanshukhichi99@gmail.com",
      image: "/images/projects/oci-migration.png"
    }
  ]
} as const;
