let array = []; // Global array to store values

function getown() {
    // Get the container for displaying bars
    const arrayContainer = document.getElementById('array-container');
    arrayContainer.innerHTML = ''; // Clear previous bars

    // Get input value and split into array
    const making_arr = document.getElementById('input');
    const value = making_arr.value;
    array = value.split(" ").filter(item => item !== ""); // Update global array

    // Create bars for each array element
    for (let i = 0; i < array.length; i++) {
        const a = array[i];
        const bar = document.createElement('div');
        bar.classList.add('bar'); // Add class for styling
        bar.style.height = `${a * 30}px`; // Height based on input value
        bar.style.width = '20px';
        bar.style.margin = "10px";
        arrayContainer.appendChild(bar); // Add bar to container
    }

    arrayContainer.style.opacity = '100%'; // Ensure visibility
    making_arr.value = ''; // Clear input field
}

function generateArray() {
  const arrayContainer = document.getElementById('array-container');
  arrayContainer.innerHTML = ''; // Clear previous array
  array = [];
  for (let i = 0; i < 20; i++) {
    const value = Math.floor(Math.random() * 100) + 1;
    array.push(value);
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${value * 3}px`;
    bar.style.width = '20px';
    bar.style.margin = "10px"
    arrayContainer.appendChild(bar);
  }
  arrayContainer.style.opacity = '100%'
}

async function visualizeBubbleSort() {
  const bars = document.getElementsByClassName('bar');
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      bars[j].style.backgroundColor = 'red';
      bars[j + 1].style.backgroundColor = 'red';

      if (array[j] > array[j + 1]) {
        // Swap values in array
        [array[j], array[j + 1]] = [array[j + 1], array[j]];

        // Swap heights of bars
        await new Promise((resolve) =>
          setTimeout(() => {
            bars[j].style.height = `${array[j] * 3}px`;
            bars[j + 1].style.height = `${array[j + 1] * 3}px`;
            resolve();
          }, 900)
        );
      }

      bars[j].style.backgroundColor = '#007bff';
      bars[j + 1].style.backgroundColor = '#007bff';
    }
    bars[array.length - i - 1].style.backgroundColor = 'green';
  }
}
