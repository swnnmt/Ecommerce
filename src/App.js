import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Page/Home';
import Header from './Components/Header';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const MyContext = createContext();
function App() {
 
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
      console.log(res.data);
    })
  }

  const values={
      countryList,
      selectedCountry,
      setSelectedCountry
  }

  
  return (
    <BrowserRouter>
    <MyContext.Provider value={values}>
    <Header/>
      <Routes>
          <Route path="/" exact={true} element={<Home/>}/>
      </Routes>
    </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;

export {MyContext}
