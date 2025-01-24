function createRandomArray(length, min, max) {
    return Array.from({ length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
  }
  function createTableFromArray(array, rows, cols) {
    const table = document.createElement('table');
    let index = 0;
  
    for (let i = 0; i < rows; i++) {
      const row = document.createElement('tr');
  
      for (let j = 0; j < cols; j++) {
        const cell = document.createElement('td');
        const number = array[index++];
  
        cell.textContent = number;
        if (number >= 50) {
          cell.classList.add('orange');
        }
  
        row.appendChild(cell);
      }
  
      table.appendChild(row);
    }
  
    return table;
  }
  
  const randomNumbers = createRandomArray(30, 0, 99);
  const table = createTableFromArray(randomNumbers, 5, 6);
  document.getElementById('tableContainer').appendChild(table);