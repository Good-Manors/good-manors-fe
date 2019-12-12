import React from 'react';
import PropTypes from 'prop-types';

export default function HomeTitle({ home }) {
  let title;
  if(home) title = home.title;
  return (
    <div>
      <h2>{title || ''}</h2>
    </div>
  );
}

HomeTitle.propTypes = {
  home: PropTypes.object
};
