Você ajudará uma cafeteria a implementar um sistema de back-end com banco de dados. O dono da cafeteria quer entregas incrementais, então no futuro você o ajudará a criar o front-end :)
Basicamente, o dono da cafeteria quer cadastrar os cafés que estão presentes no estoque e os clientes, ele gosta de chamá-los de cafezeiros. Dessa forma, cada cafezeiro tem o seu café predileto.
Crie um back-end com NodeJS que permita criar (POST), editar (PUT) e remover (DELETE) cafés e cafezeiros com MongoDB.
Atenção, caso o back-end receba alguma requisição do tipo PUT ou DELETE onde o id solicitado não existe, a aplicação deve retornar uma resposta com status 404, indicando que aquele recurso a ser atualizado ou removido não existe. Não obstante, não receba o id pelo corpo da requisição, mas por parâmetros (req.params).

Ao fim, espera-se que seja possível cadastrar cafés, cafezeiros e que cada cafezeiro tenha o seu café predileto associado pelo id do café. Por exemplo, ao realizar GET na rota "/cafezeiros", deve-se retornar uma lista com os cafezeiros cadastrados: 
```js
[
	{ id: 0, nome: "Cafezeiro 1", cafe_id: 1},
	{ id: 1, nome: "Cafezeiro 2", cafe_id: 0},
	{ id: 2, nome: "Cafezeiro 3", cafe_id: 1},
]
```
Da mesma forma, espera-se receber uma lista de cafés ao acessar a rota "/cafes", por exemplo:
```js
[
	{ id: 0, nome: "Café especial 1"},
	{ id: 1, nome: "Café especial 2"},
]
```

Atenção, não é permitida a criação de cafezeiros que não possuem café preferido. Segundo o dono da cafeteria, isso não existe!

Solução desenvolvida pelo alunos PATRICK NUNES DE SOUZA e LUÍS GUILHERME DA SILVEIRA PAIÃO.
