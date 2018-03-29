import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import Card from './card';
import InfoCard from './infoCard';
import bemify from '../util/bemify';

const bem = bemify('home');

function BaseHome(props) {
  console.log('Rendering with props', props);
  return (
    <div className={classnames(bem(), 'mt-5')}>
      <div className="container-fluid">
        <div className={classnames(bem('info-cards'), 'mb-3')}>
          <div className="row justify-content-center">
            <div className="col-3">
              <InfoCard title="Node Upload Speed">
                {props.node.speed} MB/S
              </InfoCard>
            </div>
            <div className={classnames(bem('node-status'), 'col-3')}>
              <InfoCard title="Node Status">
                {props.node.status}
              </InfoCard>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-6">
            <Card noBorder title="Account Information">
              <div className={bem('content-row')}>
                <div className={bem('content-title')}>Name</div>
                <div className={bem('content-value')}>{props.node.name}</div>
              </div>
              <div className={bem('content-row')}>
                <div className={bem('content-title')}>Email</div>
                <div className={bem('content-value')}>{props.node.email}</div>
              </div>
              <div className={bem('content-row')}>
                <div className={bem('content-title')}>IP Address</div>
                <div className={bem('content-value')}>{props.node.ipAddress}</div>
              </div>
              <div className={bem('content-row')}>
                <div className={bem('content-title')}>Wallet Address</div>
                <div className={bem('content-value')}>{props.settings.address}</div>
              </div>
              <div className={bem('content-row')}>
                <div className={bem('content-title')}>Bio</div>
                <div className={bem('content-value')}>{props.node.bio}</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

BaseHome.propTypes = {
  node: PropTypes.shape({
    bio: PropTypes.string,
    email: PropTypes.string,
    name: PropTypes.string,
    ipAddress: PropTypes.string,
    speed: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
  settings: PropTypes.shape({
    address: PropTypes.string,
  }).isRequired,
};

function mapStateToProps({ daemon }) {
  return {
    node: daemon.node || {},
    settings: daemon.settings || {},
  };
}
export default connect(mapStateToProps)(BaseHome);
