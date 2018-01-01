# lib
Some Libraries
# for.js

var arr = [1, "aw", 2, 3];
for$(function(v, i, next){
	// get me 2 items o:
	if (i < 2)
	{
		console.log(v, i);
		next();
	}
}, arr);
