import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Database from "../Database.js";
import Logo from "../SVGS/dragIcon.js";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const rowHeight = 65; // Set the height of each row
const windowHeight = 650; // Set the height of the window

export default function CustomizedTables() {
  const [scrollTop, setScrollTop] = React.useState(0);

  const totalRows = Database.length;
  const visibleRowCount = Math.ceil(windowHeight / rowHeight);
  const startindex = Math.floor(scrollTop / rowHeight);
  const endIndex = Math.min(startindex + visibleRowCount, totalRows);

  const generateRows = () => {
    let items = [];
    for (let i = startindex; i < endIndex; i++) {
      if (Database[i]) {
        items.push(
          <StyledTableRow
            className="absolute "
            key={i}
            style={{ height: `${rowHeight}px`, top: `${i * rowHeight}px` }}
          >
            <StyledTableCell>
              <Logo className="text-[4px]" />
            </StyledTableCell>
            <StyledTableCell
              style={{ minWidth: "165px" }}
              component="th"
              scope="row"
            >
              {Database[i].Overhead}
            </StyledTableCell>
            <StyledTableCell sx={{ background: "blue" }} align="right">
              {Database[i].Jan.toFixed(2)}
            </StyledTableCell>
            <StyledTableCell className="border-2 border-black" align="right">
              {Database[i].Feb.toFixed(2)}
            </StyledTableCell>
            <StyledTableCell align="right">
              {Database[i].March.toFixed(2)}
            </StyledTableCell>
            <StyledTableCell align="right">
              {Database[i].April.toFixed(2)}
            </StyledTableCell>
            <StyledTableCell align="right">
              {Database[i].May.toFixed(2)}
            </StyledTableCell>
            <StyledTableCell align="right">
              {Database[i].June.toFixed(2)}
            </StyledTableCell>
            <StyledTableCell align="right">
              {Database[i].July.toFixed(2)}
            </StyledTableCell>
            <StyledTableCell align="right">
              {Database[i].August.toFixed(2)}
            </StyledTableCell>
            <StyledTableCell align="right">
              {Database[i].September.toFixed(2)}
            </StyledTableCell>
            <StyledTableCell align="right">
              {Database[i].October.toFixed(2)}
            </StyledTableCell>
            <StyledTableCell align="right">
              {Database[i].November.toFixed(2)}
            </StyledTableCell>
            <StyledTableCell align="right">
              {Database[i].December.toFixed(2)}
            </StyledTableCell>
          </StyledTableRow>
        );
      }
    }
    return items;
  };

  const handleScroll = (e) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  return (
    <DragDropContext>
      <TableContainer
        className="h-[650px] relative "
        component={Paper}
        // style={{ overflowY: "auto" }}
        onScroll={handleScroll}
      >
        <Table
          stickyHeader
          sx={{ minWidth: 700 }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell>Cash Flow</StyledTableCell>
              <StyledTableCell align="right">January</StyledTableCell>
              <StyledTableCell align="right">February</StyledTableCell>
              <StyledTableCell align="right">March</StyledTableCell>
              <StyledTableCell align="right">April</StyledTableCell>
              <StyledTableCell align="right">May</StyledTableCell>
              <StyledTableCell align="right">June</StyledTableCell>
              <StyledTableCell align="right">July</StyledTableCell>
              <StyledTableCell align="right">August</StyledTableCell>
              <StyledTableCell align="right">September</StyledTableCell>
              <StyledTableCell align="right">October</StyledTableCell>
              <StyledTableCell align="right">November</StyledTableCell>
              <StyledTableCell align="right">December</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody className="absolute  ">{generateRows()}</TableBody>;
        </Table>
      </TableContainer>
    </DragDropContext>
  );
}
