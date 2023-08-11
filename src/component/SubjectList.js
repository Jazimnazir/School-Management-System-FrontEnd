import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { Link } from 'react-router-dom';

export default function SubjectList() {
  const [subjects, setSubjects] = React.useState([]);
  const [name, setName] = React.useState();
  const [subject, setSubject] = React.useState();

  React.useEffect(() => {
    fetch('http://localhost:1010/subject/getAll')
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setSubjects(result);
      });
  }, []);

  const deleteSubject = async (id) => {
    alert('Deleted Successfully!');
    console.log(id);
    fetch(`http://localhost:1010/subject/deleteSubject/` + id, {
      method: 'DELETE',
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
            List of Subjects
          </Typography>
        </Toolbar>
      </AppBar>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='right'>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {subjects.map((subject) => (
              <TableRow
                key={subject.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {/* <TableCell component='th' scope='row'>
                  {row.name}
                </TableCell> */}
                <TableCell align='right'>{subject.name}</TableCell>

                <Link to={`/editSubject/${subject.id}`}>
                  <Button variant='contained'>Edit</Button>
                </Link>
                <Button
                  sx={{ marginLeft: '11px' }}
                  variant='contained'
                  onClick={() => deleteSubject(subject.id)}
                >
                  Delete
                </Button>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
