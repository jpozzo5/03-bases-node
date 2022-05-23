
const fs = require('fs');
console.clear()

// const crearArchivo = (base,list)=>{
//     //Promesa Creada.
//     return new Promise((resolve,reject)=>{
//         let salida = '';
//         const name_file = `tabla-${base}.txt`
//         for (let i=0; i < list.length; i++){
//             salida += `${base} X  ${list[i]} : ${base*list[i]} \n `;
//         }
//         try{
            
//             fs.writeFileSync(name_file,salida);
//             resolve(name_file);
//         }catch{

//             reject (`Ha ocurrido un error al intentar crear el archivo ${name_file}`);
//         }
//     });    
// }


const crearArchivo = async(base,list)=>{
    //Promesa Creada.
    try{

        let salida = '';
        const name_file = `./salidas/tabla-${base}.txt`
        for (let i=0; i < list.length; i++){
            salida += `${base} X  ${list[i]} : ${base*list[i]} \n `;
        } 
        fs.writeFileSync(name_file,salida); 
        return name_file
    }catch(error){
        throw error
    }
}

module.exports = {
    crearArchivo:crearArchivo
}