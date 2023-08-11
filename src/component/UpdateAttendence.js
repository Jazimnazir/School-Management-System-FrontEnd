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

export default function UpdateAttendence() {
  const [attendenceLists, setAttendenceLists] = React.useState([]);
  const [attendence, setAttendence] = React.useState();

  const [date, setDate] = React.useState();
  const [status, setStatus] = React.useState();
  let navigate = useNavigate();

  const { id } = useParams();

  console.log(id);

  React.useEffect(() => {
    fetch(`http://localhost:1010/attendence/getAttendence/` + id)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setAttendenceLists(result);
      });
  }, []);

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
            Update Attendence
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
              value={attendenceLists ? attendenceLists.date : ''}
              onChange={(e) => {
                setAttendenceLists({
                  ...attendenceLists,
                  date: e.target.value,
                });
                setDate(e.target.value);
              }}
            />
          </Grid>

          {/* <Grid item xs={12} sm={6}>
            <TextField
              id='outlined-basic'
              label=''
              variant='outlined'
              value={feeLists ? feeLists.paymentDate : ''}
              onChange={(e) => {
                setFeeLists({
                  ...feeLists,
                  paymentDate: e.target.value,
                });
                setPaymentdate(e.target.value);
              }}
            />
          </Grid> */}
        </Grid>
      </Container>
    </Box>
  );
}
