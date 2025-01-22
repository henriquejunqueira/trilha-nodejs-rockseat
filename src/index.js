const express = require('express');

const app = express();

// ! Método criado para testar inicialmente o retorno da mensagem "Hello world"
// ! no navegador na rota http://localhost:3333/
// app.get('/', (request, response) => {
//   return response.send('Hello world');
// });

// app.get('/', (request, response) => {
//   return response.json({ message: 'Hello World Ignite!' }); // ? retorna no formato json
// });

app.get('/courses', (request, response) => {
  return response.json(['Curso 1', 'Curso 2', 'Curso 3']);
});

app.post('/courses', (request, response) => {
  return response.json(['Curso 1', 'Curso 2', 'Curso 3', 'Curso 4']);
});

app.put('/courses/:id', (request, response) => {
  return response.json(['Curso 6', 'Curso 2', 'Curso 3', 'Curso 4']);
});

app.patch('/courses/:id', (request, response) => {
  return response.json(['Curso 6', 'Curso 7', 'Curso 3', 'Curso 4']);
});

app.delete('/courses/:id', (request, response) => {
  return response.json(['Curso 6', 'Curso 7', 'Curso 4']);
});

app.listen(3333);
