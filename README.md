# ClutchApi
NodeTS Api using Express, Graphql.  Need to refactor to Trav template

How to build Node API:
https://www.youtube.com/watch?v=zRo2tvQpus8
How to add complex GraphGL data 
https://www.youtube.com/watch?v=PpCF8yRtd_A&list=PLuxS_TWA04F7539hy9rIoReOHv9iHtrZp&index=35

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


------------------- Todo -------------------

Finish OwnerDetail mutation CRUD
Add better error checking on all CRUD operation
Get tests running and passing
Add authentication for requests


------------------- Sample queries -------------------


# {
#   getOwners {
#     id
#     name
#   }
# }

# mutation {
#   getOwner(id: 2) {
#     name
#   }
# }

# mutation {
#   createOwner(name: "Ian") {
#     name
#   }
# }

# mutation {
#   updateOwner(id: 3, name: "Dan") {
#     name
#   }
# }

# mutation {
#   deleteOwner(id: 3) {
#     name
#   }
# }

# {
#   getWebsites {
#     id
#     name
# 		ownerId
#   }
# }

# mutation {
#   getWebsite(id: 2) {
#     name
#   }
# }

# mutation {
#   createWebsite(name: "Fox News") {
#     name
#   }
# }

# mutation {
#   updateWebsite(id: 7, name: "Fox News", ownerId: 2) {
#     name
#   }
# }

# mutation {
#   deleteWebsite(id: 3) {
#     name
#   }
# }

# {
#   getOwnerDetails {
#     id
#     name
# 		websites {
# 		  id
#         name
#         ownerId
# 		}
#   }
# }

# mutation {
#   getOwnerDetails(id: 1) {
#     id
#     name
# 		websites {
# 		  id
#         name
#         ownerId
# 		}
#   }
# }
