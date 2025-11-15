import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { TourProvider } from './context/TourContext';

// Main Pages
import LandingPage from './components/LandingPage';
import DashboardHome from './components/DashboardHome';
import Dashboard from './components/Dashboard'; // Will be LessonsView
import LessonViewer from './components/LessonViewer';
import AITutorPage from './components/AITutorPage';
import PracticeZone from './components/PracticeZone';
import LabsGallery from './components/LabsGallery';
import LabViewer from './components/LabViewer';
import ResourcesLibrary from './components/ResourcesLibrary';
import UserProfile from './components/UserProfile';
import AccountPage from './pages/AccountPage';
import CoursesPage from './pages/CoursesPage';
import PricingPage from './pages/PricingPage';
import CourseCatalog from './components/CourseCatalog';
import CourseOverview from './components/CourseOverview';
import FreeResources from './components/FreeResources';
import Achievements from './components/Achievements';
import GamesSelection from './components/GamesSelection';
import MDRGame from './components/games/MDRGame';

// Secondary Components
import SolutionViewer from './components/SolutionViewer';
import FlashcardPracticeView from './components/FlashcardPracticeView';
import FlashcardSetup from './components/FlashcardSetup';
import Login from './components/Login';
import Navigation from './components/Navigation';
import FloatingChatButton from './components/FloatingChatButton';

// Tour Components
import WelcomeModal from './components/WelcomeModal';
import Tour from './components/Tour';

// Practice Exam Components
import ExamSetup from './components/ExamSetup';
import ExamInstructions from './components/ExamInstructions';
import PracticeExam from './components/PracticeExam';
import ExamResults from './components/ExamResults';

