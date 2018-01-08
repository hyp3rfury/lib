function loop(n){function o(n){return n instanceof Function}var t=0;!function e(c,i){(c=t-1)!=n.L.length?n.F(i,c,function(i){!1===i&&o(n.end)?n.end(c,!0,n.L):!1!==i&&e(c,n.L[t++])}):o(n.end)&&n.end(c,!1,n.L)}(t,n.L[t++])}
function for$(f,u,n){loop({L:u,F:f,end:n})}
function range(a,r){var n=(a=isNaN(a)?0:a)/(r=isNaN(r)?1:r);return new Array(Math.ceil(n<0?-n:n))}
