function  andmeteLugemine(){
  var vastus = document.getElementById('vastus');
  var nimi = document.getElementById('nimi');
  var pilt = document.getElementById('pilt');
  var varv = document.getElementById("MyColor");
  var sport = getSports();


  if(document.getElementById('mees').checked){
    var sugu = document.getElementById('mees').value;
    pilt.src="male.jpg";
   
  }else if(document.getElementById('naine').checked){
    var sugu = document.getElementById('naine').value;
    pilt.src = "female.jpg";
   
  }
  
  vastus.innerHTML = "Tere, " + nimi.value + "!" + "<br>" + "Sinu sugu on " + sugu + "." + "<br>" + "Sinu lemmivärv on " + varv.value + "." + "<br>" + "Sinu valitud spordialad on " + sport + ".";
  console.log(nimi.value);
  console.log(sugu);
}

function onSugu(){
    if(document.getElementById('mees').checked){
    pilt.src="male.jpg";
   
  }else if(document.getElementById('naine').checked){
    pilt.src = "female.jpg";
   
  }

}

function favColor() {
  var x = document.getElementById("MyColor");
  console.log(x.value); 
}

function getSports() {
  var sports = document.getElementsByClassName('sports');
  var str = '';
  for(i=0; i<sports.length; i++){
    if(sports[i].checked === true){
      str += sports[i].value + ", ";
    }

  }
  str = str.substring(0, str.length - 2);
 
  return str;
}