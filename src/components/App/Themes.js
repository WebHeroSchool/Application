import { createMuiTheme,  makeStyles } from '@material-ui/core/styles';


export const themeDark = createMuiTheme({
    palette: {
      primary: {
        main: '#757575'
      },
      secondary: {
        main: 'rgba(241, 244, 245, 0.973)'
      },
      error: {
        main: 'rgba(255, 52, 60, 1)'
      }, 
      warning: {
        main: '#ff9100'
      },
      success: {
        main: '#4caf50'
      }, 
      type: 'dark'
    },
  
    typography: {
      fontFamily: 'monospace'
    },
  
    shape: {
      borderRadius: 10
    },
  
    transition: {
      easing: {
        easeOut: "cubic-bezier(0.0, 0, 0.2, 1)"
      },
      duration: {
        standard: 500
      }
    },
  
    props: {
      MuiPaper: {
        elevation: 12
      },
  
      MuiCard: {
        elevation: 7
      },
  
      MuiButton: {
        disableRipple: true
      },
  
      MuiCheckbox: {
        disableRipple: true
      }
  
    }  
  });

  export const themeLight = createMuiTheme({
    palette: {
      primary: {
        main: '#757575'
      },
      secondary: {
        main: '#283593'
      },
      error: {
        main: 'rgba(255, 52, 60, 1)'
      },
      warning: {
        main: '#ff9100'
      },
      success: {
        main: '#4caf50'
      }, 
      type: 'light'
    },
    
    typography: {
      fontFamily: 'monospace'
    },
  
    shape: {
      borderRadius: 10
    },
  
    spacing: 2,
  
    transition: {
      easing: {
        easeOut: "cubic-bezier(0.0, 0, 0.2, 1)"
      },
      duration: {
        standard: 500
      }
    },
  
    props: {
      MuiPaper: {
        elevation: 12
      },
  
      MuiCard: {
        elevation: 7
      },
  
      MuiButton: {
        disableRipple: true
      },
  
      MuiCheckbox: {
        disableRipple: true
      }
    }  
  });

  export const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      maxWidth: 120,
      minWidth: 52,
    },

    selectEmpty: {
      marginTop: theme.spacing(2),
    },

  }));
  
