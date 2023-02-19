let obj = { name: "SVGAElement", num: 55 }
console.log(obj);
let jsTOJson = JSON.stringify(obj)
let jsonToObject = JSON.parse(jsTOJson)
console.log(jsTOJson);
console.log(jsonToObject);
