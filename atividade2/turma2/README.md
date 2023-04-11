Some o último dígito do seu RA com o de sua dupla. Se o valor for ímpar, resolva o exercício com Reactive Forms, caso contrário, utilize Template-Driven Forms.

Crie um cadastro com os seguintes campos:
* Nome (texto) - Campo obrigatório
* Senha (texto) - Campo obrigatório, mínimo de 4 e máximo de 6 caracteres. 
* Repetição da senha (text) - Campo obrigatório. Precisa ser igual à senha digitada pelo usuário (mostrar mensagem).
* Cachorro favorito (select) - Campo obrigatório. Utilize o elemento `select`
	Utilize a seguinte lista de cachorros em src/app/dogs.ts:
	```typescript
    [
	{ name: 'Labrador', img_url: 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/08/gettyimages-530330473.jpg?	crop=0.659xw:0.990xh;0.123xw,0.00779xh&resize=980:*'},
	{ name: 'German Shepherd', img_url: 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/08/gettyimages-103196073.jpg?crop=0.801xw:1.00xh;0.201xw,0&resize=980:*'},
	{ name: 'Bulldog', img_url: 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/08/gettyimages-540833297.jpg?crop=0.652xw:0.979xh;0.138xw,0&resize=980:*'},
	{ name: 'Beagle', img_url: 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/08/gettyimages-462376265.jpg?crop=1.00xw:0.668xh;0,0.00115xh&resize=980:*'}
	{ name: 'Caramelo clássico', img_url: 'https://i0.statig.com.br/bancodeimagens/78/pt/gs/78ptgsfeddfh638dkkzya5p3y.jpg'}
	]
    ```
	Defina uma classe ou interface com nome Cachorro.

Utilize validações e informe ao usuário os erros que ocorreram abaixo de cada campo. Não se esqueça de informar exatamente o erro que está acontecendo, por exemplo, se o usuário inserir a senha "123" você deve informar que a senha não atende ao mínimo de caracteres exigido. 

A mensagem de erro do campo Nome só deve ser exibida quando o usuário enviar o formulário. Já as outras mensagens devem ser exibidas a partir do momento que o usuário editar e sair do campo, ou tocar e sair do campo.

Caso o formulário esteja válido, exiba para o usuário que o cadastro foi concluído com sucesso e utiliza a interpolação de string para inserir o nome dele nesta mensagem. Além disso, exiba a foto do cachorro favorito do usuário.

Este cadastro deve estar presente na rota "/new_user" e deve renderizar o componente NewUserComponent.

Não esquecer de remover a pasta node_modules antes de realizar o upload e de colocar os RAs como nome do arquivo.

Solução desenvolvida pelo alunos JOÃO VICTOR ROSA TAGLIARINI e FERNANDO SILVA MARTINS.