# ExpressJS Demo Projects

Demo NodeJS projects using ExpressJS and MongoDB

## Homepage v1

-   convert a static site into Express app
-   doesn't use pug template framework
-   demonstrates how a static website can be served as Express app

## instructions:

-   \$ cd homepagev1
-   \$ npm install
-   \$ npm start
-   point browser to localhost:3000
-   \$ ctrl+c to kill the node server

## Homepage v2

-   convert a static site into Express app
-   uses pug template framework to minimize html contents
-   serve pug driven static website using node
-   ctrl+c to kill the node server

### instructions:

-   \$ cd homepagev2
-   \$ npm install
-   \$ npm start
-   point browser to localhost:3000

## Gradebook-v1

-   a simple gradebook application
-   keep track of students grades using MongoDB
-   needs MongoDB community server: https://www.mongodb.com/download-center/community
-   demonstrates html forms and data validations
-   demonstrates server sessions and authentications
-   automatically creates gradebook database name in the path provided while running mongod
-   use GUI client such as Robo 3T (https://robomongo.org/) to mange MongoDB

### instructions:

-   \$ cd gradebook-v1
-   \$ npm install
-   \$ mkdir data
-   \$ mongod --dbpath=data
-   \$ npm start

## Gradebook-v2

-   uses bootstrap theme
-   automatically creates gradebook database name in the path provided while running mongod

### instructions:

-   \$ cd gradebook-v2
-   \$ npm install
-   \$ mkdir data
-   \$ mongod --dbpath=data
-   \$ npm start
