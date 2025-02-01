'use client'
import React, { useEffect, useState } from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Paper,
  Typography,
  Box,
  TablePagination,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";

const mockUsers = [
  { id: 1, name: "Jorge Ruiz", submitted: "02/02/2024, 2:45 PM", status: "Pending", country: "Mexico" },
  { id: 2, name: "Bahar Zamir", submitted: "02/02/2024, 2:45 PM", status: "Pending", country: "Mexico" },
  { id: 3, name: "Mary Lopez", submitted: "02/02/2024, 2:45 PM", status: "Pending", country: "Brazil" },
  { id: 4, name: "Li Zijin", submitted: "02/02/2024, 2:45 PM", status: "Pending", country: "South Korea" },
  { id: 5, name: "Mark Antonov", submitted: "02/02/2024, 2:45 PM", status: "Pending", country: "Russia" },
  { id: 6, name: "Jane Ma", submitted: "02/02/2024, 2:45 PM", status: "Pending", country: "Mexico" },
  { id: 7, name: "Anand Jain", submitted: "02/02/2024, 2:45 PM", status: "Reached Out", country: "Mexico" },
  { id: 8, name: "Anna Voronova", submitted: "02/02/2024, 2:45 PM", status: "Pending", country: "France" },
];

const LeadsList = () => {
  const [leads, setLeads] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filters, setFilters] = useState({ name: "", status: "", country: "" });
  
  const handleStatusChange = (id) => {
    setLeads((prevLeads) =>
      prevLeads.map((lead) =>
        lead.id === id ? { ...lead, status: "Reached Out" } : lead
      )
    );
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterChange = (field, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [field]: value }));
  };

  const filteredLeads = leads.filter(
    (lead) =>
      lead.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      (filters.status ? lead.status === filters.status : true) &&
      lead.country.toLowerCase().includes(filters.country.toLowerCase())
  );

  const paginatedLeads = filteredLeads.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  useEffect(() => {
    const usersFromLocalStorage = localStorage?.getItem('usersAlma') && JSON.parse(localStorage?.getItem('usersAlma'))
    const leadsData = [...mockUsers, ...usersFromLocalStorage]
    setLeads(leadsData)
  }, [])

  return (
    <Container>
      <Box sx={{ padding: "20px 0" }}>
        <Typography variant="h4" gutterBottom>
          Leads
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 2, marginBottom: 2 }}>
        <TextField
          label="Search by Name"
          variant="outlined"
          size="small"
          value={filters.name}
          onChange={(e) => handleFilterChange("name", e.target.value)}
        />
        <Select
          label="Filter by Status"
          value={filters.status}
          onChange={(e) => handleFilterChange("status", e.target.value)}
          displayEmpty
          size="small"
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="Reached Out">Reached Out</MenuItem>
        </Select>
        <TextField
          label="Search by Country"
          variant="outlined"
          size="small"
          value={filters.country}
          onChange={(e) => handleFilterChange("country", e.target.value)}
        />
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Submitted</strong></TableCell>
              <TableCell><strong>Status</strong></TableCell>
              <TableCell><strong>Country</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedLeads.map((lead) => (
              <TableRow key={lead.id}>
                <TableCell>{lead.name}</TableCell>
                <TableCell>{lead.submitted}</TableCell>
                <TableCell>{lead.status}</TableCell>
                <TableCell>{lead.country}</TableCell>
                <TableCell>
                  {lead.status === "Pending" && (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleStatusChange(lead.id)}
                    >
                      Mark as Reached Out
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={filteredLeads.length}
        page={page}
        onPageChange={handlePageChange}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </Container>
  );
};

export default LeadsList;