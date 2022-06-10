import Button from '@mui/material/Button';
import Navbar from "./components/Navbar"
import Product from "./pages/Product";
import Products from "./pages/Products";
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
              <Route path="/headphones" element={<Products/>}/>
              <Route path="/speakers" element={<Products/>}/>
              <Route path="/earphones" element={<Products/>}/>
            </Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
