# Validação do login

Entenda sobre a validação do formulário de login.

Como há várias opções de login no campus, é interessante mostrar ao usuário qual é o seu tipo de login, se é CPF, Email, Matrícula do Câmpus Digital ou Matrícula SIGAA, por exemplo.

Para isso, começamos adicionando o **v-model** no input de usuário para conseguirmos pegar os dados que serão inseridos. Depois, vamos na opção **data** dentro do javascript e declaramos um valor inicial nulo para o input. Em seguida, em **methods**, criamos as seguintes funções para a validação do campo:

- **tipoUsuário**: executa outras funções de teste para ver em qual opção de login o usuário utiliza. As funções são: matriculaCampus, matriculaSigaa, testaCPF e testaEmail, retornando uma mensagem que informa ao usuário seu tipo de login ou se a matrícula está incorreta.
- **cssTipoUsuario**: se a matrícula for inválida utiliza o css de erro que deixa a borda do input e a mensagem de erro em vermelho. Senão, deixa as mensagens com cor azul e o input sem borda colorida.

Para ficar observando as mudanças no input enquanto o usuário digita, utilizamos a opção **watch** do Vue, indicando o v-model do input, passando um valor no parâmetro e chamando uma função com o parâmetro passado. Assim verificamos a todo momento os dados do input e mostramos a mensagem ao usuário informando o seu tipo de login. Nesse caso, colocamos `username(val) {this.tipoUsuario(val)}`, que observa o input de usuário e chama a função tipoUsuário passando o valor do input como parâmetro, e `tipo(val) {this.cssTipoUsuario(val)} ` que observa as mudanças no tipo de usuário para mudar o css de acordo.

[//]: # 'matriculaCampus: verifica se é número, se começa com zeros e se o tamanho da string é igual a 5, 6 ou 7'
[//]: # 'matriculaSigaa: verifica se começa com 20 e se o tamanho é 10 '
