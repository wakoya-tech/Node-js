const { readFile } = require('fs')

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

const start = async () => {
    try {
        const first = await getText('./content/frist.txt')
        const second = await getText('./content/frist.txt')

        console.log(first, second)

        // This will cause an error (file does not exist)
        const third = await getText('./content/frist.txt0')
        console.log(third)

    } catch (error) {
        console.log(error)
        console.log("error");
    }
}

start()
