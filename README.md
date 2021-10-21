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
Setup "outDir": "./build" in tsconfig.json
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