// Test Components (optional - for debugging)
import TestExamState from './components/TestExamState';

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
    <>
      {/* Show Navigation for authenticated users */}
      {user && <Navigation />}

      {/* Show Tour components for authenticated users */}
      {user && (
        <>
          <WelcomeModal />
          <Tour />
        </>
      )}

      <Routes>
        {/* Home Page - Sales Landing */}
        <Route
          path="/"
          element={user ? <Navigate to="/dashboard" /> : <LandingPage />}
        />

        {/* Registration - Uses Login component which has signup flow */}
        <Route
          path="/register"
          element={user ? <Navigate to="/dashboard" /> : <Login />}
        />

        {/* Authentication */}
        <Route
          path="/login"
          element={user ? <Navigate to="/dashboard" /> : <Login />}
        />

        <Route
          path="/signin"
          element={user ? <Navigate to="/dashboard" /> : <Login />}
        />

        <Route
          path="/signup"
          element={user ? <Navigate to="/dashboard" /> : <Login />}
        />

        {/* Main Dashboard Home */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardHome />
            </ProtectedRoute>
          }
        />

        {/* Courses Page - Multi-Course Selection */}
        <Route
          path="/courses"
          element={
            <ProtectedRoute>
              <CoursesPage />
            </ProtectedRoute>
          }
        />

        {/* Course Catalog - Legacy */}
        <Route
          path="/catalog"
          element={
            <ProtectedRoute>
              <CourseCatalog />
            </ProtectedRoute>
          }
        />

        {/* Course Overview */}
        <Route
          path="/course/:courseId"
          element={
            <ProtectedRoute>
              <CourseOverview />
            </ProtectedRoute>
          }
        />

        {/* Course Lessons Grid */}
        <Route
          path="/course/:courseId/lessons"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Course-Specific Lesson */}
        <Route
          path="/course/:courseId/lesson/:lessonId"
          element={
            <ProtectedRoute>
              <LessonViewer />
            </ProtectedRoute>
          }
        />

        {/* Course-Specific Labs Gallery */}
        <Route
          path="/course/:courseId/labs"
          element={
            <ProtectedRoute>
              <LabsGallery />
            </ProtectedRoute>
          }
        />

        {/* Course-Specific Lab */}
        <Route
          path="/course/:courseId/lab/:labId"
          element={
            <ProtectedRoute>
              <LabViewer />
            </ProtectedRoute>
          }
        />

        {/* Course-Specific Solution */}
        <Route
          path="/course/:courseId/solution/:labId"
          element={
            <ProtectedRoute>
              <SolutionViewer />
            </ProtectedRoute>
          }
        />

        {/* Lessons by Course ID - Simpler URL */}
        <Route
          path="/lessons/:courseId"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Backward Compatibility - Old Network+ URLs */}
        <Route
          path="/lessons"
          element={<Navigate to="/course/network-plus/lessons" replace />}
        />

        <Route
          path="/lesson/:id"
          element={<Navigate to="/course/network-plus/lesson/:id" replace />}
        />

        <Route
          path="/lab/:id"
          element={<Navigate to="/course/network-plus/lab/:id" replace />}
        />

        <Route
          path="/solution/:id"
          element={<Navigate to="/course/network-plus/solution/:id" replace />}
        />

        {/* AI Tutor Page */}
        <Route
          path="/ai-tutor"
          element={
            <ProtectedRoute>
              <AITutorPage />
            </ProtectedRoute>
          }
        />

        {/* Practice Zone */}
        <Route
          path="/practice"
          element={
            <ProtectedRoute>
              <PracticeZone />
            </ProtectedRoute>
          }
        />

        {/* Labs Gallery - Redirect to course-specific labs */}
        <Route
          path="/labs"
          element={<Navigate to="/course/network-plus/labs" replace />}
        />

        {/* Resources Library */}
        <Route
          path="/resources"
          element={
            <ProtectedRoute>
              <ResourcesLibrary />
            </ProtectedRoute>
          }
        />

        {/* Free Resources */}
        <Route
          path="/free-resources"
          element={
            <ProtectedRoute>
              <FreeResources />
            </ProtectedRoute>
          }
        />

        {/* Games Selection */}
        <Route
          path="/games"
          element={
            <ProtectedRoute>
              <GamesSelection />
            </ProtectedRoute>
          }
        />

        {/* MDR Game */}
        <Route
          path="/games/mdr"
          element={
            <ProtectedRoute>
              <MDRGame />
            </ProtectedRoute>
          }
        />

        {/* Achievements */}
        <Route
          path="/achievements"
          element={
            <ProtectedRoute>
              <Achievements />
            </ProtectedRoute>
          }
        />

        {/* User Profile */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        />

        {/* Account Page */}
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <AccountPage />
            </ProtectedRoute>
          }
        />

        {/* Pricing Page */}
        <Route
          path="/pricing"
          element={
            <ProtectedRoute>
              <PricingPage />
            </ProtectedRoute>
          }
        />

        {/* Flashcards Setup */}
        <Route
          path="/practice/flashcards/setup"
          element={
            <ProtectedRoute>
              <FlashcardSetup />
            </ProtectedRoute>
          }
        />

        {/* Flashcards Practice */}
        <Route
          path="/practice/flashcards"
          element={
            <ProtectedRoute>
              <FlashcardPracticeView />
            </ProtectedRoute>
          }
        />

        {/* Practice Exams */}
        <Route
          path="/practice-exam-setup"
          element={
            <ProtectedRoute>
              <ExamSetup />
            </ProtectedRoute>
          }
        />
        <Route
          path="/exam-instructions"
          element={
            <ProtectedRoute>
              <ExamInstructions />
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
        />

        {/* Test Route - For debugging exam state */}
        <Route
          path="/test-exam-state"
          element={
            <ProtectedRoute>
              <TestExamState />
            </ProtectedRoute>
          }
        />

        {/* Fallback - Redirect unknown routes to dashboard */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {/* AI Tutor Chat Button - Show only for authenticated users */}
      {user && <FloatingChatButton />}
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <TourProvider>
        <Router>
          <AppRoutes />
        </Router>
      </TourProvider>
    </AuthProvider>
  );
}

export default App;