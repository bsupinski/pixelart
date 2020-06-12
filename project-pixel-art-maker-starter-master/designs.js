// variables for color selection and table
var color = document.getElementById('colorPicker');
var table = document.getElementById('pixelCanvas');
var sizePicker = document.getElementById('sizePicker');
// variables for grid size
var height = document.getElementById('inputHeight').value;
var width = document.getElementById('inputWidth').value;

makeGrid(height, width);
// event listener to remove auto refresh on submit button.
sizePicker.addEventListener('submit', function() {
  event.preventDefault();
  //this remove the first grid space
  table.firstElementChild.remove();
// information to determine grid size
  var height = document.getElementById('inputHeight').value;
  var width = document.getElementById('inputWidth').value;

  makeGrid(height, width);
});

// function to create the grid
function makeGrid(height, width) {
  for(x = 0; x < height; x++){
    let row = table.insertRow(x);
    for(y =0; y < width; y++){
      let cell = row.insertCell(y);
      //add style of color picker to grid selection
      cell.addEventListener('click', function() {
        cell.style.backgroundColor = color.value
      });
    }
  }
}
