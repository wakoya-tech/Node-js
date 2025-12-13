const { readFile, writeFile } = require('fs');

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

        writeFile('./content/result/result-async.txt', combinedContent, (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('File written successfully!');
        });
    });
});
