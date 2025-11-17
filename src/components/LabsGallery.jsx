import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FlaskConical, CheckCircle, Lock } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { createCheckoutSession } from '../lib/stripe';
import { networkPlusLabs } from '../courses/network-plus/data/labs';
import './LabsGallery.css';

function LabsGallery() {
  const navigate = useNavigate();
  const { courseId } = useParams();
  const [completedLabs, setCompletedLabs] = useState([]);
  const [isPremium, setIsPremium] = useState(false);

  // Default to network-plus for backward compatibility
  const actualCourseId = courseId || 'network-plus';

  useEffect(() => {
    loadLabsProgress();
    loadMembershipTier();
  }, []);

  const loadMembershipTier = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('membership_tier')
          .eq('id', user.id)
          .single();

        setIsPremium(profile?.membership_tier === 'premium');
      }
    } catch (error) {
      console.error('Error loading membership tier:', error);
    }
  };

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

  const isLabLocked = (labIndex) => {
    // Lab index starts at 0, so labs at index 0, 1, 2 are free (first 3 labs)
    return labIndex > 2 && !isPremium;
  };

  const handleLabClick = async (lab, labIndex) => {
    if (isLabLocked(labIndex)) {
      // Trigger upgrade flow
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          await createCheckoutSession(user.id, user.email);
        }
      } catch (error) {
        console.error('Error starting checkout:', error);
        alert('Failed to start checkout. Please try again.');
      }
    } else {
      navigate(`/course/${actualCourseId}/lab/${lab.id}`);
    }
  };

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
        {networkPlusLabs.map((lab, index) => {
          const locked = isLabLocked(index);
          return (
            <div
              key={lab.id}
              className={`lab-card ${isCompleted(lab.id) ? 'completed' : ''} ${locked ? 'locked' : ''}`}
              onClick={() => handleLabClick(lab, index)}
            >
              <div className={`lab-difficulty ${lab.difficulty.toLowerCase()}`}>
                {lab.difficulty}
              </div>

              {locked && (
                <div className="lab-locked-badge">
                  <Lock size={20} />
                </div>
              )}

              {!locked && isCompleted(lab.id) && (
                <div className="lab-completed-badge">
                  <CheckCircle size={20} />
                </div>
              )}

              <h3>{lab.title}</h3>

              <div className="lab-meta">
                <span>{lab.estimatedTime}</span>
              </div>

              <button className="lab-start-btn">
                {locked ? 'Unlock with Premium' : isCompleted(lab.id) ? 'Review Lab' : 'Start Lab'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LabsGallery;
