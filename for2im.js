function iter(i,n,t,o){o=+o||1,function e(){o<0||i<n&&t({v:i,i:i,go:function(t){!1===t?i=o<0?n+1:n-1:isNaN(t)||0===parseInt(t)?i+=o:i+=t,e()},e:o<0?i+o<=n:i+o>=n})}()}function for$(i,n,t,o){iter(o||0,i.length,function(t,o,e){e=t.i,o="string"==typeof i?i.charAt(e):i[e],n(t.e?{v:o,i:e,e:!0}:{v:o,i:e,e:!1,go:t.go})},t)}
