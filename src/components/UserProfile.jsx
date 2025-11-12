import React from 'react';
import { User, LogOut } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './UserProfile.css';

function UserProfile() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  return (
    <div className="user-profile">
      <div className="profile-header">
        <div className="profile-avatar">
          <User size={64} />
        </div>
        <div className="profile-info">
          <h1>{user?.email}</h1>
          <p>Account Settings</p>
        </div>
      </div>

      <div className="profile-content">
        <section className="actions-section">
          <h2>Account</h2>
          <button className="btn-logout" onClick={handleLogout}>
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </section>
      </div>
    </div>
  );
}

export default UserProfile;
