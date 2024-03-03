import {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    TableContainer,
    Paper,
  } from "@mui/material";
  import "./Table.css";
  import PropTypes from "prop-types";
  
  export const LoansTable = ({ books, members }) => {
    const tableHeaders = ["Title", "Member"];
  
    return (
      <div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {tableHeaders.map((header) => (
                  <TableCell key={header} className="table-cell-header">
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {books.map((book, index) => (
                <TableRow key={index}>
                  <TableCell className="table-cell">{book.title}</TableCell>
                  <TableCell className="table-cell">
                    {members[index] ? members[index].firstName : "N/A"}
                  </TableCell>
                  <TableCell className="table-cell">
                    {members[index] ? members[index].lastName : "N/A"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  };
  
  LoansTable.propTypes = {
    books: PropTypes.array.isRequired,
    members: PropTypes.array.isRequired,
  };
  
  export default LoansTable;
  