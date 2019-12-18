const template = document.createElement("template");
template.innerHTML = `
  <style>
    :host {
      box-sizing: border-box;
      display: inline-block;
      background: #F7EFC6;
      padding: 0px;
      text-align: center;
      font: 900 24px/50px system-ui, -apple-system, sans-serif;
      width: 50px;
      height: 50px;
      margin: 1rem;
      --shadowColor: #CDD2AF;
      box-shadow: 
        1px 1px 0px var(--shadowColor),
        2px 2px 0px var(--shadowColor),
        3px 3px 0px var(--shadowColor),
        4px 4px 0px var(--shadowColor),
        5px 5px 0px var(--shadowColor),
        6px 6px 0px var(--shadowColor);
    }
 </style>
`;

class Tile extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.appendChild(document.createTextNode(this.innerHTML));
  }
}

window.customElements.define("a-tile", Tile);


for(var i = 0; i < 225; i++){
   var newDiv = document.createElement("div"); 
   newDiv.setAttribute('ondrop', 'drop(event)');
   newDiv.setAttribute('ondragover', 'allowDrop(event)');
 newDiv.className = "blok";
 switch (i){
  case 7:
  case 105:
  case 112:
  case 119:
  case 210:
  case 217:
  case 224:
    newDiv.className = "blok rood";
   break;
 }
 

 document.getElementById("board").appendChild(newDiv);



 var vakjes = document.getElementsByClassName("blok");
 
 
 for (var j = 0; j < vakjes.length; j+=16){


  vakjes[j].className = "blok rood";
 
}

 for (var j = 14; j < vakjes.length; j+=14){

  
   vakjes[j].className = "blok rood";
  
 }
 
 
}
