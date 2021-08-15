import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { Cancel, Mail, Notifications, Search } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  toolBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoLg: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  logoSm: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    width: '50%',
    padding: `0px ${theme.spacing(1)}px`,
    [theme.breakpoints.down('sm')]: {
      display: (props) => (props.open ? 'flex' : 'none'),
      width: '70%',
    },
  },
  input: {
    color: 'white',
    marginLeft: theme.spacing(1),
    width: '100%',
  },
  icons: {
    display: (props) => (props.open ? 'none' : 'flex'),
    alignItems: 'center',
  },
  serchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  cancelButton: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  badge: {
    marginRight: theme.spacing(2),
  },
}));

function NavBar() {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolBar}>
        <Typography variant="h6" className={classes.logoLg}>
          Dev Community
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          DEV
        </Typography>
        <div className={classes.search}>
          <Search />
          <InputBase placeholder="Search..." className={classes.input} />
          <Cancel
            className={classes.cancelButton}
            onClick={() => setOpen(false)}
          />
        </div>
        <div className={classes.icons}>
          <Search
            className={classes.serchButton}
            onClick={() => setOpen(true)}
          />
          <Badge badgeContent={4} color="secondary" className={classes.badge}>
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="secondary" className={classes.badge}>
            <Notifications />
          </Badge>
          <Avatar
            alt="Avatar"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
