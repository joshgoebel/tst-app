#!/usr/bin/env node
// let hljs     = require('./build/lib/index');

// let hljs     = require('./build/');
// let hljs     = require('./build/lib');
let hljs     = require('highlight.js');
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

// import swift from './build/lib/languages/swift.js';
// import excel from './build/lib/languages/excel.js'
const swift = require('highlight.js/lib/languages/swift.js')
const excel = require('highlight.js/lib/languages/excel.js')
// hljs.registerLanguage('swift', swift);
// hljs.registerLanguage('excel', excel);
// let bluebird = require('bluebird');
// import fs from 'fs';
const fs = require("fs");

hljs.configure({
  // hideUpgradeWarningAcceptNoSupportOrSecurityUpdates: true
})
// var data = fs.readFileSync("./test.excel", {encoding: "utf8"})
// var data = fs.readFileSync("./test/markup/swift/globals_definition.txt", {encoding: "utf8"})
var data = fs.readFileSync("./test/markup/excel/comments.txt", {encoding: "utf8"})
// var data = fs.readFileSync("./test.swift", {encoding: "utf8"})
// var data = fs.readFileSync("../language-detection.el/test/data/rosetta/excel/99-bottles-of-beer-1.excel", {encoding: "utf8"})
// var data = fs.readFileSync("./samples3.js", {encoding: "utf8"})
// var data = fs.readFileSync("./test/detect/csharp/default.txt", {encoding: "utf8"})
// var data = fs.readFileSync("./test/detect/swift/default.txt", {encoding: "utf8"})
// var data = fs.readFileSync("./test/markup/swift/swiftui.txt", {encoding: "utf8"})
// var data = ""
// var data = fs.readFileSync("../language-detection.el/test/data/rosetta/cpp/conn_local.h", {encoding: "utf8"})
// var r = hljs.highlight("prolog", data)
var r = hljs.highlight("excel", data, false);
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
