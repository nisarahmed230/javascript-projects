function checkVowels() {
  const text = document.getElementById('textInput').value.toLowerCase();
  const vowels = 'aeiou';
  let count = 0;

  for (let char of text) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  document.getElementById('result').textContent = `Total vowels: ${count}`;
}
