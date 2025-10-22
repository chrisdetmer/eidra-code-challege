'use client';
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: 'Lato',
    h2: {
      fontSize: '40px',
      fontWeight: '500'
    },
    h4: {
      fontSize: '24px'
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          backgroundColor: 'transparent',
          border: '1px solid rgb(0,0,0,0.1)',
          borderRadius: '10px',
          color: '#171717',
          fontSize: '12px',
          margin: '0 8px 8px 0',
          minWidth: '16px',
          textTransform: 'capitalize',
          padding: '4px 8px'
        }
      }
    },
    MuiCard: {
      defaultProps: {
        style: {
          border: '1px solid rgb(0,0,0,0.1)',
          borderRadius: '10px'
        }
      }
    },
    MuiChip: {
      defaultProps: {
        style: {
          background: 'transparent',
          border: '1px solid rgb(0,0,0,0.1)'
        }
      },
    },
  },
});

export default theme;
