import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Update() {
  const [className, setClassName] = useState();
  const [viewClasses, setViewClasses] = useState({});

  let navigate = useNavigate();

  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    fetch(`http://localhost:1010/className/get-className/` + id)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setViewClasses(result);
      });
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const update = {
      className,
    };
    console.log(update);

    fetch(`http://localhost:1010/className/update-className/` + id, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(viewClasses),
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
            Update
          </Typography>
        </Toolbar>
      </AppBar>

      {/* <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell
                align='right'
                onChange={(e) => setClassName(e.target.value)}
              >
                Update your Class
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              key={viewClasses.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                {viewClasses.name}
              </TableCell>
              <TableCell align='right'>{viewClasses.className}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Button variant='contained' color='success' onClick={handleClick}>
          Update
        </Button>
      </TableContainer> */}

      <TextField
        id='outlined-basic'
        label='Outlined'
        variant='filled'
        // value={viewClasses.className}
        // onChange={(e) => setClassName(e.target.value)}
        value={viewClasses ? viewClasses.className : ''}
        onChange={(e) => {
          setViewClasses({
            ...viewClasses,
            className: e.target.value,
          });
          setClassName(e.target.value);
        }}
      />
      <Box sx={{ marginTop: '11px' }}>
        <Button variant='contained' color='success' onClick={handleClick}>
          Update
        </Button>
      </Box>
    </Box>
  );
}
