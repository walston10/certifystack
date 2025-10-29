import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import LessonViewer from './components/LessonViewer';
import LabViewer from './components/LabViewer';
import SolutionViewer from './components/SolutionViewer';
import FlashcardPracticeView from './components/FlashcardPracticeView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/lesson/:id" element={<LessonViewer />} />
        <Route path="/lab/:id" element={<LabViewer />} />
        <Route path="/solution/:id" element={<SolutionViewer />} />
        <Route path="/practice/flashcards" element={<FlashcardPracticeView />} />
      </Routes>
    </Router>
  );
}

export default App;