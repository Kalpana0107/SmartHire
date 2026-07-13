const techCategories = [
  {
    icon: '⚛️',
    iconBg: 'var(--accent-blue-dim)',
    name: 'Frontend',
    items: [
      { name: 'React.js', purpose: 'User Interface', dot: '#3b82f6' },
      { name: 'Vite', purpose: 'Build Tool & Dev Server', dot: '#a855f7' },
      { name: 'Axios', purpose: 'API Communication', dot: '#00e5a0' },
      { name: 'CSS / Vanilla', purpose: 'Styling & Animations', dot: '#f59e0b' },
    ],
  },
  {
    icon: '🖥️',
    iconBg: 'var(--accent-green-dim)',
    name: 'Backend',
    items: [
      { name: 'Node.js', purpose: 'Server Runtime', dot: '#00e5a0' },
      { name: 'Express.js', purpose: 'API Framework', dot: '#00e5a0' },
      { name: 'Multer', purpose: 'File Upload Handling', dot: '#60a5fa' },
      { name: 'REST API', purpose: 'HTTP Endpoints', dot: '#a855f7' },
    ],
  },
  {
    icon: '🐍',
    iconBg: 'var(--accent-gold-dim)',
    name: 'NLP & Processing',
    items: [
      { name: 'Python', purpose: 'Resume Processing Engine', dot: '#f59e0b' },
      { name: 'spaCy', purpose: 'NLP & Skill Extraction', dot: '#f59e0b' },
      { name: 'pdfplumber', purpose: 'PDF Text Parsing', dot: '#f87171' },
      { name: 'Custom NER', purpose: 'Named Entity Recognition', dot: '#a855f7' },
    ],
  },
  {
    icon: '🗄️',
    iconBg: 'var(--accent-purple-dim)',
    name: 'Database & Deployment',
    items: [
      { name: 'SQLite', purpose: 'Local Development DB', dot: '#60a5fa' },
      { name: 'PostgreSQL', purpose: 'Production Database', dot: '#3b82f6' },
      { name: 'Vercel', purpose: 'Frontend Hosting', dot: '#a855f7' },
      { name: 'Render / Railway', purpose: 'Backend & DB Services', dot: '#00e5a0' },
    ],
  },
]

const TechStack = () => {
  return (
    <section className="tech-section" id="tech">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="section-header" style={{ textAlign: 'center', margin: '0 auto 64px' }}>
          <div className="section-badge blue">
            <div className="dot" />
            Tech Stack
          </div>
          <h2 className="section-title">
            Built with <span className="text-gradient">Modern Tools</span>
          </h2>
          <p className="section-subtitle">
            A carefully chosen technology stack that ensures performance, scalability, 
            and developer experience across every layer of the application.
          </p>
        </div>

        <div className="tech-categories" style={{ width: '100%' }}>
          {techCategories.map(cat => (
            <div className="tech-category" key={cat.name}>
              <div className="tech-category-header">
                <div className="tech-category-icon" style={{ background: cat.iconBg }}>
                  {cat.icon}
                </div>
                <div className="tech-category-name">{cat.name}</div>
              </div>
              <div className="tech-items">
                {cat.items.map(item => (
                  <div className="tech-item" key={item.name}>
                    <div className="tech-item-left">
                      <div className="tech-item-dot" style={{ background: item.dot }} />
                      <div className="tech-item-name">{item.name}</div>
                    </div>
                    <div className="tech-item-purpose">{item.purpose}</div>
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

export default TechStack
