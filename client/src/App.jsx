import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/Login'
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Category from './components/Category';
import Employee from './components/Employee';
import Profile from './components/Profile';
import AddCategory from './components/AddCategory';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/adminlogin" element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}>
          <Route path='' element={<Home/>}></Route>
          <Route path='/dashboard/employee' element={<Employee/>}></Route>
          <Route path='/dashboard/category' element={<Category/>}></Route>
          <Route path='/dashboard/profile' element={<Profile/>}></Route>
          <Route path='/dashboard/add_category' element={<AddCategory/>}></Route>
          <Route path='/dashboard/add_employee' element={<AddEmployee/>}></Route>
          <Route path='/dashboard/edit_employee/:id' element={<EditEmployee/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
