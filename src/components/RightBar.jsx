import {
  Avatar,
  Chip,
  Container,
  Divider,
  ImageList,
  ImageListItem,
  Typography,
} from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: 'sticky',
    top: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
  },
  item: {
    marginRight: theme.spacing(1),
    cursor: 'pointer',
    border: '1px solid rgba(220, 0, 78, 0.7)',
    color: '#555',
  },
}));

const firends = [
  {
    name: 'Remy Sharp',
    avatar: 'https://material-ui.com/static/images/avatar/1.jpg',
  },
  {
    name: 'Travis Howard',
    avatar: 'https://material-ui.com/static/images/avatar/2.jpg',
  },
  {
    name: 'Cindy Baker',
    avatar: 'https://material-ui.com/static/images/avatar/3.jpg',
  },
  {
    name: 'Agnes Walker',
    avatar: 'https://material-ui.com/static/images/avatar/4.jpg',
  },
  {
    name: 'Trevor Henderson',
    avatar: 'https://material-ui.com/static/images/avatar/5.jpg',
  },
  {
    name: 'Remy Sharp',
    avatar: 'https://material-ui.com/static/images/avatar/6.jpg',
  },
  {
    name: 'Remy Sharp',
    avatar: 'https://material-ui.com/static/images/avatar/7.jpg',
  },
  {
    name: 'Remy Sharp',
    avatar: 'https://material-ui.com/static/images/avatar/8.jpg',
  },
];

const gallerys = [
  { image: 'https://material-ui.com/static/images/image-list/breakfast.jpg' },
  { image: 'https://material-ui.com/static/images/image-list/burgers.jpg' },
  { image: 'https://material-ui.com/static/images/image-list/camera.jpg' },
  { image: 'https://material-ui.com/static/images/image-list/morning.jpg' },
  { image: 'https://material-ui.com/static/images/image-list/honey.jpg' },
  { image: 'https://material-ui.com/static/images/image-list/breakfast.jpg' },
];

const categories = [
  { name: 'Foods' },
  { name: 'Sports' },
  { name: 'Movies' },
  { name: 'Science' },
  { name: 'Technology' },
  { name: 'Software' },
];

function RightBar() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>
        Online Friends
      </Typography>
      <AvatarGroup max={6} style={{ marginBottom: 20 }}>
        {firends.map(({ name, avatar }, index) => (
          <Avatar key={index} alt={name} src={avatar} />
        ))}
      </AvatarGroup>
      <Typography className={classes.title} gutterBottom>
        Gallery
      </Typography>
      <ImageList
        rowHeight={100}
        className={classes.imageList}
        cols={2}
        style={{ marginBottom: 20 }}
      >
        {gallerys.map(({ image }, index) => (
          <ImageListItem key={index}>
            <img src={image} alt="" />
          </ImageListItem>
        ))}
      </ImageList>
      <Typography className={classes.title} gutterBottom>
        Categories
      </Typography>
      {categories.map(({ name }, index) => (
        <span key={index}>
          <Chip label={name} variant="outlined" className={classes.item} />
          {(index + 1) % 3 === 0 && (
            <Divider flexItem style={{ margin: '5px 0' }} />
          )}
        </span>
      ))}
    </Container>
  );
}

export default RightBar;
