# Repositório de estudos da trilha de nodejs da Rocketseat

### Métodos de Requisições (HTTP Verbs)

- GET - Leitura (retorna dados do bd);
- POST - Criação (insere dados no bd);
- PUT - Atualização (atualiza dados no bd);
- DELETE - Deleção (remove dados no bd);
- PATCH - Atualização parcial (atualiza um campo específico no bd);

### HTTP Codes

- 1XX: Informativo - A solicitação foi aceita ou o processo continua em andamento;
- 2XX: Confirmação
  - 200 - Requisição bem sucedida;
  - 201 - Created - Geralmente usado para POST após uma inserção;
- 3XX: Redirecionamento
  - 301 - Moved Permanently
  - 302 - Moved
- 4XX: Erro do cliente
  - 400 - Bad Request
  - 401 - Unauthorized
  - 403 - Forbidden
  - 404 - Not Found
  - 422 - Unprocessable Entity
- 5XX: Erro no servidor - o servidor falhou ao concluir a solicitação;
  - 500 - Internal Server Error
  - 502 - Bad Gateway

### Parâmetros das requisições

- Header Parms
  ```json
  authority: app.rocketseat.com.br
  method: GET
  path: /api/journey-nodes
  scheme: https
  referer: https://app.rocketseat.com.br/node/
  ```
- Query Params

  - http://enderecoservidor.com.br/v1/users?🔵page=🔴2🟠&🔵limit=🔴50
  - 🔵 Chave (page e limit)
  - 🔴 Valor (2 e 50)
  - 🟠 Separação (&)

- Route Params

  - http://enderecoservidor.com.br/v1/users/🟢{id}
  - 🟢 Identificador (id)

- Body Params
  ```json
  {
    "name": "Henrique",
    "username": "henrique"
  }
  ```

### Boas práticas API Rest

- Utilização correta dos métodos HTTP
- A utilização correta dos status no retorno das respostas
- Padrão de nomenclatura
  - Busca de usuários - GET
    - http://enderecoservidor.com.br/v1/users/
  - Busca de usuário por id - GET
    - http://enderecoservidor.com.br/v1/users/1
  - Busca de endereço do usuário- GET
    - http://enderecoservidor.com.br/v1/users/1/address
  - Deleção de um usuário - DELETE
    - http://enderecoservidor.com.br/v1/users/1
  - Atualização do status do usuário - PATCH
    - http://enderecoservidor.com.br/v1/users/1/status
