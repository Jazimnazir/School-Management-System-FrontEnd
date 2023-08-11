import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { TextField, Container, Grid } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditFee() {
  const [feeLists, setFeeLists] = React.useState([]);
  const [amount, setAmount] = React.useState();
  const [paymentDate, setPaymentdate] = React.useState();

  let navigate = useNavigate();

  const { id } = useParams();

  console.log(id);

  React.useEffect(() => {
    fetch(`http://localhost:1010/fee/getFee/` + id)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setFeeLists(result);
      });
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const edit = {
      feeLists,
    };
    console.log(edit);

    fetch(`http://localhost:1010/fee/updateFee/` + id, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(feeLists),
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
            Update Fee
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
              value={feeLists ? feeLists.amount : ''}
              onChange={(e) => {
                setFeeLists({
                  ...feeLists,
                  amount: e.target.value,
                });
                setAmount(e.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
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
