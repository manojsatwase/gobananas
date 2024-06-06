import { TextField, Box } from '@mui/material';
import PropTypes from 'prop-types';

const SearchBar = ({ onSearch }) => {
  const handleSearchChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <Box mt={2} mb={4} width="100%">
      <TextField
        label="Search posts"
        variant="outlined"
        fullWidth
        onChange={handleSearchChange}
      />
    </Box>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
