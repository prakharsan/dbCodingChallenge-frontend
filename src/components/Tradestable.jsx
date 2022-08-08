import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { withStyles } from '@material-ui/core/styles';
import "./Tradestable.css";
const styles = {
  transparentBar: {
    backgroundColor: '#786CED',
  }
};
const columns = [
  { id: 'id', label: 'Id', minWidth: 170 },
  { id: 'bookid', label: 'Book\u00a0Id', minWidth: 100 },
  {
    id: 'counterpartyid',
    label: 'Counter Party Id',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'securityid',
    label: 'Securityid',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'quantity',
    label: 'Quantity',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'price',
    label: 'Price',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'buy_sell',
    label: 'Buy_Sell',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'tradedate',
    label: 'Trade Date',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'settlementdate',
    label: 'Settlement Date',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  
];

function createData(id, bookid, counterpartyid, securityid, quantity ,status,price,buy_sell,tradedate,settlementdate) {
           return { id, bookid, counterpartyid, securityid, quantity ,status,price,buy_sell,tradedate,settlementdate};
}

const rows = [
  createData(1, 11, 1324171354, 3287263,5,0,'pass','buy','26/11/2021','29/11/2021'),
  createData(1, 11, 1324171354, 3287263,5,0,'pass','buy','26/11/2021','29/11/2021'),
  createData(1, 11, 1324171354, 3287263,5,0,'pass','buy','26/11/2021','29/11/2021'),
  createData(1, 11, 1324171354, 3287263,5,0,'pass','buy','26/11/2021','29/11/2021'),
  createData(1, 11, 1324171354, 3287263,5,0,'pass','buy','26/11/2021','29/11/2021'),
  createData(1, 11, 1324171354, 3287263,5,0,'pass','buy','26/11/2021','29/11/2021'),
  createData(1, 11, 1324171354, 3287263,5,0,'pass','buy','26/11/2021','29/11/2021'),
  createData(1, 11, 1324171354, 3287263,5,0,'pass','buy','26/11/2021','29/11/2021'),
  createData(1, 11, 1324171354, 3287263,5,0,'pass','buy','26/11/2021','29/11/2021'),
  createData(1, 11, 1324171354, 3287263,5,0,'pass','buy','26/11/2021','29/11/2021'),
  createData(1, 11, 1324171354, 3287263,5,0,'pass','buy','26/11/2021','29/11/2021'),
  createData(1, 11, 1324171354, 3287263,5,0,'pass','buy','26/11/2021','29/11/2021'),
  createData(1, 11, 1324171354, 3287263,5,0,'pass','buy','26/11/2021','29/11/2021'),
  createData(1, 11, 1324171354, 3287263,5,0,'pass','buy','26/11/2021','29/11/2021'),
  createData(1, 11, 1324171354, 3287263,5,0,'pass','buy','26/11/2021','29/11/2021'),
];

const ColumnGroupingTable=()=> {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '50%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <div className={classes.transparentBar}>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
            </div>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
export default withStyles(styles)(ColumnGroupingTable);