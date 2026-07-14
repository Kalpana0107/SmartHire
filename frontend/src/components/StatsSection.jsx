import { useState } from 'react'

const candidates = [
  { initials: 'AK', name: 'Aanya Kumar', skills: ['Python', 'spaCy'], score: 94 },
  { initials: 'RS', name: 'Rahul Sharma', skills: ['React', 'Node.js'], score: 87 },
  { initials: 'PM', name: 'Priya Menon', skills: ['ML', 'TensorFlow'], score: 82 },
  { initials: 'VT', name: 'Vikram Tiwari', skills: ['Java', 'Spring'], score: 76 },
]

const pipelineNodes = [
  { icon: '📤', label: 'React UI', active: true },
  { icon: '🖥️', label: 'Express API', active: true },
  { icon: '📁', label: 'Multer', active: true },
  { icon: '🐍', label: 'NLP Pipeline', active: true },
  { icon: '🗄️', label: 'Database', active: false },
]

const StatsSection = () => {
  const [activeTab, setActiveTab] = useState('pipeline')

  return (
    <section className="stats-section" id="demo">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="section-header" style={{ textAlign: 'center', margin: '0 auto 64px' }}>
          <div className="section-badge">
            <div className="dot" />
            Live Demo
          </div>
          <h2 className="section-title">
            See <span className="text-gradient">SmartHire</span> in Action
          </h2>
          <p className="section-subtitle">
            Explore the automated pipeline and candidate scoring system that powers 
            our intelligent resume screening.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid" style={{ width: '100%' }}>
          {[
            { num: '10×', label: 'Faster than manual screening', color: 'green' },
            { num: '98%', label: 'Extraction accuracy with spaCy', color: 'purple' },
            { num: '500+', label: 'Detectable technical skills', color: 'blue' },
            { num: '<2s', label: 'Average processing time per resume', color: 'gold' },
          ].map(s => (
            <div className="stat-card" key={s.num}>
              <div className={`stat-num ${s.color}`}>{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Tab Switcher */}
        <div style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '24px',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-card)',
          borderRadius: 'var(--radius-md)',
          padding: '6px',
          width: '100%',
          maxWidth: '480px',
          margin: '0 auto 32px',
        }}>
          {[
            { key: 'pipeline', label: '⚙️ Pipeline View' },
            { key: 'candidates', label: '👥 Candidate List' },
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              style={{
                flex: 1,
                padding: '9px 16px',
                borderRadius: 'var(--radius-sm)',
                fontSize: '13px',
                fontWeight: 600,
                background: activeTab === tab.key ? 'var(--grad-primary)' : 'transparent',
                color: activeTab === tab.key ? '#fff' : 'var(--text-muted)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
                fontFamily: 'var(--font-sans)',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Pipeline View */}
        {activeTab === 'pipeline' && (
          <div className="pipeline-wrap" style={{ width: '100%' }}>
            <div className="pipeline-header">
              <div className="pipeline-title">🔄 Automated NLP Pipeline</div>
              <div className="pipeline-badge">LIVE</div>
            </div>
            <div className="pipeline-steps">
              {pipelineNodes.map((node, i) => (
                <div className="pipeline-step" key={node.label}>
                  <div className="pipeline-node">
                    <div className={`pipeline-node-icon${node.active ? ' active' : ''}`}>
                      {node.icon}
                    </div>
                    <div className="pipeline-node-label">{node.label}</div>
                  </div>
                  {i < pipelineNodes.length - 1 && <div className="pipeline-arrow" />}
                </div>
              ))}
            </div>

            {/* Process steps below */}
            <div style={{ marginTop: '32px', padding: '24px', background: 'rgba(0,0,0,0.2)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '16px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Extraction Output
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '12px' }}>
                {[
                  { label: 'Name', value: '✅ Extracted', color: '#00e5a0' },
                  { label: 'Email', value: '✅ Extracted', color: '#00e5a0' },
                  { label: 'Phone', value: '✅ Extracted', color: '#00e5a0' },
                  { label: 'Skills', value: '✅ 12 found', color: '#00e5a0' },
                  { label: 'Education', value: '✅ Parsed', color: '#00e5a0' },
                  { label: 'Experience', value: '✅ 3.5 yrs', color: '#00e5a0' },
                ].map(field => (
                  <div key={field.label} style={{ padding: '12px', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)' }}>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '4px' }}>{field.label}</div>
                    <div style={{ fontSize: '13px', color: field.color, fontWeight: 600 }}>{field.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Candidate List View */}
        {activeTab === 'candidates' && (
          <div className="upload-demo" style={{ width: '100%' }}>
            <div className="upload-demo-header">
              <div className="api-code-dots">
                <div className="api-code-dot" style={{ background: '#f87171' }} />
                <div className="api-code-dot" style={{ background: '#f59e0b' }} />
                <div className="api-code-dot" style={{ background: '#00e5a0' }} />
              </div>
              <span className="api-code-title">Candidate Results — Ranked by Score</span>
            </div>

            {/* Upload zone */}
            <div id="upload" className="upload-zone">
              <div className="upload-icon">📄</div>
              <div className="upload-text">Drop your resume here</div>
              <div className="upload-hint">PDF format supported · Powered by pdfplumber</div>
              <button className="btn btn-outline-green btn-sm" style={{ marginTop: '8px' }}>
                Browse Files
              </button>
            </div>

            {/* Candidate rows */}
            <div className="candidate-list-demo">
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>
                Top Matches — Sorted by AI Score
              </div>
              {candidates.map((c) => (
                <div className="candidate-row" key={c.name}>
                  <div className="candidate-avatar">{c.initials}</div>
                  <div className="candidate-name">{c.name}</div>
                  <div className="candidate-skills">
                    {c.skills.map(s => (
                      <span className="skill-chip" key={s}>{s}</span>
                    ))}
                  </div>
                  <div className="score-bar-wrap">
                    <div className="score-bar">
                      <div className="score-fill" style={{ width: `${c.score}%` }} />
                    </div>
                    <span className="score-val">{c.score}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default StatsSection
