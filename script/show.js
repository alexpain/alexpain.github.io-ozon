function show(state){

    document.getElementById('window').style.display = state;
    document.getElementById('wrap').style.display = state;
}
function price(){
  var divPrice = document.getElementById('price');
  var a = document.getElementById('sum');
  divPrice.innerHTML = a.value;
}
