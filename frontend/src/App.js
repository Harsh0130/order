import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar';
import Home from './components/Home';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import AddOrder from './components/AddOrder';
import EditOrder from './components/EditOrder';
import ViewOrder from './components/ViewOrder';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes >
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/addorder" element={<AddOrder/>}/>
        <Route exact path="/editorder/:id" element={<EditOrder/>}/>
        <Route exact path="/vieworder/:id" element={<ViewOrder/>}/>
      </Routes>
      
      </Router>
    </div>
  );
}

export default App;
