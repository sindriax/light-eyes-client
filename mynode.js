const setEnv = () => {
    const fs = require('fs');
    const writeFile = fs.writeFile;
    const targetPath = './src/environments/environment.ts';
    const colors = require('colors');
    require('dotenv').config({
      path: 'src/.env'
    });
    // `environment.ts` file structure
    const envFile = `export const environment = {
        apiKey: '${process.env.API_KEY}',
        production: true,
        };
        `;

    writeFile(targetPath, envFile, (err) => {
        if (err) {
            console.error(err);
            throw err;
        } else {
            console.log(successColor, `${checkSign} Successfully generated environment.development.ts`);
        }
    });
}
setEnv();