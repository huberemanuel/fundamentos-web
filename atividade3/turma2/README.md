Você ajudará uma livraria a implementar um sistema de back-end com banco de dados. O dono da livraria quer entregas incrementais, então no futuro você o ajudará a criar o front-end :)
Basicamente, o dono da livraria quer cadastrar os livros que estão presentes no estoque e os leitores. Dessa forma, cada leitor tem o seu livro predileto.
Crie um back-end com NodeJS que permita criar (POST), editar (PUT) e remover (DELETE) livros e leitores com MongoDB.
Atenção, caso o back-end receba alguma requisição do tipo PUT ou DELETE onde o id solicitado não existe, a aplicação deve retornar uma resposta com status 404, indicando que aquele recurso a ser atualizado ou removido não existe. Não obstante, não receba o id pelo corpo da requisição, mas por parâmetros (req.params).

Ao fim, espera-se que seja possível cadastrar livros, leitores e que cada leitor tenha o seu livro predileto associado pelo id do livro. Por exemplo, ao realizar GET na rota "/leitores", deve-se retornar uma lista com os leitores cadastrados:

```js
[
	{ id: 0, nome: "Leitor 1", livro_id: 1},
	{ id: 1, nome: "Leitor 2", livro_id: 0},
	{ id: 2, nome: "Leitor 3", livro_id: 1},
]
```
Da mesma forma, espera-se receber uma lista de livros ao acessar a rota "/livros", por exemplo:

```js
[
	{ id: 0, nome: "Livro 1", autor: "Autor 1", ano: 2000, estoque: 3},
	{ id: 1, nome: "Livro 2", autor: "Autor 2", ano: 2005, estoque: 4},
]
```

Além do cadastro, a API também deve permitir o empréstimo de livros por meio da rota "/me_empresta". Receba o id do livro como parâmetro de rota e caso o livro não exista, retorne o erro 404. Caso o livro exista, verifique se existem cópias em estoque, se houver, reduza em 1 o número disponível em estoque e retorna a mensagem com sucesso ao usuário (código 200). Caso o livro exista, porém não tenha estoque disponível, retorne o erro 409 ao usuário com mensagem de erro descrevendo o motivo.

Solução desenvolvida pelo alunos FERNANDO SILVA MARTINS e JOÃO VICTOR ROSA TAGLIARINI.