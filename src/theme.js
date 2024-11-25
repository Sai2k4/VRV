import { createTheme } from '@mui/material/styles';

// Define your color palette and theme settings
const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5', // Primary color (blue)
    },
    secondary: {
      main: '#f50057', // Secondary color (pink)
    },
    background: {
      default: '#f4f6f9', // Background color (light grey)
    },
    text: {
      primary: '#333', // Text color (dark grey)
      secondary: '#757575', // Secondary text color (grey)
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Font family
    h1: {
      fontWeight: 700,
      fontSize: '2.25rem',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.75rem',
    },
    body1: {
      fontSize: '1rem',
      color: '#333',
    },
    body2: {
      fontSize: '0.875rem',
      color: '#333',
    },
    button: {
      fontWeight: 600,
    },
  },
  components: {
    // Customize MUI components globally
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Round button corners
          textTransform: 'none', // Prevent uppercase text in buttons
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: '16px', // Spacing between text fields
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 12, // Rounded corners for dialogs
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Rounded corners for DataGrid
          border: '1px solid #e0e0e0', // Border color
        },
      },
    },
  },
});

export default theme;
