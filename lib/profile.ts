export const profile = {
  name: "Himanshu Khichi",
  role: "Backend Software Engineer",
  tagline: "I build distributed backend systems and the infrastructure that keeps them correct at scale.",
  techIdentity: "Java · Spring Boot · Kafka · Redis · gRPC · PostgreSQL · AWS",
  email: "himanshukhichi99@gmail.com",
  social: {
    github: "https://github.com/himanshukhichi",
    linkedin: "https://www.linkedin.com/in/himanshukhichi",
    leetcode: "https://leetcode.com/himanshukhichi99",
    resume: "/assets/himanshu-khichi-resume.pdf"
  },
  about: [
    "I'm a Backend Software Engineer with 5 years of experience building production systems at Oracle Financial Services Software (OFSS), Bengaluru. I specialise in distributed systems, ML infrastructure, and cloud-native backend services — with a focus on the hard problems between model training and real-world deployment.",
    "At Oracle, I worked on Model Management & Governance (MMG) — an enterprise ML platform that helps financial institutions manage the full lifecycle of their AI/ML models, from registration and validation to deployment, monitoring, and regulatory compliance. I built the model serving layer, the statistical profiling pipeline, the data drift detection service, and led the full migration of the platform from on-prem to OCI.",
    "Outside of work I build: a distributed KV store with consistent hashing and quorum replication, a DAG-based job scheduler with Kafka exactly-once semantics and Redis leader election, an ML feature store with dual online/offline serving architecture, and a rate limiter library with atomic Redis Lua scripts.",
    "I hold a B.Tech in Computer Science from NIT Warangal."
  ],
  experience: [
    {
      period: "Aug 2024 — May 2026",
      location: "Bengaluru, India",
      role: "Software Engineer",
      company: "Oracle (OFSS)",
      companyUrl: "https://www.oracle.com/",
      summary:
        "I was part of the Model Management & Governance (MMG) team — an enterprise ML platform built for regulated financial institutions where model risk management, auditability, and regulatory compliance are critical requirements.",
      details: [
        "Architected a multi-tenant ML model serving platform exposing trained models as authenticated REST APIs — supporting multi-model hosting, per-request audit logging, and Swagger UI testing, enabling external client consumption for the first time in the MMG product.",
        "Led end-to-end SaaS migration of MMG from on-premises to OCI; implemented a unified codebase strategy maintaining consistency across on-prem and SaaS, and built OCI DevOps CI/CD pipelines automating Docker builds and Artifactory publishing across all microservices.",
        "Developed a createConda API provisioning isolated conda environments from Object Storage specifications, eliminating manual admin workflows and cutting setup time by ~80%."
      ],
      technologies: ["Java", "Spring Boot", "Python", "Oracle Cloud (OCI)", "Docker", "Kubernetes", "CI/CD", "REST APIs"]
    },
    {
      period: "Jul 2021 — Aug 2024",
      location: "Bengaluru, India",
      role: "Associate Software Engineer",
      company: "Oracle (OFSS)",
      companyUrl: "https://www.oracle.com/",
      summary:
        "Focused on the data quality and analytics layer of MMG, turning raw dataset statistics into compact profiles, drift signals, transformation workflows, and feature-level monitoring views.",
      details: [
        "Reduced per-dataset storage by 99.9% (GBs → KBs) by building a scheduled profiling pipeline (whylogs) generating compact binary profiles capturing per-feature statistics across thousands of datasets.",
        "Designed a data drift detection service — aggregates profiles into baseline and target distributions, computes per-feature drift against configurable thresholds, and triggers automated alerts enabling proactive model degradation detection.",
        "Engineered backend APIs (Java, Spring Boot) for dataset transformations with reusable script templates, and built UI components (Oracle JET) standardising transformation workflows across teams.",
        "Developed dataset analytics features including profile comparisons, time-series visualisations, and correlation insights for feature-level monitoring."
      ],
      technologies: ["Java", "Spring Boot", "Python", "whylogs", "REST APIs", "Oracle JET", "Oracle DB"]
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
      "Java 21", "Spring Boot 3", "Apache Kafka", "Redis",
      "PostgreSQL", "gRPC", "Docker Compose", "Prometheus", "AWS ECS",
    ],
    category: "Distributed Systems",
    image: "/images/projects/flowmesh.png",
  },
  {
    title: "DistKV — Distributed Key-Value Store",
    href: "https://github.com/himanshukhichi/DistributedKVstore",
    description:
      "Multi-node distributed KV store built from scratch modelled after DynamoDB and Cassandra. Shards data via consistent hashing with 150 virtual nodes, replicates across N nodes with tunable quorum (R/W configurable per request), and uses vector clocks for conflict detection with hinted handoff for availability during node failures. Each node runs a storage engine with a write-ahead log, LRU eviction, and bloom filters. Cluster membership and failure detection run on a gossip protocol. Full gRPC API with streaming Scan RPC and a Grafana dashboard for real-time cluster observability.",
    languages: ["Java", "Protocol Buffers", "Shell", "YAML"],
    technologies: [
      "Java 21", "gRPC", "Netty", "Docker Compose",
      "Prometheus", "Grafana", "JUnit 5", "Mockito", "AWS EC2",
    ],
    category: "Distributed Systems",
    image: "/images/projects/distkv.png",
  },
  {
    title: "Feature Store — ML Feature Serving Platform",
    href: "https://github.com/himanshukhichi/feature-store",
    description:
      "High-throughput feature serving platform with a dual-store architecture — Redis for sub-5ms online inference reads and PostgreSQL for point-in-time correct offline training data. Kafka ingestion pipeline partitioned by entity ID fans out to both stores via separate consumer groups. Supports batch Redis MGET retrieval, multi-group feature vectors in a single API call, and a training dataset export API that reconstructs historical feature values at any past timestamp — eliminating label leakage in ML training pipelines.",
    languages: ["Java", "SQL", "YAML", "Shell"],
    technologies: [
      "Java 21", "Spring Boot 3", "Apache Kafka",
      "Redis", "PostgreSQL", "Docker Compose", "Prometheus", "JUnit 5",
    ],
    category: "ML Platform",
    image: "/images/projects/feature-store.png",
  },
  {
    title: "Rate Limiter Service",
    href: "https://github.com/himanshukhichi/RateLimiterService",
    description:
      "Pluggable distributed rate limiting library for Spring Boot applications implementing four algorithms — token bucket, sliding window log, sliding window counter, and fixed window counter — each executed atomically on Redis via Lua scripts to eliminate race conditions under concurrent load. Packaged as a Spring Boot Starter: annotate any controller method with @RateLimit and enforcement is applied via Spring AOP. Admin REST API allows live limit updates without restart. Benchmarked at 100K+ requests/sec with JMeter.",
    languages: ["Java", "Lua", "YAML", "Shell"],
    technologies: [
      "Java 21", "Spring Boot 3", "Redis", "Lettuce",
      "Lua", "Spring AOP", "Docker Compose", "Prometheus", "JUnit 5", "Mockito",
    ],
    category: "Distributed Systems",
    image: "/images/projects/rate-limiter.png",
  },
  {
    title: "Dino Guitar — Real-Time ML Game Control",
    href: "https://github.com/himanshukhichi/Dino-game-live-guitar-control",
    description:
      "A college experiment in on-device ML inference — a Keras CNN trained on MFCC audio features classifies live guitar chords from a microphone in real time and maps them to keyboard events controlling the Chrome Dino game. Core engineering challenge: tuning audio buffer size vs. inference latency (512 samples at 22050Hz = 23ms per frame, ~15ms CNN inference, ~38ms total round-trip). Includes a training notebook, per-chord confusion matrix, and model card.",
    languages: ["Python", "Jupyter Notebook"],
    technologies: ["Python 3", "TensorFlow", "Keras", "librosa", "Pygame", "NumPy", "scikit-learn"],
    category: "For Fun",
    badge: "For Fun",
    image: "/images/projects/dino-guitar.png",
  }
],
  skills: [
    {
      title: "Languages",
      items: ["Java","C/C++", "Python", "SQL", "JavaScript", "Protocol Buffers", "Lua"]
    },
    {
      title: "Backend & APIs",
      items: ["Spring Boot 3", "gRPC", "REST APIs", "Microservices", "Spring AOP", "FastAPI", "CompletableFuture", "Virtual Threads"]
    },
    {
      title: "Distributed Systems",
      items: ["Consistent Hashing", "Quorum Replication", "Leader Election", "Gossip Protocol", "Distributed Locking (Redlock)", "Event-Driven Architecture", "CAP Theorem"]
    },
    {
      title: "Messaging & Streaming",
      items: ["Apache Kafka", "Transactional Producers", "Consumer Groups", "Dead-Letter Queues"]
    },
    {
      title: "Databases & Storage",
      items: ["Redis", "PostgreSQL", "Oracle DB", "Write-Ahead Log (WAL)", "Bloom Filters", "LRU Eviction"]
    },
    {
      title: "Cloud & DevOps",
      items: ["AWS (EC2, ECS, RDS, ElastiCache)", "Oracle Cloud Infrastructure (OCI)", "Docker", "Kubernetes", "CI/CD Pipelines", "Git", "Artifactory", "Prometheus", "Grafana"]
    },
    {
      title: "ML Platform & Data",
      items: ["Model Serving", "Data Drift Detection", "Statistical Profiling (whylogs)", "Feature Store Design", "ML Pipeline Orchestration"]
    },
    {
      title: "Testing & Practices",
      items: ["JUnit 5", "Mockito", "Load Testing (JMeter)", "System Design", "Agile/Scrum", "Code Review"]
    }
  ],
  education: [
    {
      school: "National Institute of Technology Warangal (NIT Warangal)",
      schoolUrl: "https://www.nitw.ac.in/",
      period: "Jul 2017 — Jun 2021",
      degree: "B.Tech, Computer Science & Engineering",
      details: [
        "Coursework: Data Structures & Algorithms, Distributed Systems, Operating Systems, Database Systems, Object-Oriented Programming, Computer Networks"
      ]
    }
  ]
} as const;
