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
  Grid,
  TextField,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Student() {
  const [name, setName] = useState();
  const [grade, setGrade] = useState();
  const [address, setAddress] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [rollNumber, setRollNumber] = useState();
  const [classNames, setClassNames] = useState([]);
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedBus, setSelectedBus] = useState('');

  const [busNumbers, setBusNumbers] = useState([]);

  // console.log('ClassNames' + classNames.className);
  const handleClick = (e) => {
    alert('Form Submited!');
    e.preventDefault();
    const student = {
      name,
      grade,
      address,
      phoneNumber,
      rollNumber,
      className: { id: selectedClass },
      bus: { id: selectedBus },
    };
    console.log('student=======' + student.selectedClass + student.selectedBus);
    fetch('http://localhost:1010/student/add', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(student),
    }).then(() => {
      console.log('New Student Added');
    });
  };

  React.useEffect(() => {
    fetch('http://localhost:1010/className/getAll')
      .then((res) => res.json())
      .then((result) => {
        console.log('all classes==========', result);
        setClassNames(result);
      });
  }, []);

  React.useEffect(() => {
    fetch('http://localhost:1010/bus/getAll')
      .then((res) => res.json())
      .then((result) => {
        console.log('all buses==========', result);
        setBusNumbers(result);
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
            Student Form
          </Typography>
          <Link to='/viewStudent'>
            <Button variant='contained' color='success'>
              View Student
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
          <Grid item xs={12} sm={6}>
            <TextField
              id='outlined-basic'
              label='Grade'
              variant='outlined'
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='outlined-basic'
              label='Address'
              variant='outlined'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='outlined-basic'
              label='PhoneNumber'
              variant='outlined'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='outlined-basic'
              label='RollNumber'
              variant='outlined'
              value={rollNumber}
              onChange={(e) => setRollNumber(e.target.value)}
            />
          </Grid>
        </Grid>
        {/* <Button
          variant='contained'
          endIcon={<SendIcon />}
          onClick={handleClick}
        >
          Submit
        </Button> */}
      </Container>
      <Grid
        sx={{
          display: 'flex',
          justifyContent: 'left',
          marginLeft: '391px',
          marginTop: '31px',
        }}
      >
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id='demo-simple-select-label'>Class</InputLabel>
          <Select
            labelId='class'
            id='class'
            value={selectedClass}
            label='class'
            onChange={(e) => {
              console.log(e.target.value);
              setSelectedClass(e.target.value);
            }}
          >
            {classNames.map((className) => (
              <MenuItem key={className.className} value={className.id}>
                {className.className}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id='demo-simple-select-label'>Bus Number </InputLabel>
          <Select
            labelId='bus'
            id='bus'
            value={selectedBus}
            label='bus'
            onChange={(e) => {
              console.log(e.target.value);
              setSelectedBus(e.target.value);
            }}
          >
            {busNumbers.map((busNumber) => (
              <MenuItem key={busNumber.busNumber} value={busNumber.id}>
                {busNumber.busNumber}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Button variant='contained' endIcon={<SendIcon />} onClick={handleClick}>
        Submit
      </Button>
    </Box>
  );
}
