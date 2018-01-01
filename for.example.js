// intermediate level
var arr = [1, "aw", 2, 3, 4];
// this loop is intended for "queue" purpose
// used for awaiting anync stuff xD
// don't get ... it's just an example
for$(function(v, i, next){
	var h = new XMLHttpRequest();
	h.open("GET", "?id=" + v);
	h.onload = function(){
		next();
	};
	h.send();
}, arr);

// I saw "loop" can I damn use it instead? - Yes!
// example:
loop({
	L: [1, 2, 3, 4, 5],
	F: function(v, i, next){
		console.log(v, i);
		next();
	},
	end: function(){
		console.log("done!");
	}
});

// basic example
var arr = [1, "aw", 2, 3, 4];
for$(function(v, i, next){
 console.log(v);
 next();
}, arr);

// idk example
var arr = [1, "aw", 2, 3, 4];
for$(function(v, i, next){
 if (v == 3)
  next(false);
 else
 {
  console.log(v);
  next();
 }
}, arr);

// execute some function on loop end?
var arr = [1, "aw", 2, 3, 4];
for$(function(v, i, next){
 if (v == 3)
  next(false);
 else
 {
  console.log(v);
  next();
 }
}, arr, function(index, wasCancelled, arr){
 console.log("ended");
});
