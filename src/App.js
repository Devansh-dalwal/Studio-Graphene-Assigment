import Navbar from './component/Navbar';
import Product from './component/Product'
import Footer from './component/Footer';
import { Router } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
   <Navbar/>
   <Product/>
   <Footer/>
   
   </Router>
   
    </>
  );
}

export default App;
