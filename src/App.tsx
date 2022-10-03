import React, { useContext } from 'react';
import './App.css';
import Form from './components/Form';
import { UserContext, UserProvider } from './context/UserContext';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Table from './components/Table';
import { AbilityContext, createAbility } from './config/Can';

function App() {
  const { userRole } = useContext(UserContext);
  const ability = createAbility(userRole);
  return (
    <AbilityContext.Provider value={ability}>
      <UserProvider>
        <Router>
          <nav>
            <Link to='/'>Form</Link>
            <Link to='/table'>Table</Link>
            <Link to='/form'>Form</Link>
          </nav>
          <Routes>
            <Route path='/' element={<Form />} />
            <Route path='/form' element={<Form />} />
            <Route path='/table' element={<Table />} />
          </Routes>
        </Router>
      </UserProvider>
    </AbilityContext.Provider>
  );
}

export default App;
