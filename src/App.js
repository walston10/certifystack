import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import LessonViewer from './components/LessonViewer';
import LabViewer from './components/LabViewer';
import SolutionViewer from './components/SolutionViewer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/lesson/:id" element={<LessonViewer />} />
        <Route path="/lab/:id" element={<LabViewer />} />
        <Route path="/solution/:id" element={<SolutionViewer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;