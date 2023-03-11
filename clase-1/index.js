// const isOdd = require("is-odd")
// console.log(isOdd(3))

// const fs = require("fs")
// const path = require("path")

// const readFile = async () => {
//     try {
//         const filePath = path.resolve(`${__dirname}/archivo.txt`)
//         const data = await fs.promises.readFile(filePath, "utf-8")
//         await fs.promises.writeFile(filePath, "Hola")
//         console.log(data);
//     } catch (error) {
//         console.log(error)
//     }
// }
// readFile()

const fetchApi = require("./utils/api.js")
fetchApi("https://rickandmortyapi.com/api/character")