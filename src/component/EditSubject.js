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

export default function EditSubject() {
  const [subjects, setSubjects] = React.useState([]);
  const [name, setName] = React.useState();

  let navigate = useNavigate();

  const { id } = useParams();

  console.log(id);

  React.useEffect(() => {
    fetch(`http://localhost:1010/subject/getSubject/` + id)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setSubjects(result);
      });
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const subject = {
      subjects,
    };
    console.log(subject);

    fetch(`http://localhost:1010/subject/updateSubject/` + id, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(subjects),
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
            Edit Subject
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
              value={subjects ? subjects.name : ''}
              onChange={(e) => {
                setSubjects({
                  ...subjects,
                  name: e.target.value,
                });
                setName(e.target.value);
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
