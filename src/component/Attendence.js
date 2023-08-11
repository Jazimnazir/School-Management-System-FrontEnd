import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container, Grid, TextField } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';
export default function Attendence() {
  const [date, setDate] = React.useState();
  const [status, setStatus] = React.useState();
  const handleDateChange = (newValue) => {
    setDate(newValue); // Update the paymentDate state when the date changes
  };

  const handleClick = (e) => {
    e.preventDefault();
    const attendence = {
      date,
      status,
    };
    console.log(attendence);

    fetch('http://localhost:1010/attendence/add', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(attendence),
    }).then(() => {
      console.log('Attendence Added');
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
            Attendence
          </Typography>

          <Link to='/attendenceList'>
            <Button variant='contained' color='secondary'>
              Attendence List
            </Button>
          </Link>
        </Toolbar>
      </AppBar>

      <Container sx={{ marginTop: '101px' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker
                  label='Basic date picker'
                  value={date}
                  onChange={handleDateChange} // Pass the handleDateChange function to onChange
                  renderInput={(params) => <TextField {...params} />}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='outlined-basic'
              label='Status'
              variant='outlined'
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </Grid>
        </Grid>
      </Container>
      <Button
        sx={{ marginTop: '91px' }}
        variant='contained'
        endIcon={<SendIcon />}
        onClick={handleClick}
      >
        Submit
      </Button>
    </Box>
  );
}
