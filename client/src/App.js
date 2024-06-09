
import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import AdminLogin from './scenes/Admin/adminLogin';
import SignUp from './scenes/User/SignUp';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/adminLogin' element = {<AdminLogin />}/>
        <Route path='/' element = {<SignUp />}/>
      </Routes>
   
    </div>
    </Router>
  );
}

export default App;
