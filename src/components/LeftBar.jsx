import { Container, Typography } from '@material-ui/core';
import {
  Bookmark,
  ExitToApp,
  Home,
  List,
  Person,
  PhotoCamera,
  PlayCircleOutline,
  Settings,
  Storefront,
  TabletMac,
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    height: '100vh',
    color: 'white',
    position: 'sticky',
    top: 0,
    [theme.breakpoints.up('sm')]: {
      backgroundColor: 'white',
      color: '#555',
      border: '1px solid #eeee',
    },
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3),
    },
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  icon: {
    [theme.breakpoints.up('sm')]: {
      fontSize: '20px',
    },
  },
  text: {
    fontWeight: 500,
    marginLeft: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

const data = [
  { title: 'Homepage', Icon: Home },
  { title: 'Friends', Icon: Person },
  { title: 'Lists', Icon: List },
  { title: 'Camera', Icon: PhotoCamera },
  { title: 'Videos', Icon: PlayCircleOutline },
  { title: 'Apps', Icon: TabletMac },
  { title: 'Collections', Icon: Bookmark },
  { title: 'Market Place', Icon: Storefront },
  { title: 'Settings ', Icon: Settings },
  { title: 'Logout ', Icon: ExitToApp },
];

function LeftBar() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      {data.map(({ title, Icon }) => (
        <div key={title} className={classes.item}>
          <Icon className={classes.icon} />
          <Typography className={classes.text}>{title}</Typography>
        </div>
      ))}
    </Container>
  );
}

export default LeftBar;
