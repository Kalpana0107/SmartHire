const Ticker = () => {
  const items = [
    { icon: '🧠', label: 'NLP Processing', value: 'Active' },
    { icon: '📄', label: 'PDF Parsing', value: 'pdfplumber' },
    { icon: '🎯', label: 'Skill Matching', value: 'spaCy' },
    { icon: '📊', label: 'Candidate Scoring', value: 'Live' },
    { icon: '⚡', label: 'Processing Speed', value: '<2s' },
    { icon: '🔍', label: 'Skills Extracted', value: '500+' },
    { icon: '🛡️', label: 'Secure Upload', value: 'Multer' },
    { icon: '🗄️', label: 'Database', value: 'PostgreSQL' },
    { icon: '🚀', label: 'Deployment', value: 'Vercel' },
    { icon: '💡', label: 'AI Model', value: 'spaCy NER' },
  ]

  // Duplicate for seamless loop
  const allItems = [...items, ...items]

  return (
    <div className="ticker-wrap">
      <div className="ticker-inner">
        {allItems.map((item, i) => (
          <div className="ticker-item" key={i}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="3" fill="#00e5a0" opacity="0.6" />
            </svg>
            {item.icon} {item.label} — <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Ticker
