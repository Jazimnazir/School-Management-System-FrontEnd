import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, TextField, Container, Grid } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

export default function Edit() {
  const [viewStudents, setViewStudents] = React.useState({});
  const [name, setName] = React.useState();
  const [grade, setGrade] = React.useState();
  const [address, setAddress] = React.useState();
  const [phoneNumber, setPhoneNumber] = React.useState();
  const [rollnumber, setRollNumber] = React.useState();

  let navigate = useNavigate();

  const { id } = useParams();

  console.log(id);

  React.useEffect(() => {
    fetch(`http://localhost:1010/student/get-Student/` + id)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setViewStudents(result);
      });
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const update = {
      viewStudents,
    };
    console.log(update);

    fetch(`http://localhost:1010/student/update-student/` + id, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(viewStudents),
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
            Edit User
          </Typography>
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
              value={viewStudents ? viewStudents.name : ''}
              onChange={(e) => {
                setViewStudents({
                  ...viewStudents,
                  name: e.target.value,
                });
                setName(e.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id='outlined-basic'
              label=''
              variant='outlined'
              value={viewStudents ? viewStudents.grade : ''}
              onChange={(e) => {
                setViewStudents({
                  ...viewStudents,
                  grade: e.target.value,
                });
                setGrade(e.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id='outlined-basic'
              label=''
              variant='outlined'
              value={viewStudents ? viewStudents.address : ''}
              onChange={(e) => {
                setViewStudents({
                  ...viewStudents,
                  address: e.target.value,
                });
                setAddress(e.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id='outlined-basic'
              label=''
              variant='outlined'
              value={viewStudents ? viewStudents.phoneNumber : ''}
              onChange={(e) => {
                setViewStudents({
                  ...viewStudents,
                  phoneNumber: e.target.value,
                });
                setPhoneNumber(e.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id='outlined-basic'
              label=''
              variant='outlined'
              value={viewStudents ? viewStudents.rollnumber : ''}
              onChange={(e) => {
                setViewStudents({
                  ...viewStudents,
                  rollnumber: e.target.value,
                });
                setRollNumber(e.target.value);
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
