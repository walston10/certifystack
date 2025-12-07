import { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { FlaskConical, Lock } from 'lucide-react';
import { supabase } from '../lib/supabase';
import './LabsGallery.css';

function LabsGallery() {
  const navigate = useNavigate();
  const { courseId } = useParams();
  const [isPremium, setIsPremium] = useState(false);
  const [labs, setLabs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Default to network-plus for backward compatibility
  const actualCourseId = courseId || 'network-plus';

  // Dynamically load labs based on courseId
  useEffect(() => {
    const loadLabs = async () => {
      setLoading(true);
      try {
        let labsModule;

        switch (actualCourseId) {
          case 'network-plus':
            labsModule = await import('../courses/network-plus/data/labs');
            break;
          case 'a-plus-core1':
            labsModule = await import('../courses/a-plus-core1/data/labs');
            break;
          case 'a-plus-core2':
            labsModule = await import('../courses/a-plus-core2/data/labs');
            break;
          case 'security-plus':
            labsModule = await import('../courses/security-plus/data/labs');
            break;
          default:
            labsModule = await import('../courses/network-plus/data/labs');
        }

        // Get labs array - handle different export names
        const loadedLabs = labsModule.networkPlusLabs ||
                         labsModule.aPlusCore1Labs ||
                         labsModule.aPlusCore2Labs ||
                         labsModule.securityPlusLabs ||
                         labsModule.default ||
                         [];

        setLabs(loadedLabs);
      } catch (err) {
        console.error('Error loading labs:', err);
        setLabs([]);
      } finally {
        setLoading(false);
      }
    };

    loadLabs();
  }, [actualCourseId]);

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

  // Get course display name
  const getCourseDisplayName = () => {
    switch (actualCourseId) {
      case 'network-plus':
        return 'Network+';
      case 'a-plus-core1':
        return 'A+ Core 1';
      case 'a-plus-core2':
        return 'A+ Core 2';
      case 'security-plus':
        return 'Security+';
      default:
        return 'Course';
    }
  };

  if (loading) {
    return (
      <div className="labs-gallery">
        <div className="labs-header">
          <FlaskConical size={48} className="header-icon" />
          <div>
            <h1>Hands-On Labs</h1>
            <p>Loading labs...</p>
          </div>
        </div>
      </div>
    );
  }

  if (labs.length === 0) {
    return (
      <div className="labs-gallery">
        <div className="labs-header">
          <FlaskConical size={48} className="header-icon" />
          <div>
            <h1>{getCourseDisplayName()} Labs</h1>
            <p>Practice real-world scenarios and configurations</p>
          </div>
        </div>
        <div className="no-labs-message" style={{ padding: '2rem', textAlign: 'center' }}>
          <h2>Labs Coming Soon!</h2>
          <p>Labs for this course are still being developed. Check back soon!</p>
          <Link to={`/course/${actualCourseId}/lessons`}>
            <button className="btn-back" style={{ marginTop: '1rem', padding: '0.75rem 1.5rem', cursor: 'pointer' }}>
              Back to Course
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="labs-gallery">
      <div className="labs-header">
        <FlaskConical size={48} className="header-icon" />
        <div>
          <h1>{getCourseDisplayName()} Hands-On Labs</h1>
          <p>Practice real-world scenarios and configurations</p>
        </div>
      </div>

      <div className="labs-grid">
        {labs.map((lab, index) => {
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
