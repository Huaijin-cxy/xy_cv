
import { Education, Experience, Project, SkillGroup } from './types';

export const EDUCATION: Education[] = [
  {
    degree: "Master of Arts in Computational Linguistics",
    institution: "Heidelberg University",
    period: "Apr 2026",
  },
  {
    degree: "Master of Science in Data and Computer Science",
    institution: "Heidelberg University",
    period: "Oct 2022 - Mar 2026",
    details: ["Grade: 1.5"]
  },
  {
    degree: "Master of Science in Information System",
    institution: "ECE Paris (Erasmus Exchange)",
    period: "Sep 2023 - Dec 2023",
  },
  {
    degree: "Bachelor of Science in Computer Science and Technology",
    institution: "Zhengzhou University",
    period: "Sep 2018 - Jul 2022",
  }
];

export const WORK_EXPERIENCE: Experience[] = [
  {
    role: "AI Data Operations",
    company: "ByteDance",
    period: "Oct 2025 - Dec 2025",
    location: "Beijing, China",
    scope: "Improving Large Language Model (LLM) application performance through high-quality SFT (Supervised Fine-tuning) data development",
    responsibilities: [
      "Built automated LLM data workflows using API-based model calling and prompt engineering, achieving 80%+ improvement in output quality for targeted weak capability areas.",
      "Conducted data validity experiments by analyzing hallucination patterns in model outputs and validating improvements through targeted data reconstruction.",
      "Utilized no-code tools to build flexible, project-specific data workflows for response consistency across multiple application scenarios."
    ]
  },
  {
    role: "Research Assistant",
    company: "African Institute for Mathematical Sciences",
    period: "Aug 2025 - Sep 2025",
    location: "Cape Town, South Africa",
    scope: "Contributed to EdTech-focused research projects aimed at improving STEM education in under-resourced regions of South Africa",
    responsibilities: [
      "Designed and implemented a quantitative framework to evaluate TurtleStitch student designs, measuring computational thinking complexity (loops, iterations, unique parameters, accuracy) and identifying 2 key conceptual gaps.",
      "Analyzed workshop survey data using Excel (pivot tables, Power Query), generating insights that led to a 15% increase in students’ variable usage after teaching adjustments.",
      "Built Tableau dashboards and supported workshop operations, providing clear visual reports for educators."
    ]
  },
  {
    role: "Student Assistant",
    company: "Leibniz Centre for European Economic Research (ZEW)",
    period: "Jul 2024 - Jul 2025",
    location: "Mannheim, Germany",
    scope: "China’s Social Credit System and Its Impact on Firm Behavior and Performance",
    responsibilities: [
      "Designed a data extraction and processing pipeline for over 130,000 firms using Python/Scrapy, extracting data from semi-structured PDF reports into Excel files.",
      "Built a firm-level time-series dataset from scraped credit records to analyze the relationship between credit scores and corporate behavior.",
      "Supported the training and evaluation of classification models for predicting ESG-related firm ratings; benchmarked internal signals against third-party ratings."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "llm-performance-sft",
    title: "Improving LLM Application Performance with High-Quality SFT Data",
    role: "AI Data Operations",
    period: "Oct 2025 - Dec 2025",
    institution: "ByteDance, China",
    summary: "Optimizing Large Language Model performance through automated Supervised Fine-tuning (SFT) data workflows and data pattern identification.",
    background: "Modern LLM applications require highly specific and consistent response patterns to meet production standards. Standard training datasets often lack the nuance required for specialized tasks, necessitating custom SFT data pipelines.",
    methodology: "Leveraged LLMs for data analysis and optimization. Designed targeted prompts to generate SFT data and improve model outputs. Automated scoring and filtering workflows to surface high-impact cases for fine-tuning.",
    contributions: [
      "Built automated LLM data workflows using API-based model calling and prompt strategies.",
      "Conducted data validity experiments by analyzing hallucination patterns in model outputs and validating improvements through targeted data reconstruction.",
      "Utilized no-code tools to build flexible, project-specific data workflows for optimizing LLM performance."
    ],
    techStack: ["Python", "LLM APIs", "Prompt Engineering", "No-code Workflow Tools"],
    results: [
      "Achieved 80%+ improvement in output quality for targeted weak capability areas.",
      "Reduced manual labeling effort through automated data filtering and validation workflows.",
      "Improved response consistency across multiple application scenarios."
    ]
  },
  {
    id: "edtech-stem-africa",
    title: "EdTech Research for Enhancing STEM Education",
    role: "Research Assistant",
    period: "Aug 2025 - Sep 2025",
    institution: "African Institute for Mathematical Sciences",
    summary: "Quantitative analysis and educational research on computational thinking development in under-resourced regions.",
    background: "This project aimed to improve STEM education in South Africa by evaluating the effectiveness of interactive programming tools (TurtleStitch) on student learning outcomes.",
    methodology: "Employed a quantitative research design to evaluate student-generated code. Data was aggregated from workshop surveys and project files, then analyzed using statistical and visualization tools.",
    contributions: [
      "Designed a quantitative framework to evaluate student designs based on complexity metrics (loops, unique parameters, etc.).",
      "Conducted longitudinal analysis of workshop survey data to track student progress.",
      "Developed interactive Tableau dashboards for stakeholder reporting."
    ],
    techStack: ["Excel", "Tableau", "Quantitative Analysis"],
    results: [
      "Identified critical conceptual gaps in early-stage computational thinking.",
      "Achieved a 15% increase in students' advanced programming usage through data-driven curriculum adjustments.",
      "Provided actionable insights for regional educators to scale STEM initiatives."
    ]
  },
  {
    id: "social-credit-impact",
    title: "China’s Social Credit System and Its Impact on Firm Behavior and Performance",
    role: "Student Assistant",
    period: "Jul 2024 - Jul 2025",
    institution: "Leibniz Centre for European Economic Research (ZEW)",
    summary: "Engineering a large-scale data extraction pipeline for longitudinal analysis of firm-level regulatory data.",
    background: "The project investigated how centralized credit systems influence corporate behavior. This required processing vast amounts of semi-structured regulatory reports into a structured format for econometric analysis.",
    methodology: "Developed a data pipeline capable of handling over 130,000 corporate records. The pipeline extracted and converted diverse PDF formats into structured Excel files for further econometric analysis.",
    contributions: [
      "Engineered a scalable data pipeline using Python and Scrapy for processing 130,000+ firms.",
      "Implemented custom PDF parsing logic to extract information from semi-structured reports.",
      "Built a longitudinal dataset of credit scores to facilitate time-series analysis of firm performance."
    ],
    techStack: ["Python", "Scrapy", "PDF Extraction", "Pandas"],
    results: [
      "Successfully created a structured dataset for China's social credit records at scale.",
      "Enabled high-granularity research into firm behavior and ESG-related performance.",
      "Validated internal ESG signals against established third-party rating systems."
    ]
  },
  {
    id: "gan-angiograms",
    title: "Iterative Image-to-Image Mapping for Realistic X-Ray Coronary Angiograms",
    role: "Master Thesis Researcher",
    period: "Nov 2024 - Jun 2025",
    institution: "Heidelberg University",
    summary: "Developing a generative framework to bridge the gap between simulated and real medical imaging.",
    background: "Simulated X-ray coronary angiograms often lack the fine vessel structures and realistic noise patterns of actual clinical data, limiting their utility for training medical AI models.",
    methodology: "Developed an iterative vessel-aware GAN (Generative Adversarial Network) framework. The approach incorporates structure-sensitive losses and inpainting modules to refine simulated data while preserving anatomical integrity.",
    contributions: [
      "Designed a custom loss function specifically targeting vessel continuity.",
      "Implemented a refinement module to reduce background artifacts common in simulated angiograms.",
      "Evaluated the model using quantitative metrics including IOU, KL divergence, and KID (Kernel Inception Distance)."
    ],
    techStack: ["Python", "PyTorch", "OpenCV", "Numpy"],
    results: [
      "Achieved measurable improvements over baseline GAN models in realism.",
      "Preserved complex vessel bifurcations that previous methods often collapsed.",
      "Thesis Grade: 1.0"
    ]
  },
  {
    id: "tea-simulation",
    title: "Interactive Tea-Making Simulation Game",
    role: "Team Member",
    period: "Nov 2023 - Jun 2024",
    institution: "Heidelberg University",
    summary: "A 3D interactive simulation focused on process accuracy and user interaction.",
    background: "The project aimed to create a gamified tutorial for traditional tea-making, emphasizing precise sequence and environmental interaction.",
    methodology: "Utilized Unity with a focus on Scrum-based agile development. Emphasized version control and iterative testing for feature stability.",
    contributions: [
      "Managed version control and collaborative development using Git.",
      "Conducted structured functionality testing and debugging to ensure feature stability.",
      "Facilitated Scrum ceremonies including sprint planning and daily stand-ups."
    ],
    techStack: ["Unity/C#", "Git", "Scrum Framework", "3D Modeling Tools"],
    results: [
      "Successfully delivered a fully functional prototype with complex state-tracking.",
      "Ensured high stability through rigorous debugging cycles."
    ]
  }
];

export const SKILLS: SkillGroup[] = [
  {
    category: "Technical Skills",
    skills: ["Python (Proficient)", "SQL (Proficient)", "C/C++ (Familiar)", "Java (Familiar)", "PyTorch", "Scikit-learn", "Numpy", "Pandas", "Spacy", "OpenCV", "Scrapy"]
  },
  {
    category: "Tools & Methods",
    skills: ["Tableau", "Docker", "Git", "Scrum", "MS Office Suite"]
  },
  {
    category: "Languages",
    skills: ["Chinese (Native)", "English (Fluent)", "German (Beginner)"]
  }
];
