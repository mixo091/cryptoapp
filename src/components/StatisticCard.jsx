import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const StatisticCard = ({ title, value }) => {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={6}>
            <Typography variant="h6">{title}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" color="primary" align="right">
              {value}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default StatisticCard;