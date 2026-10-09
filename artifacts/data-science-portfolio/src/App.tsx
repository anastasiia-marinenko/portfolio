import { ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import portrait from '@assets/IMG_20261009_170418_1791554735472.jpg';

const profileLinks = {
  github: 'https://github.com/anastasiia-marinenko',
  linkedin: 'https://linkedin.com/in/anastasiia-marinenko',
  email: 'nastyamarinenko735@gmail.com',
};

const projects = [
  {
    category: 'AIR QUALITY',
    title: 'AirWatch Pro',
    description: 'Team CloudMap built an air-quality platform combining global sensor data with machine-learning forecasts. Live backend support is temporarily paused.',
    tags: ['Sensor networks', 'Machine learning', 'Prediction'],
    links: [
      { label: 'NASA Space Apps project', url: 'https://www.spaceappschallenge.org/2025/find-a-team/cloudmap/?tab=project' },
    ],
  },
  {
    category: 'UI / UX & ARCHITECTURE',
    title: 'AdmissionIQ',
    description: 'UI/UX and architecture design for a web application focused on admission data analytics.',
    tags: ['Data analytics', 'UI / UX design', 'Architecture'],
    links: [
      { label: 'Figma', url: 'https://www.figma.com/files/team/1264129389980080550/folder/100384033?fuid=1264129384626012284' },
      { label: 'Project files', url: 'https://drive.google.com/drive/folders/1qKnRVXmvP8c_VC7dyZv3VN_uSsPCDElH?usp=sharing' },
    ],
  },
  {
    category: 'NLP',
    title: 'Investence',
    description: 'A web application for investment sentiment analysis, exploring signals in financial language.',
    tags: ['Web application', 'Sentiment analysis', 'NLP'],
    links: [
      { label: 'GitHub', url: 'https://github.com/anastasiia-marinenko/investence' },
      { label: 'Project files', url: 'https://drive.google.com/drive/folders/1HWhDPPgrhO9o69FeeajaO2nnFvjDzD4z?usp=sharing' },
    ],
  },
  {
    category: 'INFORMATION SYSTEM',
    title: 'MyTravel',
    description: 'A travel-agency management system spanning web, mobile and desktop platforms.',
    tags: ['Web', 'Mobile', 'Desktop'],
    links: [
      { label: 'Project files', url: 'https://drive.google.com/drive/folders/1zo1OkTHu3wdqz-Lek9MhaHVvhkrXopJH?usp=sharing' },
    ],
  },
  {
    category: 'HACKATHON · INT20H',
    title: 'Quespiration',
    description: 'A team hackathon project: an interactive platform for creating and completing quests.',
    tags: ['Team project', 'Web', 'Hackathon'],
    links: [
      { label: 'GitHub', url: 'https://github.com/inspiraXion-team/INT20H-web-test-task' },
    ],
  },
];

const smallProjects = [
  { title: 'Book Recommender', url: 'https://github.com/anastasiia-marinenko/llm-semantic-book-recommender' },
  { title: 'AI-Calendar', url: 'https://github.com/anastasiia-marinenko/AICalendar' },
  { title: 'OASIS Garden Store', url: 'https://github.com/anastasiia-marinenko/oasis-garden-store' },
  { title: 'HAPPIFUL Magazine Blog', url: 'https://github.com/anastasiia-marinenko/happiful-blog' },
  { title: 'Cosmic Music Player', url: 'https://github.com/anastasiia-marinenko/cosmic-music-player' },
  { title: "Earth's Rotation 3D Model", url: 'https://github.com/anastasiia-marinenko/earth-rotation' },
  { title: 'Tourism agency database model (BCNF)' },
];

const stackGroups = [
  { label: 'Programming', items: ['Python', 'SQL', 'C / C++', 'Java', 'MATLAB', 'HTML / CSS / JavaScript', 'PHP'] },
  { label: 'Data & ML', items: ['NumPy', 'Pandas', 'scikit-learn', 'Matplotlib', 'seaborn', 'TensorFlow', 'PyTorch'] },
  { label: 'LLM tooling', items: ['Transformers', 'LangChain', 'Ollama', 'Groq', 'OpenAI / Anthropic / Gemini API'] },
  { label: 'Methods', items: ['Prompt engineering', 'RAG', 'Sentence embeddings', 'Statistical tests: McNemar, Wilcoxon, Friedman'] },
  { label: 'Evaluation', items: ['BERTScore', 'METEOR', 'ROUGE-L', 'Accuracy / recall / specificity'] },
  { label: 'Databases', items: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB'] },
  { label: 'Tools & cloud', items: ['Git / GitHub', 'Docker', 'Jupyter', 'Colab', 'Kaggle', 'Azure', 'Bash / Zsh'] },
  { label: 'Soft skills', items: ['Teamwork in international teams', 'Independent work & accountability', 'Research & technical writing', 'Fast learning', 'Attention to detail', 'Time management'] },
  { label: 'Language', items: ['English (B2)'] },
];

function SocialLinks() {
  return (
    <div className="nav-social" aria-label="Contact and public profiles">
      <a className="icon-link" href={profileLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
        <Github size={16} strokeWidth={1.8} />
      </a>
      <a className="icon-link" href={profileLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
        <Linkedin size={15} strokeWidth={1.8} />
      </a>
      <a className="icon-link" href={`mailto:${profileLinks.email}`} aria-label="Email Anastasiia">
        <Mail size={15} strokeWidth={1.8} />
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
            <a className="button-secondary" href={`mailto:${profileLinks.email}`}>Email <Mail size={14} /></a>
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
          <p className="section-subtitle">A method-level study of documentation debt, comparing language-model approaches to identifying and repairing outdated code documentation.</p>
        </div>
        <article className="feature">
          <div className="feature-inner">
            <div className="feature-topline"><span>LLM research project</span><span>Dataset → evaluation → repair</span></div>
            <h3>Method-Level Documentation Debt Management</h3>
            <p className="feature-intro">An investigation into how large language models can identify and repair outdated method documentation while preserving information that is already correct.</p>
            <div className="feature-details">
              <div className="detail-block">
                <h4>Approach</h4>
                <p>Compared prompt-engineering strategies and retrieval-augmented generation using repository context, with structural checks for method documentation.</p>
              </div>
              <div className="detail-block">
                <h4>Evaluation</h4>
                <p>Combined text and semantic similarity measures, structure-aware checks and statistical tests to assess outdated-documentation detection and targeted repairs.</p>
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
              <span className="card-number">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-row">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
              <div className="project-links">
                {project.links.map((link) => (
                  <a className="project-link" key={link.url} href={link.url} target="_blank" rel="noreferrer">
                    {link.label} <ArrowUpRight size={12} />
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="small-projects">
          <div className="small-projects-label">Smaller builds &amp; experiments</div>
          <div className="small-list">
            {smallProjects.map((project) => project.url ? (
              <a className="small-item" key={project.title} href={project.url} target="_blank" rel="noreferrer">
                {project.title} <ArrowUpRight size={11} />
              </a>
            ) : (
              <span className="small-item" key={project.title}>{project.title}</span>
            ))}
          </div>
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
              <div><strong>NASA International Space Apps Challenge 2025</strong><small>Global Nominee and Global Finalist. Team CloudMap built AirWatch Pro, combining global air-quality sensor data with machine-learning forecasts.</small></div>
              <span className="credential-date">2025</span>
            </div>
            <div className="credential-row">
              <div><strong>Computer Technology for Secure Transmission of Text Messages Based on Image Distortion and Restoration</strong><small>Published conference paper</small></div>
              <span className="credential-date">2025</span>
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
        <p className="education-note"><strong>Education &amp; training:</strong> AIT Summer Schools and DES Winter Schools, Ivan Franko National University of Lviv · 2025–2026</p>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <span className="footer-name">Anastasiia Marinenko <span className="brand-mark">·</span> Data science portfolio</span>
          <div className="footer-links">
            <a href={`mailto:${profileLinks.email}`}>{profileLinks.email} <Mail size={11} /></a>
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
