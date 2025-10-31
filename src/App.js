import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Dashboard from './components/Dashboard';
import LessonViewer from './components/LessonViewer';
import LabViewer from './components/LabViewer';
import SolutionViewer from './components/SolutionViewer';
import FlashcardPracticeView from './components/FlashcardPracticeView';
import Login from './components/Login';

// Protected Route wrapper
function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'var(--bg-primary)',
        color: 'var(--text-primary)',
        fontFamily: 'Space Grotesk, sans-serif',
        fontSize: '1.2rem'
      }}>
        Loading...
      </div>
    );
  }

  return user ? children : <Navigate to="/login" />;
}

function AppRoutes() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route
        path="/login"
        element={user ? <Navigate to="/" /> : <Login />}
      />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/lesson/:id"
        element={
          <ProtectedRoute>
            <LessonViewer />
          </ProtectedRoute>
        }
      />
      <Route
        path="/lab/:id"
        element={
          <ProtectedRoute>
            <LabViewer />
          </ProtectedRoute>
        }
      />
      <Route
        path="/solution/:id"
        element={
          <ProtectedRoute>
            <SolutionViewer />
          </ProtectedRoute>
        }
      />
      <Route
        path="/practice/flashcards"
        element={
          <ProtectedRoute>
            <FlashcardPracticeView />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;