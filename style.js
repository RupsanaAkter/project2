function addStyle(){
  var myVar =  document.getElementById('paraId');
//   myVar.style.color='red';
//   myVar.style.fontSize='30px';

myVar.classList.add('para-style');
}


function removeStyle(){
    var myVar=document.getElementById('paraId');
    myVar.classList.remove('para-style');
}