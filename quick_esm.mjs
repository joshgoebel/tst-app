#!/usr/bin/env node
// const hljs = require('./build/lib/highlight');
// let hljs     = require('./build');
// import hljs from './src/highlight.js';
// import hljs from './build/lib/index.js';
// import hljs from './build';
import hljs from "highlight.js";
hljs.debugMode();

// const prolog = require('./build/lib/languages/prolog.js')
// const prolog = require('./build/lib/languages/prolog.js')
// hljs.registerLanguage('prolog', prolog);
// hljs.registerLanguage('prolog', prolog);
// let bluebird = require('bluebird');
// let fs       = bluebird.promisifyAll(require('fs'));

// var data = fs.readFileSync("./test/detect/prolog/default.txt", {encoding: "utf8"})
// // var data = fs.readFileSync("./test/markup/prolog/heredoc.txt", {encoding: "utf8"})
// var r = hljs.highlight("prolog", data)

// console.log(r.relevance)
// console.log(r.value)


// const hljs = require('./build/lib/highlight');

// const swift = require('./build/lib/languages/swift.js')
// const yaml = require('./build/lib/languages/yaml.js')
import swift from 'highlight.js/lib/languages/swift'
import yaml from 'highlight.js/lib/languages/yaml'
hljs.registerLanguage('swift', swift);
hljs.registerLanguage('yaml', yaml);
// let bluebird = require('bluebird');
import 'fs'

hljs.configure({
  // hideUpgradeWarningAcceptNoSupportOrSecurityUpdates: true
})
// var data = fs.readFileSync("./test.yaml", {encoding: "utf8"})
// var data = fs.readFileSync("./test/markup/swift/globals_definition.txt", {encoding: "utf8"})
// var data = fs.readFileSync("./test/markup/swift/symbols-numbers.txt", {encoding: "utf8"})
// var data = fs.readFileSync("./test.swift", {encoding: "utf8"})
// var data = fs.readFileSync("../language-detection.el/test/data/rosetta/yaml/99-bottles-of-beer-1.yaml", {encoding: "utf8"})
// var data = fs.readFileSync("./samples3.js", {encoding: "utf8"})
// var data = fs.readFileSync("./test/detect/csharp/default.txt", {encoding: "utf8"})
// var data = fs.readFileSync("./test/detect/swift/default.txt", {encoding: "utf8"})
// var data = fs.readFileSync("./test/markup/swift/swiftui.txt", {encoding: "utf8"})
let data = ""
// var data = fs.readFileSync("../language-detection.el/test/data/rosetta/cpp/conn_local.h", {encoding: "utf8"})
// var r = hljs.highlight("prolog", data)
var r = hljs.highlight("swift", data, false);
// hljs.highlightAuto(data)

// r.top = null;
// console.log(r)
// console.log(r.top)
console.log(r.relevance)
console.log(r.value)
// console.log("swift is", r.relevance)
console.log(r.illegalBy)
// console.log(r.context)
console.log(r.illegal)
// console.log(r.sofar)



console.log("---")
// console.log(r.emitter.toJSON())

// var r = hljs.highlight("zephir", data)


// console.log(r.value)
// console.log("zephir is", r.relevance)


// const used = process.memoryUsage();
// for (let key in used) {
//   console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
// }
