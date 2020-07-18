# Mercury

Platform for TAs and students to meet.

## Getting Started

Below you will find everyhing needed to run, test and deploy mercury.

### Prerequisites

Before you develop or run anything, please make sure you have the following installed on your machine:

- Node.js 10 or above
  - For first-time installations, use [nvm](https://github.com/nvm-sh/nvm) (Node Version Manager) to install and manager different node versions (Windows users, checkout [nvm-windows](https://github.com/coreybutler/nvm-windows))
- PostgreSQL local cluster
  - You can install this from [postgresql.org](https://www.postgresql.org/download/) or use your favorite package manager
- pgAdmin (Optional) - graphical user interface for postgres
  - There are many GUI apps for postgres databases. [pgAdmin](https://www.pgadmin.org/download/) is free and accessible in Mac, Windows and Linux

Additionally, mercury makes use of editor plugins to help mantain code quality (linting, code style, etc...). All of these plugins are available in most common IDEs and code editors (VSCode, Atom, Sublime Text, VS, vim)

The plugins you should install are:

- [Editorconfig](https://editorconfig.org/#download)
- [Prettier](https://prettier.io/docs/en/editors.html)
- [Eslint](https://eslint.org/docs/user-guide/integrations)

### Environment variables

Mercury looks for the postgres connection uri in the environment variables. To do so, add a `.env.local` file in the root of the project contaning `POSTGRES_CONNECTION_STRING` (git is already setup to ignore this file in future commits).

```
POSTGRES_CONNECTION_STRING=postgres://user:pass@127.0.0.1:5432/mercury
```

## Running development environment

Once you are done setting up the above, start by setting up the database

1. Create a database named `mercury` using pgAdmin or your favorite postgres client.
2. Add a `.env.local` file in the root of the project containing the necessary environment variables (See environment variable section)
3. Install project dependencies by running `npm install`
4. Run project migrations `npx sequelize-cli db:migrate --url postgres://user:pass@127.0.0.1:5432/mercury`
5. Run development server `npm run dev`

At this point, mercury should be up and running:

- Mercury frontend [http://localhost:3000](http://localhost:3000)
- Mercury API [http://localhost:3000/api](http://localhost:3000/api)

## Code style

Eslint and prettier should handle most of the code style and linting issues.

There is the possibility of both plugins clashing over a specific code rule. If you experience this back-and-forth rule clash, add a [prettier-ignore](https://prettier.io/docs/en/ignore.html) comment for that specific line, or send a message in the group chat to figure out a better way to handle these issues.

## Database models and migrations

Mercury makes use of [sequelize](https://sequelize.org/master/) ORM to manage the postgres db connection, models, migrations and seeds.

You can use [sequelize-cli](https://github.com/sequelize/cli) which contains some very helpful commands for creating, models, updating database and generating seed data:

- Create a model & migration
  - `npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string`
- Run migrations
  - `npx sequelize-cli db:migrate --url postgres://user:pass@127.0.0.1:5432/mercury`
- Undo migrations

  - `npx sequelize-cli db:migrate:undo --url postgres://user:pass@127.0.0.1:5432/mercury`

> **Note:** Some of the generated code above contains tons of comments and unnecessary functions. Feel free to remove/clean up what's not necessary.

## Deployment

Coming soon...
