Você ajudará uma hamburgueria a implementar um sistema de back-end com banco de dados. O dono da hamburgueria quer entregas incrementais, então no futuro você o ajudará o front-end :)
Basicamente, o dono da hamburgueria quer cadastrar os hambúrgueres que estão presentes no cardápio e os clientes. Dessa forma, cada cliente tem o seu hambúrguer predileto.
Crie um back-end com NodeJS que permita criar (POST), editar (PUT) e remover (DELETE) hambúrgueres e clientes com MongoDB.
Atenção, caso o back-end receba alguma requisição do tipo PUT ou DELETE onde o id solicitado não existe, a aplicação deve retornar uma resposta com status 404, indicando que aquele recurso a ser atualizado ou removido não existe. Não obstante, não receba o id pelo corpo da requisição, mas por parâmetros (req.params).

Ao fim, espera-se que seja possível cadastrar hambúrgueres, clientes e que cada cliente tenha o seu hambúrguer predileto associado pelo id do hambúrguer. Por exemplo, ao realizar GET na rota "/clientes", deve-se retornar uma lista com os clientes cadastrados:

```js
[
	{ id: 0, nome: "Cliente 1", hamb_id: 1},
	{ id: 1, nome: "Cliente 2", hamb_id: 0},
	{ id: 2, nome: "Cliente 3", hamb_id: 1},
]
```
Da mesma forma, espera-se receber uma lista de hambúrgueres ao acessar a rota "/hamburgueres", por exemplo:

```js
[	{ id: 0, nome: "Hambúrguer 1", ingredientes: ["Pão", "Carne", "Queijo", "Alface", "Tomate"], preco: 15.90, estoque: 10},
	{ id: 1, nome: "Hambúrguer 2", ingredientes: ["Pão", "Carne", "Queijo", "Cebola", "Bacon"], preco: 20.90, estoque: 5},
]
```

Além do cadastro, a API também deve permitir o pedido de hambúrgueres por meio da rota "/pedir", onde o usuário irá passar como corpo da requisição o quanto de dinheiro ele possui. Receba o id do hambúrguer como parâmetro de rota e caso o hambúrguer não exista, retorne o erro 404. Caso o hambúrguer exista, verifique se existem unidades em estoque, se houver e caso o usuário tenha saldo suficiente para realizar a compra, reduza em 1 o número disponível em estoque e retorne o saldo atual do usuário após a compra (código 200). Caso o hambúrguer exista, porém não tenha estoque disponível, retorne o erro 409 ao usuário com mensagem de erro descrevendo o motivo. Da mesma forma, caso o usuário não possua saldo suficiente, retorne erro 409 com mensagem justificando o motivo.

Solução desenvolvida pelo alunos FELIPE PIRES DOS SANTOS e PEDRO HENRIQUE LISBOA.