import { Pagination } from '@mui/material';
import PropTypes from 'prop-types';

const PaginationComponent = ({ count, page, onChange }) => {
  return (
    <Pagination
      count={count}
      page={page}
      onChange={onChange}
      color="primary"
      style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
    />
  );
};

PaginationComponent.propTypes = {
  count: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PaginationComponent;
