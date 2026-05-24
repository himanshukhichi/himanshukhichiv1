export const profile = {
  name: "Himanshu Khichi",
  role: "Software Engineer",
  tagline: "I build reliable backend platforms, and cloud-native services.",
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
    title: "FlowMesh — Distributed DAG Scheduler",
    href: "https://github.com/himanshukhichi/flowmesh",
    description:
      "Distributed job orchestration engine that executes dependency-aware DAGs across a horizontally scalable worker cluster. Features Redis Redlock leader election with sub-10s failover, Kafka-based task distribution with exactly-once delivery semantics, DFS cycle detection, Kahn's topological sort for execution ordering, and a 6-state task machine with exponential backoff retry and dead-letter queue recovery. Workers register via gRPC and emit heartbeats — stale workers are evicted and their tasks automatically re-queued.",
    languages: ["Java", "SQL", "Protocol Buffers", "YAML", "Shell"],
    technologies: [
      "Java 17", "Spring Boot 3", "Apache Kafka", "Redis",
      "PostgreSQL", "gRPC", "Docker Compose", "Prometheus", "AWS ECS",
    ],
    image: "/images/projects/flowmesh.png",
  },
  {
    title: "Distributed Key-Value Store",
    href: "https://github.com/himanshukhichi/DistributedKVstore",
    description:
      "Multi-node distributed KV store built from scratch modelled after DynamoDB and Cassandra. Shards data via consistent hashing with 150 virtual nodes, replicates across N nodes with tunable quorum (R/W configurable per request), and uses vector clocks for conflict detection with hinted handoff for availability during node failures. Each node runs a storage engine with a write-ahead log, LRU eviction, and bloom filters. Cluster membership and failure detection run on a gossip protocol. Full gRPC API with streaming Scan RPC and a Grafana dashboard for real-time cluster observability.",
    languages: ["Java", "Protocol Buffers", "Shell", "YAML"],
    technologies: [
      "Java 17", "gRPC", "Netty", "Docker Compose",
      "Prometheus", "Grafana", "JUnit 5", "Mockito", "AWS EC2",
    ],
    image: "/images/projects/distkv.png",
  },
  {
    title: "Feature Store — ML Feature Serving Platform",
    href: "https://github.com/himanshukhichi/feature-store",
    description:
      "High-throughput feature serving platform with a dual-store architecture — Redis for sub-5ms online inference reads and PostgreSQL for point-in-time correct offline training data. Kafka ingestion pipeline partitioned by entity ID fans out to both stores via separate consumer groups. Supports batch Redis MGET retrieval, multi-group feature vectors in a single API call, and a training dataset export API that reconstructs historical feature values at any past timestamp — eliminating label leakage in ML training pipelines.",
    languages: ["Java", "SQL", "YAML", "Shell"],
    technologies: [
      "Java 17", "Spring Boot 3", "Apache Kafka",
      "Redis", "PostgreSQL", "Docker Compose", "Prometheus", "JUnit 5",
    ],
    image: "/images/projects/feature-store.png",
  },
  {
    title: "Rate Limiter Service",
    href: "https://github.com/himanshukhichi/RateLimiterService",
    description:
      "Pluggable distributed rate limiting library for Spring Boot applications implementing four algorithms — token bucket, sliding window log, sliding window counter, and fixed window counter — each executed atomically on Redis via Lua scripts to eliminate race conditions under concurrent load. Packaged as a Spring Boot Starter: annotate any controller method with @RateLimit and enforcement is applied via Spring AOP. Admin REST API allows live limit updates without restart. Benchmarked at 100K+ requests/sec with JMeter.",
    languages: ["Java", "Lua", "YAML", "Shell"],
    technologies: [
      "Java 17", "Spring Boot 3", "Redis", "Lettuce",
      "Lua", "Spring AOP", "Docker Compose", "Prometheus", "JUnit 5", "Mockito",
    ],
    image: "/images/projects/rate-limiter.png",
  }
],
  skills: [
    {
      title: "Languages",
      items: ["Java", "C/C++", "Python", "SQL", "JavaScript"]
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
