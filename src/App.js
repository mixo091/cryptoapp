import React from 'react'
import Navbar from './components/Navbar'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/system';
import HomePage from './components/HomePage.jsx';
import Exchanges from './components/Exchanges'
import News from './components/News'
import CryptoDetails from './components/CryptoDetails'
import Cryptocurrencies from './components/Cryptocurrencies'
import { Typography } from '@mui/material';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import './App.css' 

const App = () => {
  

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3', // Blue color
    },
    secondary: {
      main: '#ff4081', // Pink color
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: 14,
  },
  // Other theme properties...
 });

  return (
    <ThemeProvider theme={theme}>
    <div className='app'>
 
      
      <Navbar/>
   
      <div className='main'>
        <div className='routes'>
        <Routes>
            <Route  path='/' element={<HomePage/>} />
            <Route path='/exchanges' element={<Exchanges/>} />
            <Route  path='/cryptocurrencies' element={<Cryptocurrencies/>}/>
            <Route  path="crypto/:coinId" element={<CryptoDetails/>} />
            <Route path="/news" element={<News/>} />
        </Routes>
        </div>
      </div>  
      <div className='footer'>
      
      </div> 
    </div>
    </ThemeProvider>
  )
}

export default App
