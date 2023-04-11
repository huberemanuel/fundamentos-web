Some o último dígito do seu RA com o de sua dupla. Se o valor for ímpar, resolva o exercício com Template-Driven Forms, caso contrário, utilize Reactive Forms.

Crie um cadastro com os seguintes campos:
* Nome (texto) - Campo obrigatório
* Cachorro preferido (select) - Campo obrigatório

Caso os campos não sejam preenchidos corretamente, exiba mensagens de erro para cada um deles. Não espero o usuário clicar em enviar para apresentar as mensagens, você deve exibí-las assim que o usuário tocar no campo e sair.

Quando o usuário clicar em enviar, apresente em uma div abaixo do formulário o nome do cachorro favorito e a foto dele.

Utilize a seguinte lista de cachorros em src/app/dogs.ts:

```typescript
[
{ name: 'Labrador', img_url: 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/08/gettyimages-530330473.jpg?crop=0.659xw:0.990xh;0.123xw,0.00779xh&resize=980:*'},
{ name: 'German Shepherd', img_url: 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/08/gettyimages-103196073.jpg?crop=0.801xw:1.00xh;0.201xw,0&resize=980:*'},
{ name: 'Bulldog', img_url: 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/08/gettyimages-540833297.jpg?crop=0.652xw:0.979xh;0.138xw,0&resize=980:*'},
{ name: 'Beagle', img_url: 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/08/gettyimages-462376265.jpg?crop=1.00xw:0.668xh;0,0.00115xh&resize=980:*'}
{ name: 'Caramelo clássico', img_url: 'https://i0.statig.com.br/bancodeimagens/78/pt/gs/78ptgsfeddfh638dkkzya5p3y.jpg'}
]
```

Obs: Defina classe ou interface Cachorro.

Solução desenvolvida pelo alunos PATRICK NUNES DE SOUZA e GUSTAVO TAMBELLI RODRIGUES.