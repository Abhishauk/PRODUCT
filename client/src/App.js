
import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import AdminLogin from './scenes/Admin/adminLogin';
import SignUp from './scenes/User/SignUp';
import  UserLogin  from './scenes/User/Login.jsx';
import Home from './scenes/User/Home.jsx'

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/adminLogin' element = {<AdminLogin />}/>
        <Route path='/Signup' element = {<SignUp />}/>
        <Route path='/' element = {<UserLogin />}/>
        <Route path='/Home' element = {<Home />}/>
      </Routes>
   
    </div>
    </Router>
  );
}

export default App;
