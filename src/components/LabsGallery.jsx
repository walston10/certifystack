import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FlaskConical, Lock } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { networkPlusLabs } from '../courses/network-plus/data/labs';
import './LabsGallery.css';

function LabsGallery() {
  const navigate = useNavigate();
  const { courseId } = useParams();
  const [isPremium, setIsPremium] = useState(false);

  // Default to network-plus for backward compatibility
  const actualCourseId = courseId || 'network-plus';

  useEffect(() => {
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

  const isLabLocked = (labIndex) => {
    // Lab index starts at 0, so labs at index 0, 1, 2 are free (first 3 labs)
    return labIndex > 2 && !isPremium;
  };

  const handleLabClick = (lab, labIndex) => {
    if (isLabLocked(labIndex)) {
      // Redirect to Stripe payment link with 7-day free trial
      window.location.href = 'https://buy.stripe.com/3cI8wPewj6FWbwJ1UVcEw01';
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

      <div className="labs-grid">
        {networkPlusLabs.map((lab, index) => {
          const locked = isLabLocked(index);
          return (
            <div
              key={lab.id}
              className={`lab-card ${locked ? 'locked' : ''}`}
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

              <h3>{lab.title}</h3>

              <div className="lab-meta">
                <span>{lab.estimatedTime}</span>
              </div>

              <button className="lab-start-btn">
                {locked ? 'Unlock with Premium' : 'Start Lab'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LabsGallery;
