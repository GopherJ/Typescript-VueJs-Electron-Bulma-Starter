# Typescript-VueJs-Bulma-Starter

## Install

1. `git clone https://github.com/GopherJ/Typescript-VueJs-Bulma-Starter`
2. `yarn`

# Project Structure

- `build/` - webpack scripts for client compilation
- `config/` - webpack configs for client compilation
- `dist` - project compiled into ES5
  - `server` - compiled server
  - `client` - compiled front-end
- `src` - sources written in TypeScript and ES6
  - `server` - Node.js server 
  - `client` - Vue.js based UI
- `.editorconfig` - formatting code settings for [EditorConfig](http://editorconfig.org/) file
- `.nvmrc` - contains version of desired NodeJS (works with [nvm](https://github.com/creationix/nvm))
- `nodemon.json` - [Nodemon](https://github.com/remy/nodemon) setting used to reboot Node server
- `tsconfig.json` - TypeScript config for client compilation
- `yarn.lock` - do not remove or change this file 

## Setup

```bash
# build the client VueJs based UI
yarn cbuild

# build the NodeJs express server
yarn sbuild

# build both client-side and server-side
yarn build

# dev with hot-reload webpack server -> watch client change
yarn cdev

# dev with hot-reload express server -> watch server change
yarn sdev

# app run
yarn start
```
