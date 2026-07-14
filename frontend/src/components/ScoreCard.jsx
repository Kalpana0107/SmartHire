import React from 'react';

const getScoreColor = (score) => {
  if (score >= 70) return '#10B981'; // Green
  if (score >= 40) return '#F59E0B'; // Yellow
  return '#EF4444';                  // Red
};

function ScoreCard({ score, matchedSkills }) {
  if (score === null) return null;

  const color = getScoreColor(score);

  return (
    <div className='score-card'>
      <div className='score-ring' style={{ borderColor: color }}>
        <span className='score-number' style={{ color }}>{score}%</span>
      </div>
      <p>Matched Skills: {matchedSkills.join(', ')}</p>
    </div>
  );
}

export default ScoreCard;