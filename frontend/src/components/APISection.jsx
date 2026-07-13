const endpoints = [
  { method: 'POST', path: '/api/resume/upload', desc: 'Upload a PDF resume for processing' },
  { method: 'GET', path: '/api/candidates', desc: 'Retrieve all parsed candidates' },
  { method: 'GET', path: '/api/candidates/:id', desc: 'Get a specific candidate by ID' },
  { method: 'GET', path: '/api/candidates/search', desc: 'Search & filter candidates' },
]

const APISection = () => {
  return (
    <section className="api-section" id="api">
      <div className="container">
        <div className="section-header" style={{ marginBottom: '48px' }}>
          <div className="section-badge purple">
            <div className="dot" />
            REST API
          </div>
          <h2 className="section-title">
            Clean <span className="text-gradient">API Endpoints</span>
          </h2>
          <p className="section-subtitle">
            Integrate SmartHire into any workflow with our straightforward REST API. 
            Upload, retrieve, and search candidates programmatically.
          </p>
        </div>

        <div className="api-grid">
          {/* Endpoints List */}
          <div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Available Endpoints
            </div>
            <div className="api-endpoints">
              {endpoints.map(ep => (
                <div className="api-endpoint" key={ep.path}>
                  <div className={`api-method ${ep.method.toLowerCase()}`}>{ep.method}</div>
                  <div className="api-path">{ep.path}</div>
                  <div className="api-desc">{ep.desc}</div>
                </div>
              ))}
            </div>

            {/* Security Note */}
            <div style={{
              marginTop: '24px',
              padding: '20px',
              background: 'rgba(0, 229, 160, 0.04)',
              border: '1px solid rgba(0, 229, 160, 0.12)',
              borderRadius: 'var(--radius-md)',
            }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--accent-green)', marginBottom: '12px' }}>
                🔒 Security Considerations
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  'File validation before upload (PDF only)',
                  'Input sanitization on all fields',
                  'Protected API endpoints',
                  'Secure database queries (prepared statements)',
                  'Environment variable management',
                ].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--accent-green)', fontSize: '10px' }}>✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Code Panel */}
          <div className="api-code-panel">
            <div className="api-code-header">
              <div className="api-code-dots">
                <div className="api-code-dot" style={{ background: '#f87171' }} />
                <div className="api-code-dot" style={{ background: '#f59e0b' }} />
                <div className="api-code-dot" style={{ background: '#00e5a0' }} />
              </div>
              <div className="api-code-title">POST /api/resume/upload — Response</div>
            </div>
            <div className="api-code-body">
              <div>
                <span className="code-comment">// Example API Response</span>
              </div>
              <div style={{ marginTop: '8px' }}>
                {`{`}
              </div>
              <div style={{ paddingLeft: '20px' }}>
                <span className="code-key">"success"</span>
                {': '}
                <span className="code-value">true</span>
                {','}
              </div>
              <div style={{ paddingLeft: '20px' }}>
                <span className="code-key">"candidate"</span>
                {': {'}
              </div>
              <div style={{ paddingLeft: '40px' }}>
                <span className="code-key">"id"</span>
                {': '}
                <span className="code-num">42</span>
                {','}
              </div>
              <div style={{ paddingLeft: '40px' }}>
                <span className="code-key">"name"</span>
                {': '}
                <span className="code-string">"Aanya Kumar"</span>
                {','}
              </div>
              <div style={{ paddingLeft: '40px' }}>
                <span className="code-key">"email"</span>
                {': '}
                <span className="code-string">"aanya@example.com"</span>
                {','}
              </div>
              <div style={{ paddingLeft: '40px' }}>
                <span className="code-key">"phone"</span>
                {': '}
                <span className="code-string">"+91-9876543210"</span>
                {','}
              </div>
              <div style={{ paddingLeft: '40px' }}>
                <span className="code-key">"skills"</span>
                {': ['}
                <span className="code-string">"Python"</span>
                {', '}
                <span className="code-string">"spaCy"</span>
                {', '}
                <span className="code-string">"React"</span>
                {'],'}
              </div>
              <div style={{ paddingLeft: '40px' }}>
                <span className="code-key">"education"</span>
                {': '}
                <span className="code-string">"B.Tech CSE, IIT Delhi"</span>
                {','}
              </div>
              <div style={{ paddingLeft: '40px' }}>
                <span className="code-key">"experience"</span>
                {': '}
                <span className="code-string">"3.5 years"</span>
                {','}
              </div>
              <div style={{ paddingLeft: '40px' }}>
                <span className="code-key">"score"</span>
                {': '}
                <span className="code-num">94</span>
              </div>
              <div style={{ paddingLeft: '20px' }}>{`}`}</div>
              <div>{`}`}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default APISection
