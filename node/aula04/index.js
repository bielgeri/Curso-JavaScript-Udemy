const fs = require('fs').promises;
const path = require('path');

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);

}

async function walk(files, rootDir) {
    for (let file of files) {
        const fileFulPath = path.resolve(rootDir, file)
        const stats = await fs.stat(fileFulPath)

        if (/\.git/g.test(fileFulPath)) continue;
        if (/node_modules/g.test(fileFulPath)) continue;

        
        if(stats.isDirectory()){
            readdir(fileFulPath);
            continue;
        } 

        if (
           /\.html$/g.test(fileFulPath)
            ) continue;
        console.log(fileFulPath)
    }
}
readdir('/Users/Gabriel Geribola/Documents/cursoTI/Curso-JavaScript-Udemy/')
