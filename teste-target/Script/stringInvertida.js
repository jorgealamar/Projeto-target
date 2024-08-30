export default function stringInvertida() {
    const result = document.getElementById('resultReverse');
    const wordInput = document.getElementById('wordInput');
    const word = wordInput.value;
  
    let stringInvertida = '';
    for (let i = word.length - 1; i >= 0; i--) {
      stringInvertida += word[i];
    }
    result.textContent = stringInvertida;
  }
  const button = document.getElementById('reverseButton');
  button.addEventListener('click', stringInvertida);