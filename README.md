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

### Running development environment

Once you are done setting up the above, start by installing the project dependencies

```
npm install
```

Then, run the development server

```
npm run dev
```

Mercury should being running:

- Mercury frontend [http://localhost:3000](http://localhost:3000)
- Mercury API [http://localhost:3000/api](http://localhost:3000/api)

### Code style

Eslint and prettier should handle most of the code style and linting issues.

There is the possibility of both plugins clashing over a specific code rule. If you experience this back-and-forth rule clash, add a [prettier-ignore](https://prettier.io/docs/en/ignore.html) comment for that specific line, or send a message in the group chat to figure out a better way to handle these issues.

## Deployment

Coming soon...
