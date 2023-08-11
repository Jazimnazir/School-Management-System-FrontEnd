import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  tableCellClasses,
} from '@mui/material';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export default function ViewBus() {
  const [buses, setBuses] = React.useState([]);
  const [busNumber, setBusNumber] = React.useState();
  const [driverName, setDriverName] = React.useState();
  const [capacity, setCapacity] = React.useState();

  React.useEffect(() => {
    fetch('http://localhost:1010/bus/getAll')
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setBuses(result);
      });
  }, []);

  const deleteUser = async (id) => {
    console.log(id);
    fetch(`http://localhost:1010/bus/delete-bus/` + id, {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(ViewBus),
    })
      .then(() => {
        console.log('Class Updated');
      })
      .catch((error) => {
        console.error('Error updating class:', error);
      });
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      //   backgroundColor: 'black',
      //   color: 'white',
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

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
            List of Buses
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label='customized table'>
            <TableHead>
              <TableRow>
                <StyledTableCell
                  align='right'
                  onChange={(e) => setBusNumber(e.target.value)}
                >
                  busNumber
                </StyledTableCell>
                <StyledTableCell
                  align='right'
                  onChange={(e) => setDriverName(e.target.value)}
                >
                  driverName
                </StyledTableCell>
                <StyledTableCell
                  align='right'
                  onChange={(e) => setCapacity(e.target.value)}
                >
                  capacity
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {buses.map((bus) => (
                <TableRow>
                  <StyledTableCell component='th' scope='row'>
                    {bus.busNumber}
                  </StyledTableCell>

                  {/* <StyledTableCell align='left'>
                    {bus.busNumber}
                  </StyledTableCell> */}
                  <StyledTableCell align='left'>
                    {bus.driverName}
                  </StyledTableCell>
                  <StyledTableCell align='left'>{bus.capacity}</StyledTableCell>

                  <Link to={`/updateBus/${bus.id}`}>
                    <Button variant='contained'>Update</Button>
                  </Link>
                  <Button
                    sx={{ marginLeft: '11px' }}
                    variant='contained'
                    onClick={() => deleteUser(bus.id)}
                  >
                    Delete
                  </Button>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}
