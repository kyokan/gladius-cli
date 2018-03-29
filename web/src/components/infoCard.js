import classnames from 'classnames';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import bemify from '../util/bemify';

const bem = bemify('gladius-info-card');

export default class InfoCard extends PureComponent {
  renderTitle() {
    const {
      title,
    } = this.props;

    if (title) {
      return (
        <div className={bem('title')}>
          {title}
        </div>
      );
    }

    return null;
  }

  render() {
    const {
      noBorder,
      className,
      children,
    } = this.props;
    const names = classnames(bem('content'), {
      [bem(null, 'borderless')]: noBorder,
    });

    return (
      <div className={classnames(className, bem())}>
        {this.renderTitle()}
        <div className={names}>
          {children}
        </div>
      </div>
    );
  }
}

InfoCard.defaultProps = {
  noBorder: false,
  className: null,
  title: null,
};

InfoCard.propTypes = {
  noBorder: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
};
