import { motion } from "framer-motion";
import "./App.css";

const skills = [
  {
    title: "AI / Machine Learning",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Neural Networks",
      "Scikit-learn",
      "TensorFlow/Keras",
      "Model Evaluation",
    ],
  },
  {
    title: "Software & APIs",
    items: ["Python", "REST APIs", "FastAPI", "Git", "GitHub", "Backend Integration"],
  },
  {
    title: "Data Engineering",
    items: ["SQL", "ETL/ELT", "Databricks", "Apache Hive", "Oracle SQL", "Data Reconciliation"],
  },
  {
    title: "MLOps / Cloud",
    items: ["AWS S3", "AWS SQS", "Airflow", "Docker", "MLflow", "Model Monitoring"],
  },
  {
    title: "GenAI / NLP",
    items: ["NLP", "LangChain", "RAG", "OpenAI API", "FAISS", "Embeddings", "Vector Search"],
  },
  {
    title: "Visualization",
    items: ["Tableau", "Power BI", "Matplotlib", "Dashboards"],
  },
];

const experience = [
  {
    role: "Data Engineering Intern",
    company: "Seagate Technology",
    date: "Aug 2026 – Present",
    location: "Minnesota",
    description:
      "I support the Python and SQL pipelines that supply data for enterprise reporting.",
    bullets: [
      "Investigate failed Apache Airflow jobs and resolve issues that interrupt reporting.",
      "Compare Oracle records with their Hive counterparts and trace mismatches during a reporting migration.",
      "Build SQL tables, transformations, and calculated columns for reporting, using Databricks, Python, and SQL for repeatable validation checks.",
    ],
  },
  {
    role: "Graduate Software Engineer",
    company: "Avance Consulting Services",
    date: "Jan 2024 – Dec 2024",
    location: "Hyderabad, India",
    description:
      "Developed Python and FastAPI services for an e-commerce platform.",
    bullets: [
      "Implemented SQL-backed features, tested queries, and investigated backend defects.",
      "Integrated AWS-hosted machine learning inference APIs and validated their responses through testing and code review.",
    ],
  },
  {
    role: "Data Science Intern",
    company: "Innomatics Research Labs",
    date: "Sep 2023 – Dec 2023",
    location: "Hyderabad, India",
    description:
      "Analyzed structured datasets and shared findings through Tableau dashboards.",
    bullets: [
      "Cleaned and explored data using Python, Pandas, NumPy, and SQL.",
      "Built Tableau dashboards to communicate patterns in the data.",
    ],
  },
];

const education = [
  {
    school: "University of St. Thomas",
    degree: "Master’s Degree, Artificial Intelligence",
    date: "Jan 2025 – Expected May 2027",
    detail:
      "Saint Paul, Minnesota · GPA 3.8/4.0",
  },
  {
    school: "Hyderabad Institute of Technology and Management",
    degree: "Bachelor of Technology, Electrical and Electronics Engineering",
    date: "2019 – 2022",
    detail:
      "Built a strong engineering foundation in analytical thinking, technical problem-solving, and project development.",
  },
];

