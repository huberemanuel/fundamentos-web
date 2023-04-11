Some o último dígito do seu RA com o de sua dupla. Se o valor for ímpar, resolva o exercício com Reactive Forms, caso contrário, utilize Template-Driven Forms.

Crie um cadastro com os seguintes campos:
* Nome (texto) - Campo obrigatório. Com valor padrão "Nome".
* Curso (select) - Campo obrigatório. Utilize o elemento HTML select para implementar este campo, onde o valor será o ID do curso e o texto a ser exibido deve ser o nome do curso.
* Idade (number) - Campo obrigatório. Valide se a idade está entre 18 e 100 anos.

Crie um classe Curso *em arquivo separado* e uma lista estática no mesmo arquivo contendo os seguintes cursos:
* Engenharia Química
* Engenharia de Produção
* Engenharia Civil
* Engenharia de Computação
Cada curso deve ter um campo id e nome do curso.

Utilize validações e informe ao usuário os erros que ocorreram abaixo de cada campo. Não se esqueça de informar exatamente o erro que está acontecendo, por exemplo, se o usuário inserir inserir Idade 8, informe que menores de 18 não podem ser cadastrar.

A mensagem de erro do campo Nome só deve ser exibida quando o usuário tocar ou editar o campoJá as outras mensagens devem ser exibidas apenas quando o formulário for enviado.

Caso o formulário esteja válido, exiba para o usuário que o cadastro foi concluído com sucesso e utiliza a interpolação de strings para inserir o nome dele nesta mensagem.

Este cadastro deve estar presente na rota "/new_student" e deve renderizar o componente NewStudentComponent.

Solução dos alunos ALAN EDWARD DA SILVA OLIVEIRA e LUIZ HENRIQUE DE OLIVEIRA FILHO.