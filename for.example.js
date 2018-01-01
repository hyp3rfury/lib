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

// basic example
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