const projects = [
  {
    title: "Patient Readmission Prediction",
    description:
      "Compared logistic regression, random forest, and gradient boosting on hospital readmission data. Gradient boosting performed best, correctly classifying about 81% of cases.",
    tech: ["Python", "scikit-learn", "Gradient Boosting"],
    highlight: "81.25% accuracy",
    github: "https://github.com/Dilipsingh1234/Patient_Readmission",
  },
  {
    title: "Chicago Spatio-Temporal Crime Risk Prediction",
    description:
      "Turned roughly 494,000 reported incidents into 1.35 million hourly observations grouped by Chicago community area. Used calendar and recent incident patterns to predict whether an area would record an incident in a given hour.",
    tech: ["Python", "Pandas", "scikit-learn", "Feature Engineering"],
    highlight: "0.748 ROC-AUC",
    github: "https://github.com/Dilipsingh1234/chicago-crime-spatiotemporal-prediction",
  },
  {
    title: "Retinal OCT Image Classification",
    description:
      "Adapted a pretrained MobileNetV2 network to classify retinal scans. The model extracts features from each image and assigns it to one of four categories.",
    tech: ["MobileNetV2", "Transfer Learning", "Computer Vision"],
    highlight: "Four retinal image classes",
    github: "https://github.com/Dilipsingh1234/Retinal_OCT_Image_Classification",
  },
  {
    title: "Async AI Inference System",
    description:
      "A queue-based MLOps system for running machine learning inference asynchronously using AWS S3, SQS, Docker, and Airflow.",
    tech: ["Python", "AWS S3", "AWS SQS", "Docker", "Airflow", "MLOps"],
    highlight: "Cloud-powered ML inference",
    github: "https://github.com/Dilipsingh1234/async-ai-inference-system",
  },
  {
    title: "YouBot AI",
    description:
      "A RAG-powered YouTube Q&A chatbot that retrieves transcript chunks and generates context-aware answers using LangChain, FAISS, and OpenAI embeddings.",
    tech: ["Python", "LangChain", "OpenAI API", "FAISS", "RAG"],
    highlight: "Transcript-based GenAI search",
    github: "https://github.com/Dilipsingh1234/Rag_Youtube_Chatbot",
  },
  {
    title: "Loan Default Prediction",
    description:
      "A machine learning classification project that predicts loan default risk using borrower and financial data, with a focus on preprocessing, model training, and evaluation.",
    tech: ["Python", "Pandas", "Scikit-learn", "Machine Learning"],
    highlight: "Financial risk prediction",
    github: "https://github.com/Dilipsingh1234/Loan-default-prediction",
  },
];

