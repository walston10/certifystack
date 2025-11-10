import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FlaskConical, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import './LabsGallery.css';

const LABS = [
  { id: 1, title: 'OSI Model in Action', difficulty: 'Beginner', duration: '20 min', xp: 50, lessonId: 1 },
  { id: 6, title: 'VLSM Design', difficulty: 'Intermediate', duration: '40 min', xp: 100, lessonId: 6 },
  { id: 11, title: 'VLAN Configuration', difficulty: 'Advanced', duration: '60 min', xp: 150, lessonId: 11 }
];

function LabsGallery() {
  const navigate = useNavigate();
  const [completedLabs, setCompletedLabs] = useState([]);

  useEffect(() => {
    loadLabsProgress();
  }, []);

  const loadLabsProgress = async () => {
    try {
      const user = await supabase.auth.getUser();
      if (!user.data.user) return;

      const { data } = await supabase
        .from('lab_submissions')
        .select('lab_id')
        .eq('user_id', user.data.user.id)
        .eq('completed', true);

      setCompletedLabs(data?.map(l => l.lab_id) || []);
    } catch (error) {
      console.error('Error loading labs progress:', error);
    }
  };

  const isCompleted = (labId) => completedLabs.includes(labId);

  return (
    <div className="labs-gallery">
      <div className="labs-header">
        <FlaskConical size={48} className="header-icon" />
        <div>
          <h1>Hands-On Labs</h1>
          <p>Practice real-world networking scenarios and configurations</p>
        </div>
      </div>

      <div className="labs-stats">
        <div className="stat">
          <span className="stat-value">{LABS.length}</span>
          <span className="stat-label">Total Labs</span>
        </div>
        <div className="stat">
          <span className="stat-value">{completedLabs.length}</span>
          <span className="stat-label">Completed</span>
        </div>
        <div className="stat">
          <span className="stat-value">{LABS.length - completedLabs.length}</span>
          <span className="stat-label">Remaining</span>
        </div>
      </div>

      <div className="labs-grid">
        {LABS.map(lab => (
          <div
            key={lab.id}
            className={`lab-card ${isCompleted(lab.id) ? 'completed' : ''}`}
            onClick={() => navigate(`/lab/${lab.id}`)}
          >
            <div className={`lab-difficulty ${lab.difficulty.toLowerCase()}`}>
              {lab.difficulty}
            </div>

            {isCompleted(lab.id) && (
              <div className="lab-completed-badge">
                <CheckCircle size={20} />
              </div>
            )}

            <h3>{lab.title}</h3>

            <div className="lab-meta">
              <span>{lab.duration}</span>
              <span>•</span>
              <span>{lab.xp} XP</span>
            </div>

            <button className="lab-start-btn">
              {isCompleted(lab.id) ? 'Review Lab' : 'Start Lab'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LabsGallery;
