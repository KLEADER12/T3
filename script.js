function calculate() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
  
    if (num1.trim() === '' || num2.trim() === '') {
      document.getElementById('result').textContent = 'Please enter valid numbers';
    } else {
      const url = `/calculate?num1=${encodeURIComponent(num1)}&num2=${encodeURIComponent(num2)}`;
  
      fetch(url)
        .then(response => response.text())
        .then(result => {
          document.getElementById('result').textContent = result;
        })
        .catch(error => {
          console.log('Error:', error);
          document.getElementById('result').textContent = 'An error occurred while calculating';
        });
    }
  }
  