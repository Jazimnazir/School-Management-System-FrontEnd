import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container, Grid, TextField } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

export default function UpdateBus() {
  const [viewBuses, setViewBuses] = React.useState([]);
  const [busNumber, setBusNumber] = React.useState();
  const [driverName, setDriverName] = React.useState();
  const [capacity, setCapacity] = React.useState();

  let navigate = useNavigate();

  const { id } = useParams();

  console.log(id);

  React.useEffect(() => {
    fetch(`http://localhost:1010/bus/get-bus/` + id)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setViewBuses(result);
      });
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const update = {
      viewBuses,
    };
    console.log(update);

    fetch(`http://localhost:1010/bus/update-bus/` + id, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(viewBuses),
    })
      .then(() => {
        console.log('Class Updated');
      })
      .catch((error) => {
        console.error('Error updating class:', error);
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
            News
          </Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ marginTop: '33px' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              id='outlined-basic'
              label=''
              variant='outlined'
              // value={viewClasses.className}
              // onChange={(e) => setClassName(e.target.value)}
              value={viewBuses ? viewBuses.busNumber : ''}
              onChange={(e) => {
                setViewBuses({
                  ...viewBuses,
                  name: e.target.value,
                });
                setBusNumber(e.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id='outlined-basic'
              label=''
              variant='outlined'
              value={viewBuses ? viewBuses.driverName : ''}
              onChange={(e) => {
                setViewBuses({
                  ...viewBuses,
                  name: e.target.value,
                });
                setDriverName(e.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id='outlined-basic'
              label=''
              variant='outlined'
              value={viewBuses ? viewBuses.capacity : ''}
              onChange={(e) => {
                setViewBuses({
                  ...viewBuses,
                  name: e.target.value,
                });
                setCapacity(e.target.value);
              }}
            />
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ marginTop: '11px' }}>
        <Button variant='contained' color='success' onClick={handleClick}>
          Update
        </Button>
      </Box>
    </Box>
  );
}
