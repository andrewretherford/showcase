import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import ShowResults from './components/ShowResults/ShowResults';
import ShowDetails from './components/ShowDetails/ShowDetails';
import Episodes from './components/Episodes/Episodes';
import Cast from './components/Cast/Cast';
import EpisodeDetail from './components/EpisodeDetail/EpisodeDetail';
import CastMemberDetail from './components/CastMemberDetail/CastMemberDetail';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <Routes>
        <Route path="/results" element={<ShowResults />} />
        <Route path="/show-details" element={<ShowDetails />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episode-details" element={<EpisodeDetail />} />
        <Route path="/cast" element={<Cast />} />
        <Route path="/cast-member-details" element={<CastMemberDetail />} />
      </Routes>
      </main>
    </div>
  );
}

export default App;
