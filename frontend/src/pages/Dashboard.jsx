// Dashboard.jsx — Combines all components into one screen.
// Manages shared state: which candidateId is "active" after upload.

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import FileUpload from '../components/FileUpload';
import SkillBadges from '../components/SkillBadges';
import JDInputForm from '../components/JDInputForm';
import ScoreCard from '../components/ScoreCard';
import CandidateList from '../components/CandidateList';

function Dashboard() {
  const navigate = useNavigate();
  // Track which candidate was just uploaded
  const [activeCandidateId, setActiveCandidateId] = useState(null);

  const [score, setScore] = useState(null);
  const [matchedSkills, setMatchedSkills] = useState([]);

  // Increment this value to refresh the candidate list
  const [refreshList, setRefreshList] = useState(0);

  return (
    <Layout>
      <button onClick={() => navigate('/')}>← Back to Home</button>
      <div className="dashboard-grid">

        {/* LEFT PANEL: Upload + Skills */}
        <div className="panel">
          <h2>Upload Resume</h2>

          <FileUpload
            onUploadSuccess={(data) =>
              setActiveCandidateId(data.candidateId)
            }
          />

          {activeCandidateId && (
            <SkillBadges
              candidateId={activeCandidateId}
              onSkillsExtracted={() => {}}
            />
          )}
        </div>

        {/* MIDDLE PANEL: Job Description + Score */}
        <div className="panel">
          <h2>Job Description</h2>

          <JDInputForm
            candidateId={activeCandidateId}
            onScoreReceived={(s, ms) => {
              setScore(s);
              setMatchedSkills(ms);

              // Trigger CandidateList to refresh
              setRefreshList((r) => r + 1);
            }}
          />

          <ScoreCard
            score={score}
            matchedSkills={matchedSkills}
          />
        </div>

        {/* RIGHT PANEL: Ranked Candidates */}
        <div className="panel panel-wide">
          <h2>Ranked Candidates</h2>

          {/* key={refreshList} forces CandidateList to re-mount and fetch again */}
          <CandidateList key={refreshList} />
        </div>

      </div>
    </Layout>
  );
}

export default Dashboard;