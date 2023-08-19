// Synchronous

const {readFileSync, writeFileSync, write} = require('fs');

console.log('Start');
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

// console.log(first);
// console.log(second);

writeFileSync(
    './content/result.txt',
    `Here is the result : ${first} ${second}`,
    {flag : 'a'}
);  

// writeFileSync -> if file not present then it creates one
// overrides the content in it with the new one
// if flag is set to a (append) then it wont override the existing content
// rather it will just append the new content to the end

console.log('Done with this task');
console.log('Starting next task');

