const vav=require("lodash");
const fields = ["name", "age", "city"];
const values = ["Shyam", 21, "Botad"];

const user = vav.zipObject(fields, values);

console.log(user);