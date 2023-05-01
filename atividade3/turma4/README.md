Você é um desenvolvedor na ProdutosQueNinguemPediu.com e seu chefe pede para que você implemente o back-end com MongoDB. A aplicação deverá permitir a criaçao de usuários por meio da requisição POST e deve receber o nome do usuário.
O diferencial da aplicação será a remoção de usuários de forma aleatória. Seu chefe quer em momentos oportunos remover um usuário da aplicação para desestressar e, para ser justo, quer fazer isso de forma aleatória. Dessa forma, você deve receber uma requisição POST ou DELETE na rota "/delethanos" que irá remover um usuário aleatória da lista de usuários. Caso a lista esteja vazia, retorne uma mensagem de erro (formato json) com o status 409.

Como encontrar um número aleatório entre 0 e 10:
```typescript
const indexAleatorio = Math.floor(Math.random() * 10);
```

Adicione uma rota "/users" que retorne a lista de usuários.

Solução desenvolvida pelo alunos ALAN EDWARD DA SILVA OLIVEIRA e CONRADO SETTI DE ALMEIDA MARCELO OLIVEIRA.