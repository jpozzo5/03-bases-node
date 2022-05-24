
//crear packet.json npm init
// npm i colors@XXXX
//npm uninstall colors
//npm run namescript
//npm install 
//git checkout -- . recupero mi foto del commit aa
const {crearArchivo} = require('./helpers/multiplicar');
var colors = require('colors');
const argv = require('yargs').argv;



console.clear()

const list = [1,2,3,4,5,6,7,8,9,10];
let num = 13;
if(argv.hasOwnProperty('base')){
    num = argv.base
}

console.log(argv);
console.log(num);
//CUANDO MANDE ARGUMENTOS POR CONSOLA
//const [ , , arg3] = process.argv;
//[,num] = arg3.split('=');

crearArchivo(num,list)
        .then( name_file =>{
            console.log(colors.bold.italic.underline.green(`Se ha creado con exito el archivo :${name_file}`));
 
        })
        .catch(err=>{
            console.log(colors.bold.italic.underline.red("error al crear el archivo"));
        });