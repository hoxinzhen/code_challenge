// API access sry idk how to do this
// var cors_api_url = 'https://cors-anywhere.herokuapp.com/';
//   function doCORSRequest(options, printResult) {
//     var x = new XMLHttpRequest();
//     x.open(options.method, cors_api_url + options.url);
//     x.onload = x.onerror = function() {
//       printResult(
//         options.method + ' ' + options.url + '\n' +
//         x.status + ' ' + x.statusText + '\n\n' +
//         (x.responseText || '')
//       );
//     };
//     if (/^POST/i.test(options.method)) {
//       x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//     }
//     x.send(options.data);
// }
// vvv
// fetch('https://cors-anywhere.herokuapp.com/https://interview.switcheo.com/prices.json')

document.addEventListener("DOMContentLoaded", () =>{
  fetch('prices.json')
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
document.getElementById('input-amount').addEventListener('input', ChangePx);


document.getElementById('select1').addEventListener('change', () =>{
  ChangePx(); ChangeImg();
});
document.getElementById('select2').addEventListener('change', () =>{
  ChangePx(); ChangeImg();
});

function ChangePx(e) {
  fetch('prices.json')
  .then(response => response.json())
  .then(data =>{
  var sel1 = document.getElementById("select1");
  var sel2 = document.getElementById("select2");
  const v1 = findElement(data, 'currency', sel1.value);
  const v2 = findElement(data, 'currency', sel2.value);

  const convd = v2['price']/v1['price'];
  const inpVal = document.getElementById('input-amount').value;

  var load = document.getElementById("lds-dual-ring");
  load.style.display ="inline-block";

  var bgLoad = document.getElementsByClassName('user');
  var wordLoad = document.getElementsByClassName('inp');
  console.log(wordLoad);

  [0,1].forEach((el)=>{
    bgLoad[el].style.background='#2E2039';
    wordLoad[el].style.setProperty('--aftercolor','#48333D');
    wordLoad[el].style.color = '#48333D';
  });
  

  setTimeout(() => {
    document.querySelector('p').innerHTML = `1 ${v1['currency']} = ${convd.toFixed((10))} ${v2['currency']}`;
  document.getElementById('output-amount').placeholder = `${(inpVal*convd).toFixed(5)}`;
  load.style.display ="none";
  [0,1].forEach((el)=>{
    bgLoad[el].style.background='#412D51';
    wordLoad[el].style.color='#83737A';
    wordLoad[el].style.setProperty('--aftercolor','#83737A');
  });
  }, 1000);
  
  })
}

function ChangeImg(e){
  var sel1 = document.getElementById("select1").value;
  var sel2 = document.getElementById("select2").value;

  document.getElementById('img1').src = `https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${sel1}.svg`;
  document.getElementById('img2').src = `https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${sel2}.svg`;
}

function findElement(arr, propName, propValue) {
  for (var i=0; i < arr.length; i++)
    if (arr[i][propName] == propValue)
      return arr[i];
}
