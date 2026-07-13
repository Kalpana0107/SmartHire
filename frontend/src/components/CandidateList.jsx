// CandidateList.jsx — Fetches and displays ranked candidates.
// Calls GET /api/candidates on component mount.

import React, { useState, useEffect } from 'react';
import api from '../api/config';

// Helper: return CSS class based on score value
const scoreClass = (score) => {
  if (score >= 70) return 'score-high';
  if (score >= 40) return 'score-mid';
  return 'score-low';
};

function CandidateList() {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Runs once when the component mounts
  useEffect(() => {
    fetchCandidates();
  }, []);

  const fetchCandidates = async () => {
    try {
      const res = await api.get('/api/candidates');
      setCandidates(res.data.candidates);
    } catch (err) {
      setError('Could not load candidates. Is the backend running?');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading candidates...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  if (candidates.length === 0) {
    return <p>No candidates yet. Upload a resume!</p>;
  }

  return (
    <div className="candidate-list">
      <h2>Ranked Candidates ({candidates.length})</h2>

      {candidates.map((c, index) => (
        <div key={c.id} className="candidate-card">
          <span className="rank">#{index + 1}</span>

          <div className="candidate-info">
            <h4>{c.name || 'Unknown'}</h4>

            <p className="filename">{c.filename}</p>

            <div className="mini-skills">
              {c.skills.slice(0, 5).map((sk, i) => (
                <span key={i} className="mini-badge">
                  {sk}
                </span>
              ))}
            </div>
          </div>

          <div className={`score-badge ${scoreClass(c.match_score)}`}>
            {c.match_score}%
          </div>
        </div>
      ))}
    </div>
  );
}

export default CandidateList;