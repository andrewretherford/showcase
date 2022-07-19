import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ShowResults from './components/ShowResults/ShowResults';
import ShowDetails from './components/ShowDetails/ShowDetails';
import Episodes from './components/Episodes/Episodes';
import EpisodeDetails from './components/EpisodeDetails/EpisodeDetails';
import Cast from './components/Cast/Cast';
import { createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export const FunctionContext = createContext()

function App() {

  function stripHtml(string) {
    return string.replace(/(<([^>]+)>)/gi, "")
  }

  return (
    <>
      <Header />
      <Container fluid='xs' style={{overflow: 'hidden'}}>
        <main style={{marginTop: '130px', marginBottom: '30px'}}>
          <FunctionContext.Provider value={stripHtml}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/results/:query" element={<ShowResults />} />
              <Route path="/results/:showId/details" element={<ShowDetails />} />
              <Route path="/results/:showName/:showId/episodes" element={<Episodes />} />
              <Route path="episode-details/:episodeID" element={<EpisodeDetails />} />
              <Route path="cast" element={<Cast />} />
            </Routes>
          </FunctionContext.Provider>
        </main>
      </Container>
    </>
  );
}

export default App;
