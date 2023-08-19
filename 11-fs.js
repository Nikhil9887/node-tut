// Asynchronous

const { readFile, writeFile } = require("fs");

console.log('Start');
readFile("./content/first.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    // console.log(data);
    const first = data;
    //   console.log(first);
    readFile("./content/second.txt", "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        // console.log(data);

        const second = data;

        writeFile(
            './content/result-async.txt',
            `Here is the result : ${first} ${second}`,
            (err, data) => {
                if(err){
                    console.log(err);
                    return;
                }
                // console.log(data);
                console.log('Done with this task');
            }
        )
    });
});

console.log('Starting next task');


