# Capstone.Tchotchke.GH2401

Capstone Project
Link to Trello Board:
https://trello.com/b/PNUsHDcf/capstone-project

Link to documentation:
https://docs.google.com/spreadsheets/d/1tYqxJT_uP_ADT2LviBncoi75aRR_CYzKj5O136JIA7A/edit?usp=drive_web&ouid=104809665772122790445

_Scrum Master Lineup:_

- 3/21 - 3/31: Allison R.
- 4/1 - 4/7: Katy B.
- 4/8 - 4/14: Ali H.
- 4/15 - 4/21: Kira L.

_Installed: _

- Nodemon
- Vite
- React

# Setup

- create database

```
createdb acme_talent_agency_db
```

- install dependencies

```
cd client && npm install
cd server && npm install
```

- start server in server directory

```
cd server && npm run devStart
```

- start vite in client directory

```
npm run dev
```

- to test deployment

```
cd client && npm run build
```

browse to localhost:3000 (or whatever server port you used)

- build script for deploy

```
npm install && cd client && npm run build

```

- start script for deploy

```
node server/index.js

```

- environment variables for deploy

```
JWT for jwt secret
DATABASE_URL for postgres database
```

- environment variables for deployed site
