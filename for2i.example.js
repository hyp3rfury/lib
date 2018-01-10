// syntax: iter(init, beforeN, func, step=1)
// syntax: for$(array, func, step=1, start=0)

// array version
for$([1, 2, 3], function(o){
	console.log(o.i, o.v);
	if (o.e)
		console.log("loop ended 2");
	else o.go();
});

// fast for numbers
iter(0, 4, function(o){
	console.log(o.v);
	if (o.e)
		console.log("loop ended 1");
	else o.go();
});
