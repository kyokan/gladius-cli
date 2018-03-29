export async function getText(url) {
  const res = await window.fetch(url);
  return res.text();
}

export async function getJSON(url) {
  const res = await window.fetch(url);
  return res.json();
}

export async function postData(url, data) {
  const res = await window.fetch(url, {
    body: JSON.stringify(data),
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
  });

  return res.json();
}
