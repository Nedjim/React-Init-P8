let path        = require('path');                  // package de node qui permet de gérer les chemins
let DIST_DIR    = path.resolve(__dirname, 'dist');  // chemin du dossier dist
let SRC_DIR     = path.resolve(__dirname, 'src');   // chemin  du dossier src

let config = {
    entry: SRC_DIR + '/app/index.js',               // point d'entrée de notre app

    output: {                                       // sortie final de notre app
        path: DIST_DIR,
        filename: 'bundle.js',
    },
    module: {                                        
        loaders: [{                                 // différents tests
                test: /\.js?/,                      // syntaxe des fichiers à analyser
                include: SRC_DIR,                   // chemin du dossier SRC
                loader: 'babel-loader',             // compilateur qui transforme code ES6 en ES5
                query: {
                    presets: ['react', 'es2015', 'stage-2'] 
                }
        }]
    }
};

module.exports = config;                            // envoie de la config