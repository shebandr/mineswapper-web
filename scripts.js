var string = ''
var sss = 0
var bombs = 0
var table = []
var table_html 
var getRandomInt = function(max) {
  return Math.floor(Math.random() * Math.floor(max))}
var table_generator = function(x, y){
	for (var i = 0; i < y; i++) {
		for (var v = 0; v < x; v++) {
			sss = getRandomInt(10)
			if ((sss == 0) && (bombs < 10)){
				string = string + "1" 
				bombs =+ 1}
			else {
				string = string + "0" }}
		table[i] = string + "0"
		string = ""}
	table_html = "<table>"
	for (var q = 0; q < y ; q++) {
		table_html = table_html + "<tr class=\"s" + q + "\">"
		for (var z = 0; z < x; z++) {
			table_html = table_html + "<td id=\"t" + (q*10 + z) + "\" id=\"cell\" onclick=\"vskritie(" + z + "," + q + ")\" ></td>"    }
		table_html = table_html + "</tr>"   }
	table_html = table_html + "</table>"
	document.body.innerHTML = table_html}
var vskritie = function(x, y){
	if (table[y][x] == 1){
		alert("вы проиграли")}
	else {
		var elem = document.getElementById("t"+(y*10+x))
		if ((y < table.length-1) && (y != 0) && (x>0)){ 
			elem.innerText = Number(table[y][x+1]) + Number(table[y][x-1]) + Number(table[y+1][x+1]) + Number(table[y+1][x-1]) + Number(table[y+1][x]) + Number(table[y-1][x]) + Number(table[y-1][x+1]) + Number(table[y-1][x-1])}

		if ((y == table.length-1) && (x>0)){
			elem.innerText = Number(table[y][x+1]) + Number(table[y][x-1]) + Number(table[y-1][x+1]) + Number(table[y-1][x-1]) + Number(table[y-1][x])}
		
		if ((y == 0) && (x>0)){
			elem.innerText = Number(table[y][x+1]) + Number(table[y][x-1]) + Number(table[y+1][x+1]) + Number(table[y+1][x-1]) + Number(table[y+1][x])}
		
		if ((y < table.length-1) && (y != 0) && (x==0)){ 
			elem.innerText = Number(table[y][x+1]) + Number(table[y+1][x+1]) + Number(table[y+1][x]) + Number(table[y-1][x+1])}

		if ((y == table.length-1) && (x==0)){
			elem.innerText = Number(table[y][x+1]) + Number(table[y-1][x+1]) + Number(table[y-1][x])}
		
		if ((y == 0) && (x==0)){
			elem.innerText = Number(table[y][x+1]) + Number(table[y+1][x+1]) + Number(table[y+1][x])}
		elem.style.backgroundColor = "lightgray"
	}


}
