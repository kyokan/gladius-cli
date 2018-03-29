import { getText, postData } from '../../backend';
import { createAction, nameAction } from '../../util/createAction';

export const namespace = value => nameAction('settings', value);

export const SET_SETTINGS_SUCCESS = namespace('SET_SETTINGS_SUCCESS');

export function setSettingsSuccess(settings) {
  return createAction(SET_SETTINGS_SUCCESS, settings);
}

export function setSettings() {
  return async (dispatch) => {
    const pgpKey = (await getText('/keys/pgpPvtKey.txt')).replace(/\r?\n|\r/g, '\n');
    const privateKey = (await getText('/keys/ethPvtKey.txt')).replace(/\r?\n|\r/g, '');
    const result = await postData(`${process.env.NODE_DAEMON_API}/api/settings/start`, {
      provider: process.env.NODE_DAEMON_PROVIDER,
      marketAddress: process.env.NODE_DAEMON_MARKET_ADDRESS,
      nodeFactoryAddress: process.env.NODE_DAEMON_NODE_FACTORY_ADDRESS,
      pgpKey,
      passphrase: window.prompt('Please enter the passphrase for your PGP private key:'),
      privateKey,
    });

    dispatch(setSettingsSuccess(result));
  };
}

function getInitialState() {
  return null;
}

export default function reducer(state = getInitialState(), action = {}) {
  switch (action.type) {
    case SET_SETTINGS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
