function iter(i,t,f,s){s=+s||1;(function z(){if(s<0?i>t:i<t)f({v:i,i:i,go:function(S){if(!1===S)i=s<0?t+1:t-1;else if(!isNaN(S)&&0!==parseInt(S))
i+=S;else i+=s;z()},e:s<0?i+s<=t:i+s>=t})})()}
function for$(a,f,r,i){iter(i||0,a.length,function(o,v){var i=a[o.i],v=o.v;f(o.e?{v:v,i:i,e:!0}:{v:v,i:i,e:!1,go:o.go})},r)}
