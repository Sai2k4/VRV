import React from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab } from '@mui/material';

const Navbar = ({ value, onChange }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        RBAC Management
      </Typography>
      <Tabs value={value} onChange={onChange} textColor="inherit" indicatorColor="secondary">
        <Tab label="Users" />
        <Tab label="Roles" />
        <Tab label="Permissions" />
      </Tabs>
    </Toolbar>
  </AppBar>
);

export default Navbar;
