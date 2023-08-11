import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function ViewStudent() {
  const [students, setStudents] = React.useState([]);
  const [name, setName] = React.useState();
  const [grade, setGrade] = React.useState();
  const [address, setAddress] = React.useState();
  const [phoneNumber, setPhoneNumber] = React.useState();
  const [rollNumber, setRollNumber] = React.useState();
  const [data, setData] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);
  const pageSize = 5; // Number of items to display per page

  React.useEffect(() => {
    fetch('http://localhost:1010/student/getAll')
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setStudents(result);
      });
  }, []);

  const deleteUser = async (id) => {
    alert('Deleted Successfully!');
    console.log(id);
    fetch(`http://localhost:1010/student/delete-student/` + id, {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(ViewStudent),
    })
      .then(() => {
        console.log('Class Updated');
      })
      .catch((error) => {
        console.error('Error updating class:', error);
      });
  };

  React.useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:1010/student/page?page=${currentPage}&pageSize=${pageSize}`
      );
      setData(response.data.data);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
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
            List of Students
          </Typography>
        </Toolbar>
      </AppBar>

      <Container>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell
                  align='left'
                  onChange={(e) => setName(e.target.value)}
                >
                  name
                </TableCell>
                <TableCell
                  align='left'
                  onChange={(e) => setGrade(e.target.value)}
                >
                  grade
                </TableCell>
                <TableCell
                  align='left'
                  onChange={(e) => setAddress(e.target.value)}
                >
                  address
                </TableCell>
                <TableCell
                  align='left'
                  onChange={(e) => setPhoneNumber(e.target.value)}
                >
                  phoneNumber
                </TableCell>
                <TableCell
                  align='left'
                  onChange={(e) => setRollNumber(e.target.value)}
                >
                  rollNumber
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((student) => (
                <TableRow
                  key={student.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  {/* <TableCell component='th' scope='row'>
                    {student.name}
                  </TableCell> */}
                  <TableCell align='left'>{student.name}</TableCell>
                  <TableCell align='left'>{student.grade}</TableCell>
                  <TableCell align='left'>{student.address}</TableCell>
                  <TableCell align='left'>{student.phoneNumber}</TableCell>
                  <TableCell align='left'>{student.rollNumber}</TableCell>

                  <Link to={`/edit/${student.id}`}>
                    <Button variant='contained'>Edit</Button>
                  </Link>

                  <Button
                    sx={{ marginLeft: '11px' }}
                    variant='contained'
                    onClick={() => deleteUser(student.id)}
                  >
                    Delete
                  </Button>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <button
          sx={{ backgroundColor: 'Highlight' }}
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          {currentPage} / {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </Container>
    </Box>
  );
}
