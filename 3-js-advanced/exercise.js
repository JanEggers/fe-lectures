var fruit = Object.create({});
var banana = Object.create(fruit);
var apple = Object.create(fruit);

apple.color = "green";
fruit.color = "Yellow";

var oneapple = Object.create(apple);
var onebanana = Object.create(banana);
var secondbanana = Object.create(banana);

secondbanana.color = "brown";

delete apple.color;

console.log( "apple: " + oneapple.color);
console.log( "banana: " + onebanana.color);
console.log( "banana: " + secondbanana.color);
