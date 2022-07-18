import Header from './components/Header/Header';
import ShowResults from './components/ShowResults/ShowResults';
import ShowDetails from './components/ShowDetails/ShowDetails';
import Episodes from './components/Episodes/Episodes';
import Cast from './components/Cast/Cast';
import EpisodeDetails from './components/EpisodeDetails/EpisodeDetails';
import CastMemberDetails from './components/CastMemberDetails/CastMemberDetails';
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { createContext } from 'react';

export const FunctionContext = createContext()

function App() {

  function stripHtml(string) {
    let stringArray = [...string]
    for(let i=0; i < stringArray.length; i++) {
        if(stringArray[i] === '<') {
            if(stringArray[i+1] === '/') {
                stringArray.splice(i, 4)
            } else {
                stringArray.splice(i, 3)
            }
        }
    }
    const strippedString = stringArray.join('')

    return strippedString
  }

  return (
    <>
      <Header />
      <Container fluid='xs' style={{overflow: 'hidden'}}>
        <main style={{marginTop: '130px', marginBottom: '30px'}}>
          <FunctionContext.Provider value={stripHtml}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="results/:query" element={<ShowResults />} />
              <Route path="show-details/:showId" element={<ShowDetails />} />
              <Route path="episodes/*" element={<Episodes />} />
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
