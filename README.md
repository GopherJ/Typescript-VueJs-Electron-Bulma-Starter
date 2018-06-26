# Analytics App

## Build
* `nvm install`
* `nvm use`
* `yarn`

# Run

# Project structure
* `build/` - webpack scripts for client compilation
* `config/` - webpack configs for client compilation
* `dist` - project compiled into pure ES5
  * `server` - compiled server
  * `client` - compiled front-end
* `src` - sources written in TypeScript and ES6
  * `server` - Node.js server 
  * `client` - Vue.js based UI
* `.editorconfig` - formatting code settings for [EditorConfig](http://editorconfig.org/) file
* `.nvmrc` - contains version of desired NodeJS (works with [nvm](https://github.com/creationix/nvm))
* `nodemon.json` - [Nodemon](https://github.com/remy/nodemon) setting used to reboot Node server
* `tsconfig.json` - TypeScript config for client compilation
* `yarn.lock` - do not remove or change this file 

# Dev possibilites
* add tslint to server compilator


=====================
# vue_ts

> A Vue.js project

## Build Setup

``` bash
# serve with hot reload at localhost:8080
npm run cdev

# build for production with minification
npm run cbuild

# build for production and view the bundle analyzer report
npm run cbuild --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
