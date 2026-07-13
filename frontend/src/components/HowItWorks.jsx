const steps = [
  {
    icon: '📤',
    num: '01',
    title: 'Upload Resume',
    desc: 'Recruiter uploads PDF resume via the React UI. Multer handles secure file storage on the backend.',
  },
  {
    icon: '⚙️',
    num: '02',
    title: 'Express API Routes',
    desc: 'The Node.js Express API receives the file and passes it to the Python NLP processing pipeline.',
  },
  {
    icon: '🧠',
    num: '03',
    title: 'NLP Extraction',
    desc: 'Python with spaCy & pdfplumber extracts name, email, phone, skills, education, and experience.',
  },
  {
    icon: '🗄️',
    num: '04',
    title: 'Database Storage',
    desc: 'Parsed candidate data is stored in SQLite (dev) or PostgreSQL (production) for fast retrieval.',
  },
]

const HowItWorks = () => {
  return (
    <section className="hiw-section" id="hiw">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', margin: '0 auto 64px' }}>
          <div className="section-badge purple">
            <div className="dot" />
            System Architecture
          </div>
          <h2 className="section-title">
            How <span className="text-gradient">SmartHire</span> Works
          </h2>
          <p className="section-subtitle">
            A seamless, automated pipeline from resume upload to structured candidate insights — 
            powered by modern NLP and a robust backend architecture.
          </p>
        </div>

        <div className="hiw-grid" style={{ position: 'relative' }}>
          <div className="hiw-connector" />
          {steps.map((step, i) => (
            <div className="hiw-step" key={step.num}>
              <div className="hiw-step-num">
                {step.icon}
                <span>{step.num}</span>
              </div>
              <div className="hiw-step-title">{step.title}</div>
              <div className="hiw-step-desc">{step.desc}</div>
            </div>
          ))}
        </div>

        {/* Architecture Diagram Text */}
        <div style={{
          marginTop: '64px',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-card)',
          borderRadius: 'var(--radius-lg)',
          padding: '32px',
          fontFamily: "'Courier New', monospace",
          fontSize: '13px',
          color: 'var(--text-muted)',
          lineHeight: '2',
          overflow: 'auto',
        }}>
          <div style={{ color: 'var(--accent-green)', fontWeight: 700, marginBottom: '16px', fontSize: '14px' }}>
            📐 System Architecture
          </div>
          <pre style={{ margin: 0, color: 'var(--text-secondary)' }}>
{`┌─────────────────────┐
│     React UI        │  ← Vite + React.js Frontend
└──────────┬──────────┘
           │  HTTP/REST
           ▼
┌─────────────────────┐
│   Express API       │  ← Node.js + Express.js
└──────────┬──────────┘
           │  Multer File Handler
           ▼
┌──────────────────────────┐
│  Resume Upload Module    │  ← PDF Validation & Storage
└───────────┬──────────────┘
            │  Spawns Python Process
            ▼
┌──────────────────────────┐
│  Python NLP Pipeline     │  ← spaCy + pdfplumber
│  parser.py               │  
│  extractor.py            │  
│  skill_matcher.py        │  
└───────────┬──────────────┘
            │  Structured JSON
            ▼
┌──────────────────────────┐
│  Candidate Database      │  ← SQLite (dev) / PostgreSQL (prod)
└──────────────────────────┘`}
          </pre>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
