// JDInputForm.jsx — Text area for the recruiter to paste a job description.
// Sends JD text + candidateId to the backend for scoring.

import React, { useState } from 'react';
import api from '../api/config';

function JDInputForm({ candidateId, onScoreReceived }) {
  const [jdText, setJdText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    // Don't send empty text
    if (!jdText.trim()) return;

    setLoading(true);

    try {
      const res = await api.post('/api/match', {
        // Which resume to score
        candidateId,

        // The JD pasted by the recruiter
        jobDescription: jdText,
      });

      // Pass the score up to the parent page
      onScoreReceived(res.data.score, res.data.matchedSkills);
    } catch (err) {
      console.error('Scoring failed:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="jd-form">
      <h3>Paste Job Description</h3>

      <textarea
        rows={10}
        placeholder="Paste the full job description here..."
        value={jdText}
        onChange={(e) => setJdText(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        disabled={loading || !jdText.trim()}
      >
        {loading ? 'Calculating...' : 'Calculate Match Score'}
      </button>
    </div>
  );
}

export default JDInputForm;