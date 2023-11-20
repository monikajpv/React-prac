import React from "react";
import { Table, TableCell, TableContainer,TableBody, TableHead, TablePagination } from "@mui/material";
function Tablecomp(){
    return(
        <div>
            <h2> Table Component</h2>

            <Table>
                <TableHead>
                  <TableCell>NAME</TableCell>
                  <TableCell>CLASS</TableCell>

                    <TableCell>DEPT</TableCell>
                </TableHead>
                <TableBody>
                <TableCell>MONIKA</TableCell>
                  <TableCell>BE</TableCell>
                    <TableCell>COMP</TableCell>
                </TableBody>
                <TablePagination 
                rowsPerPageOptions={[5,10,15,20]}
                rowsPerPage={5}
                page={1}
                count={10}>
                </TablePagination>
            </Table>
        </div>



    );
}
export default  Tablecomp;