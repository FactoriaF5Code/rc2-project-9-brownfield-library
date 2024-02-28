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
import { useState } from "react";
import ModalLoans from "../ModalLoans/ModalLoans";

export const BookTable = ({ books }) => {
  const tableHeaders = ["ID", "ISBN", "Título", "Autor", "Estado"];
  const [selectedState, setSelectedState] = useState(null);

  const openModal = (state) => {
    setSelectedState(state);
  };

  const closeModal = () => {
    setSelectedState(null);
  };

  return (
    <div>
      <TableContainer component={Paper} className="table-container">
        <Table aria-label="fixed header table">
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
            {books.map(({ id, isbn, title, author, available }, index) => (
              <TableRow key={index}>
                <TableCell className="table-cell">{id}</TableCell>
                <TableCell className="table-cell">{isbn}</TableCell>
                <TableCell className="table-cell">{title}</TableCell>
                <TableCell className="table-cell">{author}</TableCell>
                {/* SMELL/POSSIBLE REFACTOR: this cell into separate component */}
                <div onClick={() => openModal(state)}>
                  <TableCell
                    className={`table-cell ${
                      available ? "available" : "not-available"
                    }`}
                  >
                    <div className="status-container">
                      <div
                        className={`status-circle ${
                          available ? "available" : "not-available"
                        }`}
                      ></div>
                    </div>
                  </TableCell>
                </div>
              </TableRow>
            ))}
            {selectedState && (
              <div className="contenedorModal__componente">
                <ModalLoans onclose={closeModal} />
              </div>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

BookTable.propTypes = {
  books: PropTypes.array.isRequired,
};

export default BookTable;
