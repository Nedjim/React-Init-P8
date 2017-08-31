# Initialisation d'un projet React

## Installation des packages

```
$ npm init

$ npm install react react-dom --save
$ npm install webpack webpack-dev-server --save-dev
$ npm install babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-2 --save-dev
$ npm i -D babel-core
```

## Mise en place de l'arborescence

    - créer le fichier ./webpack.config.js
    - créer le fichier ./src/index.html
    - créer le fichier ./src/app/index.js
    - créer le fichier ./src/components/App.js

## Script

```js
{
"scripts": {
    "start": "npm run build",
    "build": "webpack -d && cp src/index.html dist/index.html && webpack-dev-server --content-base src/ --inline --hot",
    "build:prod": "webpack -p && cp src/index.html dist/index.html"
  }
}
```


## Lancer l'application

```
$ npm start
```
    - Aller sur: http://localhost:8080/
