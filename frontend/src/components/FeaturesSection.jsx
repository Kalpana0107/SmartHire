const features = [
  {
    icon: '📂',
    iconColor: 'green',
    title: 'Resume Upload',
    desc: 'Securely upload PDF resumes with drag-and-drop support. Powered by Multer for robust file handling and validation before processing begins.',
    tags: ['PDF Support', 'Drag & Drop', 'Secure'],
    tagColors: ['green', 'green', 'blue'],
  },
  {
    icon: '🧠',
    iconColor: 'purple',
    title: 'NLP-Based Resume Parsing',
    desc: 'Leverages spaCy\'s Named Entity Recognition to extract names, emails, phone numbers, skills, education, and experience with high precision.',
    tags: ['spaCy NER', 'pdfplumber', 'Python'],
    tagColors: ['purple', 'purple', 'blue'],
    featured: true,
  },
  {
    icon: '🎯',
    iconColor: 'blue',
    title: 'Skill Analysis',
    desc: 'Identifies both technical and non-technical skills from resume text. Detects keywords aligned with job descriptions for precise matching.',
    tags: ['500+ Skills', 'JD Matching', 'Auto-detect'],
    tagColors: ['blue', 'blue', 'green'],
  },
  {
    icon: '📊',
    iconColor: 'gold',
    title: 'Candidate Evaluation',
    desc: 'Assigns scores based on matching criteria and ranks candidates automatically. Reduces bias and speeds up the shortlisting process.',
    tags: ['Auto Scoring', 'AI Ranking', 'Unbiased'],
    tagColors: ['gold', 'gold', 'green'],
  },
  {
    icon: '🔍',
    iconColor: 'blue',
    title: 'Search & Filter',
    desc: 'Powerful search across your entire candidate database. Filter by skills, education level, years of experience, or any combination.',
    tags: ['Multi-filter', 'Real-time', 'Skills Search'],
    tagColors: ['blue', 'green', 'blue'],
  },
  {
    icon: '⚡',
    iconColor: 'green',
    title: 'Fast Processing',
    desc: 'Fully automated parsing pipeline delivers results in under 2 seconds. Real-time analysis keeps your recruitment workflow moving.',
    tags: ['< 2s', 'Automated', 'Real-time'],
    tagColors: ['green', 'green', 'purple'],
  },
]

const FeaturesSection = () => {
  return (
    <section className="features-section" id="features">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <div className="dot" />
            Core Features
          </div>
          <h2 className="section-title">
            Everything You Need to{' '}
            <span className="text-gradient">Hire Smarter</span>
          </h2>
          <p className="section-subtitle">
            From automated resume parsing to intelligent candidate ranking — SmartHire
            handles the heavy lifting so your team can focus on hiring decisions.
          </p>
        </div>

        <div className="features-grid">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`feature-card${f.featured ? ' featured' : ''}`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className={`feature-icon-wrap ${f.iconColor}`}>
                {f.icon}
              </div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
              <div className="feature-tags">
                {f.tags.map((tag, j) => (
                  <span key={tag} className={`feature-tag ${f.tagColors[j]}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
