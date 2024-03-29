const serviceMapper = {
  Demand: 'https://aiditto.se/demand',
  Supply: 'https://aiditto.se/supply',
  User: 'https://188.212.108.155:6003',
  Auth: 'https://188.212.108.155:6003'
};

export default async (service, url, method = 'GET', body, headers) =>
  fetch(`${serviceMapper[service]}${url}`, {
    body: body && JSON.stringify(body),
    method,
    headers: {
      Authorization: 'token here',
      ...headers,
    },
  });
