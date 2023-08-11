import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container, Grid, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';

export default function Bus() {
  const [buses, setBuses] = React.useState([]);
  const [busNumber, setBusNumber] = React.useState();
  const [driverName, setDriverName] = React.useState();
  const [capacity, setCapacity] = React.useState();

  const handleClick = (e) => {
    e.preventDefault();
    const bus = {
      busNumber,
      driverName,
      capacity,
    };
    console.log(bus);

    fetch('http://localhost:1010/bus/add', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(bus),
    }).then(() => {
      console.log('New Bus Added');
    });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Bus Form
          </Typography>
          <Link to='/viewBus'>
            <Button variant='contained' color='success'>
              View Bus
            </Button>
          </Link>
        </Toolbar>
      </AppBar>

      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              id='outlined-basic'
              label='Bus Number'
              variant='outlined'
              value={busNumber}
              onChange={(e) => setBusNumber(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='outlined-basic'
              label='Driver Name'
              variant='outlined'
              value={driverName}
              onChange={(e) => setDriverName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='outlined-basic'
              label='Cpapacity'
              variant='outlined'
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
            />
          </Grid>
        </Grid>
      </Container>
      <Button variant='contained' endIcon={<SendIcon />} onClick={handleClick}>
        Submit
      </Button>
    </Box>
  );
}
