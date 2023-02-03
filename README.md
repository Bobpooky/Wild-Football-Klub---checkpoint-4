
Description

Wild Code School Checkpoint 4 project : "Wild Football Klub.
A small app to manage a football team of Wilders.
The objective was to create 5 pages. Currently the home page and the manage teams page are built.
On this last page, you can create a team  and create players. I didn't get the time to add a delete feature in the fron t and the back but it was planned.
Next steps for the app will be to create a page to add player in teams and set a match play function on the dedicated page.
Finally I will create a page to manage the club, which will show technologies I learned at the wild code school with the possibility to add and manage them.

Steps

1. Clone the repo from Github.
2. Run `npm install`.
3. Create _.env_ from _.env.sample_ file and add your DB parameters. Don't delete the _.sample_ file, it must be kept.

```
DB_HOST=your_db_host
DB_PORT=your_db_port
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
```

4. Do `npm run migrate`.
5. Start the server in dev mode with `npm run dev`. This will run `index.js` using _nodemon_.
6. Go to `localhost:5000` with your favorite browser.

