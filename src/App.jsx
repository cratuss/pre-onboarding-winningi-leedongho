import { Route, Routes } from 'react-router-dom';

import GlobalStyle from './GlobalStyle';
import Navigation from './components/Navigation';
import Main from './pages/Main';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
