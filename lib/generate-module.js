"use strict"

var parse = require("cwise-parser")

var proc = [
  "module.exports=require('cwise-compiler')(",
    JSON.stringify(parse(function zeroCrossings(a, b, out, level, idx) {
      var da = a - level
      var db = b - level
      if((da >= 0) !== (db >= 0)) {
        out.push(idx[0] - 0.5 - 0.5 * (da - db) / (da + db))
      }
    })),
  ")"
]

console.log(proc.join(""))