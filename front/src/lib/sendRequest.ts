const HOST_BACKEND = import.meta.env.VITE_HOST_BACKEND

export const sendRequest = (
  url: string,
  method: string = 'get',
  body?: Object
) => {
  return fetch(`${HOST_BACKEND}${url}`, {
    method,
    body: JSON.stringify(body),
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
