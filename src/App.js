import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Import the theme
import RoleManagement from './components/RoleManagement'; // Import your components

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ padding: '20px' }}>
        <h1>Role-Based Access Control (RBAC) Admin</h1>
        <RoleManagement />
      </div>
    </ThemeProvider>
  );
};

export default App;
