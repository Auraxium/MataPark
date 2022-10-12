import Homepage from './components/Homepage'
import Navbar from './components/Navbar';
import BuyDailyPass from './components/BuyDailyPass';
import { BrowserRouter as Router, Route} from "react-router-dom";


function App() {

  return (
    <>
      <Navbar/>
      <Homepage/>
    </>
  );
}

export default App;
