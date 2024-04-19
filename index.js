const superheroes = require('superheroes');
const supervillains = require('supervillains');

supervillains.all;
//=> ['Abattoir', 'Able Crown', …]

var  villain=  supervillains.random();
//=> 'Mud Pack'
superheroes.all;
//=> ['3-D Man', 'A-Bomb', …]
 
var hero= superheroes.random();
//=> 'Spider-Ham'

console.log(hero);
console.log("hii");
console.log(villain);