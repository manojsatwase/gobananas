import React, { useState, useCallback, useMemo } from 'react';
import { Container, Typography, Box } from '@mui/material';
import usePosts from './hooks/usePosts';
import PostList from './components/PostList';
import SearchBar from './components/SearchBar';
import PaginationComponent from './components/PaginationComponent';
import { debounce } from 'lodash';

const POSTS_PER_PAGE = 10;

const App = () => {
  const { posts, loading, error } = usePosts();
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = useCallback(
    debounce((value) => {
      setSearchTerm(value);
      setCurrentPage(1); // Reset to first page on search
    }, 300),
    []
  );

  // Filtered posts based on search term
  const filteredPosts = useMemo(
    () => posts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase())),
    [posts, searchTerm]
  );

  // Calculate total pages
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  // Paginate posts
  const paginatedPosts = useMemo(
    () => {
      const start = (currentPage - 1) * POSTS_PER_PAGE;
      const end = start + POSTS_PER_PAGE;
      return filteredPosts.slice(start, end);
    },
    [filteredPosts, currentPage]
  );

  // Handle page change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Container>
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" gutterBottom>
          GoBananas Posts
        </Typography>
        <SearchBar onSearch={handleSearch} />
      </Box>
      <PostList posts={paginatedPosts} loading={loading} error={error} />
      <PaginationComponent count={totalPages} page={currentPage} onChange={handlePageChange} />
    </Container>
  );
};

export default App;
