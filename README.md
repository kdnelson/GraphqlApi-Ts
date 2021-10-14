# ClutchApi
A Node Api using Express, Graphql, and nodemon - written in Typescript

How to build the TS Node project:
https://www.youtube.com/watch?v=vyz47fUXcxU

Setup:
npm init
npm i -g typescript nodemon ts-node prettier
npm run tsc -- --init // creates a tsconfig.json
tsc --init
Setup "outDir": "./build" in tsconfig.json
Setup in scripts "build": "rm -rf build/ && prettier --write src/ && tsc"
npm i express body-parser dotenv
npm i --save-dev @types/express @types/body-parser @types/dotenv

