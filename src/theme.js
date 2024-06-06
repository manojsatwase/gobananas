// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#d32f2f',
    },
  },
  typography: {
    h3: {
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: '2rem 1rem',
          '@media (min-width:600px)': {
            padding: '3rem 2rem',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          margin: '0 auto',
          width: '100%',
          '@media (min-width:600px)': {
            width: '50%',
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          background: '#f9f9f9',
          marginBottom: '10px',
          borderRadius: '8px',
          padding: '1rem',
          boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'center',
        },
      },
    },
  },
});

export default theme;
