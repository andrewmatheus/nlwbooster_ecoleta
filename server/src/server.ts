import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  return response.json([
    'Diego',
    'Andrew',
    'Surama',
    'Miguel'
  ]);
})

app.listen(3333);