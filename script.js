inputEl = document.getElementById("number");
buttonEl = document.getElementById("convert-btn");
outputEl = document.getElementById("output");

buttonEl.addEventListener('click', ()=>{
  if(inputEl.value === ""){
    outputEl.innerHTML = "Please enter a valid number";
  }
  else if(inputEl.value <= 0){
    outputEl.innerHTML = "Please enter a number greater than or equal to 1";
  }
  else if(inputEl.value >= 4000){
    outputEl.innerHTML = "Please enter a number less than or equal to 3999";
  }
  else{
    convert();
  }
});


function convert() {
    let num = parseInt(inputEl.value);
    const romanNumerals = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];

    let roman = '';

    romanNumerals.forEach((numeral) => {
        while (num >= numeral.value) {
            roman += numeral.symbol;
            num -= numeral.value;
        }
    });

    outputEl.innerHTML = `The Roman numeral is: ${roman}`;
}
