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

export const LoansTable = ({loans }) => {
  const tableHeaders = ["Título", "Socio"];

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
            {loans.map(({ title }, index) => (
              <TableRow key={index}>
                <TableCell className="table-cell">{title}</TableCell>
                <TableCell className="table-cell">{Socio}</TableCell>

                {/* SMELL/POSSIBLE REFACTOR: this cell into separate component */}
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

LoansTable.propTypes = {
  loans: PropTypes.array.isRequired,
};

export default BookTable;
