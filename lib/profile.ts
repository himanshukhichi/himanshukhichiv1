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
    title: "Distributed DAG Scheduler",
    href: "https://github.com/himanshukhichi/flowmesh",
    description:
      "A distributed job orchestration engine that executes DAGs of dependent tasks across a cluster of worker nodes. The scheduler runs with Redis Redlock-based leader election — only one instance schedules at a time, with hot-standby failover under 10 seconds. Tasks are distributed via Kafka with exactly-once delivery guarantees using transactional producers and a PostgreSQL deduplication table. DAG submissions are validated for cycles via DFS, then execution order is resolved with Kahn's topological sort. Failed tasks retry with exponential backoff before landing in a dead-letter queue. Workers register via gRPC and send periodic heartbeats; the scheduler re-queues tasks from workers that go silent. Horizontally scalable to 5+ worker nodes with per-task-type Kafka topic routing and full Prometheus observability.",
    languages: ["java"],
    technologies: [
      "Java 17",
      "Spring Boot 3",
      "Apache Kafka",
      "Redis (Redlock)",
      "PostgreSQL",
      "gRPC",
      "Protocol Buffers",
      "Docker Compose",
      "Prometheus",
      "AWS ECS",
    ],
    image: "/images/projects/flowmesh.png",
  },
  {
    title: "Distributed Key-Value Store",
    href: "https://github.com/himanshukhichi/distkv",
    description:
      "A multi-node distributed key-value store built from scratch in Java, modelled after the core architecture of Amazon DynamoDB and Apache Cassandra. Data is sharded across nodes via consistent hashing with 150 virtual nodes per physical node — minimising key remapping when the cluster topology changes. Replication uses tunable quorum (N, R, W configurable per request) with vector clocks for conflict detection and hinted handoff for availability during temporary node failures. Each node runs a storage engine backed by a write-ahead log for crash recovery, LRU eviction, and a bloom filter that short-circuits negative lookups before they hit memory. Cluster membership and failure detection are handled by a gossip protocol — each node pings two random peers per second and marks unreachable nodes suspect after three missed cycles. The full API is exposed over gRPC with a streaming Scan RPC, and a Grafana dashboard visualises real-time ops/sec, P99 latency, and node health across the cluster.",
    languages: ["java"],
    technologies: [
      "Java 17",
      "gRPC",
      "Protocol Buffers",
      "Netty",
      "Docker Compose",
      "Prometheus",
      "Grafana",
      "JUnit 5",
      "Mockito",
      "AWS EC2",
    ],
    image: "/images/projects/distkv.png",
  },
  {
    title: "Feature Store — ML Feature Serving Platform",
    href: "https://github.com/himanshukhichi/feature-store",
    description:
      "A high-throughput feature serving platform with a dual-store architecture: an online store backed by Redis for low-latency model inference reads (under 5ms P99), and an offline store in PostgreSQL for point-in-time correct training data retrieval. Feature ingestion flows through a Kafka pipeline partitioned by entity ID, with separate consumer groups materialising data into each store. A schema registry validates all incoming feature payloads against registered definitions before they enter the pipeline, preventing schema drift. The platform supports batch retrieval via Redis MGET pipelines, multi-group feature vectors in a single API call, and a training dataset export API that reconstructs what feature values looked like at any past timestamp — solving the label leakage problem for ML teams. Background jobs compute per-feature statistics (null rate, mean, std, P95) and detect staleness when values exceed twice their configured freshness TTL.",
    languages: ["java"],
    technologies: [
      "Java 17",
      "Spring Boot 3",
      "Apache Kafka",
      "Redis",
      "PostgreSQL",
      "Docker Compose",
      "Prometheus",
      "JUnit 5",
    ],
    image: "/images/projects/feature-store.png",
  },
  {
    title: "Rate Limiter Service",
    href: "https://github.com/himanshukhichi/RateLimiterService",
    description:
      "A pluggable distributed rate limiting library for Spring Boot applications. Implements four algorithms — token bucket, sliding window log, sliding window counter, and fixed window counter — each executed atomically on Redis using Lua scripts to prevent race conditions under concurrent load. Rate limits are enforced by API key, IP address, or composite user-plus-endpoint keys, with configurable limits per endpoint. Packaged as a Spring Boot Starter: any application adds the Maven dependency, annotates controller methods with @RateLimit, and gets enforcement via Spring AOP with zero boilerplate. An admin REST API allows live limit updates without restart, stored back in Redis so all running instances pick up changes instantly. Includes standard 429 response headers (X-RateLimit-Remaining, Retry-After) and a JMeter benchmark showing sustained throughput at 100K requests per second.",
    languages: ["java"],
    technologies: [
      "Java 17",
      "Spring Boot 3",
      "Redis",
      "Lua",
      "Lettuce",
      "Spring AOP",
      "Docker Compose",
      "Prometheus",
      "JUnit 5",
      "Mockito",
    ],
    image: "/images/projects/rate-limiter.png",
  },
  {
    title: "Dino Guitar — Real-Time ML Game Control",
    href: "https://github.com/himanshukhichi/Dino-game-live-guitar-control",
    description:
      "A college experiment in on-device ML inference: a Keras CNN trained on MFCC audio features classifies live guitar chords from a microphone in real time and maps them to keyboard events that control the Chrome Dino game. The core engineering challenge was the audio buffer size vs. inference latency tradeoff — too small a buffer produces noisy MFCC features; too large introduces perceptible lag. The model processes 13 MFCC coefficients per 512-sample frame at 22050 Hz, achieving under 80ms end-to-end latency from string pluck to game response. Built with TensorFlow and Keras for the classification model, librosa for audio feature extraction, and Pygame for game rendering.",
    languages: ["python"],
    technologies: [
      "Python 3",
      "TensorFlow",
      "Keras",
      "librosa",
      "Pygame",
      "NumPy",
      "scikit-learn",
    ],
    image: "/images/projects/dino-guitar.png",
  },
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
