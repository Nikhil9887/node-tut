// Modules

const names = require('./4-names') // here, require returns an object
// which is assigned to names 
// we could tap into the properties using the dot(.) notation

const sayHi = require('./5-utils')

const data = require('./6-alternative')

require('./7-mind-grenade') // addValues will get executed as we have invoked 
// the function in 7-mind-grenade.js and imported the entire file here

console.log(names); // we dont get the secret var here cause it was not
// exported by us from 4-names.js file

sayHi(names.john)
sayHi(names.peter)
// sayHi(john)

console.log(data);