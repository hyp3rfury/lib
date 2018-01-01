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
