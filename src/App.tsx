import { useContext } from "react";
import "./App.css";
import Form from "./components/Form";
import { UserContext, UserProvider } from "./context/UserContext";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Table from "./components/Table";
import { AbilityContext, createAbility } from "./config/Can";
import Home from "./components/Home";
import SelectUser from "./components/SelectUser";

function App() {
   const { userRole } = useContext(UserContext);
   const ability = createAbility(userRole);

   return (
      <UserProvider>
         <Router>
            <nav className='w-100 bg-gray-700 text-white font-bold h-12 flex justify-around items-center'>
               <Link to='/' className='text-xl'>
                  Home
               </Link>
               <Link to='/table' className='text-xl'>
                  Table
               </Link>
               <Link to='/form' className='text-xl'>
                  Form
               </Link>
               <Link to='/selectuser' className='text-xl'>
                  Select User
               </Link>
            </nav>
            {/* CASL's context provider */}
            <AbilityContext.Provider value={ability}>
               <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/form' element={<Form />} />
                  <Route path='/table' element={<Table />} />
                  <Route path='/selectuser' element={<SelectUser />} />
               </Routes>
            </AbilityContext.Provider>
         </Router>
      </UserProvider>
   );
}

export default App;
