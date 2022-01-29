import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';
import Login from './components/User/Login'
import Signup from './components/User/Signup';
import Home from './components/User/Home';
import AdminLogin from './components/Admin/Login'
import AdminDashboard from './components/Admin/AdminDashboard'
import axios from 'axios';
import Add_User from './components/Admin/Add-User';
import Edit from './components/Admin/Edit';
import Table from './components/Admin/Table';
import SearchTable from './components/Admin/SearchTable'
//  const api= axios.create({
//    baseURL:`http://localhost:1337/`
//  })

function App() {
 
   
  return (
    <div>
    <Router>
 <Routes>
   <Route  path='/'  exact element={<Home/>}></Route>
   <Route  path='/login'  exact element={<Login/>}></Route>
   <Route  path='/signup' element={<Signup/>}></Route>
  </Routes>

  <Routes>
   <Route  path='/admin'  exact element={<AdminLogin/>}></Route>
   <Route  path='/admindashboard' element={<AdminDashboard/>}></Route>
   <Route path ='/adduser' element={<Add_User/>}></Route>
   <Route path ='/edituser/:id' element={<Edit/>}></Route>
   <Route path ='/table' element={<Table/>}></Route>
   <Route path ='/admindashboard/name/:search' element={<SearchTable/>}></Route>
  </Routes>

    </Router>
    
    </div>
  );
}

export default App;
