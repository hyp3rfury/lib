var arr = [1, "aw", 2, 3];
for$(function(v, i, next){
 // get me 2 items o:
 if (i < 2)
 {
  console.log(v, i);
  next();
 }
}, arr);

// filtering, it doesn't modify array, just continues following rules you added
var arr = [1, "aw", 2, 3];
for$(function(v, i, next){
 // get me 2 items o:
 if (i < 2)
 {
  console.log(v, i);
  next();
 }
}, arr, function(value, index){
 return index & 1; // will damn pass only odd indexed stuff to main function xD
});

// f*** filtering, how to find end of loop?
var arr = [1, "aw", 2, 3];
for$(function(v, i, next){
 // get me 2 items o:
 if (i < 2)
 {
  console.log(v, i);
  next();
 }
}, arr, 0, function(){
 // when ended, it will execute this func
});

// f*** all, can i just execute end when i think it's end?
// hell yeah, see:
var arr = [1, "aw", 2, 3];
for$(function(v, i, next, end){
 if (v == "aw")
  end();
 else console.log(v);
}, arr, 0, function(){
 // when ended, it will execute this func
});
