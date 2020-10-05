const minimist  = require('minimist')
const arguments = minimist(process.argv.slice(2))
const fs = require('fs')
const Ceasarcipher = require('./Ceasarcipher')
const { pipeline } = require('stream')

//-a, --action: an action encode/decode
const action = arguments.a || arguments.action
//-s, --shift: a shift
const shift  = arguments.s || arguments.shift
//-i, --input: an input file
const input  = arguments.i || arguments.input
//-o, --output: an output file
const output = arguments.o || arguments.output

console.info(fs.createReadStream(input));

// pipeline(
//   fs.createReadStream(input),
//   fs.createWriteStream(output, {flags: 'a'}),
//   (err) => {
//         if (err) {
//             process.stderr.write(`Something went wrong. Check your inputs - ${err}`)
//         }
//     }
// )