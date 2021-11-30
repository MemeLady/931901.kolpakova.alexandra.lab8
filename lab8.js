function AddElement(){
	var row = document.createElement('div');
    row.innerHTML = `<input class = "one" type="text">
	<input class = "two" type="text">
	<button onclick="SwapUp(this)">↑</button>
	<button onclick="SwapDown(this)" >↓</button>
	<button onclick="Delete(this)" >x</button>`;
    document.querySelector('#container').appendChild(row);
}
function SwapUp(row){
	var parentRow = row.parentElement;
    var previousRow = parentRow.previousElementSibling;
    if (previousRow){
        parentRow.after(previousRow);
	}
}
function SwapDown(row){
	var parentRow = row.parentElement;
	var nextRow = parentRow.nextElementSibling;
	if (nextRow){
		parentRow.before(nextRow);
	}
}
function Delete(row){
	row.parentNode.remove();
}
function SaveElement(){
	var firstInput = document.querySelectorAll('.one');
	var secondInput = document.querySelectorAll('.two');
	let list = '';
	for (i=0; i<firstInput.length; i++){
		list += `"${firstInput[i].value}":"${secondInput[i].value}",`;
	}
	document.querySelector("#text").innerHTML = `{${list.slice(0, -2)}}`;
}



