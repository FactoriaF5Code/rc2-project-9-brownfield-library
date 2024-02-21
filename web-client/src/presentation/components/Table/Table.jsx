import { useState, useEffect } from "react";
import axios from "axios";
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

function FixedHeaderTable({
  activeButton,
  firstResult,
  resultMembers
}) {
  const [data, setData] = useState([]);
  const [tableHeaders, setTableHeaders] = useState([]);

  useEffect(() => {
    const fetchDataFromDatabase = async () => {
      try {
        let response;
        if (activeButton === "books") {
          response = await axios.get("http://localhost:9000/books");
          setTableHeaders(["ID", "ISBN", "Título", "Autor", "Estado"]);
        } else if (activeButton === "members") {
          response = await axios.get("http://localhost:9000/members");
          setTableHeaders(["ID", "Nombre", "Apellidos", "Email", "Teléfono"]);
        }

        if (response && response.data) {
          setData(response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataFromDatabase();
  }, [activeButton]);

  const filteredData = firstResult ? data.filter(item => item.title === firstResult.title && item.author === firstResult.author) : [];
  const filteredMemberData = resultMembers ? data.filter(item => item.name === resultMembers.name && item.LastName === resultMembers.LastName) : [];

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
            {activeButton === "books" ? (
              filteredData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="table-cell">{row.idBooks}</TableCell>
                  <TableCell className="table-cell">{row.isbn}</TableCell>
                  <TableCell className="table-cell">{row.title}</TableCell>
                  <TableCell className="table-cell">{row.author}</TableCell>
                  <TableCell className={`table-cell ${row.status === "Disponible" ? "available" : "not-available"}`}>
                    <div className="status-container">
                      <div className={`status-circle ${row.status === "Disponible" ? "available" : "not-available"}`}></div>
                      {row.status === "Disponible" || row.status === "Devolución" ? (
                        <button onClick={() => window.location.href = row.status === "Disponible" ? `http://localhost:5173/prestamo/${row.idBooks}` : `http://localhost:5173/devolucion-ok/${row.idBooks}`}>
                          {row.status}
                        </button>
                      ) : (
                        <span>{row.status}</span>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              filteredMemberData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="table-cell">{row.idMember}</TableCell>
                  <TableCell className="table-cell">{row.name}</TableCell>
                  <TableCell className="table-cell">{row.lastName}</TableCell>
                  <TableCell className="table-cell">{row.email}</TableCell>
                  <TableCell className="table-cell">{row.phone}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default FixedHeaderTable;
