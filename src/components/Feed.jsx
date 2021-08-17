import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import Post from './Post';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const posts = [
  {
    title: 'Apple MacBook Pro with Apple M1 Chip',
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=626&q=80',
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
    saepe, officia asperiores reprehenderit harum ipsum voluptatem quis
    et alias enim ducimus obcaecati labore quidem, omnis numquam?
    Aspernatur minus dolor accusamus, adipisci nam consequuntur rerum
    fuga a ex fugiat eos veniam facilis laudantium consequatur hic
    totam, non praesentium autem? Quis, expedita!`,
  },
  {
    title: 'Apple MacBook Pro with Apple M1 Chip',
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=626&q=80',
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
    saepe, officia asperiores reprehenderit harum ipsum voluptatem quis
    et alias enim ducimus obcaecati labore quidem, omnis numquam?
    Aspernatur minus dolor accusamus, adipisci nam consequuntur rerum
    fuga a ex fugiat eos veniam facilis laudantium consequatur hic
    totam, non praesentium autem? Quis, expedita!`,
  },
  {
    title: 'Apple MacBook Pro with Apple M1 Chip',
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=626&q=80',
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
    saepe, officia asperiores reprehenderit harum ipsum voluptatem quis
    et alias enim ducimus obcaecati labore quidem, omnis numquam?
    Aspernatur minus dolor accusamus, adipisci nam consequuntur rerum
    fuga a ex fugiat eos veniam facilis laudantium consequatur hic
    totam, non praesentium autem? Quis, expedita!`,
  },
  {
    title: 'Apple MacBook Pro with Apple M1 Chip',
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=626&q=80',
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
    saepe, officia asperiores reprehenderit harum ipsum voluptatem quis
    et alias enim ducimus obcaecati labore quidem, omnis numquam?
    Aspernatur minus dolor accusamus, adipisci nam consequuntur rerum
    fuga a ex fugiat eos veniam facilis laudantium consequatur hic
    totam, non praesentium autem? Quis, expedita!`,
  },
  {
    title: 'Apple MacBook Pro with Apple M1 Chip',
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=626&q=80',
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
    saepe, officia asperiores reprehenderit harum ipsum voluptatem quis
    et alias enim ducimus obcaecati labore quidem, omnis numquam?
    Aspernatur minus dolor accusamus, adipisci nam consequuntur rerum
    fuga a ex fugiat eos veniam facilis laudantium consequatur hic
    totam, non praesentium autem? Quis, expedita!`,
  },
  {
    title: 'Apple MacBook Pro with Apple M1 Chip',
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=626&q=80',
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
    saepe, officia asperiores reprehenderit harum ipsum voluptatem quis
    et alias enim ducimus obcaecati labore quidem, omnis numquam?
    Aspernatur minus dolor accusamus, adipisci nam consequuntur rerum
    fuga a ex fugiat eos veniam facilis laudantium consequatur hic
    totam, non praesentium autem? Quis, expedita!`,
  },
];

function Feed() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      {posts.map(({ image, title, body }, index) => (
        <Post key={index} image={image} title={title} body={body} />
      ))}
    </Container>
  );
}

export default Feed;
