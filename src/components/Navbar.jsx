import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Avatar } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TollIcon from '@mui/icons-material/Toll';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import icon from '../images/pngegg.png'


const Navbar = () => {
    return (
        <div className='nav-container'>
          <div className='logo-container'>
            <Avatar alt="User Avatar" src={icon} sx={{ width: 70, height: 70, marginRight: 2 ,overflow: 'hidden'}} />
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Typography variant="h5" color="textPrimary" sx={{fontWeight:'bold', paddingRight:'20px',fontFamily:'Vernada',fontSize: '1.3rem', lineHeight: '50px'}}>CRYPTOREALM</Typography>
            </Link>
          </div>
          <div className='nav-items'>
            {[
              { label: 'Home', path: '/', icon: <HomeOutlinedIcon sx={{ fontSize: '1.1rem' }} /> },
              { label: 'Cryptocurrencies', path: '/cryptocurrencies', icon: <TollIcon sx={{ fontSize: '1.1rem' }} /> },
              { label: 'Exchanges', path: '/exchanges', icon: <CurrencyExchangeIcon sx={{ fontSize: '1.1rem' }} /> },
              { label: 'News', path: '/news', icon: <LightbulbOutlinedIcon sx={{ fontSize: '1.1rem' }} /> },
            ].map((item) => (
              <Link to={item.path} key={item.label} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="nav-item" style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', borderRadius: '4px', transition: 'background-color 0.3s' }}>
                  {item.icon}
                  <Typography variant="subtitle1" color="textPrimary" sx={{fontFamily:'Vernada', fontSize: '1.1rem', marginLeft: 1 }}>{item.label}</Typography>
                </div>
              </Link>
            ))}
          </div>
        </div>
    );
  };
  
export default Navbar;