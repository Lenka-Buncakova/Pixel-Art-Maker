// Color input
const colorInput = document.getElementById('colorPicker');

// Select size input
const heightInput = document.getElementById('inputHeight');
const widthInput = document.getElementById('inputWidth');
const sizePicker = document.getElementById('sizePicker');

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', makeGrid, false);

function makeGrid(event) {
  event.preventDefault();

  const table = document.getElementById('pixelCanvas');
  const h = parseInt(heightInput.value);
  const w = parseInt(widthInput.value);

  // "remove all child elements of a Dom node in Javascript" question
  // from Stack Overflow
  while (table.firstChild) {
    table.removeChild(table.lastChild);
  }
  // append rows to the table
  for (i=0; i<h; i++) {
    const tr = document.createElement('tr');
    // append cells to the rows
    for (j=0; j<w; j++) {
      const td = document.createElement('td');
      td.addEventListener('click',function(){
          td.style.backgroundColor=colorInput.value;
      });
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}
