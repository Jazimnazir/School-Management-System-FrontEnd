import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function FeeList() {
  const [fees, setFees] = React.useState([]);
  const [fee, setFee] = React.useState();
  const [amount, setAmount] = React.useState();
  const [paymentDate, setPaymentdate] = React.useState();

  React.useEffect(() => {
    fetch('http://localhost:1010/fee/getAll')
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setFees(result);
      });
  }, []);

  const deleteFee = async (id) => {
    alert('Deleted Successfully!');
    console.log(id);
    fetch(`http://localhost:1010/fee/deleteFee/` + id, {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(FeeList),
    })
      .then(() => {
        console.log('Class Updated');
      })
      .catch((error) => {
        console.error('Error updating class:', error);
      });
  };
  return (
    <TableContainer component={Paper} sx={{ marginTop: '31px' }}>
      <Table aria-label='simple table' stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell
              align='left'
              onChange={(e) => setAmount(e.target.value)}
              sx={{ backgroundColor: 'black', color: 'white' }}
            >
              Amount
            </TableCell>
            <TableCell
              align='left'
              onChange={(e) => setPaymentdate(e.target.value)}
              sx={{ backgroundColor: 'black', color: 'white' }}
            >
              PaymentDate
            </TableCell>
            <TableCell
              align='left'
              sx={{ backgroundColor: 'black', color: 'white' }}
            ></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fees.map((fee) => (
            <TableRow
              key={fee.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {/* <TableCell component='th' scope='row'>
                {fee.name}
              </TableCell> */}
              <TableCell align='left'>{fee.amount}</TableCell>
              <TableCell align='left'>{fee.paymentDate}</TableCell>

              <Link to={`/editFee/${fee.id}`}>
                <Button variant='contained'>Edit</Button>
              </Link>
              <Button
                sx={{ marginLeft: '11px' }}
                variant='contained'
                onClick={() => deleteFee(fee.id)}
              >
                Delete
              </Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
