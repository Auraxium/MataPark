import Homepage from './components/Homepage'
import Navbar from './components/Navbar';
import BuyDailyPass from './components/BuyDailyPass';
import Calculate from './components/Calculate';
import Login from './components/Login';
import LocateLot from './components/LocateLot';
import EVTransportation from './components/EVTransportation';
import ParkingTimer from './components/ParkingTimer'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' extact element={<Homepage/>} />
          <Route path='/BuyDailyPass' element={<BuyDailyPass/>} />
          <Route path='/Calculate' element={<Calculate/>}/>
          <Route path='/LocateLot' element={<LocateLot/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/ParkingTimer' element={<ParkingTimer/>}/>
          <Route path='/EVTransportation' element={<EVTransportation/>}/>
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
