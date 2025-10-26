import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import LessonViewer from './components/LessonViewer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/lesson/:id" element={<LessonViewer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;