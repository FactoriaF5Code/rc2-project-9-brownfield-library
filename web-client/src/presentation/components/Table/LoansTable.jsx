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
import { useState } from "react";
import PropTypes from "prop-types";
import LoanModal from "../LoanModal/LoanModal";

export const LoansTable = ({ books, members }) => {
  const tableHeaders = ["Title", "Member"];
  const [selectedState, setSelectedState] = useState(null);

  const openModal = (book) => {
    if (!book.available) {
      setSelectedState(book);
    }
  };

  const closeModal = () => {
    setSelectedState(null);
  };

  return (
    <div className="table-container">
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
            {books.map((book, index,{id,isbn,title,author,available}) => (
              <TableRow key={index} onClick={() =>
                openModal({ id, isbn, title, author, available })
              }>
                <TableCell className="table-cell">{book.title}</TableCell>
                <TableCell className="table-cell">
                  <div className="cell-gap">
                    <div>
                      {members[index] ? members[index].firstName : "N/A"}
                    </div>
                    <div>
                      {members[index] ? members[index].lastName : "N/A"}
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {selectedState && (
        <div className="contenedorModal__componente">
          <LoanModal book={selectedState} onclose={closeModal} />
        </div>
      )}
    </div>
  );
};

LoansTable.propTypes = {
  books: PropTypes.array.isRequired,
  members: PropTypes.array.isRequired,
};

export default LoansTable;
