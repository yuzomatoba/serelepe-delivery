# <img src="https://github.com/yuzomatoba/serelepe-delivery/assets/108953241/93fe3415-191c-4dd6-b328-d34c7644fbf3" alt="Serelepe Delivery" width="200" height="200">

 Serelepe Delivery <img src="https://github.com/yuzomatoba/serelepe-delivery/assets/108953241/93fe3415-191c-4dd6-b328-d34c7644fbf3" alt="Serelepe Delivery" width="200" height="200">



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

The group is composed of the following developers:

    - Gabriel Palhares  (group leader)
    - Yuzo Matoba
    - Victor Alejandro Cabral Orellana

##### Testimonials about the project

- Gabriel's Testimonial: Developing the Serelepe Delivery project represented a great personal challenge for me since it was my first full-stack project developed from scratch. Thanks to the collaboration of my team, we managed to complete the development within the stipulated deadline. This journey provided a series of valuable technical learnings and proved to be an excellent opportunity to improve my soft skills. I would like to express my deep gratitude to my colleagues, Yuzo and Victor, for their joint work and dedication throughout the process. Yuzo played a key role in front-end development, using the Context API to ensure the proper functioning of our project. And Victor, with his incredible work on the back-end, using the MSC model, contributed significantly to the achieved success. Once again, I would like to thank both of them for their effort and dedication, which were essential to completing our project.

- Yuzo's Testimonial: Working with Gabriel and Victor provided an understanding of different perspectives of logical thinking, expanding my scope in relation to different ways of achieving the same result. Gabriel's previous programming experience and his empathy were fundamental for his leadership to guide us in achieving the established goals. As for Victor, his sense of responsibility and camaraderie contributed immensely to keep us synchronized and follow an almost uniform workflow. The time management tool (Agile Methodology) we used was Trello to organize and perform the steps according to each member's responsibility and time. Gratitude to my colleagues and friends for the incredible work they developed with me. They were exceptional and great partners in this project, of which I am very proud.

- Victor's Testimonial: This group project was quite challenging at first. I had never worked with Gabriel or Yuzo before, so I was very excited to do this project with them. I can say it was one of the best decisions I made, to carry out this project with two great developers like them, added a lot to my knowledge in both hardskills and softskills. It was definitely the most enjoyable project and the one where I learned the most during my time at Trybe. I just have to thank my colleagues for these intense 13 days of the project!
## Group Member Contacts

#### Gabriel's Contact
- Email: devpalhares@gmail.com
- LinkedIn: https://www.linkedin.com/in/devpalhares/
- Github: https://github.com/GPalhares

#### Victor's Contact
- Email: victor_cabral_o@hotmail.com
- LinkedIn: https://www.linkedin.com/in/victor-alejandro-orellana/
- Github: https://github.com/mendokusaiiii

#### Yuzo's Contact
- Email: fabioymatoba@uol.com.br
- LinkedIn: https://www.linkedin.com/in/fabio-yuzo
- Github: https://github.com/yuzomatoba 
