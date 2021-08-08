import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './ItemPage.jsx';

function UserRating() {
  
  return ( 
  <div>
       <Box component="fieldset" mb={3} borderColor="transparent">
      <Typography component="legend"></Typography>
      <Rating name="read-only" value={2} readOnly />
    </Box>
  </div>
          )
}
export default UserRating