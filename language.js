var red = document.getElementById('red');
var str = red.innerHTML;
str = str.replace( /\b(مرحبا كيف حالكانت)\b/g, '<span onmouseover="alert(\'Hello how are you!\');">$1</span>' );
red.innerHTML = str;