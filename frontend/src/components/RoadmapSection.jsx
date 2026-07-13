const roadmapData = [
  {
    status: 'live',
    statusLabel: '● Live Now',
    title: 'Phase 1 — Core System',
    items: [
      { label: 'PDF Resume Upload via Multer', done: true },
      { label: 'NLP Parsing with spaCy', done: true },
      { label: 'Skill & Entity Extraction', done: true },
      { label: 'Candidate Database (SQLite)', done: true },
      { label: 'REST API Endpoints', done: true },
    ],
  },
  {
    status: 'upcoming',
    statusLabel: '◑ In Progress',
    title: 'Phase 2 — Intelligence Layer',
    items: [
      { label: 'AI Resume Scoring Engine', done: false },
      { label: 'Job Description Matching', done: false },
      { label: 'ATS Compatibility Checker', done: true },
      { label: 'Dashboard Analytics', done: false },
      { label: 'PostgreSQL Migration', done: true },
    ],
  },
  {
    status: 'planned',
    statusLabel: '○ Planned',
    title: 'Phase 3 — Advanced Features',
    items: [
      { label: 'Candidate Recommendation Engine', done: false },
      { label: 'Resume Feedback Generator', done: false },
      { label: 'Interview Prediction System', done: false },
      { label: 'Team Collaboration Tools', done: false },
      { label: 'API SDK & Webhooks', done: false },
    ],
  },
]

const RoadmapSection = () => {
  return (
    <section className="roadmap-section" id="roadmap">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="section-header" style={{ textAlign: 'center', margin: '0 auto 64px' }}>
          <div className="section-badge">
            <div className="dot" />
            Roadmap
          </div>
          <h2 className="section-title">
            What's <span className="text-gradient">Coming Next</span>
          </h2>
          <p className="section-subtitle">
            SmartHire is actively developed. Here's a transparent look at what's live, 
            what's in progress, and what's planned for the future.
          </p>
        </div>

        <div className="roadmap-grid" style={{ width: '100%' }}>
          {roadmapData.map(phase => (
            <div className={`roadmap-card ${phase.status}`} key={phase.title}>
              <div className={`roadmap-status ${phase.status}`}>
                {phase.statusLabel}
              </div>
              <div className="roadmap-title">{phase.title}</div>
              <div className="roadmap-items">
                {phase.items.map(item => (
                  <div className="roadmap-item" key={item.label}>
                    <div className={`roadmap-check ${item.done ? 'done' : phase.status === 'upcoming' ? 'pending' : 'future'}`}>
                      {item.done ? '✓' : '·'}
                    </div>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RoadmapSection
