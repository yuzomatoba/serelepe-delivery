# Serelepe Delivery

This project is a delivery application developed for customers, employees, and administrators. It allows for product sales, user registration, order tracking, and user and order management.

All users have access through login with different permissions. The application validates the user type through the JWT Token. In addition, the seller can only access orders related to their name.



## Summary

 - [About the project](#sobre-o-projeto)
 - [Front-End](#front-end)
 - [Back-End](#back-end)
 - [Applied technologies](#front-end)
 - [Installation](#instalação)
 - [Database](#banco-de-dados)
 - [API](#api)
 - [Skills](#habilidades)
 - [About the Group](#depoimetos-sobre-o-projeto)

## About the project

In this application, our group was responsible for creating and integrating both the back-end and the front-end, creating a beer delivery platform. 🍻

Mr. Serelepe's beer distributor is getting computerized! 🚀 Your business, which was previously focused on a specific location in the city, has started receiving a massive order quantity from other areas, expanding its delivery service. All thanks to the excellent beverage price and the sales team's service.

Now, the distributor has several sale spots in the city to expedite the service in these areas. Each sale spot has its own salesperson responsible.

The old system, which was a set of spreadsheets, no longer meets the business needs due to generating a lot of maintenance, Mr. Serelepe sought our web developer team with an idea for an application that could streamline the team and the customer lives who buy their products. The app is able to:

- 👨‍💻 👩‍💻Access via login: both customers and salespeople, as well as Mr. Serelepe, who manages the system, must have access to the application via login, but with different functions: (1) The customer, who buys from the product list; (2) The salesperson, who approves, prepares, and delivers the orders; (3) The administrator, who manages the application users.

- 🗣 👥 🗣 👥Facilitate communication between customers and salespeople: the customer places an order through the "shopping cart," and the salesperson approves, prepares, and sends the order. When the product is received by the purchaser, they mark the order as "received." Both parties should have details about their orders.

- 🏍If the customer places an order, it should appear in the salesperson's order dashboard after the page refresh. The customer, on the other hand, should have information about their order when the page is refreshed, which means information about whether the order is being prepared or has already been dispatched.

## Front-End

The Front-End was developed using the following tools:
- Axios
- Material UI
- React
- React Router Dom
- React Testing Library


## Back-End
The Back-End was developed using the following tools:
- Javascript
- NodeJS
- ExpressJS
- JWT
- MySQL
- Sequelize
- Mocha
- Chai
- Sinon

## Testing
- RTL
- Chai e Sinon
- Jest

## Installation

🤖 Required commands:

❗️ Note: In this project, the process manager pm2 was the used tool. If you want to understand better what Node process manager is, check the documentation. ❗️



 These are the scripts at the root of the project (~/package.json) and not the individual applications ./front-end/package.json and ./back-end/package.json (All commands should be executed with npm. Ex: npm start):

 - ``start``: Clears the ports ``3000`` e ``3001`` and simulates the initialization in the evaluator. It also prepares the environment by running ``Sequelize`` to restore the test database (ending with -test) and starts the application with ``pm2`` in fork mode (one instance for each application). In this mode, changes are not watched.
 - ``stop``: Stops and deletes the applications running on ``pm2``;
 
 - ``dev``: Clears the ports ``3000`` and ``3001`` and starts the application with  ``pm2``  in fork mode (one instance for each application). In this mode, updates are watched (watch mode).

- ``dev:prestart``: From the root, this command installs dependencies  ``(npm i)`` in the two projects ``(./front-end e ./back-end)`` and runs ``Sequelize`` in ``./back-end`` (remember to configure the .env file in the same directory).

- ``db:reset``: Runs the ``Sequelize`` scripts to restore the development database (ending with ``-dev``). Use this script if you find any issues with your local database.

- ``test <file-names>``: Runs all tests (or a subset if  ``<file-names>`` is specified) using the test database (ending with ``-test``).


## To start the project, follow these steps:

- Create and configure a `.env` file with your environment variables in the back-end directory. Otherwise, the database configuration will use the default values (an example `.env` file is available in the backend's  `src` folder).

- Install the MySQL database and make sure it is running on your computer or in a container.

- Open the terminal in the root folder (`~/delivery_app`) and run the following commands:
    - `npm run db:reset` - This will run the Sequelize scripts and restore the development database.
    - `npm run start` - This will clear ports 3000 and 3001 and start the application.

## Database

For the database, the Sequelize ORM was the used tool, which interfaces with MySQL.

Use the file ``./db.example.sql`` as a reference for creating migrations and seeders.

The ER Diagram can also help you to "visualize" the database.


![Logo](https://raw.githubusercontent.com/tryber/sd-025-a-project-delivery-app/master/assets/readme/erdr.png?token=GHSAT0AAAAAAB5ARU2OO7UX6FS7RBJRXXBKZDGSGGQ)

O banco de dados vem com três usuários padrões (cliente, vendedor e administrador) e onze bebidas. Você pode usar as seguintes credenciais para testar o aplicativo:

- Cliente:
  ```
  name: Cliente Zé Birita
  email: zebirita@email.com
  password: $#zebirita#$
  ```

- Vendedor:
  ```
  name: Fulana Pereira
  email: fulana@deliveryapp.com
  password: fulana@123
  ```

- Admin:
  ```
  name: Delivery App Admin
  email: adm@deliveryapp.com
  password: --adm2@21!!--
  ```

#### MySQL com Docker
Para usar o MySQL com Docker, você precisa ter o Docker instalado em sua máquina. Para verificar se você tem o Docker instalado, abra o prompt de comando e digite:
`docker --version`

Este comando deve retornar algo semelhante a:
`Docker version 23.0.2`

Depois de ter o Docker instalado, você pode criar o contêiner com o seguinte comando. Lembre-se de alterar o nome do contêiner e a senha:
`docker container run --name delivery-app -e MYSQL_ROOT_PASSWORD=123456 -d -p 3306:3306 mysql:5.7`.

Este comando criará um contêiner MySQL com o nome `delivery-app`, irá definir a senha de root como `123456` e irá expor a porta MySQL 3306 para a porta local 3306.


## API

Para entender como funciona um pouco melhor a API e o projeto em si, as funcionalidades e desenvolvimento foi dividida em cinco (5) fluxos diferentes, cada um com a suas subdivisões, que juntos se tornam a aplicação em si.

Sendo eles: 
- Fluxo Comum
    -
    - Login: Verifica se o banco de dados contém as pessoas usuárias padrão. 

    - Registro: Deve ser capaz de registrar novos usuários, com dados validos no banco de dados.
- Fluxo do Cliente
    - 
    - Produtos do Cliente: Fluxo responsável pelos produtos que o cliente inseriu no carrinho. Sendo possivel, inserir, remover, modificar e deletar produtos do carrinho. O cliente também consegue consultar e ver os produtos e preços.

    - Checkout: Validar o valor total dos produtos adicionados na tela de produtos, navegar para a tela de checkout através do botão do carrinho de compras, gerar um novo pedido com o preço total presumido e dados aleatórios para utilização. O usuario tambem consegue ver os detalhes do pedido, remover itens do carrinho.

    - Pedidos do Cliente: Aqui é possivel ver a tela com todos os pedidos do cliente com os dados corretos.

    - Detalhes do Pedido: Contem  detalhes do pedido do cliente de forma a possuir os dados corretos da venda.

- Fluxo da Pessoa Vendedora
    -
    - Pedidos do Vendedor: O vendedor consegue  ver a lista de todos os pedidos atuais e anteriores.

    - Detalhes do Pedido: A pessoa vendedora tem acesso a tela de detalhes do pedido, de forma a possuir os dados corretos da venda.

- Validação do  Status do Pedido
    -
    - A validação de status consiste em assegurar que os status do pedido sejam alterados e refletidos para clientes e pessoas vendedoras.

- Fluxo da Pessoa Administradora
    -
    - O fluxo da pessoa administradora deve possibilitar o cadastro de clientes e pessoas vendedoras, tal como a remoção dos mesmos.

   ## Testando a API  
    
    #### POST  `/login`
```
  {
    "email": "zebirita@email.com",
    "password": "$#zebirita#$"
  }
  ```

  **Respostas**
  
  Status: 200 OK
  ```
  {
    "name": "Cliente Zé Birita",
    "email": "zebirita@email.com",
    "role": "customer",
    "token": "jsonwebtoken"
  }
  ```
  
  Status: 400 Bad Request
  ```
  {
    "message": "Invalid empty fields"
  }
  ```
  ```
  {
    "message": "Invalid email"
  }
  ```
  ```
  {
    "message": "Password must have at least 6 characters"
  }
  ```
  
  Status: 401 Unauthorized
  ```
  {
    "message": "Incorrect password"
  }
  ```
  
  Status: 404 Not Found
  ```
  {
    "message": "User not found"
  }
  ```
#### POST `/register`

  
  **Exemplo de Valores de Parâmetros**
  ```
  {
    "name": "João Silva",
    "email": "joao@email.com",
    "password": "123456"
  }
  ```

  



  **Respostas**
  
  Status: 201 Created  
  ```
  {
    "name": "João Silva",
    "email": "joao@email.com",
    "role": "customer",
    "token": "jsonwebtoken"
  }
  ```
  
  Status: 400 Bad Request
  ```
  {
    "message": "Invalid empty fields"
  }
  ```
  ```
  {
    "message": "Username must have at least 12 characters"
  }
  ```
  ```
  {
    "message": "Invalid email"
  }
  ```
  ```
  {
    "message": "Password must have at least 6 characters"
  }
  ```
  
  Status: 409 Conflict
  ```
  {
    "message": "User already exist"
  }
  ```

#### GET `/seller`
  
  **Respostas**
  
  Status: 200 OK
  ```
  [
    {
      "id": 2,
      "name": "Fulana Pereira"
    }
  ]
  ```
#### POST `/sale`

  **Exemplo de Valores de Parâmetros**
  ```
  {
    "cart": [
      {
        "id": 1,
        "name": "Skol Lata 250ml",
        "quantity": 2,
        "unityPrice": 2.30,
        "subTotal": 4.60
      },
      {
        "id": 2,
        "name": "Heineken 600ml",
        "quantity": 1,
        "unityPrice": 1.20,
        "subTotal": 1.20
      }
    ],
    "totalPrice": 88.8,
    "sellerId": 1,
    "deliveryAddress": "R. Ficticia, Em Algum Lugar, AL",
    "deliveryNumber": 121,
    "userEmail": "zebirita@email.com"
  }
  ```


  **Respostas**
  
  Status: 201 Created
  ```
  {
    "saleId": 1
  }
  ```
  #### PUT /sale/orders

  Status dos pedidos:
  - "Pendente"
  - "Preparando"
  - "Em Trânsito"
  - "Entregue"
    
 
  **Exemplo de Valores de Parâmetros**
  ```
  {
    "saleId": 1, 
    "status": "Preparando"
  }
  ```
  

  **Respostas**
  
  Status: 200 OK
  ```
  [
    1   // saleId
  ]
  ```

  **Respostas**
  #### GET
  Status: 200 OK
  ```
  [
    {
      "saleDate": "2023-05-18 16:23:10 +00:00",
      "id": 1,
      "status": "Preparando",
      "totalPrice": "88.80",
      "deliveryAddress": "R. Ficticia, Em Algum Lugar, AL"
    },
    {
      "saleDate": "2023-05-18 16:23:10 +00:00",
      "id": 2,
      "status": "Pendente",
      "totalPrice": "88.80",
      "deliveryAddress": "R. Ficticia, Em Algum Lugar, AL"
    }
  ]
  ```

  **Respostas**
  #### GET /costumer/products
  Status: 200 OK
  ```
  [
    {
      "saleId": 2,
      "productId": 1,
      "quantity": 2,
      "product": {
        "id": 1,
        "name": "Skol Lata 250ml",
        "price": "2.20"
      },
      "sale": {
        "saleDate": "2023-05-18 16:23:10 +00:00",
        "userId": 3,
        "sellerId": 1,
        "totalPrice": "88.80",
        "deliveryAddress": "R. Ficticia, Em Algum Lugar, AL",
        "deliveryNumber": "121",
        "status": "Pendente",
        "seller_id": 1
      }
    },
    {
      "saleId": 2,
      "productId": 2,
      "quantity": 1,
      "product": {
        "id": 2,
        "name": "Heineken 600ml",
        "price": "7.50"
      },
      "sale": {
        "saleDate": "2023-05-18 16:23:10 +00:00",
        "userId": 3,
        "sellerId": 1,
        "totalPrice": "88.80",
        "deliveryAddress": "R. Ficticia, Em Algum Lugar, AL",
        "deliveryNumber": "121",
        "status": "Pendente",
        "seller_id": 1
      }
    }
  ]
  ```

#### GET `/users`

  **Respostas**
  
  Status: 200 OK
  ```
  [
    {
      "id": 1,
      "name": "Skol Lata 250ml",
      "price": "2.20",
      "url_image": "http://localhost:3001/images/skol_lata_350ml.jpg"
    },
    {
      "id": 2,
      "name": "Heineken 600ml",
      "price": "7.50",
      "url_image": "http://localhost:3001/images/heineken_600ml.jpg"
    },
    ...
  ]
  ```

  #### GET `/products`
  
  **Parâmetros dos Headers**
  ```
  Authorization: JsonWebToken
  ```


  **Respostas**
  
  Status: 200 OK
  ```
  [
    {
      "id": 1,
      "name": "Skol Lata 250ml",
      "price": "2.20",
      "url_image": "http://localhost:3001/images/skol_lata_350ml.jpg"
    },
    {
      "id": 2,
      "name": "Heineken 600ml",
      "price": "7.50",
      "url_image": "http://localhost:3001/images/heineken_600ml.jpg"
    },
    ...
  ]
  ```
  Status: 404 Not Found
  ```
  {
    "message": "Token not found"
  }
  ```
  ```
  {
    "message": "Expired or invalid token"
  }
  ```

#### `/admin`
#### GET

  **Parâmetros dos Headers**
  ```
  Authorization: JsonWebToken
  ```


  **Respostas**
  
  Status: 200 OK
  ```
  [
    {
      "id": 2,
      "name": "Fulana Pereira",
      "email": "fulana@deliveryapp.com",
      "role": "seller"
    },
    {
      "id": 3,
      "name": "Cliente Zé Birita",
      "email": "zebirita@email.com",
      "role": "customer"
    }
  ]
  ```
  
  Status: 401 Unauthorized
  ```
  {
    "message": "Unauthorized"
  }
  ```
  
  Status: 404 Not Found
  ```
  {
    "message": "Token not found"
  }
  ```
  ```
  {
    "message": "Expired or invalid token"
  }
  ```
  #### POST
 
  **Parâmetros dos Headers**
  ```
  Authorization: JsonWebToken
  ```



  **Exemplo de Valores de Parâmetros**
  ```
  {
    "name": "João Silva",
    "email": "joao@email.com",
    "password": "123456"
  }
  ```

  

  **Respostas**
  
  Status: 201 Created  
  ```
  {
    "name": "João Silva",
    "email": "joao@email.com",
    "role": "customer",
    "token": "jsonwebtoken"
  }
  ```
  
  Status: 400 Bad Request
  ```
  {
    "message": "Invalid empty fields"
  }
  ```
  ```
  {
    "message": "Username must have at least 12 characters"
  }
  ```
  ```
  {
    "message": "Invalid email"
  }
  ```
  ```
  {
    "message": "Password must have at least 6 characters"
  }
  ```
   
  Status: 401 Unauthorized
  ```
  {
    "message": "Unauthorized"
  }
  ```
  
  Status: 404 Not Found
  ```
  {
    "message": "Token not found"
  }
  ```
  ```
  {
    "message": "Expired or invalid token"
  }
  ```
  
  Status: 409 Conflict
  ```
  {
    "message": "User already exist"
  }
  ```
  
  **Parâmetros dos Headers**
  ```
  Authorization: JsonWebToken
  ```
  
   #### DELETE /admin/:id
  
  **Respostas**
  
  Status: 201 Created
  ```

  ```
  
  Status: 401 Unauthorized
  ```
  {
    "message": "Unauthorized"
  }
  ```
  
  Status: 404 Not Found
  ```
  {
    "message": "Token not found"
  }
  ```
  ```
  {
    "message": "Expired or invalid token"
  }
  ```




## Skills:
#### Hardskills Backend:

    - A realização da dockerização dos apps, network, volume e compose;
    - A modelagem de dados com MySQL através do Sequelize;
    - A criação e associação de tabelas usando models do sequelize;
    - A construção de uma API REST com endpoints para consumir os models criados;
    - A construção de um CRUD com NodeJS, utilizando ORM;
    - Jwt para validações de segurança
    
    ## Habilidades:
#### Hardskills Frontend:

    - A utilização de javascript com React e React Hooks;
    - A Utilização do Context API para gerenciamento de estado global;
    - Material UI Para customização e CSS;
    - Local Storage para salvar dados persistentes no navegador;
    - Axios para fetchs com o back End;
    - React Router para rotas;

##### Softskills:
    - Trabalho em grupo
    - Metodologias Ageis
    - Scrum
    - Kanban
    - Comunicação
## About the Group
O App de Delivery foi um projeto realizado em grupo, sendo o ultimo projeto do modulo de Back-End. Com o objetivo de trabalhar principalmente as softskills e simular um ambiente de trabalho com diferentes pessoas atuando no mesmo.

Esse projeto permitiu com que conhecemos novas pessoas e vissemos novos jeitos de trabalhar em grupo, utilizando as metodologias ageis. A comunicação foi essencial para realizar esse projeto e podemos dizer com muito orgulho que tivesse sucesso na entrega do mesmo.

O grupo é composto dos seguintes desenvolvedores:

    - Gabriel Palhares (lider responsavel pelo grupo)
    - Yuzo Matoba
    - Victor Alejandro Cabral Orellana

##### Depoimetos sobre o projeto

- Depoimento de Gabriel: Desenvolver o projeto Serelepe Delivery representou um grande desafio pessoal para mim, pois foi meu primeito projeto desenvolvido do zero fullStack. Graças à colaboração do meu time, conseguimos concluir o desenvolvimento dentro do prazo estipulado. Essa jornada proporcionou uma série de aprendizados técnicos valiosos e se mostrou uma excelente oportunidade para aprimorar minhas habilidades de soft skills.Gostaria de expressar minha profunda gratidão aos meus colegas, Yuzo e Victor, pelo trabalho conjunto e pela dedicação que ambos demonstraram durante todo o processo. Yuzo desempenhou um papel fundamental no desenvolvimento do front-end, utilizando o Context API para garantir o correto funcionamento do nosso projeto. E Victor, com seu incrível trabalho no back-end, utilizando o modelo MSC, contribuiu de forma significativa para o sucesso alcançado.Mais uma vez, gostaria de agradecer a ambos pelo esforço e dedicação, que foram essenciais para completar o nosso projeto.

- Depoimeto de Yuzo: Trabalhar com o Gabriel e o Victor, proporcionou o entendimento de outras perspectivas de pensamento lógico, ampliando o meu escopo em relação à diferentes formas de se obter um mesmo resultado. A experiência prévia do Gabriel com programação e a sua empatia, foram fundamentais para que a sua liderança nos conduzisse para alcançarmos o estabelecido. Quanto ao Victor, o senso de responsabilidade e de companheirismo, contribuíram imensamente para que ficássemos sincronizados e seguíssemos um fluxo praticamente uniforme de trabalho. A ferramenta de gestão de tempo (Metodologia Ágil) foi o Trello para que os steps fossem organizados e feitos de acordo com a responsabilidade e tempo de cada membro. Gratidão ao meus colegas e amigos pelo incrível trabalho que desenvolveram comigo. Foram excepcionais e grandes parceiros nesse projeto do qual me orgulho muito. 

- Depoimeto de Victor: Esse trabalho em grupo foi bem desafiador de começo, nunca tinha trabalhado com o Gabriel ou o Yuzo antes, então estava bem animado para realizar esse projeto com eles. Posso dizer que foi uma das melhores decisões que tomei, realizar esse projeto com dois grandes desenvolvedores como eles, agregou muito ao meu conhecimento em hardskills como em softskills. Definitivamente foi o projeto mais divertido e o que mais aprendi durante o curso da Trybe. So tenho a agradecer aos meus colegas por esses 13 dias intensos de projeto!
## Contato

#### Redes de Gabriel
- E-mail: devpalhares@gmail.com
- LinkedIn: https://www.linkedin.com/in/devpalhares/
- Github: https://github.com/GPalhares

#### Redes de Victor
- E-mail: victor_cabral_o@hotmail.com
- LinkedIn: https://www.linkedin.com/in/victor-alejandro-orellana/
- Github: https://github.com/mendokusaiiii

#### Redes de Yuzo
- E-mail: fabioymatoba@uol.com.br
- LinkedIn: https://www.linkedin.com/in/fabio-yuzo
- Github: https://github.com/yuzomatoba 
