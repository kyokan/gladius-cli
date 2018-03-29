import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import bemify from '../util/bemify';

const bem = bemify('gladius-card');

export function CardTitle({ title, noBorder }) {
  const element = 'title';
  const className = classnames(bem(element), 'pl-4 pr-4 pt-2 pb-2', {
    [bem(element, 'borderless')]: noBorder,
  });
  return (
    <div className={className}>{title}</div>
  );
}

CardTitle.defaultProps = {
  noBorder: false,
};

CardTitle.propTypes = {
  noBorder: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

export default function Card(props) {
  const names = classnames(bem('content'), {
    'p-4': !props.noPadding,
    [bem(null, 'borderless')]: props.noBorder,
  });

  return (
    <div className={classnames(props.className, bem())}>
      {props.title && <CardTitle title={props.title} noBorder={props.noBorder} />}
      <div className={names}>
        {props.children}
      </div>
    </div>
  );
}

Card.defaultProps = {
  noPadding: false,
  noBorder: false,
  className: null,
  title: null,
};

Card.propTypes = {
  noPadding: PropTypes.bool,
  noBorder: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
};
