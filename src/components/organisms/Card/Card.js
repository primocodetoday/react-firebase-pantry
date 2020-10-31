import React from 'react';
import PropTypes from 'prop-types';
import { CardList } from 'components/molecules';

import { Wrapper, CardIcon, Text, Line } from './styled/StyledCard';

const Card = ({ category, icon, content }) => {
  return (
    <Wrapper>
      <CardIcon icon={icon} />
      <Text card>{category}</Text>
      <Line />
      <CardList content={content} />
    </Wrapper>
  );
};

Card.propTypes = {
  category: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Card;
