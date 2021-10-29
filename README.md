# ClutchApi
A Node Api using Express, Graphql, and nodemon - written in Typescript

How to build:
https://www.youtube.com/watch?v=zRo2tvQpus8

Note:
body-parser and @types/body-parser were added to express, so no need to download seperately

Typescript no longer allows implicite 'any' params
router.use((req, res, next) => {});
You need to explicitely define the 'any' type
router.use((req: any, res: any, next: any) => {});

Setup:
npm init
npm i -g typescript nodemon ts-node prettier
npm run tsc -- --init // creates a tsconfig.json
tsc --init
Setup tsconfig.json
    "outDir": "./build"
    "experimentalDecorators": true,                   /* Enable experimental support for TC39 stage 2 draft decorators. */
    "emitDecoratorMetadata": true,                    /* Emit design-type metadata for decorated declarations in source files. */
Setup in scripts "build": "rm -rf build/ && prettier --write src/ && tsc"
npm i express dotenv
npm i --save-dev @types/express @types/dotenv
npm i -g express-graphql graphql

Running API:
> npm start

Postman:
Get Request: localhost:5000/test/ping
Response: pong

Build API:
> npm run build

Sample queries:

{
  getUsers {
    id
    first_name
    last_name
    email
    gender
    ip_address
  }
}

mutation {
  createUser(first_name: "Kris", last_name: "Nelson", email: "kris.d.nelson@gmail.com", gender: "Male", ip_address: "21.90.121.0") {
    first_name
  }
}

mutation {
  updateUser(id: 11, first_name: "Romeo", last_name: "Withrington", email: "rwithringtona@yellowbook.com", gender: "Female", ip_address: "149.43.103.2") {
    first_name
    gender
  }
}

mutation {
  deleteUser(id: 1) {first_name}
}