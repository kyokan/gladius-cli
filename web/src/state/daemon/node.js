import { getJSON } from '../../backend';
import { createAction, nameAction } from '../../util/createAction';
import { setSettings } from './actions';

export const namespace = value => nameAction('settings', value);

export const GET_NODE_DATA_SUCCESS = namespace('GET_NODE_DATA_SUCCESS');

export function getNodeDataSuccess(data) {
  return createAction(GET_NODE_DATA_SUCCESS, data);
}

export function getNodeData() {
  return async (dispatch) => {
    console.log('Settings');
    console.log(await dispatch(setSettings()));

    const nodeBase = await getJSON(`${process.env.NODE_DAEMON_API}/api/node`);
    const nodeData = await getJSON(`${process.env.NODE_DAEMON_API}/api/node/${nodeBase.address}`);

    dispatch(getNodeDataSuccess(nodeData.data));
  };
}

function getInitialState() {
  return null;
}

export default function reducer(state = getInitialState(), action = {}) {
  switch (action.type) {
    case GET_NODE_DATA_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
