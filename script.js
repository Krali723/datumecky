const Dny_v_tydnu = ["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"];
const Mesice = ["ledna","února","března","dubna","května","června","července","srpna","září","října","listopadu","prosince"]

function poNacteni() {
  let n = new Date();
  let den = n.getDay();
  let datum = n.getDate();
  let mes = n.getMonth();
  let r = n.getFullYear();
  console.log(mes); 
  let vypis = "Dneska je: " + Dny_v_tydnu[den] + " " + datum + ". " + Mesice[mes] + " " + r;
  console.log(vypis);
  setInterval(cas, 1000);
  document.getElementById("vypis").innerHTML = vypis;
}


function cas() {
  let t = new Date();
  let cas = t.toLocaleTimeString();
  document.getElementById("cas").innerHTML = "Aktualní čas: " + cas;  
} 

function patek13(){
  let mesic_akt = new Date().getMonth(); 
  let mesice = 12;
  let patecky = " "
  for (let i = 0; i <= mesice; i++){
    let datum = new Date (2020, mesic_akt + i, 13).getDay(); 
    if(datum == 5){
      let den = new Date (2020, mesic_akt + i, 13).toLocaleDateString();
      patecky = patecky + den + ", "; 
    }
  }
  patecky += ".";
  document.getElementById("patecky").innerHTML = patecky;
  console.log(patecky);
}
