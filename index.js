//initialize grid container
var gridContainer = document.querySelector('#grid-container');

//creates new grid
function FillGrid(gridSize){
	gridContainer.style.display = "inline-block";
	let squareSize = 500/gridSize;
	for(let i = 0; i < gridSize*gridSize; i++){ 
		var square = document.createElement("div");
		square.className = 'grid-item';
		square.style.width = (100 / gridSize) + "%";
		square.style.height = (100 / gridSize) + "%";
		square.style.display = 'float';
		square.style.setProperty('float', 'left');
		gridContainer.appendChild(square);

		square.addEventListener('mouseover', (e) => {
			e.target.style.backgroundColor = 'black';
		});
	}

}

FillGrid(30);

//button event listener
var button = document.getElementById('reset-button')
.addEventListener('click',buttonClick);

function buttonClick(){
	let gridSize = prompt("Please enter the number of squares per side");
	while (gridContainer.hasChildNodes()){
		gridContainer.removeChild(gridContainer.firstChild);
	}
	FillGrid(gridSize);
	
}