import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Dashboard from './components/Dashboard';
import LessonViewer from './components/LessonViewer';
import LabViewer from './components/LabViewer';
import SolutionViewer from './components/SolutionViewer';
import FlashcardPracticeView from './components/FlashcardPracticeView';
import Login from './components/Login';

// Practice Exam Components - TODO: Create these components
// import ExamSetup from './components/ExamSetup';
// import PracticeExam from './components/PracticeExam';
// import ExamResults from './components/ExamResults';

// Test Components - TODO: Create these components
// import TestExamGenerator from './components/TestExamGenerator';
// import TestExamState from './components/TestExamState';
// import TestScoring from './components/TestScoring';

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
      {/* Authentication */}
      <Route
        path="/login"
        element={user ? <Navigate to="/" /> : <Login />}
      />

      {/* Dashboard */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* Lessons */}
      <Route
        path="/lesson/:id"
        element={
          <ProtectedRoute>
            <LessonViewer />
          </ProtectedRoute>
        }
      />

      {/* Labs */}
      <Route
        path="/lab/:id"
        element={
          <ProtectedRoute>
            <LabViewer />
          </ProtectedRoute>
        }
      />

      {/* Solutions */}
      <Route
        path="/solution/:id"
        element={
          <ProtectedRoute>
            <SolutionViewer />
          </ProtectedRoute>
        }
      />

      {/* Flashcards */}
      <Route
        path="/practice/flashcards"
        element={
          <ProtectedRoute>
            <FlashcardPracticeView />
          </ProtectedRoute>
        }
      />

      {/* Practice Exams - TODO: Uncomment when components are created */}
      {/* <Route
        path="/practice-exam-setup"
        element={
          <ProtectedRoute>
            <ExamSetup />
          </ProtectedRoute>
        }
      />
      <Route
        path="/practice-exam"
        element={
          <ProtectedRoute>
            <PracticeExam />
          </ProtectedRoute>
        }
      />
      <Route
        path="/exam-results"
        element={
          <ProtectedRoute>
            <ExamResults />
          </ProtectedRoute>
        }
      /> */}

      {/* Test Routes - TODO: Uncomment when components are created */}
      {/* <Route
        path="/test-generator"
        element={
          <ProtectedRoute>
            <TestExamGenerator />
          </ProtectedRoute>
        }
      />
      <Route
        path="/test-exam-state"
        element={
          <ProtectedRoute>
            <TestExamState />
          </ProtectedRoute>
        }
      />
      <Route
        path="/test-scoring"
        element={
          <ProtectedRoute>
            <TestScoring />
          </ProtectedRoute>
        }
      /> */}

      {/* Fallback - Redirect unknown routes to dashboard */}
      <Route path="*" element={<Navigate to="/" />} />
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