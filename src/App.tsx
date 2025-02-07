import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { GuitarraPage } from './pages/GuitarraPage';
import { DibujoPage } from './pages/DibujoPage';
import { ClasesPage } from './pages/ClasesPage';
import { EventosPage } from './pages/EventosPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/guitarra" element={<GuitarraPage />} />
        <Route path="/dibujo" element={<DibujoPage />} />
        <Route path="/clases" element={<ClasesPage />} />
        <Route path="/eventos" element={<EventosPage />} />
      </Routes>
    </>
  );
}

export default App;