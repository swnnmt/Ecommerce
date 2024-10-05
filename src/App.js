import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Page/Home';
import Header from './Components/Header';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import ProductModal from '../src/Components/ProductModal';
import Footer from "./Components/Footer";
import Listing from './Page/Listing';
const MyContext = createContext();
function App() {
  const [isOpenProductModal, setIsOpenProductModal]= useState(false);
  const [countryList,setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  //api countriesnow.space
  // useEffect(()=>{
  //   getCountry("http://countriesnow.space/api/v0.1/countries/");
  // },[]);

  // api down
  useEffect(()=>{
    getCountry("http://localhost:9999/data");
  },[]);
  const getCountry= async(url)=>{
    const responsive = await axios.get(url).then((res)=>{
      setCountryList(res.data);
      console.log();
    })
  }

  const values={
      countryList,
      selectedCountry,
      isOpenProductModal,
      setIsOpenProductModal,
      setSelectedCountry
  }

  
  return (
    <BrowserRouter>
    <MyContext.Provider value={values}>
    <Header/>
      <Routes>
          <Route path="/" exact={true} element={<Home/>}/>
          <Route path="/cat/:id" exact={true} element={<Listing/>}/>
     </Routes>
    <Footer/>
        {
            isOpenProductModal ===true && <ProductModal/>
        }
    </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;

export {MyContext}
