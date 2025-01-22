const express = require('express');

const app = express();

// ! Método criado para testar inicialmente o retorno da mensagem "Hello world"
// ! no navegador na rota http://localhost:3333/
// app.get('/', (request, response) => {
//   return response.send('Hello world');
// });

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World Ignite!' }); // ? retorna no formato json
});

app.listen(3333);
