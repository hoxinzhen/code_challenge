// API access
var cors_api_url = 'https://cors-anywhere.herokuapp.com/';
  function doCORSRequest(options, printResult) {
    var x = new XMLHttpRequest();
    x.open(options.method, cors_api_url + options.url);
    x.onload = x.onerror = function() {
      printResult(
        options.method + ' ' + options.url + '\n' +
        x.status + ' ' + x.statusText + '\n\n' +
        (x.responseText || '')
      );
    };
    if (/^POST/i.test(options.method)) {
      x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }
    x.send(options.data);
}

document.addEventListener("DOMContentLoaded", () =>{
  fetch('https://cors-anywhere.herokuapp.com/https://interview.switcheo.com/prices.json')
  .then(response => response.json())
  .then(data =>{
    console.log(data);

    var select = document.getElementsByClassName("tokens");
    data.forEach(function(token) {
      if (token.price !=0){
          var opt = document.createElement('option');
          opt.value = `${token.currency}`;
          opt.innerHTML = `${token.currency}`;

          var opt2 = document.createElement('option');
          opt2.value = `${token.currency}`;
          opt2.innerHTML = `${token.currency}`;

          select[0].appendChild(opt);
          select[1].appendChild(opt2);
      }
    });
  })
});

// CHANGE PLACEHOLDER WHEN THERE IS INPUT
document.getElementById('input-amount').addEventListener('input', (event) => {
  
  // const price = data[0].price;
  // document.getElementById('output-amount').placeholder = 'NAHHHH';
});
