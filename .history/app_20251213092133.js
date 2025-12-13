const { readFile, writeFile } = require('fs');
const {readFile}
readFile('./content/frist.txt', 'utf8', (err, firstResult) => {
    if (err) {
        console.log(err);
        return;
    }

    readFile('./content/second.txt', 'utf8', (err, secondResult) => {
        if (err) {
            console.log(err);
            return;
        }

        const combinedContent = `Here is the result: ${firstResult}, ${secondResult}`;

        writeFile('./content/result/result-async.txt', `Here the result`,combinedContent, (err) => {
      
            if (err) {
                console.log(err);
                return;
            }
            console.log('File written successfully!');
        });
    });
});
