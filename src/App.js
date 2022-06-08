import Button from '@mui/material/Button';
import Navbar from "./components/Navbar"
import Product from "./pages/Product";
import About from "./pages/About"
import Home from "./pages/Home";
import {BrowserRouter as Router, Routes,Route,Outlet} from "react-router-dom"
import Footer from './components/Footer';

function App() {
  const Layout = ()=>{
    return(
      <>
      <Navbar/>
      <Outlet/>
      <About/>
      <Footer/>
      </>
    )
  }
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route  path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
            </Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
