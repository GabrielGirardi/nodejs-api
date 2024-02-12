### Sistema de Gerenciamento de Clientes

O Sistema de Gerenciamento de Clientes é uma aplicação web desenvolvida para auxiliar na organização e manipulação de dados de clientes. Este projeto consiste em uma aplicação frontend construída em React.js e uma API backend construída com Node.js e Express.js.

![Customer System](customer-system.png)

### Instalação

Para instalar e executar o projeto, siga as instruções abaixo:

1. Clone o repositório para o seu ambiente local:

```git clone https://github.com/seu-usuario/nodejs-api.git```

2. Instale os módulos necessários para o frontend e backend:

``` cd nodejs-api/frontend/costumer-system && npm install && cd ../../api && npm install```

### Execução

Para executar o frontend e o backend, siga as instruções abaixo:

1. No diretório do frontend, execute o comando: (frontend/costumer-system)

```npm run dev```


2. No diretório do backend, execute o comando: (api/src)

```node ./index.js```


### Funcionamento

O Sistema de Gerenciamento de Clientes permite realizar as seguintes operações:

1. **Cadastro de Clientes:** Para cadastrar um novo cliente, preencha todos os campos obrigatórios (nome, gênero, estado civil, data de nascimento, CEP, endereço, número (Não obrigatório), complemento, estado e cidade) e clique em "Cadastrar" ou "Cancelar".

2. **Visualização de Clientes:** Todos os clientes cadastrados são exibidos na forma de uma tabela, mostrando os principais detalhes de cada cliente em uma tabela resumida. Para visualizar todos os dados de um cliente, clique no botão "Ver tabela completa".

3. **Edição de Clientes:** Para editar os dados de um cliente, clique no botão/ação "Editar" correspondente ao cliente desejado na tabela de visualização completa. Será exibido um popup com os campos de edição preenchidos com os dados atuais do cliente. Faça as alterações desejadas e clique em "Salvar" para confirmar as alterações ou "Cancelar", caso tenha dúvida de algum campo, existe uma mensagem de fundo indicando a função, basta apagar o dado preenchido daquele campo.

4. **Exclusão de Clientes:** Para excluir um cliente, clique no ícone de lixeira "Excluir" correspondente ao cliente desejado na tabela de visualização resumida. Uma mensagem de confirmação será exibida para garantir a exclusão do cliente. Clique em "Confirmar" para excluir o cliente ou "Cancelar" para abortar a operação.

Este sistema oferece uma maneira intuitiva e eficiente de gerenciar os dados de clientes, permitindo uma organização e manipulação eficazes.

# Pontos de Melhoria:

1. **Validações:** Implementar validações de entrada nos campos do formulário para garantir que os dados inseridos pelos usuários sejam corretos e consistentes. Isso pode incluir validações de formato, comprimento máximo, campos obrigatórios, entre outros.

2. **Utilização de Rotas no React:** Refatorar a aplicação frontend para utilizar rotas em vez de componentes, permitindo a navegação entre diferentes páginas em vez de exibir todos os componentes em uma única tela. Isso ajuda a melhorar a organização e a usabilidade da aplicação.

3. **Mensagens Intuitivas do Backend:** Aprimorar a comunicação entre o frontend e o backend, utilizando mensagens intuitivas e descritivas retornadas pelo backend em resposta às operações realizadas pelos usuários. Isso pode incluir mensagens de sucesso, erros e avisos para orientar melhor os usuários.

4. **Segurança dos Dados:** Reforçar a segurança dos dados da aplicação implementando medidas de proteção adequadas, como criptografia de dados sensíveis, autenticação e autorização de usuários, proteção contra ataques de injeção de código, entre outras práticas recomendadas de segurança.

5. **Divisão entre Tabelas de Dados Pessoais e Endereço:** Melhorar a estrutura do banco de dados e do modelo de dados da aplicação dividindo as informações de clientes em tabelas separadas para dados pessoais e endereço. Isso ajuda a manter a integridade dos dados e simplifica a manipulação e consulta das informações.

Esses pontos de melhoria podem contribuir para tornar o sistema mais robusto, seguro e intuitivo, proporcionando uma melhor experiência para os usuários e facilitando a manutenção e evolução da aplicação no futuro.


