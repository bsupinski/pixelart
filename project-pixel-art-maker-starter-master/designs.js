// variables for color selection and table
let color = document.getElementById('colorPicker');
let table = document.getElementById('pixelCanvas');
let sizePicker = document.getElementById('sizePicker');
// variables for color selection and table
let color = document.getElementById('colorPicker');
let table = document.getElementById('pixelCanvas');
let sizePicker = document.getElementById('sizePicker');
// variables for grid size
let height = document.getElementById('inputHeight').value;
let width = document.getElementById('inputWidth').value;

makeGrid(height, width);
// event listener to remove auto refresh on submit button.
sizePicker.addEventListener('submit', function() {
  event.preventDefault();
// information to determine grid size
  let height = document.getElementById('inputHeight').value;
  let width = document.getElementById('inputWidth').value;
  //this remove the base cell created.
  table.firstElementChild.remove();

  makeGrid(height, width);
});

// function to create the grid
function makeGrid(height, width) {

  for(i = 0; i < height; i++){
    let row = table.insertRow(i);
    for(j =0; j < width; j++){
      let cell = row.insertCell(j);
      //add style of color picker to grid selection
      cell.addEventListener('click', function() {
        if(cell.style.backgroundColor = color.value === color.value){
          cell.style.backgroundColor = " ";
        }
        else{
          cell.style.backgroundColor = color.value;

        }
      });
    }
  }
}
