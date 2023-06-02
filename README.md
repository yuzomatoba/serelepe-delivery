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

The database has three default users (customer, seller, and administrator) and eleven beverages. You can use the following credentials to test the application:

- Customer:
  ```
  name: Cliente Zé Birita
  email: zebirita@email.com
  password: $#zebirita#$
  ```

- Seller:
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

#### MySQL with Docker
To use MySQL with Docker, you need to have Docker installed on your machine. To check if you have Docker installed, open the command prompt and type:
`docker --version`

This command should return something like:
`Docker version 23.0.2`

After having Docker installed, you can create the container with the following command. Remember to change the container name and password:
`docker container run --name delivery-app -e MYSQL_ROOT_PASSWORD=123456 -d -p 3306:3306 mysql:5.7`.

This command will create a MySQL container named `delivery-app`, set the root password to  `123456` and expose the MySQL port 3306 to the local port 3306.


## API

To better understand how the API and the project itself work, the functionalities and development have been divided into five (5) different flows, each with its subdivisions, which together form the application itself.

They are: 
- Common Flow
    -
    - Login: Checks if the database contains the default user accounts.

    - Registration: Should be able to register new users with valid data in the database.
- Customer Flow
    - 
    - Customer Products: It is responsible for the products that the customer added to the cart. It allows adding, removing, modifying, and deleting products from the cart. The customer can also view products and prices.

    - Checkout: Validates the total value of the products added on the product screen, navigates to the checkout screen through the shopping cart button, generates a new order with the presumed total price and random data for use. The user can also view order details and remove items from the cart.

    - Customer Orders: It is possible to see the screen with all the customer's orders with the correct data.

    - Order Details: Contains the customer's order details in order to have the correct sales data.

- Seller Flow
    -
    - Seller Orders: The seller can view the list of all current and previous orders.

    - Order Details: The seller has access to the order details screen to have the correct sales data.

- Order Status Validation
    -
    - The status validation consists of ensuring that the order statuses are changed and reflected for customers and sellers.

- Administrator Flow
    -
    - The administrator flow should allow the registration of customers and sellers, as well as their removal.

   ## Testing the API 
    
    #### POST  `/login`
```
  {
    "email": "zebirita@email.com",
    "password": "$#zebirita#$"
  }
  ```

  **Responses**
  
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

  
  **Parameter Value Example**
  ```
  {
    "name": "João Silva",
    "email": "joao@email.com",
    "password": "123456"
  }
  ```

  



  **Responses**
  
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
  
  **Responses**
  
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

  **Parameter Value Examples**
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


  **Responses**
  
  Status: 201 Created
  ```
  {
    "saleId": 1
  }
  ```
  #### PUT /sale/orders

  Order status:
  - "Pendente"
  - "Preparando"
  - "Em Trânsito"
  - "Entregue"
    
 
  **Parameter Value Example**
  ```
  {
    "saleId": 1, 
    "status": "Preparando"
  }
  ```
  

  **Response**
  
  Status: 200 OK
  ```
  [
    1   // saleId
  ]
  ```

  **Responses**
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

  **Responses**
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

  **Responses**
  
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
  
  **Header Parameters**
  ```
  Authorization: JsonWebToken
  ```


  **Responses**
  
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

  **Header Parameters**
  ```
  Authorization: JsonWebToken
  ```


  **Responses**
  
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
 
  **Header Parameters**
  ```
  Authorization: JsonWebToken
  ```



  **Parameter Value Example**
  ```
  {
    "name": "João Silva",
    "email": "joao@email.com",
    "password": "123456"
  }
  ```

  

  **Responses**
  
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
  
  **Header Parameters**
  ```
  Authorization: JsonWebToken
  ```
  
   #### DELETE /admin/:id
  
  **Responses**
  
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
#### Backend Skills:

    - Dockerizing apps, network, volume, and compose;
    - Data modeling with MySQL using Sequelize;
    - Creating and associating tables using Sequelize models;
    - Building a REST API with endpoints to consume the created models;
    - Building a CRUD with Node.js, using an ORM;
    - JWT for security validations
    
    ## Skills:
#### Frontend Skills:

    - JavaScript with React and React Hooks;
    - Context API for global state management;
    - Material UI for customization and CSS;
    - Local Storage for saving persistent data in the browser;
    - Axios for fetching data from the backend;
    - React Router for routing

##### Softskills:
    - Teamwork;
    - Agile methodologies
    - Scrum
    - Kanban
    - Communication
## About the Group
The Delivery App was created in group and it was the Backend module final project. Its main target was to work on soft skills and simulate a work environment with different people collaborating on it.

This project provided us to cooperate to colleagues and see new ways to work in group, using agile methodologies. Communication was essential to carry out this project, and we can proudly say that it was successful in its delivery.

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
