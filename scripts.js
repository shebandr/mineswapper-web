var string = ""
var string_flag = ""
var loose = 0
var sss = 0
var bombs = 0
var table = []
var table_flag = []
var table_html 
var elem
var flags = 0
var getRandomInt = function(max) {
  return Math.floor(Math.random() * Math.floor(max))}
var table_generator = function(x, y){
	for (var i = 0; i < y; i++) {
		for (var v = 0; v < x; v++) {
			sss = getRandomInt(8)
			if ((sss == 0) && (bombs < 10)){
				string = string + "1" 
				bombs = bombs + 1}
			else {
				string = string + "0" }
			string_flag = string_flag + "0"}
		table[i] = string + "0"
		table_flag[i] = string_flag
		string_flag = ""
		string = ""}
	table_html = "<table id=\"table\">"
	for (var q = 0; q < y ; q++) {
		table_html = table_html + "<tr class=\"s" + q + "\">"
		for (var z = 0; z < x; z++) {
			table_html = table_html + "<td id=\"t" + (q*10 + z) + "\" class=\"cell\" onclick=\"vskritie(" + z + "," + q + ")\" oncontextmenu=\"flag(" + z + "," + q + ")\"></td>"    }
		table_html = table_html + "</tr>"   }
	table_html = table_html + "</table><div id=\"numbers\">бомб:<div id=\"bombss\">" + bombs + "</div></div>"
	document.body.innerHTML = table_html
	var element = document.getElementById("table")
	element.addEventListener("contextmenu", function(event) {
  console.log("Мы отменили стандартное действие браузера");
  event.preventDefault();
}, false);



}
var vskritie = function(x, y){
	var check = 0
	elem = document.getElementById("t"+(y*10+x))
	if ((table[y][x] == 1) && (loose == 0)){
		loose_game()}
	if ((table[y][x] == 0) && (loose == 0) && (table_flag[y][x] == 0)){
		
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
			check = Number(table[y][x+1]) + Number(table[y+1][x+1]) + Number(table[y+1][x]) + Number(table[y-1][x+1]) + Number(table[y-1][x])}
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

		table_flag[y] = replace(x, 2, y)
		elem.style.backgroundColor = "lightgray"}
		if (loose==1){
			console.log("ты уже проиграл")
		}
		if ((elem.innerText == "") && (loose == 0)){
			console.log('ы')
			}}

// var if_zero = function(x, y){
// 	if ((y>0) && (y<table.length-1) && (x>0) && (x<table[y].length-1)){
// 		vskritie(y, x-1)
// 		vskritie(y, x+1)
// 		vskritie(y+1, x)
// 		vskritie(y+1, x+1)
// 		vskritie(y+1, x-1)
// 		vskritie(y-1, x)
// 		vskritie(y-1, x+1)
// 		vskritie(y-1, x-1)}}

var flag = function(x, y){
	elem = document.getElementById("t"+(y*10+x))
	elem_bombs = document.getElementById("bombss")
	if ((table_flag[y][x] == 0) && (loose == 0) && (flags < bombs)){
		table_flag[y] = replace(x, 1, y)
		console.log("флаг на " + x + " " + y + " установлен")
		console.log(table_flag[y])
		elem.style.backgroundColor="yellow"
		flags = flags + 1
		elem_bombs.innerText = bombs - flags}
	else {if ((table_flag[y][x] == 1) && (loose == 0)){
		table_flag[y] = replace(x, 0, y)
		console.log("флаг на " + x + " " + y + " снят")
		console.log(table_flag[y])
		elem.style.backgroundColor="pink"
		flags = flags - 1
		elem_bombs.innerText = bombs - flags}}}

var replace = function(i, p, y){
	var stroka = ""
	for (var n = 0; n < table[0].length-1; n++) {
		if (n == i){
			stroka = stroka + p}
		else {
			stroka = stroka + table_flag[y][n]}}
	return(stroka)}

var loose_game = function() {
	console.log("проигрыш")
	loose = 1
	elem.style.backgroundColor = "red"
	}
	

