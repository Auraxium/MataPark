import Homepage from './components/Homepage'
import Navbar from './components/Navbar';
import BuyDailyPass from './components/BuyDailyPass';
import Calculate from './components/Calculate';
// import ParkingInfo from './components/ParkingInfo';
import Login from './components/Login';
import LocateLot from './components/LocateLot';
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
          {/* <Route path='/ParkingInfo' element={<ParkingInfo/>}/> */}
          <Route path='/LocateLot' element={<LocateLot/>}/>
          <Route path='/Login' element={<Login/>}/>
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
