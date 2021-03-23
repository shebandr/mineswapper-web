var string = ''
var loose = 0
var sss = 0
var bombs = 0
var table = []
var table_html 
var elem
var getRandomInt = function(max) {
  return Math.floor(Math.random() * Math.floor(max))}
var table_generator = function(x, y){
	for (var i = 0; i < y; i++) {
		for (var v = 0; v < x; v++) {
			sss = getRandomInt(8)
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
			table_html = table_html + "<td id=\"t" + (q*10 + z) + "\" class=\"cell\" onclick=\"vskritie(" + z + "," + q + ")\" ></td>"    }
		table_html = table_html + "</tr>"   }
	table_html = table_html + "</table>"
	document.body.innerHTML = table_html}
var vskritie = function(x, y){
	var check = 0
	elem = document.getElementById("t"+(y*10+x))
	if ((table[y][x] == 1) && (loose == 0)){
		loose_game()}
	if ((table[y][x] == 0) && (loose == 0)){
		
		if ((y < table.length-1) && (y != 0) && (x>0)){ 
			check = Number(table[y][x+1]) + Number(table[y][x-1]) + Number(table[y+1][x+1]) + Number(table[y+1][x-1]) + Number(table[y+1][x]) + Number(table[y-1][x]) + Number(table[y-1][x+1]) + Number(table[y-1][x-1])}
		if(check == 0){
			elem.innerText = ''}
		else {
			elem.innerText = check}
		if ((y == table.length-1) && (x>0)){
			check = Number(table[y][x+1]) + Number(table[y][x-1]) + Number(table[y-1][x+1]) + Number(table[y-1][x-1]) + Number(table[y-1][x])}
		if(check == 0){
			elem.innerText = ''}
		else {
			elem.innerText = check}
		
		if ((y == 0) && (x>0)){
			check = Number(table[y][x+1]) + Number(table[y][x-1]) + Number(table[y+1][x+1]) + Number(table[y+1][x-1]) + Number(table[y+1][x])}
		if(check == 0){
			elem.innerText = ''}
		else {
			elem.innerText = check}

		if ((y < table.length-1) && (y != 0) && (x==0)){ 
			check = Number(table[y][x+1]) + Number(table[y+1][x+1]) + Number(table[y+1][x]) + Number(table[y-1][x+1])}
		if(check == 0){
			elem.innerText = ''}
		else {
			elem.innerText = check}

		if ((y == table.length-1) && (x==0)){
			check = Number(table[y][x+1]) + Number(table[y-1][x+1]) + Number(table[y-1][x])}
		if(check == 0){
			elem.innerText = ''}
		else {
			elem.innerText = check}

		if ((y == 0) && (x==0)){
			check = Number(table[y][x+1]) + Number(table[y+1][x+1]) + Number(table[y+1][x])}
		if(check == 0){
			elem.innerText = ''}
		else {
			elem.innerText = check}

		elem.style.backgroundColor = "lightgray"}
		if (loose==1){
			console.log("ты уже проиграл")
		}
		if ((elem.innerText == "") && (loose == 0)){
			console.log('ы')
			}}

var if_zero = function(x, y){
	if ((y>0) && (y<table.length-1) && (x>0) && (x<table[y].length-1)){
		vskritie(y, x-1)
		vskritie(y, x+1)
		vskritie(y+1, x)
		vskritie(y+1, x+1)
		vskritie(y+1, x-1)
		vskritie(y-1, x)
		vskritie(y-1, x+1)
		vskritie(y-1, x-1)
	}

}

var loose_game = function() {
	console.log("проигрыш")
	loose = 1
	elem.style.backgroundColor = "red"
	}
	

