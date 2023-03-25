Crie um componente chamado Home, esse deverá ter a rota como: “/home”.
Crie uma classe para representar um Aluno, com nome, ra e média.
No componente Home, apresente uma lista com *ngFor dos alunos cadastrados. Lembre-se de criar uma lista estática de alunos a partir da classe Aluno.
Quando o usuário clicar em um aluno da lista, redirecione-o para a rota '/aluno/:id' e exiba um novo componente chamado AlunoExibicao, onde este componente deverá receber o id do aluno, buscar na lista o aluno correspondente e exibir os dados nele no componente.

Exemplo de como buscar um item em uma lista por id:

```typescript
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

const products: Product[] = [
  { id: 1, name: "Product 1", price: 10, description: "Description 1" },
  { id: 2, name: "Product 2", price: 20, description: "Description 2" },
  { id: 3, name: "Product 3", price: 30, description: "Description 3" },
];

function getProductById(id: number): Product | undefined {
  return products.find((product) => product.id === id);
}
const product1 = getProductById(1);
console.log(product1);
```

Antes de realizar o upload do código, apague a pasta node_modules, em seguida, compacte a pasta do projeto e envie com os RA como nome do arquivo, por exemplo "123123_321312.zip"

Solução desenvolvida pelos alunos FELIPE PIRES DOS SANTOS e PEDRO HENRIQUE LISBOA.