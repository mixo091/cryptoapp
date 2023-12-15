import React from 'react'
import {Link} from 'react-router-dom'
import millify from 'millify'
import { Typography  ,Grid} from '@mui/material'
import StatisticCard from './StatisticCard'

function HomePage() {
  return (
    <>
      <Typography variant="h1"  className='heading' component="div" gutterBottom>Global Crypto Stats</Typography>
      <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
          <StatisticCard title="Total Cryptocurrencies" value='5' />
      </Grid>
      <Grid item xs={12} sm={6}>
          <StatisticCard title="Total Cryptocurrencies" value='5' />
      </Grid>
      <Grid item xs={12} sm={6}>
          <StatisticCard title="Total Cryptocurrencies" value='5' />
      </Grid>
      <Grid item xs={12} sm={6}>
          <StatisticCard title="Total Cryptocurrencies" value='5' />  
      </Grid>
      <Grid item xs={12} sm={6}>
          <StatisticCard title="Total Cryptocurrencies" value='5' />
      </Grid>
    </Grid>
    
    
    </>
  )
}

export default HomePage