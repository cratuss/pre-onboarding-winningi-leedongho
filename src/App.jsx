import { Route, Routes } from 'react-router-dom';

import GlobalStyle from './GlobalStyle';
import Navigation from './components/Navigation';
import Main from './pages/Main';
import Board from './pages/Board';
import Setting from './pages/Setting';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/board' element={<Board />} />
        <Route path='/setting' element={<Setting />} />
      </Routes>
    </>
  );
}

export default App;
