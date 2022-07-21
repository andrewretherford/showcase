import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ShowResults from './components/ShowResults/ShowResults';
import ShowDetails from './components/ShowDetails/ShowDetails';
import Episodes from './components/Episodes/Episodes';
import EpisodeDetails from './components/EpisodeDetails/EpisodeDetails';
import Cast from './components/Cast/Cast';
import Crew from './components/Crew/Crew';
import { createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export const FunctionContext = createContext()

function stripHtml(string) {
  return string.replace(/(<([^>]+)>)/gi, "")
}

function App() {

  return (
    <>
      <Header />
      <Container fluid='xs' className='appContainer'>
        <main>
          <FunctionContext.Provider value={stripHtml}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/results/:query" element={<ShowResults />} />
              <Route path="/results/:showId/details" element={<ShowDetails />} />
              <Route path="/results/:showId/episodes" element={<Episodes />} />
              <Route path="/results/:showId/episodes/:episodeId" element={<EpisodeDetails />} />
              <Route path="/results/:showId/cast" element={<Cast />} />
              <Route path="/results/:showId/crew" element={<Crew />} />
            </Routes>
          </FunctionContext.Provider>
        </main>
      </Container>
    </>
  );
}

export default App;
