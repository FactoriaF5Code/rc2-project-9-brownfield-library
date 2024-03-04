import "./Table.css";
import { useEffect } from "react";

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

    useEffect(
        () => {
            console.log("Aqui hacemos el GET")
        },
    []);

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
            {loans.map((loan) => {
              return (
                <TableRow key={loan.id}>
                <TableCell className="table-cell">{loan.book_id}</TableCell>
                <TableCell className="table-cell">{loan.end_date}</TableCell>
              </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}