# ExpressJS Demo Projects

Express-based Demo Websites and Applications

## Homepage V1

- convert a static site into Express app
- doesn't use pug template framework
- demonstrates how a static website can be served as Express app

### Instruction to run Homepage V1

```bash
$ cd homepagev1
$ npm install
$ npm start
```

- point browser to localhost:3000
- \$ ctrl+c - to kill the node server

## Homepage V2

- convert a static site into Express app
- uses pug template framework to minimize html contents
- beginner's guide to pug - [https://www.sitepoint.com/a-beginners-guide-to-pug/](https://www.sitepoint.com/a-beginners-guide-to-pug/)
- serve pug driven static website using node

### Instructions to run Homepage V2

```bash
$ cd homepagev2
$ npm install
$ npm start
```

- point browser to localhost:3000
- ctrl+c to kill the node server

## Homepage V3

- same as Hompage V2 but uses Jade as template framework
- learn about Jade here - [https://www.sitepoint.com/jade-tutorial-for-beginners/](https://www.sitepoint.com/jade-tutorial-for-beginners/)
- Jade is almost a drop-in replacement for Pug
- main difference: Jade doesn't allow html template unlike pug!
  - compare: views/includes/nav.pug in V2 vs views/includes/nav.pug in V3

### Instructions to run Homepage V3

```bash
$ cd homepagev3
$ npm install
$ npm start
```

- point browser to localhost:3000
- ctrl+c to kill the node server

## Gradebook V1

- a simple gradebook application
- keep track of students grades using MongoDB
- needs MongoDB community server: [https://www.mongodb.com/download-center/community](https://www.mongodb.com/download-center/community)
- demonstrates html forms and data validations
- demonstrates server sessions and authentications
- automatically creates gradebook database name in the path provided while running mongod
- use GUI client such as Robo 3T [https://robomongo.org/](https://robomongo.org/) or MongoDB Compass to mange MongoDB

### Instructions to run Gradebook V1

- first run mongodb local server from a terminal

```bash
$ mkdir data
$ mongod --dbpath=data
```

- then run the gradebook v1 app from another terminal

```bash
$ cd gradebook-v1
$ npm install
$ npm start
```
- point browser to localhost:3000
- ctrl+c to kill the node server

## Gradebook V2

-   uses bootstrap theme
-   automatically creates gradebook database name in the path provided while running mongod

### Instructions to run Gradebook V2

- first run mongodb local server from a terminal

```bash
$ mkdir data
$ mongod --dbpath=data
```

- then run the gradebook v1 app from another terminal

```bash
$ cd gradebook-v1
$ npm install
$ npm start
```
- point browser to localhost:3000
- ctrl+c to kill the node server