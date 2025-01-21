let counter = 0;

const counterDisplay = document.getElementById('counter');
const incrementButton = document.getElementById('increment-btn');

incrementButton.addEventListener('click', () => {
  counter++;
  console.log(counter);
  counterDisplay.textContent = counter;
});
