import { ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import portrait from '@assets/IMG_20261009_170418_1791554735472.jpg';

const profileLinks = {
  github: 'https://github.com/anastasiia-marinenko',
  linkedin: 'https://linkedin.com/in/anastasiia-marinenko',
};

const projects = [
  {
    number: '01 / AIR QUALITY',
    title: 'AirWatch Pro',
    description: 'Air-quality monitoring that brings global sensor networks together with machine-learning predictions.',
    tags: ['Sensor networks', 'Machine learning', 'Prediction'],
  },
  {
    number: '02 / PRODUCT DESIGN',
    title: 'AdmissionIQ',
    description: 'Analytics web-app concept for exploring admission data, with interface and architecture design.',
    tags: ['Data analytics', 'Web app', 'Architecture'],
  },
  {
    number: '03 / NLP',
    title: 'Investence',
    description: 'Investment sentiment analysis exploring the signal behind financial language.',
    tags: ['Sentiment analysis', 'NLP'],
  },
  {
    number: '04 / SYSTEM DESIGN',
    title: 'MyTravel',
    description: 'A travel-agency management system spanning web, mobile and desktop platforms.',
    tags: ['Web', 'Mobile', 'Desktop'],
  },
  {
    number: '05 / DATABASES',
    title: 'Tourism agency database',
    description: 'A relational model for tourism operations, normalized through BCNF.',
    tags: ['Relational model', 'BCNF', 'SQL'],
  },
];

const smallProjects = [
  'Book Recommender',
  'AI-Calendar',
  'OASIS Garden Store',
  'HAPPIFUL Magazine Blog',
  'Cosmic Music Player',
  "Earth's Rotation 3D Model",
];

const stackGroups = [
  { label: 'Languages', items: ['Python', 'SQL', 'C / C++', 'Java', 'MATLAB', 'JavaScript', 'HTML / CSS', 'PHP'] },
  { label: 'Data & ML', items: ['NumPy', 'Pandas', 'scikit-learn', 'Matplotlib', 'seaborn', 'TensorFlow', 'PyTorch'] },
  { label: 'LLM & NLP', items: ['Hugging Face Transformers', 'LangChain', 'Ollama', 'Groq', 'OpenAI API', 'Anthropic API', 'Gemini API', 'Prompt engineering', 'RAG', 'Sentence embeddings', 'BERTScore', 'METEOR', 'ROUGE-L'] },
  { label: 'Databases', items: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB'] },
  { label: 'Tools & cloud', items: ['Git / GitHub', 'Docker', 'Jupyter', 'Colab', 'Kaggle', 'Azure', 'Bash / Zsh'] },
];

function SocialLinks() {
  return (
    <div className="nav-social" aria-label="Public profiles">
      <a className="icon-link" href={profileLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
        <Github size={16} strokeWidth={1.8} />
      </a>
      <a className="icon-link" href={profileLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
        <Linkedin size={15} strokeWidth={1.8} />
      </a>
    </div>
  );
}

function App() {
  return (
    <main className="portfolio">
      <header className="topbar">
        <div className="container topbar-inner">
          <a className="brand" href="#home" aria-label="Anastasiia Marinenko home">
            a<span className="brand-mark">.</span>m
          </a>
          <nav className="nav-links" aria-label="Main navigation">
            <a href="#research">Research</a>
            <a href="#projects">Projects</a>
            <a href="#toolkit">Toolkit</a>
            <a href="#recognition">Recognition</a>
          </nav>
          <SocialLinks />
        </div>
      </header>

      <section className="container hero" id="home">
        <div className="hero-text">
          <div className="eyebrow fade-up"><span className="live-dot" /> Trainee data scientist <span>·</span> Applied ML &amp; language models</div>
          <h1 className="fade-up delay-1">Anastasiia <span>Marinenko</span></h1>
          <p className="hero-copy fade-up delay-2">
            Technical projects across machine learning, language models and applied data systems—grounded in data preparation, evaluation and reproducible analysis.
          </p>
          <div className="hero-cta fade-up delay-3">
            <a className="button-primary" href="#research">Explore selected work <ArrowDown size={15} /></a>
            <a className="button-secondary" href={profileLinks.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a>
          </div>
          <div className="hero-note">Python · Machine learning · LLM evaluation</div>
        </div>
        <div className="portrait-wrap fade-up delay-2">
          <div className="portrait-glow" />
          <div className="portrait-frame">
            <img src={portrait} alt="Anastasiia Marinenko in a city street" />
          </div>
          <div className="portrait-caption"><strong>Build. Measure. Learn.</strong><span>the loop behind every project</span></div>
        </div>
        <div className="scroll-cue" aria-hidden="true"><i /> Scroll to explore</div>
      </section>

      <section className="container section" id="research">
        <div className="section-head">
          <div><div className="section-index">01 — FEATURED RESEARCH</div><h2 className="section-title">A closer look at the work.</h2></div>
          <p className="section-subtitle">A method-level study of documentation debt—built around a mined dataset, comparative evaluation and practical repair constraints.</p>
        </div>
        <article className="feature">
          <div className="feature-inner">
            <div className="feature-topline"><span>LLM research project</span><span>Dataset → evaluation → repair</span></div>
            <h3>Method-Level Documentation Debt Management</h3>
            <p className="feature-intro">An investigation into how large language models can identify and repair outdated method documentation while preserving information that is already correct.</p>
            <div className="feature-metrics">
              <div className="metric"><strong>496,688</strong><span>Java methods considered across 4,769 repositories</span></div>
              <div className="metric"><strong>55,931</strong><span>documentation-fix pairs mined</span></div>
              <div className="metric"><strong>360</strong><span>methods manually verified</span></div>
              <div className="metric"><strong>6 LLMs</strong><span>compared across prompts and RAG</span></div>
            </div>
            <div className="feature-details">
              <div className="detail-block">
                <h4>Evaluation design</h4>
                <p>Compared prompt patterns and retrieval-augmented generation. Evaluated with BERTScore, METEOR, ROUGE-L, sentence-embedding cosine distance, structural checks and statistical tests.</p>
              </div>
              <div className="detail-block">
                <h4>Findings</h4>
                <p>Generated comments had correct tags in at least 95.6% of cases. Proprietary model detection accuracy ranged from 0.74–0.83. Field-level repairs reached 91.6–100%, preserving 93.5–98.5% of correct fields.</p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="container section project-section" id="projects">
        <div className="section-head">
          <div><div className="section-index">02 — SELECTED PROJECTS</div><h2 className="section-title">Different questions.<br />Different tools.</h2></div>
          <p className="section-subtitle">A project portfolio across data products, applied ML, analytics and system design. Each one starts with a real problem to structure.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <span className="card-number">{project.number}</span>
              <span className="card-arrow" aria-hidden="true"><ArrowUpRight size={16} /></span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-row">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
        <div className="small-projects">
          <div className="small-projects-label">Smaller builds &amp; experiments</div>
          <div className="small-list">{smallProjects.map((project) => <span className="small-item" key={project}>{project}</span>)}</div>
        </div>
      </section>

      <section className="section stack-section" id="toolkit">
        <div className="container stack-layout">
          <div>
            <div className="section-index">03 — TECHNICAL TOOLKIT</div>
            <h2 className="section-title">Tools for the<br />whole pipeline.</h2>
            <p className="stack-lead">From a first exploratory notebook to model evaluation and data infrastructure, this is the set of tools I’ve worked with across projects.</p>
            <div className="stack-note">Tools are listed by category, not ranked proficiency.</div>
          </div>
          <div className="stack-list">
            {stackGroups.map((group) => (
              <div className="stack-group" key={group.label}>
                <h3>{group.label}</h3>
                <div className="stack-items">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container section credentials-section" id="recognition">
        <div className="section-head">
          <div><div className="section-index">04 — RECOGNITION &amp; LEARNING</div><h2 className="section-title">Curiosity, in progress.</h2></div>
          <p className="section-subtitle">Research outputs, challenge recognition and clearly labeled learning milestones.</p>
        </div>
        <div className="credential-grid">
          <article className="credential-panel achievement-panel">
            <h3>Research &amp; recognition</h3>
            <div className="credential-row">
              <div><strong>NASA International Space Apps Challenge 2025</strong><small>Team CloudMap · Global Nominee and Global Finalist</small></div>
              <span className="credential-date">2025</span>
            </div>
            <div className="credential-row">
              <div><strong>Computer Technology for Secure Transmission of Text Messages Based on Image Distortion and Restoration</strong><small>Published conference paper</small></div>
              <span className="credential-date">2025</span>
            </div>
            <div className="credential-row">
              <div><strong>Rewriting the Narrative: Leveraging Large Language Models for Method-Level Documentation Debt Management</strong><small>Publication in preparation</small></div>
              <span className="credential-date">In prep.</span>
            </div>
          </article>
          <article className="credential-panel">
            <h3>Courses &amp; certificates</h3>
            <div className="credential-row">
              <div><strong>CS50’s Introduction to Artificial Intelligence with Python</strong><small>Harvard · course certificate</small></div>
              <span className="credential-date">Sep 2025</span>
            </div>
            <div className="credential-row">
              <div><strong>Azure AI Fundamentals</strong><small>Microsoft · certification</small></div>
              <span className="credential-date">Sep 2025</span>
            </div>
            <div className="credential-row">
              <div><strong>Introduction to SQL</strong><small>University of Michigan · course certificate</small></div>
              <span className="credential-date">May 2024</span>
            </div>
            <div className="credential-row">
              <div><strong>Deep Learning</strong><small>Anhalt University of Applied Sciences · academic course</small></div>
              <span className="credential-date">Dec 2025</span>
            </div>
          </article>
          <article className="credential-panel learning-panel">
            <h3>Currently learning</h3>
            <div className="learning-list">
              <span className="learning-chip">Machine Learning · Anhalt</span>
              <span className="learning-chip">Associate Data Scientist in Python · DataCamp</span>
              <span className="learning-chip">Journey into Data Science with Python · CodeSignal</span>
            </div>
            <div className="small-projects-label" style={{ marginTop: 21 }}>CodeSignal learning paths</div>
            <div className="learning-list" style={{ marginTop: 11 }}>
              <span className="learning-chip">Introduction to Data Science with Python</span>
              <span className="learning-chip">Discovering Modern Neural Network Architectures</span>
              <span className="learning-chip">Introduction to Machine Learning</span>
              <span className="learning-chip">Introduction to Data Analytics</span>
              <span className="learning-chip">The Transformer Revolution: How Modern AI Works</span>
            </div>
          </article>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <span className="footer-name">Anastasiia Marinenko <span className="brand-mark">·</span> Data science portfolio</span>
          <div className="footer-links">
            <a href={profileLinks.github} target="_blank" rel="noreferrer">GitHub <ArrowRight size={11} /></a>
            <a href={profileLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowRight size={11} /></a>
            <a href="#home">Back to top <ArrowRight size={11} /></a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
