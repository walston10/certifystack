import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FlaskConical, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { networkPlusLabs } from '../courses/network-plus/data/labs';
import './LabsGallery.css';

function LabsGallery() {
  const navigate = useNavigate();
  const { courseId } = useParams();
  const [completedLabs, setCompletedLabs] = useState([]);

  // Default to network-plus for backward compatibility
  const actualCourseId = courseId || 'network-plus';

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
          <span className="stat-value">{networkPlusLabs.length}</span>
          <span className="stat-label">Total Labs</span>
        </div>
        <div className="stat">
          <span className="stat-value">{completedLabs.length}</span>
          <span className="stat-label">Completed</span>
        </div>
        <div className="stat">
          <span className="stat-value">{networkPlusLabs.length - completedLabs.length}</span>
          <span className="stat-label">Remaining</span>
        </div>
      </div>

      <div className="labs-grid">
        {networkPlusLabs.map(lab => (
          <div
            key={lab.id}
            className={`lab-card ${isCompleted(lab.id) ? 'completed' : ''}`}
            onClick={() => navigate(`/course/${actualCourseId}/lab/${lab.id}`)}
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
              <span>{lab.estimatedTime}</span>
              <span>•</span>
              <span>{lab.xpReward} XP</span>
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
