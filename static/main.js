const store = window.localStorage
dragElement(document.getElementById("settingsWindow"));
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}



function changeTheme(cssFile){
  var head = document.getElementsByTagName("head")[0]
  var theme = document.getElementById("cssOverrides")
  theme.href = cssFile
}


function loadDefTheme(){
  const item = window.localStorage.getItem("theme")
  console.log(item)    
  if (item == null){
      console.log("No theme detected using default")
      store.setItem("theme","default")
      return
  }
  changeTheme(`./themes/${themeLookup[store.getItem("theme")]}.css`)
}


function loadTheme(theme){
  store.setItem("theme",theme)
  changeTheme(`./themes/${themeLookup[store.getItem("theme")]}.css`)
}


function clearDefTheme(){
  store.setItem("theme","neondark")
  changeTheme(`./themes/${themeLookup[store.getItem("theme")]}.css`,store.getItem("theme"))
}

function handleSettings(){
  document.getElementById("settingsWindow").classList.toggle('hidden')
};

function handleSettingsClose(){
  document.getElementById("settingsWindow").classList.toggle('hidden')
  //add logic to change theme
};