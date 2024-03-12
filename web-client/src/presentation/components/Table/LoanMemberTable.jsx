import "./Table.css";
import { useEffect, useState } from "react";
import { useBookDataContext } from "../../../middleware/context/BookData";

import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
} from "@mui/material";

export const LoanMemberTable = () => {
  const { searchLoans } = useBookDataContext();
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    searchLoans().then((results) => setLoans(results));
  }, []);

  return (
    <div>
      <TableContainer component={Paper} className="table-container">
        <Table aria-label="fixed header table">
          <TableHead>
            <TableRow>
              <TableCell className="table-cell-header">Título</TableCell>
              <TableCell className="table-cell-header">
                Fecha de vencimiento
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loans.map((loan) => {
              return (
                <TableRow key={loan.id}>
                  <TableCell className="table-cell">{loan.bookTitle}</TableCell>
                  <TableCell className="table-cell">{loan.endDate}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};