import {
  Box,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  styled,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import React from "react";
import Image from "next/image";

const Check = () => {
  return (
    <Image
      src="/assets/graphics/check.svg"
      height="12"
      width="16"
      alt="arrow"
      style={{ marginLeft: "1.125rem" }}
    />
  );
};

const Empty = () => {
  return <Box sx={{ height: "0.75rem", width: "1rem" }} />;
};

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 10,
    width: "80px",
    margin: 0,
    padding: "0.5rem",
  },
}));

const Compare = () => {
  function createData(
    name: string,
    basic: React.JSX.Element,
    pro: React.JSX.Element,
    business: React.JSX.Element
  ) {
    return { name, basic, pro, business };
  }
  const rows = [
    createData("UNLIMITED STORY POSTING", <Check />, <Check />, <Check />),
    createData("UNLIMITED PHOTO UPLOAD", <Check />, <Check />, <Check />),
    createData("EMBEDDING CUSTOM CONTENT", <Empty />, <Check />, <Check />),
    createData("UNLIMITED STORY POSTING", <Empty />, <Check />, <Check />),
    createData("CUSTOMIZE METADATA", <Empty />, <Empty />, <Check />),
    createData("ADVANCED METRICS", <Empty />, <Empty />, <Check />),
    createData("PHOTO DOWNLOADS", <Empty />, <Empty />, <Check />),
    createData("SEARCH ENGINE INDEXING", <Empty />, <Empty />, <Check />),
    createData("CUSTOM ANALYTICS", <Empty />, <Empty />, <Check />),
  ];

  return (
    <Box
      sx={{
        flexDirection: "column",
        justifyContent: "center",
        "@media (min-width: 600px)": { display: "flex", margin: "10rem" },
      }}
    >
      <Typography
        sx={{
          fontSize: "2.5rem",
          color: "black",
          textTransform: "uppercase",
          fontWeight: 700,
          display: "flex",
          justifyContent: "center",
          marginBottom: "3.5rem",
        }}
      >
        Compare
      </Typography>
      <TableContainer
        sx={{
          display: "none",
          "@media (min-width: 600px)": { display: "block" },
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ borderBottom: "1.5px solid black" }}>
              <TableCell>The Features</TableCell>
              <TableCell align="center">basic</TableCell>
              <TableCell align="center">pro</TableCell>
              <TableCell align="center">business</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.basic}</TableCell>
                <TableCell align="center">{row.pro}</TableCell>
                <TableCell align="center">{row.business}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Mobile Table */}
      <TableContainer
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          padding: "2rem",
          "@media (min-width: 600px)": { display: "none" },
        }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow sx={{ borderBottom: "1.5px solid black" }}>
              <TableCell sx={{ margin: 0, padding: "0.5rem" }}>
                The Features
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <>
                {/* row 1 */}
                <TableRow
                  sx={{
                    borderBottom: "1px solid white",
                    display: "flex",
                    justifyContent: "flex-start",
                    marginBottom: 0,
                  }}
                >
                  <StyledTableCell
                    sx={{ borderBottom: "1px solid white", marginBottom: 0 }}
                  >
                    {row.name}
                  </StyledTableCell>
                </TableRow>

                {/* row 2 */}
                <TableRow>
                  <StyledTableCell
                    align="left"
                    sx={{
                      borderBottom: "1px solid white",
                      color: "rgba(0,0,0,0.5)",
                    }}
                  >
                    basic
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    sx={{
                      borderBottom: "1px solid white",
                      color: "rgba(0,0,0,0.5)",
                    }}
                  >
                    pro
                  </StyledTableCell>
                  <StyledTableCell
                    align="right"
                    sx={{
                      borderBottom: "1px solid white",
                      color: "rgba(0,0,0,0.5)",
                    }}
                  >
                    business
                  </StyledTableCell>
                </TableRow>

                {/* row 3 */}
                <TableRow>
                  <StyledTableCell align="left">{row.basic}</StyledTableCell>
                  <StyledTableCell align="center">{row.pro}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.business}
                  </StyledTableCell>
                </TableRow>
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Compare;
