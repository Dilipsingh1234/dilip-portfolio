import { useRef, useState } from "react";
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
    logo: "/seagate-logo.png",
    date: "Aug 2026 – Present",
    location: "Minnesota",
    work: [
      ["Pipeline reliability", "Investigate failed Airflow jobs and repair the Python and SQL pipelines that supply enterprise reports."],
      ["Reporting migration", "Reconcile Oracle records with their Hive counterparts and trace discrepancies back to the transformations that introduced them."],
      ["Data preparation", "Build reporting tables and calculated columns, then use Databricks, Python, and SQL to check the results."],
    ],
  },
  {
    role: "Graduate Software Engineer",
    company: "Avance Consulting Services",
    date: "Jan 2024 – Dec 2024",
    location: "Hyderabad, India",
    work: [
      ["Backend services", "Developed FastAPI services for an e-commerce platform, tested SQL queries, and tracked down defects in the application."],
      ["Model integration", "Connected AWS-hosted inference APIs to application workflows and tested the responses returned to the backend."],
    ],
  },
  {
    role: "Data Science Intern",
    company: "Innomatics Research Labs",
    date: "Sep 2023 – Dec 2023",
    location: "Hyderabad, India",
    work: [
      ["Analysis & reporting", "Cleaned and explored structured datasets with Python, Pandas, NumPy, and SQL, then built Tableau dashboards to share the findings."],
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
      "Hyderabad, India",
  },
];

const featured = [
  {
    title: "Chicago Crime Risk Prediction",
    description: "Grouped 494,000 reported incidents by community area and hour to model when and where an incident would be recorded. The classifier reached a ROC-AUC of 0.748.",
    metric: "1.35M",
    caption: "area-hour observations",
    repo: "chicago-crime-spatiotemporal-prediction",
  },
  {
    title: "Async AI Inference System",
    description: "Airflow sends one prediction request per record. A worker reads the queue, loads the trained model, and saves each prediction to S3 before acknowledging the request.",
    stages: ["SQS", "Worker", "S3"],
    repo: "async-ai-inference-system",
  },
  {
    title: "Patient Readmission Prediction",
    description: "Compared logistic regression, random forest, and gradient boosting on hospital records. Gradient boosting achieved the highest accuracy on unseen test data.",
    metric: "81.25%",
    accuracy: 81.25,
    caption: "test accuracy",
    repo: "Patient_Readmission",
  },
];

const moreProjects = [
  ["Retinal OCT Image Classification", "Transfer learning with MobileNetV2", "Retinal_OCT_Image_Classification"],
  ["YouBot AI", "Transcript-based Q&A with retrieval-augmented generation", "Rag_Youtube_Chatbot"],
  ["Loan Default Prediction", "Credit risk classification with scikit-learn", "Loan-default-prediction"],
];

const github = "https://github.com/Dilipsingh1234";
const sections = ["Experience", "Projects", "Skills", "Education", "Contact"];

function Header() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef(null);

  function handleKeyDown(event) {
    if (event.key === "Escape" && open) {
      setOpen(false);
      menuButton.current?.focus();
    }
  }

  return (
    <header onKeyDown={handleKeyDown} onBlur={event => {
      if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
    }}>
      <nav className="wrap nav" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>Dilip Singh Thakur</a>
        <button className="menu-toggle" ref={menuButton} aria-expanded={open}
          aria-controls="section-links" onClick={() => setOpen(!open)}>Menu</button>
        <div className="nav-links" id="section-links" data-open={open}>
          {sections.map(section => <a key={section} href={`#${section.toLowerCase()}`}
            onClick={() => setOpen(false)}>{section}</a>)}
        </div>
        <a className="resume" href="/Dilip_Resume.pdf" download onClick={() => setOpen(false)}>Résumé</a>
      </nav>
    </header>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="home" className="hero">
          <div className="wrap intro" id="about">
            <h1>Dilip Singh Thakur</h1>
            <p className="field">Software engineering, data engineering &amp; agentic systems</p>
            <p className="bio">Data Engineering Intern at Seagate, where I build data pipelines and
              troubleshoot production issues. I’m pursuing a master’s in AI at the University of
              St. Thomas. I’m passionate about building AI systems from the ground up, from shaping
              the data a model learns from to writing the software that puts it to work.</p>
            <div className="actions">
              <a className="button" href="#projects">View projects</a>
              <a className="text-link" href="mailto:Dilipsthakur27@gmail.com">Contact me</a>
            </div>
          </div>
        </section>

        <section id="experience" className="light">
          <div className="wrap section">
            <h2>Experience</h2>
            {experience.map(job => (
              <article key={job.company} className="role">
                <div>
                  <p className="meta job-date">{job.date}</p>
                  <h3>{job.logo ? (
                    <img className="company-logo" src={job.logo} alt={job.company}
                      width="640" height="214" />
                  ) : job.company}</h3>
                  <p className="role-name">{job.role}</p>
                  <p className="meta location">{job.location}</p>
                </div>
                <dl className="duties">
                  {job.work.map(([label, detail]) => <div key={label}>
                    <dt>{label}</dt><dd>{detail}</dd>
                  </div>)}
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="wrap section">
          <h2>Featured projects</h2>
          <div className="featured">
            {featured.map(project => <article className="project" key={project.repo}>
              <div className="result">
                {project.stages ? <figure><figcaption>Inference workflow</figcaption>
                  <ol className="flow">{project.stages.map(stage => <li key={stage}>{stage}</li>)}</ol>
                </figure> : <><strong>{project.metric}</strong><span>{project.caption}</span>
                  {project.accuracy && <div className="accuracy" aria-hidden="true"><i style={{ width: project.accuracy + "%" }} /></div>}</>}
              </div>
              <h3>{project.title}</h3><p>{project.description}</p>
              <a className="text-link" href={`${github}/${project.repo}`} aria-label={`View ${project.title} on GitHub`}>View on GitHub</a>
            </article>)}
          </div>
          <h3 className="more-heading">More projects</h3>
          {moreProjects.map(([name, detail, repo]) => <a className="compact" key={repo} href={`${github}/${repo}`}>
            <strong>{name}</strong><span>{detail}</span><small>GitHub</small>
          </a>)}
        </section>

        <div className="light">
          <section id="skills" className="wrap section">
            <h2>Skills</h2>
            <div className="skills">{skills.map(skill => <div key={skill.title}>
              <h3>{skill.title}</h3><p>{skill.items.join(" · ")}</p>
            </div>)}</div>
          </section>
          <section id="education" className="wrap section education">
            <h2>Education</h2>
            {education.map(item => <article key={item.school}>
              <p className="meta">{item.date}</p><div><h3>{item.school}</h3>
                <p>{item.degree}</p><p className="meta">{item.detail}</p></div>
            </article>)}
          </section>
        </div>
        <section id="contact" className="wrap section">
          <h2>Get in touch</h2>
          <p>Based in Minneapolis. Open to full-time AI, ML, software, and data engineering roles across the US.</p>
          <div className="actions"><a className="button" href="mailto:Dilipsthakur27@gmail.com">Email me</a>
            <a className="text-link" href="https://www.linkedin.com/in/dilip-singh24/">LinkedIn</a>
            <a className="text-link" href={github}>GitHub</a>
            <a className="text-link" id="resume" href="/Dilip_Resume.pdf" download>Download résumé</a>
          </div>
        </section>
      </main>
      <footer className="wrap">© 2026 Dilip Singh Thakur</footer>
    </>
  );
}

export default App;
