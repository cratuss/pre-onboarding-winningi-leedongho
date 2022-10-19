import { Route, Routes } from 'react-router-dom';
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import GlobalStyle from './GlobalStyle';
import Navigation from './components/Navigation';
import Main from './pages/Main';
import Board from './pages/Board';
import Setting from './pages/Setting';

const Context = createContext({
  loginData: '',
  setLoginData: () => {},
});

const Context1 = createContext({
  allUserData: '',
  setAllUserData: () => {},
});

const Context2 = createContext({
  boardListData: '',
  setBoardListData: () => {},
});

const Context3 = createContext({
  navMinimal: '',
  setNavMinimal: () => {},
});

function App() {
  const [loginData, setLoginData] = useState('');
  const [allUserData, setAllUserData] = useState([]);
  const [boardListData, setBoardListData] = useState([]);
  const [navMinimal, setNavMinimal] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios('/data/users.json');
        setAllUserData(data.user_data);
      } catch (error) {
        console.log(error);
      }
    })();
    (async () => {
      try {
        const { data } = await axios('/data/board.json');
        setBoardListData(data.board_data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <Context.Provider value={{ loginData, setLoginData }}>
        <Context1.Provider value={{ allUserData, setAllUserData }}>
          <Context2.Provider value={{ boardListData, setBoardListData }}>
            <Context3.Provider value={{ navMinimal, setNavMinimal }}>
              <GlobalStyle />
              <Navigation />
              <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/board/*' element={<Board />} />
                <Route path='/setting' element={<Setting />} />
              </Routes>
            </Context3.Provider>
          </Context2.Provider>
        </Context1.Provider>
      </Context.Provider>
    </>
  );
}

export default App;
export const LoginContext = Context;
export const UserContext = Context1;
export const BoardContext = Context2;
export const MinimalContext = Context3;
