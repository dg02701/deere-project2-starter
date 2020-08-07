Project Description
Project is for an app to be used by comic book collectors to track their collection.  The app has to tables for MVP:  Users (the collectors) and Items (the comics).  Generic names are used as much as possible such as 'user' and 'item' so that most code can be easily reporposed for some other collection db app.  The reuired fields are those that a collector will always have if the physical item is in their position.  Also, some fields, such as the credits to the talent, are things that not all collectors track, etc.  Therefore, those are not required fields.

User Stories
1.	MVP - As a user, I want to know what comics I have in my collection.
2.	MVP - As a user, I want to have this info on each comic (* = required):
 
*Title
*Issue
*Pub date
*Volume
Volume year
Variant cover #
Type (original, TP,  reprint, hb, variant)
*Cover price
Paid price
Condition
Current valuation
Date for valuation
Souce of valuation
*Publisher
Key words
Stored in box #
Stored at divider in box
Location of box
Artist
Writer
Inker
Lettering
Coloring
Editor
deleteFlag 
deleteReason
*userId
 
3.	MVP - As a user, I want to be able to find a comic in my collection
4.	MVP - As a user, I want to be able to edit a comic.
5.	MVP - As a user, I want to be able to delete an entry if error
6.	MVP - As a user, I want to be able to show comics I used to own but have dispositioned in someway
7.	As a user, I want to have very easy data entry.
8.	As a user, I want to know current valuation of collection
9.	As a user, I want to know which comics in a series I do NOT have (a ‘collect’ list)
10.	As a user, I want to mass load my collection from a file w/o knowing js, etc.
11.	STRETCH** As a user, I do not want other users to be able to see my collection unless I have sharded it with them.  OPT-IN! for sharing.
12.	STRETCH** As a user, I want interface to be graphical.  For example, use Bat device to ID folders for my Batman comics, etc.
13.	STRETCH** As a user, I want graphic reprint to show as the individual comics to avoid duplicates.  Therfore, ‘collect’ list takes into account these reprints and notes them as such.


Project Links
github repo:  https://github.com/dg02701/deere-project2-starter
deployment: https://darryl-project2-starter-app.herokuapp.com/
Wireframes:
 - ERD https://github.com/dg02701/deere-project2-starter/commit/dc3f50aa1ab1b0dd173761eec51b6aeaade8bb64
 Github is not handling the pdf well.  Download the file to open as pdf


MVP/PostMVP

MVP - User Stories 1 through 6
PostMVP - User Stories 7 through 10
STRETCH - 11 through 13



Technologies used:
HTML, CSS (needs much improvement), node.js, express, PostgreSQL and pgAdmin.  Full list below:
    "bcryptjs": "^2.4.3",
    "cookie-parser": "^1.4.5",
    "dotenv": "^8.2.0",
    "ejs": "^3.1.3",
    "express": "^4.17.1",
    "jsonwebtoken": "^8.5.1",
    "method-override": "^3.0.0",
    "pg": "^8.3.0",
    "sequelize": "^6.3.3",
    "sequelize-cli": "^6.2.0"
App was deployed using Heroku site.

Code Snippet
Use this section to include a brief code snippet of functionality that you are proud of an a brief description. Code snippet should not be greater than 10 lines of code.


Issues and Resolutions
Major issues are with CSS and lack of effeciency with it.

Also, linking the two tables so that the user id of collector logged in can be compared with the FK  (item.userId) so each user can see only their items.  The id value at some step was converted from integer to string.  Resolved by changing comparison from '===' to:
<% if (item.userId == id) {%> 




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

06-Aug-2020 HEROKU
WDXDG02701VCG:deere-project2-starter dg02701$ heroku login

heroku: Press any key to open up the browser to login or q to exit: 
Opening browser to https://cli-auth.heroku.com/auth/cli/browser/e3335f92-bad8-467b-a45a-19d5f96f1f60
Logging in... done
Logged in as degman@mchsi.com
WDXDG02701VCG:deere-project2-starter dg02701$ 
