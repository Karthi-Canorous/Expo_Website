export const solutions = [
  {
    slug: "school-management-system",
    title: "School Management System",
    shortDescription: "End-to-end digital platform for modern educational institutions.",
    description:
      "A comprehensive school management platform that digitizes every administrative and academic operation — from student enrollment and attendance to examination management, fee collection, and parent communication. Purpose-built for schools, colleges, and educational chains seeking to eliminate manual paperwork and deliver a seamless experience to students, staff, and parents.",
    icon: "GraduationCap",
    businessChallenge:
      "Educational institutions struggle with fragmented administrative processes — manual attendance registers, paper-based fee receipts, disconnected exam result systems, and no unified communication channel between school management, teachers, and parents. These inefficiencies lead to delayed reporting, revenue leakage, and poor stakeholder experience.",
    ourSolution:
      "We deliver an integrated, cloud-based School Management System that centralizes all operations on a single platform. Real-time dashboards give principals and administrators instant visibility into attendance, academic performance, and financials. Parents receive automated updates via mobile app and SMS, while teachers manage classes and assessments digitally.",
    features: [
      "Student Enrollment & Profile Management",
      "Attendance Tracking (Biometric & Manual)",
      "Examination & Grade Management",
      "Fee Collection & Financial Reporting",
      "Parent Communication Portal",
      "Timetable & Resource Scheduling",
      "Library & Inventory Management",
      "Role-Based Access for Staff",
    ],
    techStack: [
      "Frontend: React.js, Next.js, Tailwind CSS",
      "Backend: Node.js, Express.js REST API",
      "Database: PostgreSQL, Redis (caching)",
      "Cloud Services: AWS EC2, S3, SES for notifications",
    ],
    businessImpact: [
      "60% reduction in administrative workload",
      "Zero revenue leakage through automated fee tracking",
      "Real-time academic performance visibility for parents",
      "Paperless operations reducing overhead costs by 40%",
      "Improved parent satisfaction and stakeholder engagement",
    ],
    benefits: [
      "Single platform for all school operations",
      "Mobile-first experience for parents and staff",
      "Automated compliance and audit reports",
      "Scalable for multi-campus educational chains",
    ],
    useCases: [
      "K-12 schools digitizing administrative operations",
      "Universities managing large student populations",
      "Educational chains requiring multi-branch reporting",
      "Government institutions implementing digital governance",
    ],
  },
  {
    slug: "enterprise-business-solutions",
    title: "Enterprise Business Solutions",
    shortDescription: "Integrated ERP and workflow automation for mid to large enterprises.",
    description:
      "A modular enterprise software platform designed to unify procurement, inventory, HR, finance, and operations under a single intelligent system. Our solutions replace legacy ERPs and disconnected spreadsheets with a real-time, role-based platform that gives enterprise leadership complete operational visibility and control.",
    icon: "Briefcase",
    businessChallenge:
      "Large enterprises operate across multiple departments and locations, each running siloed systems — separate tools for HR, finance, procurement, and inventory. This fragmentation creates data inconsistency, delayed decision-making, manual reconciliation overhead, and significant risk during audits and regulatory reviews.",
    ourSolution:
      "We design and implement a fully integrated enterprise platform tailored to the client's operational model. Our modular architecture allows phased rollout — starting with the highest-pain department and expanding seamlessly. Deep API integrations with existing tools ensure a smooth migration without business disruption.",
    features: [
      "Multi-Department ERP Integration",
      "Procurement & Vendor Management",
      "HR & Payroll Automation",
      "Real-Time Financial Dashboards",
      "Inventory & Supply Chain Control",
      "Role-Based Access & Audit Trails",
      "Automated Compliance Reporting",
      "Multi-Branch & Multi-Currency Support",
    ],
    techStack: [
      "Frontend: React.js, TypeScript, Material UI",
      "Backend: Java Spring Boot, Microservices",
      "Database: Oracle DB, PostgreSQL",
      "Cloud Services: Azure App Service, Azure SQL, Power BI",
    ],
    businessImpact: [
      "50% faster month-end close cycles",
      "35% reduction in procurement processing time",
      "Real-time cross-departmental visibility",
      "Elimination of manual reconciliation errors",
      "Audit-ready compliance reporting at all times",
    ],
    benefits: [
      "Single source of truth across all departments",
      "Configurable workflows without custom code",
      "Scalable architecture for business growth",
      "Integration with existing enterprise tools",
    ],
    useCases: [
      "Manufacturing companies unifying plant and finance operations",
      "Retail chains managing multi-location inventory",
      "Professional services firms tracking project profitability",
      "Export-oriented businesses requiring multi-currency reporting",
    ],
  },
  {
    slug: "healthcare-solutions",
    title: "Healthcare Solutions",
    shortDescription: "Digital health platforms connecting patients, doctors, and hospitals.",
    description:
      "A secure, HIPAA-aligned digital health platform that streamlines patient management, clinical workflows, appointment scheduling, medical records, and billing for hospitals, clinics, and diagnostic centers. Our solutions bridge the gap between healthcare providers and patients with intelligent automation and real-time data access.",
    icon: "HeartPulse",
    businessChallenge:
      "Healthcare providers face mounting pressure to digitize clinical and administrative operations while maintaining data security and regulatory compliance. Manual patient registration, paper-based medical records, fragmented billing systems, and lack of inter-department communication result in poor patient experience and operational inefficiency.",
    ourSolution:
      "We build tailored hospital management systems and patient-facing applications that integrate seamlessly with existing diagnostic equipment and insurance networks. Our solutions provide real-time patient tracking, electronic medical records (EMR), automated billing, and analytics dashboards for clinical decision support.",
    features: [
      "Electronic Medical Records (EMR)",
      "Patient Registration & OPD Management",
      "Appointment Scheduling & Teleconsultation",
      "Lab & Diagnostic Integration",
      "Pharmacy & Inventory Management",
      "Insurance Claims & Billing Automation",
      "Doctor Portal & Clinical Dashboard",
      "Discharge & Follow-Up Management",
    ],
    techStack: [
      "Frontend: React.js, React Native (mobile apps)",
      "Backend: Python Django, HL7 FHIR APIs",
      "Database: PostgreSQL, HIPAA-compliant encrypted storage",
      "Cloud Services: AWS GovCloud, CloudWatch, KMS encryption",
    ],
    businessImpact: [
      "40% reduction in patient wait times",
      "70% faster insurance claim processing",
      "Zero paper-based medical record dependency",
      "Improved diagnosis accuracy with integrated lab data",
      "Enhanced patient satisfaction and retention scores",
    ],
    benefits: [
      "Unified clinical and administrative platform",
      "Secure patient data with role-based access",
      "Telemedicine-ready infrastructure",
      "Regulatory compliance built into core workflows",
    ],
    useCases: [
      "Multi-specialty hospitals replacing legacy HMS systems",
      "Diagnostic chains needing centralized lab reporting",
      "Clinics launching telemedicine services",
      "Healthcare networks requiring cross-facility patient tracking",
    ],
  },
  {
    slug: "ai-automation-solutions",
    title: "AI & Automation Solutions",
    shortDescription: "Intelligent AI agents and workflow automation for business growth.",
    description:
      "Deploy intelligent AI agents and automation pipelines that handle lead qualification, customer support, document processing, and business intelligence — operating 24/7 without human intervention. Our AI solutions are built on cutting-edge large language models and integrated directly into your existing CRM, ERP, and communication tools.",
    icon: "BrainCircuit",
    businessChallenge:
      "Businesses lose significant revenue and productivity to manual, repetitive tasks — responding to inquiries, qualifying leads, processing documents, generating reports, and managing follow-ups. Human teams handling these tasks are error-prone, expensive, and unable to operate around the clock, limiting business scalability.",
    ourSolution:
      "We design and deploy custom AI agents and automation workflows tailored to your specific business processes. From conversational AI agents on WhatsApp and websites to intelligent document processing and automated analytics pipelines, our solutions eliminate operational bottlenecks and unlock growth without increasing headcount.",
    features: [
      "Conversational AI Agents (Voice & Chat)",
      "Lead Qualification & CRM Automation",
      "24/7 Customer Support Automation",
      "Intelligent Document Processing",
      "WhatsApp & Email Workflow Automation",
      "Business Intelligence & Auto-Reporting",
      "Appointment Booking & Calendar Integration",
      "Sentiment Analysis & Escalation Management",
    ],
    techStack: [
      "Frontend: React.js dashboard, WhatsApp Business API",
      "Backend: Python FastAPI, LangChain, OpenAI / Claude AI",
      "Database: MongoDB, Pinecone vector DB for RAG",
      "Cloud Services: AWS Lambda, SQS, Twilio, Zapier integrations",
    ],
    businessImpact: [
      "3x more qualified leads processed without additional staff",
      "60% reduction in customer response time",
      "80% of routine inquiries handled autonomously",
      "Real-time business intelligence without manual reporting",
      "40% increase in conversion rates through faster follow-up",
    ],
    benefits: [
      "24/7 automated customer and business operations",
      "Seamless integration with existing CRM and ERP",
      "Configurable AI agents for any industry workflow",
      "Continuous learning and improvement over time",
    ],
    useCases: [
      "Real estate agencies automating lead qualification",
      "E-commerce businesses with 24/7 AI support",
      "Financial services firms automating document review",
      "Healthcare providers with intelligent appointment bots",
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortDescription: "Cross-platform mobile apps for iOS, Android, and enterprise.",
    description:
      "We design and develop high-performance mobile applications for iOS and Android that deliver intuitive user experiences and robust business functionality. From consumer-facing apps to enterprise mobility solutions, our cross-platform development expertise ensures faster time-to-market without compromising on native performance.",
    icon: "Smartphone",
    businessChallenge:
      "Businesses need mobile-first solutions to reach customers and empower field teams, but traditional native development requires separate codebases for iOS and Android — doubling cost, effort, and maintenance overhead. Poor UX design and slow performance often result in low app adoption and negative brand perception.",
    ourSolution:
      "We leverage React Native and Flutter to deliver pixel-perfect, high-performance mobile applications from a single codebase — reducing development time by up to 50%. Our design-first approach ensures every app is intuitive, accessible, and optimized for the target audience, while our backend integration expertise ensures reliable data sync and security.",
    features: [
      "Cross-Platform iOS & Android Development",
      "Custom UI/UX Design & Prototyping",
      "Offline-First Architecture",
      "Push Notifications & In-App Messaging",
      "Payment Gateway Integration",
      "GPS & Location Services",
      "Biometric Authentication",
      "App Store Deployment & Maintenance",
    ],
    techStack: [
      "Frontend: React Native, Flutter, Expo",
      "Backend: Node.js, Firebase, REST & GraphQL APIs",
      "Database: SQLite (offline), Firebase Firestore",
      "Cloud Services: Google Play Console, Apple App Store, Firebase",
    ],
    businessImpact: [
      "50% faster development versus native per-platform builds",
      "Higher user retention through superior UX design",
      "Offline capability enabling field team productivity",
      "Reduced support costs with intuitive self-service apps",
      "Expanded market reach via App Store and Play Store",
    ],
    benefits: [
      "Single codebase for iOS and Android",
      "Native performance with cross-platform efficiency",
      "Rapid prototyping and iterative delivery",
      "Full lifecycle support from design to launch",
    ],
    useCases: [
      "Field service companies empowering on-site teams",
      "Retail brands launching customer loyalty apps",
      "Healthcare providers offering patient mobile portals",
      "Logistics companies tracking deliveries in real time",
    ],
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    shortDescription: "Bespoke software solutions built precisely for your business needs.",
    description:
      "We engineer custom software solutions from the ground up — tailored precisely to your business processes, integration requirements, and growth objectives. Unlike off-the-shelf products, our bespoke solutions are built to fit your workflow exactly, eliminating the compromises and licensing costs of generic platforms.",
    icon: "Code",
    businessChallenge:
      "Standard software products force businesses to adapt their processes to fit the tool — not the other way around. This leads to costly workarounds, shadow IT, data silos, and feature bloat that teams never use. Growing businesses especially need software that scales with their unique model, not a generic solution built for the mass market.",
    ourSolution:
      "We work as an extension of your team — deeply understanding your business requirements before writing a single line of code. Our agile delivery model ensures regular working demos, early feedback loops, and a final product that precisely reflects your operational reality. Post-launch, we provide dedicated support and iterative enhancements.",
    features: [
      "Requirements Discovery & System Design",
      "Full-Stack Web Application Development",
      "API Design, Integration & Documentation",
      "Database Architecture & Optimization",
      "Legacy System Migration & Modernization",
      "Quality Assurance & Automated Testing",
      "Performance Optimization & Security Hardening",
      "Post-Launch Support & Iterative Enhancement",
    ],
    techStack: [
      "Frontend: React.js, Next.js, Vue.js, TypeScript",
      "Backend: Node.js, Python, Java, .NET",
      "Database: PostgreSQL, MySQL, MongoDB, Redis",
      "Cloud Services: AWS, Azure, GCP — deployment and DevOps",
    ],
    businessImpact: [
      "Software that fits your process — zero operational compromise",
      "Elimination of per-seat licensing costs of generic tools",
      "Faster team adoption with purpose-built UX",
      "Competitive advantage through proprietary tooling",
      "Long-term cost reduction versus recurring SaaS fees",
    ],
    benefits: [
      "Built precisely for your workflows and data model",
      "Full ownership — no vendor lock-in",
      "Scalable architecture designed for your growth roadmap",
      "Transparent agile delivery with regular milestones",
    ],
    useCases: [
      "Operations teams replacing fragmented spreadsheet workflows",
      "Startups building their core product platform",
      "Enterprises modernizing legacy internal tools",
      "Industry-specific businesses with unique process requirements",
    ],
  },
  {
    slug: "cloud-infrastructure-services",
    title: "Cloud & Infrastructure Services",
    shortDescription: "Scalable cloud architecture, migration, and managed infrastructure.",
    description:
      "We design, migrate, and manage cloud infrastructure on AWS, Azure, and GCP — enabling businesses to achieve high availability, security, and cost efficiency. From zero-to-cloud migrations to multi-cloud architectures and ongoing managed services, our cloud team ensures your infrastructure supports business ambition at every scale.",
    icon: "Cloud",
    businessChallenge:
      "Businesses running on legacy on-premise infrastructure face high capital costs, poor scalability, security vulnerabilities, and slow deployment cycles. Even those partially on the cloud often lack optimized architectures — overpaying for unused resources, suffering from downtime, and lacking the automation needed for modern development practices.",
    ourSolution:
      "We conduct a thorough infrastructure assessment and deliver a tailored cloud strategy — whether a lift-and-shift migration, cloud-native rebuild, or hybrid architecture. Our DevOps engineers implement CI/CD pipelines, auto-scaling, and infrastructure-as-code to ensure your systems are always available, secure, and cost-optimized.",
    features: [
      "Cloud Migration (AWS, Azure, GCP)",
      "Infrastructure Architecture & Design",
      "CI/CD Pipeline Implementation",
      "Kubernetes & Container Orchestration",
      "Auto-Scaling & Cost Optimization",
      "Security Hardening & Compliance",
      "Disaster Recovery & Backup Strategy",
      "24/7 Managed Infrastructure Support",
    ],
    techStack: [
      "Infrastructure: Terraform, Ansible, CloudFormation",
      "Containers: Docker, Kubernetes, EKS, AKS",
      "CI/CD: GitHub Actions, Jenkins, Azure DevOps",
      "Cloud Platforms: AWS, Microsoft Azure, Google Cloud Platform",
    ],
    businessImpact: [
      "40% reduction in infrastructure costs through optimization",
      "99.9% uptime SLA with redundant architecture",
      "10x faster deployment cycles with CI/CD automation",
      "Eliminated capital expenditure on hardware",
      "Enterprise-grade security and compliance posture",
    ],
    benefits: [
      "Pay only for what you use with auto-scaling",
      "Global deployment for low-latency user experience",
      "Infrastructure-as-code for repeatable, auditable environments",
      "Expert team managing complexity so you can focus on product",
    ],
    useCases: [
      "Enterprises migrating from on-premise data centers",
      "Startups needing scalable cloud-native architecture",
      "SaaS companies optimizing multi-tenant infrastructure",
      "Regulated industries requiring compliance-ready cloud environments",
    ],
  },
  {
    slug: "digital-transformation-services",
    title: "Digital Transformation Services",
    shortDescription: "End-to-end digital strategy and technology modernization programs.",
    description:
      "We partner with organizations to plan and execute comprehensive digital transformation programs — modernizing legacy systems, digitizing manual processes, enabling data-driven decision-making, and building the technology foundation for sustainable competitive advantage. Our transformation engagements combine strategy, technology, and change management.",
    icon: "Zap",
    businessChallenge:
      "Organizations across industries recognize the urgency of digital transformation but struggle to translate strategy into execution. Siloed legacy systems, resistance to change, lack of digital talent, and unclear technology roadmaps lead to transformation programs that stall, overrun budgets, and fail to deliver measurable business outcomes.",
    ourSolution:
      "We act as a transformation partner — starting with a digital maturity assessment, defining a prioritized roadmap, and delivering phased technology implementations that show quick wins while building toward long-term capability. Our combined expertise in software, AI, cloud, and change management ensures programs are delivered on time, on budget, and with measurable ROI.",
    features: [
      "Digital Maturity Assessment",
      "Technology Roadmap & Architecture Planning",
      "Legacy System Modernization",
      "Process Automation & Digitization",
      "Data Strategy & Analytics Platform",
      "Change Management & Staff Enablement",
      "Vendor Selection & Technology Advisory",
      "Program Governance & KPI Tracking",
    ],
    techStack: [
      "Assessment Tools: Custom discovery frameworks and audit tools",
      "Implementation: Full-stack, cloud, AI — per roadmap requirements",
      "Analytics: Power BI, Tableau, custom reporting dashboards",
      "Integration: MuleSoft, Azure Integration Services, REST APIs",
    ],
    businessImpact: [
      "Measurable ROI delivered in 90-day transformation sprints",
      "Legacy system TCO reduced by up to 55%",
      "Data-driven decision-making across all business functions",
      "Competitive positioning through technology-led differentiation",
      "Workforce productivity gains of 35–50% post-transformation",
    ],
    benefits: [
      "Structured program with clear milestones and governance",
      "Technology-agnostic advisory — best tool for each need",
      "Quick wins in first 90 days to build organizational momentum",
      "Lasting capability built through knowledge transfer",
    ],
    useCases: [
      "Traditional industries modernizing for the digital economy",
      "Mid-size companies scaling operations through technology",
      "Enterprises replacing end-of-life core systems",
      "Organizations building data and AI capabilities from scratch",
    ],
  },
];

export const industries = [
  "Education",
  "Healthcare",
  "Enterprise",
  "Manufacturing",
  "Retail",
  "Infrastructure",
];