function FadeIn({ children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-sm font-semibold tracking-wide">
            Dilip Singh Thakur
          </a>

          <div className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#education" className="hover:text-white">Education</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>

          <a
            href="#resume"
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black"
          >
            Resume
          </a>
        </div>
      </nav>

      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2563eb_0%,transparent_35%),radial-gradient(circle_at_bottom_right,#7c3aed_0%,transparent_30%)] opacity-30" />
        <div className="absolute h-[420px] w-[420px] rounded-full bg-white/10 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto max-w-5xl text-center"
        >
          <div className="mx-auto mb-6 w-fit rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/80">
            ✦ Open to full-time AI / ML / Data Engineering roles
          </div>

          <p className="text-6xl font-semibold tracking-tight md:text-8xl">
            Dilip Singh Thakur
          </p>

          <h1 className="mb-4 text-2xl font-medium text-white/70 md:text-3xl">
          
            Data Engineering & Machine Learning
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-white/70 md:text-2xl">
            I’m a Data Engineering Intern at Seagate Technology and an M.S.
            candidate in Artificial Intelligence at the University of St. Thomas.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#projects"
              className="rounded-full bg-white px-7 py-3 font-medium text-black transition hover:scale-105"
            >
              View Projects
            </a>

            <a
              href="mailto:Dilipsthakur27@gmail.com"
              className="rounded-full border border-white/20 px-7 py-3 font-medium text-white transition hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </section>

      <section id="about" className="bg-white px-6 py-28 text-black">
        <FadeIn className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-black/50">
            About
          </p>

          <h2 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
            From reporting pipelines to predictive models.
          </h2>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-black/65">
            At Seagate, I trace reporting discrepancies back to their source as data
            moves from Oracle to Hive. In my machine learning projects, I’ve used
            hospital records to study readmission risk and Chicago incident reports
            to model how crime patterns vary by place and hour.
          </p>
        </FadeIn>
      </section>

      <section id="skills" className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-white/50">
            Skills
          </p>

          <h2 className="text-5xl font-semibold tracking-tight md:text-7xl">
            Tools I use to build.
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <FadeIn
                key={skill.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 transition hover:bg-white/[0.09]"
              >
                <h3 className="text-2xl font-semibold">{skill.title}</h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/75"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="bg-white px-6 py-28 text-black">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-black/50">
            Experience
          </p>

          <h2 className="text-5xl font-semibold tracking-tight md:text-7xl">
            From AI features to production workflows.
          </h2>

          <div className="mt-14 space-y-6">
            {experience.map((job) => (
              <FadeIn
                key={job.company}
                className="rounded-[2rem] border border-black/10 bg-black/[0.03] p-8"
              >
                <div className="flex flex-col justify-between gap-4 md:flex-row">
                  <div>
                    <h3 className="text-3xl font-semibold">{job.role}</h3>
                    <p className="mt-1 text-lg text-black/60">
                      {job.company} · {job.location}
                    </p>
                  </div>
                  <p className="text-black/55">{job.date}</p>
                </div>

                <p className="mt-6 max-w-4xl text-lg leading-8 text-black/65">
                  {job.description}
                </p>

                <ul className="mt-6 grid gap-3 md:grid-cols-2">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="text-black/70">
                      • {bullet}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-white/50">
            Featured Projects
          </p>

          <h2 className="max-w-5xl text-5xl font-semibold tracking-tight md:text-7xl">
            Projects that show how I think, build, and ship.
          </h2>

          <div className="mt-14 grid gap-6">
            {projects.map((project, index) => (
              <FadeIn
                key={project.title}
                className="rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-8 transition hover:bg-white/[0.1] md:p-12"
              >
                <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
                  <div>
                    <p className="mb-4 text-sm text-white/40">0{index + 1}</p>

                    <h3 className="text-4xl font-semibold tracking-tight md:text-5xl">
                      {project.title}
                    </h3>

                    <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/70"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        className="mt-6 inline-block rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                      >
                        View GitHub
                      </a>
                    )}
                  </div>

                  <div className="rounded-3xl bg-white p-6 text-black md:min-w-72">
                    <p className="text-sm text-black/50">Highlight</p>
                    <p className="mt-3 text-3xl font-semibold">
                      {project.highlight}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="bg-white px-6 py-28 text-black">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-black/50">
            Education
          </p>

          <h2 className="text-5xl font-semibold tracking-tight md:text-7xl">
            Academic foundation.
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {education.map((item) => (
              <FadeIn
                key={item.school}
                className="rounded-[2rem] border border-black/10 bg-black/[0.03] p-8"
              >
                <h3 className="text-3xl font-semibold">{item.school}</h3>

                <p className="mt-4 text-lg text-black/65">{item.degree}</p>

                <p className="mt-2 text-black/45">{item.date}</p>

                <p className="mt-6 leading-7 text-black/65">{item.detail}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="resume" className="bg-white px-6 py-28 text-black">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-5xl font-semibold tracking-tight md:text-7xl">
            Want the full story?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-xl text-black/60">
            Download my resume or connect with me to discuss full-time AI, ML,
            software, and data engineering opportunities.
          </p>

          <a
            href="/Dilip_Resume.pdf"
            download
            className="mt-10 inline-block rounded-full bg-black px-7 py-3 font-medium text-white transition hover:scale-105"
          >
            Download Resume
          </a>
        </div>
      </section>

      <section id="contact" className="px-6 py-28">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-5xl font-semibold tracking-tight md:text-7xl">
            Let’s build something intelligent.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-xl text-white/60">
            Open to full-time roles in AI/ML engineering, data engineering,
            software engineering, MLOps, and GenAI.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:Dilipsthakur27@gmail.com"
              className="rounded-full bg-white px-7 py-3 font-medium text-black"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/dilip-singh24/"
              target="_blank"
              className="rounded-full border border-white/20 px-7 py-3 font-medium text-white"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/Dilipsingh1234"
              target="_blank"
              className="rounded-full border border-white/20 px-7 py-3 font-medium text-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/45">
        © 2026 Dilip Singh Thakur. Built with React, Tailwind CSS, and Framer Motion.
      </footer>
    </main>
  );
}

export default App;