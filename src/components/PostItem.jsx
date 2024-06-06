import { Card, CardContent, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const PostItem = ({ title, body }) => {
  return (
    <Card
      sx={{
        width: '368px',
        height: '180px',
        marginBottom: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        transition: 'box-shadow 0.3s ease-in-out',
        '&:hover': {
          boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
        },
      }}
    >
      <CardContent>
        <Typography variant="h6" component="div" fontWeight="bold" color="#333" textTransform="capitalize">
          {title.slice(0, 34)}
        </Typography>
        <Typography variant="body2" color="#555" mt={1}>
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
};

PostItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default PostItem;
