import "./Table.css";

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

  return (
    <div>
      <TableContainer component={Paper} className="table-container">
        <Table aria-label="fixed header table">
          <TableHead>
            <TableRow>
                <TableCell  className="table-cell-header">Título</TableCell>
                <TableCell  className="table-cell-header">Fecha de vencimiento</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
                <TableRow>
                  <TableCell className="table-cell">Título del libro reservado</TableCell>
                  <TableCell className="table-cell">29/02/2024</TableCell>
                </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}