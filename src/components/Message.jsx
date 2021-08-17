import { Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import React from 'react';

function Message({ openAlert, setOpenAlert, message, type }) {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };

  return (
    <Snackbar
      open={openAlert}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      autoHideDuration={4000}
      onClose={handleClose}
    >
      <Alert
        elevation={6}
        variant="filled"
        onClose={handleClose}
        severity={type}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}

export default Message;
