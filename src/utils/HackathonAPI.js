const api = 'http://localhost:8080';

export const login = (username, password) =>
  fetch(`${api}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
    .then(res => res.json())
    .then(data => data);

export const getQuestions = token =>
  fetch(`${api}/questions`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-auth': token
    }
  })
    .then(res => res.json())
    .then(data => data);

export const checkAnswer = (id, answer, token) =>
  fetch(`${api}/questions/check/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-auth': token
    },
    body: JSON.stringify({ answer })
  })
    .then(res => res.json())
    .then(data => data);

export const logout = token =>
  fetch(`${api}/users/logout`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'x-auth': token
    },
    body: JSON.stringify({ token })
  })
    .then(res => res.json())
    .then(data => data);
