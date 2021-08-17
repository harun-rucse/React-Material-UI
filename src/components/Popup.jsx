import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useState } from 'react';
import Message from './Message';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: 'white',
    width: 500,
    position: 'absolute',
    top: '50%',
    left: ' 50%',
    transform: 'translate(-50%, -50%)',
    [theme.breakpoints.down('sm')]: {
      width: '95vw',
      height: '95vh',
    },
  },
  form: {
    padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
  },
  item: {
    marginBottom: theme.spacing(3),
  },
}));

function Popup({ open, setOpen }) {
  const [openAlert, setOpenAlert] = useState(false);
  const classes = useStyles();

  const handleCreate = () => {
    setOpenAlert(true);
    setOpen(false);
  };

  return (
    <>
      <Modal open={open}>
        <Container className={classes.container}>
          <form
            onSubmit={handleCreate}
            autoComplete={false}
            className={classes.form}
          >
            <div className={classes.item}>
              <TextField
                label="Title"
                variant="outlined"
                fullWidth
                size="small"
                required
              />
            </div>

            <div className={classes.item}>
              <TextField
                label="Description"
                multiline
                rows={4}
                variant="outlined"
                placeholder="Tell your story..."
                fullWidth
                required
              />
            </div>
            <div className={classes.item}>
              <TextField
                select
                label="Visible"
                variant="outlined"
                fullWidth
                required
              >
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Unlisted">Unlisted</MenuItem>
              </TextField>
            </div>
            <div className={classes.item}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Who can comment?</FormLabel>
                <RadioGroup>
                  <FormControlLabel
                    value="Everybody"
                    control={<Radio size="small" checked />}
                    label="Everybody"
                  />
                  <FormControlLabel
                    value="Firends"
                    control={<Radio size="small" />}
                    label="Firends"
                  />
                  <FormControlLabel
                    value="Nobody"
                    control={<Radio size="small" />}
                    label="Nobody"
                  />
                  <FormControlLabel
                    value="disabled"
                    disabled
                    control={<Radio size="small" />}
                    label="Custom(Premium)"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <Button variant="outlined" color="primary" type="submit">
              Create
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => setOpen(false)}
              style={{ marginLeft: 20 }}
            >
              Cancel
            </Button>
          </form>
        </Container>
      </Modal>
      <Message
        openAlert={openAlert}
        setOpenAlert={setOpenAlert}
        type="success"
        message="Post create successful"
      />
    </>
  );
}

export default Popup;
