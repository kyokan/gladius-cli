import React from 'react';
import PropTypes from 'prop-types';
import bemify from '../util/bemify';

const bem = bemify('masthead-content-split');

export default function MastheadContentSplit(props) {
  return (
    <div className={bem()}>
      <div className={bem('masthead')}>
        {props.masthead}
      </div>
      <div className={bem('content')}>
        {props.children}
      </div>
    </div>
  );
}


MastheadContentSplit.defaultProps = {
  masthead: null,
};

MastheadContentSplit.propTypes = {
  masthead: PropTypes.node,
  children: PropTypes.node.isRequired,
};
