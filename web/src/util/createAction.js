export function createAction(type, payload, error = false) {
  if (error) {
    return {
      type,
      payload,
      error,
    };
  }

  return {
    type,
    payload,
  };
}

export function nameAction(namespace, name) {
  return `gladius-nm-beta/${namespace}/${name}`;
}
