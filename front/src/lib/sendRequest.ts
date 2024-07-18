export const sendRequest = (
  url: string,
  method: string = 'get',
  body?: Object
) => {
  return fetch(url, {
    method,
    body: JSON.stringify(body),
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
