import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SendIcon from '@mui/icons-material/Send';

import {
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { Link } from 'react-router-dom';

export default function Teacher() {
  const [name, setName] = React.useState();
  const [age, setAge] = React.useState();
  const [qualification, setQualification] = React.useState();
  const [addNumber, setAddNumber] = React.useState();

  const handleClick = (e) => {
    e.preventDefault();
    const teacher = {
      name,
      age,
      qualification,
      addNumber,
    };
    console.log(teacher);

    fetch('http://localhost:1010/teacher/add', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(teacher),
    }).then(() => {
      console.log('Teacher Added');
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
            Teacher
          </Typography>

          <Link to='/teacherList'>
            <Button variant='contained' color='secondary'>
              Teacher List
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Container sx={{ marginTop: '101px' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              id='outlined-basic'
              label='name'
              variant='outlined'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='outlined-basic'
              label='age '
              variant='outlined'
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='outlined-basic'
              label='qualification '
              variant='outlined'
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='outlined-basic'
              label='AddNumber '
              variant='outlined'
              value={addNumber}
              onChange={(e) => setAddNumber(e.target.value)}
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
