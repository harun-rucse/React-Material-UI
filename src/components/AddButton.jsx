import { Fab, Tooltip } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import React, { useState } from 'react';
import Popup from './Popup';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    right: 15,
    bottom: 20,
  },
}));

function AddButton() {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  return (
    <>
      <Tooltip title="Add new post" onClick={() => setOpen(true)}>
        <Fab color="primary" className={classes.fab}>
          <Add />
        </Fab>
      </Tooltip>
      <Popup open={open} setOpen={setOpen} />
    </>
  );
}

export default AddButton;
