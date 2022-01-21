let fs = require("fs")

fs.readFile("movies.txt", "utf8", (error, datos)=> {

    if (error){
        console.log(error)

    }
    else{
        console.log(datos)
    }
})