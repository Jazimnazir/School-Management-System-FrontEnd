import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

export default function ViewClass() {
  const [classNames, setClassNames] = useState([]);
  const [className, setClassName] = useState('');
  const [open, setOpen] = useState('false');
  // let navigate = useNavigate();

  // const { id } = useParams();

  // const handleClose = (e) => {
  //   e.preventDefault();
  //   const update = {
  //     className,
  //   };
  //   console.log(update);

  //   fetch(`http://localhost:1010/className/delete-className/` + id, {
  //     method: 'DELETE',
  //     headers: { 'Content-type': 'application/json' },
  //     body: JSON.stringify(classNames),
  //   })
  //     .then(() => {
  //       console.log('Class Updated');
  //     })
  //     .catch((error) => {
  //       console.error('Error updating class:', error);
  //     });
  // };
  // const handleClose = () => {
  //   setOpen(true);
  // };

  // const handleClick = (e) => {
  //   e.preventDefault();

  //   console.log(e.target.value);
  //   const viewClass = {
  //     className,
  //   };
  //   console.log(viewClass);

  //   fetch('http://localhost:1010/className/delete-className' + id, {
  //     method: 'DELETE',
  //     headers: { 'Content-type': 'application/json' },
  //     body: JSON.stringify(viewClass),
  //   }).then(() => {
  //     console.log('New User Added');
  //   });
  // };
  // function deleteClassName(id) {
  //   fetch(`http://localhost:1010/className/delete-className${id}`, {
  //     method: 'DELETE',
  //     // mode: 'no-cors',
  //   })
  //     .then((result) => {
  //       if (result.ok) {
  //         console.log('Class deleted successfully');
  //         // getClassName();
  //       } else {
  //         console.error('Failed to delete student');
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Error occurred during fetch:', error);
  //     });
  // }

  useEffect(() => {
    fetch('http://localhost:1010/className/getAll')
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setClassNames(result);
      });
  }, []);

  const deleteUser = async (id) => {
    console.log(id);
    fetch(`http://localhost:1010/className/delete-className/` + id, {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(classNames),
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
            Update your Class
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ marginTop: '23px' }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 600 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ fontWeight: 'bold', fontSize: '31px' }}
                  align='right'
                  onChange={(e) => setClassName(e.target.value)}
                >
                  Class Names
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {classNames.map((className) => (
                <TableRow
                  key={className.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    {className.name}
                  </TableCell>
                  <TableCell align='initial'>{className.className}</TableCell>
                  <Link to={`/update/${className.id}`}>
                    <Button variant='contained'>Update Class</Button>
                  </Link>

                  <Button
                    sx={{ marginLeft: '11px' }}
                    variant='contained'
                    onClick={() => deleteUser(className.id)}
                  >
                    Delete
                  </Button>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* <Link to={'/get-className/{id}'}>
          <Button variant='contained' onClick={handleClick}>
            Update Class
          </Button>
        </Link> */}
      </Container>
    </Box>
  );
}
