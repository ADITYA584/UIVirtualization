import { useState, useRef } from "react";
import * as React from "react";
import PrintIcon from "@mui/icons-material/Print";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Database from "../Database.js";
import Logo from "../SVGS/dragIcon.js";
import { TableVirtuoso } from "react-virtuoso";
import OptionMenu from "./Menu.js";
import { useReactToPrint } from "react-to-print";

const data = [
  {
    buttonHead: "Select Decimal Point",
    value1: 0,
    value2: 1,
    value3: 2,
  },
  {
    buttonHead: "Currency",
    value1: "USD",
    value2: "EUR",
    value3: "GBP",
  },
];

const TableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => <Table {...props} style={{ borderCollapse: "separate" }} />,
  TableHead: TableHead,
  TableRow: TableRow,
  TableBody: React.forwardRef((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

const Vtable = () => {
  const [valueCurr, setValueCurr] = useState("USD"); //State to store and maintain currency type
  const [valueDec, setValueDec] = useState(1); //State to storea and maintain the Decimal value
  const printRef = useRef(null); //refence to the outer div where table is rendered for print
  const [printFormat, setPrintFormat] = useState(false); //TOGGLE THE PRINT FORMAT

  const handlePrint = useReactToPrint({
    //FUNCTION iMPORTED for Printing from external library
    content: () => printRef.current,
    documentTitle: "Financial Summary Table",
    onAfterPrint: () => alert("Print Successful"),
  });

  return (
    <div>
      <div className=" w-full  flex  justify-end p-2 gap-10">
        <button
          className="p-2 bg-green-500 text-white font-bold rounded-md"
          onClick={() => setPrintFormat(!printFormat)}
        >
          Toggle Print Format
        </button>
        <OptionMenu data={data[0]} stateFunc={setValueDec} />
        <OptionMenu data={data[1]} stateFunc={setValueCurr} />
        <button>
          <PrintIcon onClick={handlePrint} className="text-black" />
        </button>
      </div>
      <div ref={printRef}>
        <TableVirtuoso
          style={{ maxWidth: 1700, height: 700 }}
          data={Database}
          components={TableComponents}
          fixedHeaderContent={() => (
            <TableRow ref={printRef}>
              {/* <TableCell style={{ background: "#D2DDF3" }}></TableCell> */}
              <TableCell
                size="small"
                style={{
                  textAlign: "center",
                  color: "#161386",
                  fontWeight: "bold",
                  fontSize: "12px",
                  background: "#D2DDF3",
                }}
              >
                Cash Flow
              </TableCell>
              <TableCell
                Size="small"
                style={{
                  textAlign: "center",
                  color: "#161386",
                  fontWeight: "bold",
                  fontSize: "12px",
                  background: "#D2DDF3",
                }}
              >
                January
              </TableCell>
              <TableCell
                size="small"
                style={{
                  textAlign: "center",
                  color: "#161386",
                  fontWeight: "bold",
                  fontSize: "12px",
                  background: "#D2DDF3",
                }}
              >
                February
              </TableCell>
              <TableCell
                size="small"
                style={{
                  textAlign: "center",
                  color: "#161386",
                  fontWeight: "bold",
                  fontSize: "12px",
                  background: "#D2DDF3",
                }}
              >
                March
              </TableCell>
              <TableCell
                size="small"
                style={{
                  textAlign: "center",
                  color: "#161386",
                  fontWeight: "bold",
                  fontSize: "12px",
                  background: "#D2DDF3",
                }}
              >
                April
              </TableCell>
              <TableCell
                size="small"
                style={{
                  textAlign: "center",
                  color: "#161386",
                  fontWeight: "bold",
                  fontSize: "12px",
                  background: "#D2DDF3",
                }}
              >
                May
              </TableCell>
              <TableCell
                size="small"
                style={{
                  textAlign: "center",
                  color: "#161386",
                  fontWeight: "bold",
                  fontSize: "12px",
                  background: "#D2DDF3",
                }}
              >
                June
              </TableCell>
              <TableCell
                size="small"
                style={{
                  textAlign: "center",
                  color: "#161386",
                  fontWeight: "bold",
                  fontSize: "12px",
                  background: "#D2DDF3",
                }}
              >
                July
              </TableCell>
              <TableCell
                size="small"
                style={{
                  textAlign: "center",
                  color: "#161386",
                  fontWeight: "bold",
                  fontSize: "12px",
                  background: "#D2DDF3",
                }}
              >
                August
              </TableCell>
              <TableCell
                size="small"
                style={{
                  textAlign: "center",
                  color: "#161386",
                  color: "#161386",
                  fontWeight: "bold",
                  fontSize: "12px",
                  background: "#D2DDF3",
                }}
              >
                September
              </TableCell>{" "}
              <TableCell
                size="small"
                style={{
                  textAlign: "center",
                  color: "#161386",
                  fontWeight: "bold",
                  fontSize: "12px",
                  background: "#D2DDF3",
                }}
              >
                October
              </TableCell>{" "}
              <TableCell
                size="small"
                style={{
                  textAlign: "center",
                  color: "#161386",
                  fontWeight: "bold",
                  fontSize: "12px",
                  background: "#D2DDF3",
                }}
              >
                November
              </TableCell>
              <TableCell
                size="small"
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#161386",
                  fontSize: "12px",
                  background: "#D2DDF3",
                }}
              >
                December
              </TableCell>
            </TableRow>
          )}
          itemContent={(index, data) => (
            <>
              {/* <TableCell style={{ background: "white" }}>
                <Logo />
              </TableCell> */}
              <TableCell
                size="small"
                style={{
                  fontSize: "12px",
                  background: "white",
                }}
              >
                {data.Overhead}
              </TableCell>
              <TableCell
                size="small"
                style={{
                  fontSize: "11px",
                  background: "white",
                  textWrap: "nowrap",
                }}
              >
                {`${
                  (printFormat ? data.Jan / 1000000 : data.Jan).toFixed(
                    valueDec
                  ) + `${printFormat ? "M" : ""}`
                } ${valueCurr}`}
              </TableCell>
              <TableCell
                size="small"
                style={{
                  fontSize: "11px",
                  background: "white",
                  textWrap: "nowrap",
                }}
              >
                {`${
                  (printFormat ? data.Feb / 1000000 : data.Feb).toFixed(
                    valueDec
                  ) + `${printFormat ? "M" : ""}`
                } ${valueCurr}`}
              </TableCell>
              <TableCell
                size="small"
                style={{
                  fontSize: "11px",
                  background: "white",
                  textWrap: "nowrap",
                }}
              >
                {`${
                  (printFormat ? data.March / 1000000 : data.March).toFixed(
                    valueDec
                  ) + `${printFormat ? "M" : ""}`
                } ${valueCurr}`}
              </TableCell>
              <TableCell
                style={{
                  fontSize: "11px",
                  background: "white",
                  textWrap: "nowrap",
                }}
              >
                {`${
                  (printFormat ? data.April / 1000000 : data.April).toFixed(
                    valueDec
                  ) + `${printFormat ? "M" : ""}`
                } ${valueCurr}`}
              </TableCell>
              <TableCell
                style={{
                  fontSize: "11px",
                  background: "white",
                  textWrap: "nowrap",
                }}
              >
                {`${
                  (printFormat ? data.May / 1000000 : data.May).toFixed(
                    valueDec
                  ) + `${printFormat ? "M" : ""}`
                } ${valueCurr}`}
              </TableCell>
              <TableCell
                style={{
                  fontSize: "11px",
                  background: "white",
                  textWrap: "nowrap",
                }}
              >
                {`${
                  (printFormat ? data.June / 1000000 : data.June).toFixed(
                    valueDec
                  ) + `${printFormat ? "M" : ""}`
                } ${valueCurr}`}
              </TableCell>
              <TableCell
                style={{
                  fontSize: "11px",
                  background: "white",
                  textWrap: "nowrap",
                }}
              >
                {`${
                  (printFormat ? data.July / 1000000 : data.July).toFixed(
                    valueDec
                  ) + `${printFormat ? "M" : ""}`
                } ${valueCurr}`}
              </TableCell>
              <TableCell
                style={{
                  fontSize: "11px",
                  background: "white",
                  textWrap: "nowrap",
                }}
              >
                {`${
                  (printFormat ? data.August / 1000000 : data.August).toFixed(
                    valueDec
                  ) + `${printFormat ? "M" : ""}`
                } ${valueCurr}`}
              </TableCell>
              <TableCell
                style={{
                  fontSize: "11px",
                  background: "white",
                  textWrap: "nowrap",
                }}
              >
                {`${
                  (printFormat
                    ? data.September / 1000000
                    : data.September
                  ).toFixed(valueDec) + `${printFormat ? "M" : ""}`
                } ${valueCurr}`}
              </TableCell>
              <TableCell
                style={{
                  fontSize: "11px",
                  background: "white",
                  textWrap: "nowrap",
                }}
              >
                {`${
                  (printFormat ? data.October / 1000000 : data.October).toFixed(
                    valueDec
                  ) + `${printFormat ? "M" : ""}`
                } ${valueCurr}`}
              </TableCell>
              <TableCell
                style={{
                  fontSize: "11px",
                  background: "white",
                  textWrap: "nowrap",
                }}
              >
                {`${
                  (printFormat
                    ? data.November / 1000000
                    : data.November
                  ).toFixed(valueDec) + `${printFormat ? "M" : ""}`
                } ${valueCurr}`}
              </TableCell>
              <TableCell
                size="small"
                style={{
                  fontSize: "11px",
                  background: "white",
                  textWrap: "nowrap",
                }}
              >
                {`${
                  (printFormat
                    ? data.December / 1000000
                    : data.December
                  ).toFixed(valueDec) + `${printFormat ? "M" : ""}`
                } ${valueCurr}`}
              </TableCell>
            </>
          )}
        />
      </div>
    </div>
  );
};

export default Vtable;
