import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import './style.scss'
import {  Route,  Routes,  BrowserRouter,Navigate} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Footer from './pages/Footer';

function App() {
  const {currentUser} =useContext(AuthContext)
  const ProtectedRoute =({children})=>{
    if(!currentUser){
      return <Navigate to="/login"/>
    }
    return children;
  };
  return (
    <BrowserRouter>
    <Routes>
      {/* <h1>Chatter</h1> */}
<Route path="/">
<Route index element={<ProtectedRoute><Home/></ProtectedRoute>}/>
<Route path="login" element={<Login/>}/>
<Route path="register" element={<Register/>}/>

</Route>

    </Routes>
<Footer />
  
    </BrowserRouter>
 
  

  );
}

export default App;
