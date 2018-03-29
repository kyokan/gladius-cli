/* eslint-disable import/prefer-default-export */
import { combineReducers } from 'redux';

import settings from './daemon/settings';
import node from './daemon/node';

export const daemon = combineReducers({
  node,
  settings,
});
