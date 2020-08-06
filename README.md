## Deere Project 2 Starter Code

## Set Up

1. Fork and clone this repo
1. `cd` into the folder and run `npm install`
1. In the root of your app, `touch .env` and add:

   ```bash
   PORT=3000
   JWT_SECRET=pancakes
   ```

1. Check out your `config/config.json` file. You'll need to create a database called `project2_development`
1. Sequelize is included in the app. You have a `User` model. Run `db:migrate` to create the `Users` table in your database.
1. Run `nodemon` and go to the Homepage: `localhost:3000/`

![](https://i.imgur.com/uuhrOxQ.png)

<br>

## Routes

You have the following routes available.

#### controllers/authController.js

- GET and POST `localhost:3000/auth/signup`
- GET and POST `localhost:3000/auth/login`
- GET `localhost:3000/auth/logout`

#### controllers/usersController.js

- GET `localhost:3000/profile/:id`

<br>

## Additional Resources

- [Fruit App Solution](https://git.generalassemb.ly/jdr-0622/fruit-app-in-class)
- [Pokemon Express Solution](https://git.generalassemb.ly/jdr-0622/pokemon-express-sequelize6)
- [Google Routes Spreadsheet](https://docs.google.com/spreadsheets/d/14-LHKXLtEkp_vKEz3qSKjREnrmSyzQ9fimTlmrPsZsQ/edit#gid=0)
- [JSON Web Tokens](https://jwt.io/)


############# Darryl adds
WDXDG02701VCG:deere-project2-starter dg02701$ npx sequelize model:generate --name Item --attributes title:INTEGER,issue:INTEGER,publicationCoverDate:DATEONLY,volume:INTEGER,volumneYear:INTEGER,variantCover:INTEGER,typeItem:STRING,priceCover:DECIMAL,pricePaid:DECIMAL,datePaid:DATEONLY,condition:STRING,valuation:DECIMAL,valuationDate:DATEONLY,valuationSource:STRING,publisher:STRING,keyWords:STRING,boxNumber:STRING,boxDivider:STRING,boxLocation:STRING,artist1:STRING,artist2:STRING,writer1:STRING,writer2:STRING,inker:STRING

WDXDG02701VCG:deere-project2-starter dg02701$ git commit -m "corrected error with '--attributes' Issue 14 & added delete elements to Item model and migration files"

npx sequelize db:migrate

Loaded configuration file "config/config.json".
Using environment "development".
== 20200803205034-create-item: migrating =======
== 20200803205034-create-item: migrated (0.058s)
npx sequelize migration:generate --name add-userId-to-fruits
WDXDG02701VCG:deere-project2-starter dg02701$ npx sequelize migration:generate --name add-userId-to-items

Sequelize CLI [Node: 12.18.1, CLI: 6.2.0, ORM: 6.3.3]

migrations folder at "/Users/dg02701/sei/projects/deere-project2-starter/migrations" already exists.
New migration was created at /Users/dg02701/sei/projects/deere-project2-starter/migrations/20200804113018-add-userId-to-items.js .
added code to addColumn in migration "20200804113018-add-userId-to-items.js"
Ran npx sequelize db:migrate to run the new migration file.
WDXDG02701VCG:deere-project2-starter dg02701$ npx sequelize db:migrate

Sequelize CLI [Node: 12.18.1, CLI: 6.2.0, ORM: 6.3.3]

Loaded configuration file "config/config.json".
Using environment "development".
== 20200804113018-add-userId-to-items: migrating =======
== 20200804113018-add-userId-to-items: migrated (0.022s)

**** one User can have many Items (comics in this case); therefore, 
   User has a many-to-one relationship with Items
   
**** one individual item (physical comic) can have only one User (owner/collector); therefore,
   Items has a one-to-many relationship with User
   Foreign key column userId added to Items table to associate the two tables
   
Added associations to: <br>
   models/user.js >> User.hasMany(models.Item, { foreignKey: "userId" }); <br>
   models/item.js >> Item.belongsTo(models.User, { foreignKey: "userId" }); <br>

Why not the 'id'?
   TypeError: /Users/dg02701/sei/projects/deere-project2-starter/views/items/index.ejs:22
    20|                 </a>
    21|                 			<!--  ADD DELETE FORM HERE-->
 >> 22| 			<form action="/items/<%= item[i].id %>?_method=DELETE" method="POST">
    23| 				<input type="submit" value="Delete file"/>
    24|             </form>
    25|                         <!-- Add edit link here  -->

Cannot read property 'id' of undefined
    at eval (/Users/dg02701/sei/projects/deere-project2-starter/views/items/index.ejs:22:34)
    at Array.forEach (<anonymous>)
    at eval (/Users/dg02701/sei/projects/deere-project2-starter/views/items/index.ejs:10:13)
