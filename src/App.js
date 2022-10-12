import Homepage from './components/Homepage'
import Navbar from './components/Navbar';
import BuyDailyPass from './components/BuyDailyPass';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap';
import {useNavigate} from 'react-router-dom';


function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' extact element={<Homepage/>} />
          <Route path='/BuyDailyPass' element={<BuyDailyPass/>} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
