# YelpCamp Project Rewrite

Re-writing old YelpCamp campsite reviews app using ES6 and new technologies. Backedn in
Node.js/Express, frontend in React.

#### Work in progress.

#### To run end-to-end tests:

Sping up MongoDB database with `mongod` and run command `npm run endtoend`.

##### Short term fixes:

- Using an `.env` file to ignore Jest react-scripts version error.

- Using `npm test` runs only server side tests. To run client, navigate to client foler and run command. Tests will not run on client properly if called from the root folder.
