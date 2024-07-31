const setEnv = () => {
    const fs = require('fs');
    const writeFile = fs.writeFile;
    const targetPath = './src/environments/environment.ts';
    require('dotenv').config({
      path: 'src/.env'
    });
    // `environment.ts` file structure
    const envFile = `export const environment = {
        API_URL: '${process.env.API_KEY}',
        production: true,
        };
        `;

    writeFile(targetPath, envFile, (err) => {
        if (err) {
            console.error(err);
            throw err;
        } else {
            console.log(`Successfully generated environment.ts`);
        }
    });
}
setEnv();