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

export default function Subject() {
  const [name, setName] = React.useState();
  const handleClick = (e) => {
    e.preventDefault();
    const subject = {
      name,
    };
    console.log(subject);

    fetch('http://localhost:1010/subject/add', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(subject),
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
            Subject
          </Typography>
          <Link to='/subjectList'>
            <Button variant='contained' color='success'>
              List of subjects
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Container sx={{ marginTop: '71px' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              id='outlined-basic'
              label='Name'
              variant='outlined'
              value={name}
              onChange={(e) => setName(e.target.value)}
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
