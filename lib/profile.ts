export const profile = {
  name: "Himanshu Khichi",
  role: "Backend & Platform Engineer",
  tagline: "I build reliable backend platforms, ML systems, and cloud-native services.",
  email: "himanshukhichi99@gmail.com",
  social: {
    github: "https://github.com/himanshukhichi",
    linkedin: "https://www.linkedin.com/in/himanshukhichi",
    leetcode: "https://leetcode.com/himanshukhichi99",
    instagram: "https://www.instagram.com/ok.himks/",
    resume: "/assets/himanshu-khichi-resume.pdf"
  },
  about: [
    "I'm a backend and platform engineer with 5 years of experience building production-grade infrastructure at Oracle Financial Services Software (OFSS), Bengaluru. I specialize in ML platform engineering, distributed systems, and cloud-native SaaS — with a deep focus on the messy, interesting problems that sit between model training and real-world deployment.",
    "At Oracle, I work on Model Management & Governance (MMG) — an enterprise ML platform that helps financial institutions manage the full lifecycle of their AI/ML models, from registration and validation to deployment, monitoring, and regulatory compliance.",
    "I'm passionate about systems that scale, APIs that don't lie, and pipelines that don't silently fail. Outside of work, I invest time in structured learning across distributed systems, system design, and low-level performance engineering.",
    "I hold a B.Tech in Computer Science from NIT Warangal."
  ],
  experience: [
    {
      period: "Jul 2021 — May 2026",
      location: "Bengaluru, India",
      role: "Software Developer",
      company: "Oracle (OFSS)",
      companyUrl: "https://www.oracle.com/",
      summary:
        "Oracle Financial Services Software is a global leader in financial technology, providing software solutions to banks and financial institutions worldwide. I am part of the Model Management & Governance (MMG) team — an enterprise-grade ML platform product built for regulated industries where model risk management and auditability are critical.",
      details: [
        "Designed and built a model serving platform enabling deployment of ML models as REST APIs, allowing external consumption outside the MMG platform, with support for multi-model hosting, authentication, request-level logging, and Swagger UI-based testing.",
        "Led end-to-end SaaS migration of the MMG platform from on-premises to Oracle Cloud Infrastructure (OCI); ported the codebase, built SaaS services and jobs (WAR/JAR), and implemented a unified codebase strategy to maintain consistency across on-prem and SaaS deployments.",
        "Built OCI DevOps CI/CD pipelines for multiple MMG microservices to automate Docker image builds and artifact publishing (JAR/WAR) to Artifactory, standardizing build and release workflows across services.",
        "Enabled generation of both JAR and WAR artifacts within a single CI/CD pipeline, simplifying build workflows across services.",
        "Provisioned and managed OCI development instances using the AppMan pipeline with environment-specific configurations; handled instance lifecycle and supported release activities across MMG services.",
        "Developed a createConda API to provision isolated conda environments from Object Storage specifications, eliminating manual admin workflows and reducing environment setup time by ~80%.",
        "Reduced per-dataset storage by 99.9% (GBs to KBs) by building a scheduled profiling pipeline (whylogs) that generates compact .bin profile files capturing per-feature stats across thousands of datasets.",
        "Developed dataset analytics features including profile comparisons, time-series visualizations, and correlation insights for feature-level monitoring.",
        "Designed and implemented a data drift detection service: aggregates profiles into baseline and target distributions, computes per-feature drift with configurable thresholds, and triggers automated alerts when data quality degrades.",
        "Engineered backend APIs (Java, Spring Boot) and UI components (Oracle JET) for dataset transformations, including reusable script templates to standardize transformation workflows across datasets."
      ],
      technologies: ["Java", "Spring Boot", "OCI", "Docker", "Kubernetes", "CI/CD", "Oracle JET"]
    }
  ],
  projects: [
    {
      title: "Distributed Job Orchestrator",
      href: "/assets/himanshu-khichi-resume.pdf",
      description:
        "Dummy project placeholder for a Java service that coordinates background jobs, retries, status tracking, and operational visibility across worker nodes.",
      languages: ["java"],
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
      image: "/images/projects/model-serving.png"
    },
    {
      title: "Cloud Metrics Collector",
      href: "/assets/himanshu-khichi-resume.pdf",
      description:
        "Dummy project placeholder for a Go-based telemetry collector that scrapes service metrics, batches events, and exports them to a monitoring backend.",
      languages: ["go"],
      technologies: ["Go", "Prometheus", "gRPC", "Kubernetes"],
      image: "/images/projects/oci-migration.png"
    },
    {
      title: "Dataset Quality Notebook",
      href: "/assets/himanshu-khichi-resume.pdf",
      description:
        "Dummy project placeholder for a Python workflow and JavaScript dashboard that profile datasets, compare distributions, and surface drift signals for ML teams.",
      languages: ["python", "javascript"],
      technologies: ["Python", "Pandas", "whylogs", "React"],
      image: "/images/projects/data-profiling.png"
    }
  ],
  skills: [
    {
      title: "Languages",
      items: ["Java", "Python", "SQL", "JavaScript", "Go"]
    },
    {
      title: "Backend & APIs",
      items: ["Spring Boot", "REST APIs", "Microservices", "API Design", "Swagger"]
    },
    {
      title: "ML Platform & Data",
      items: ["Model Serving", "Model Monitoring", "Data Drift Detection", "Dataset Profiling", "whylogs"]
    },
    {
      title: "Cloud & DevOps",
      items: ["Oracle Cloud Infrastructure", "Docker", "Kubernetes", "OCI DevOps", "CI/CD", "Artifactory"]
    },
    {
      title: "Databases & Tooling",
      items: ["Relational Databases", "Oracle", "SQL Developer", "Git", "Linux"]
    },
    {
      title: "Engineering Fundamentals",
      items: ["Distributed Systems", "System Design", "Data Structures & Algorithms", "Operating Systems", "Code Review"]
    }
  ],
  education: [
    {
      school: "National Institute of Technology Warangal (NIT Warangal)",
      schoolUrl: "https://www.nitw.ac.in/",
      period: "Jul 2017 — Jun 2021",
      degree: "B.Tech, Computer Science & Engineering",
      details: [
        "Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database, Operating Systems"
      ]
    }
  ]
} as const;
