const fetch = require('node-fetch');
const CodeGen = require('swagger-typescript-codegen').CodeGen;
const fs = require('fs');

const url = 'https://localhost:44358/swagger/v1/swagger.json';

console.log('----Generating api code from swagger----');
console.log(`Fetching from ${url}`);

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

fetch(url)
    .then(response => response.json())
    .then(json => {
        const code = CodeGen.getTypescriptCode({
            moduleName: 'Api',
            className: 'Api',
            beautify: false,
            swagger: json,
            template: {
                class: fs.readFileSync('./apibuilder/templates/ts-class.mustache', 'utf-8'),
                method: fs.readFileSync('./apibuilder/templates/ts-method.mustache', 'utf-8'),
                type: fs.readFileSync('./apibuilder/templates/ts-type.mustache', 'utf-8')
            }
        });

        fs.writeFileSync('./src/api/index.ts', code);
    });
