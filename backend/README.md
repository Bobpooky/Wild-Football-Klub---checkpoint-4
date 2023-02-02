
## Description

This repository is a simple Express MVC structure from scratch.

## Steps

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

