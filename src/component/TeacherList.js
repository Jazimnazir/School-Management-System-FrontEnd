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

export default function TeacherList() {
  const [teachers, setTeachers] = React.useState([]);
  const [teacher, setTeacher] = React.useState([]);
  const [name, setName] = React.useState();
  const [age, setAge] = React.useState();
  const [qualification, setQualification] = React.useState();
  const [addNumber, setAddNumber] = React.useState();

  React.useEffect(() => {
    fetch('http://localhost:1010/teacher/getAll')
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setTeachers(result);
      });
  }, []);

  const deleteTeacher = async (id) => {
    alert('Deleted Successfully!');
    console.log(id);
    fetch(`http://localhost:1010/teacher/deleteTeacher/` + id, {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(TeacherList),
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
            List of Teachers
          </Typography>
        </Toolbar>
      </AppBar>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='right'>Name</TableCell>
              <TableCell align='right'>Age</TableCell>
              <TableCell align='right'>Qualification</TableCell>
              <TableCell align='right'>AddNumber</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teachers.map((teacher) => (
              <TableRow
                key={teacher.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {/* <TableCell component='th' scope='row'>
                  {teacher.name}
                </TableCell> */}
                <TableCell align='right'>{teacher.name}</TableCell>
                <TableCell align='right'>{teacher.age}</TableCell>
                <TableCell align='right'>{teacher.qualification}</TableCell>
                <TableCell align='right'>{teacher.addNumber}</TableCell>

                <Link to={`/updateTeacher/${teacher.id}`}>
                  <Button variant='contained'>Update</Button>
                </Link>
                <Button
                  sx={{ marginLeft: '11px' }}
                  variant='contained'
                  onClick={() => deleteTeacher(teacher.id)}
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
