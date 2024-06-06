import React from 'react';
import { List, CircularProgress, Typography, Box } from '@mui/material';
import PropTypes from 'prop-types';
import PostItem from './PostItem';

const PostList = ({ posts, loading, error }) => {
  if (loading) {
    return (
      <Box display="flex" justifyContent="center" my={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography color="error" align="center" my={4}>
        Error fetching posts: {error.message}
      </Typography>
    );
  }

  return (
    <List sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' ,flexWrap:"wrap",gap:"1rem"}}>
      {posts.map(post => (
        <PostItem key={post.id} title={post.title} body={post.body} />
      ))}
    </List>
  );
};

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
};

export default PostList;
