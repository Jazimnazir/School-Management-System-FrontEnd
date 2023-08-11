import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { DateField } from '@mui/x-date-pickers/DateField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import {
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';
import { DatePicker } from '@mui/x-date-pickers';

export default function Fee() {
  const [amount, setAmount] = React.useState();
  const [paymentDate, setPaymentdate] = React.useState('');
  const [selectedStudent, setSelectedStudent] = React.useState();
  const [students, setStudents] = React.useState([]);

  const handleDateChange = (newValue) => {
    setPaymentdate(newValue); // Update the paymentDate state when the date changes
  };

  const handleClick = (e) => {
    e.preventDefault();
    const fee = {
      amount,
      paymentDate,
      student: { id: selectedStudent },
    };
    console.log('selectedStudenttest===== ', fee.student);

    fetch('http://localhost:1010/fee/add', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(fee),
    }).then(() => {
      console.log('Fee Submitted');
    });
  };

  React.useEffect(() => {
    fetch('http://localhost:1010/student/getAll')
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setStudents(result);
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
            Fee Description
          </Typography>
          <Link to='/feeList'>
            <Button variant='contained' color='secondary'>
              Fee List
            </Button>
          </Link>
        </Toolbar>
      </AppBar>

      <Container sx={{ marginTop: '101px' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              id='outlined-basic'
              label='Amount'
              variant='outlined'
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DateField']}>
                <DateField
                  id='outlined-basic'
                  label='Payment Date'
                  // variant='outlined'
                  value={paymentDate}
                  onChange={(e) => setPaymentdate(e.target.value)}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Grid> */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker
                label='Basic date picker'
                value={paymentDate}
                onChange={handleDateChange} // Pass the handleDateChange function to onChange
                renderInput={(params) => <TextField {...params} />}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
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
          <InputLabel id='demo-simple-select-label'>Student</InputLabel>
          <Select
            labelId='class'
            id='class'
            value={selectedStudent}
            label='class'
            onChange={(e) => {
              console.log('selectedStudent===== ', e.target.value);
              setSelectedStudent(e.target.value);
            }}
          >
            {students.map((student) => (
              <MenuItem key={student.student} value={student.id}>
                {student.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
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
