function for$(a, r, f, e){
	var n, b = a.length, i = r < 0 ? b - 1 : 0;
	e = e || 0; r >>= 0;
	(function z(I){
		if ((r < 0 && i < 0) || (r > 0 && i >= b))
			return e.apply ? e(r < 0 ? i + 1 : i - 1, !1) : 0;
		if (i < 0 || i >= b)
			throw new Error("for$ ERR_OUT_OF_RANGE: " + i + ", make sure go() matches \"step\" requirements.");
		f({
			i: i, v: "string" === typeof a ? a.charAt(i) : a[i],
			go: function(s){
				if (!isNaN(s) && s !== !1 && s >> 0)
					i += s;
				else if (s === !1)
					return e.apply ? e(i, !0) : 0;
				else i += r;
				z(i);
			}
		});
	})(i);
}
function iter(i, s, t, f, e){
	(function z(){
		if (s < 0 ? i > t : i < t)
			f({i: i, go: function(S){
				if (!1 === S)
					(e||0).apply ? e(i, !0) : 0;
				else if (!isNaN(S) && 0 !== parseInt(S))
					i += S, z();
				else i += s, z();
			}});
		else if ((e||0).apply)
			e(i, !0);
	})();
}
