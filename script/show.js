function show(state){
    document.getElementById('window').style.display = state;
    document.getElementById('wrap').style.display = state;
    document.getElementById('content').style.display = state;
}
function price(){
  var divPrice = document.getElementById('price');
  var priceBottom = document.getElementById('price-bottom');
  var priceBottom1 = document.getElementById('price-bottom1');
  var a = document.getElementById('sum');
  divPrice.innerHTML = a.value;
  priceBottom.innerHTML = a.value;
  priceBottom1.innerHTML = a.value;
}

function contentShow(state) {
  if(state == 'none'){
    document.getElementById('content').style.display = state;
    document.getElementById('content-email').style.display = 'block';
  }
  else{
    document.getElementById('content').style.display = state;
    document.getElementById('content-email').style.display = 'none';
  }

}
