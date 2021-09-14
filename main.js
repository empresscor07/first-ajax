//need to have an HTML page that references this page
//need to edit this page to add errors and fix curly brakets 

var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

btn.addEventListener('click', 
	function() {
		var ourRequest = new XMLHttpRequest();
		//loads a different url each time by using page counter
		ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter +'.json');
		ourRequest.onload = 
			function() {
				var ourData = JSON.parse(ourRequest.responseText);
				//function to render html called
				renderHTML(ourData);
			};
		ourRequest.send();
		pageCounter++
		//check to see if page counter is above the number of pages we have.
		if (pageCounter > 3) {
			btn.classList.add("hide-me");
		};
	});

function renderHTML(data){
//adds html to empty div
	var htmlString = "";
	//loop through json data gotten via ajax and concat to string
	for (i = 0; i < data.length; i++) {
		htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";
		//embedded for loop for foods array
		for (ii = 0; ii < data[i].foods.likes.length; ii++) {
			if (ii == 0) {
				htmlString += data[i].foods.likes[ii];
			}
			else {
				htmlString += " and " + data[i].foods.likes[ii];
			}
		}
		htmlString += ".</p>";
	}
	animalContainer.insertAdjacentHTML('beforeend', htmlString);
};
