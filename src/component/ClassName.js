import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ClassName() {
  const [className, setClassName] = useState('');
  const handleClick = (e) => {
    e.preventDefault();
    const ClassName = {
      className,
    };
    console.log(ClassName);

    fetch('http://localhost:1010/className/add', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(ClassName),
    }).then(() => {
      console.log('New Class Added');
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
            Class
          </Typography>
          <Link to='/viewclass'>
            <Button variant='contained' color='secondary'>
              ViewClass
            </Button>
          </Link>
        </Toolbar>
      </AppBar>

      <Box>
        <TextField
          id='standard-basic'
          label='Class Name'
          variant='standard'
          value={className}
          onChange={(e) => setClassName(e.target.value)}
        />
      </Box>
      <Box sx={{ marginTop: '11px' }}>
        <Button variant='contained' onClick={handleClick}>
          Submit
        </Button>
      </Box>
    </Box>
  );
}
