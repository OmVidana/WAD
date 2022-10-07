const fs = require('fs');
fs.writeFile('helloworld.txt', 'Hello World!', 'utf-8', (err) => {
    if (err)
        console.log(err);
    else {
        console.log("Archivo creado con éxito. Contenido:" + "\n" + fs.readFileSync('helloworld.txt', 'utf-8'))
    }
});
