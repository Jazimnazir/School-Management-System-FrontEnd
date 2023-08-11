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

export default function AttendenceList() {
  const [attendences, setAttendences] = React.useState([]);
  const [attendence, setAttendence] = React.useState();
  const [date, setDate] = React.useState();
  const [status, setStatus] = React.useState();

  // React.useEffect(() => {
  //   fetch('http://localhost:1010/attendence/getAll')
  //     .then((res) => res.json())
  //     .then((result) => {
  //       console.log(result);
  //       setAttendences(result);
  //     });
  // }, []);
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
            Attendence List
          </Typography>
        </Toolbar>
      </AppBar>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='right'>Date</TableCell>
              <TableCell align='right'>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {attendences.map((attendence) => (
              <TableRow
                key={attendence.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {/* <TableCell component='th' scope='row'>
                  {attendence.name}
                </TableCell> */}
                <TableCell align='right'>{attendence.date}</TableCell>
                <TableCell align='right'>{attendence.status}</TableCell>

                {/* <Link to={`/updateAttendence/${attendence.id}`}>
                  <Button variant='contained'>Update</Button>
                </Link> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
