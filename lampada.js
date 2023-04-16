const turnOn = document.getElementById ( "turnOn" );
const turnOff = document.getElementById ( "turnOff" );
const lamp = document.getElementById ( "lamp" );

function isLampBroken () {
    return lamp.src.indexOf ( "quebrada" ) > -1
}
 
function lampOn () {
    if ( !isLampBroken () ) {
        
        lamp.src = "https://github.com/fernandoleonid/mini-projetos-js/blob/master/01-lamp/img/ligada.jpg?raw=true";
    }
}

function lampOff () {
    if ( !isLampBroken () ) {
        lamp.src = "https://github.com/fernandoleonid/mini-projetos-js/blob/master/01-lamp/img/desligada.jpg?raw=true";
    }
}

function lampBroken () {
    lamp.src = "https://github.com/fernandoleonid/mini-projetos-js/blob/master/01-lamp/img/quebrada.jpg?raw=true";
}


turnOn.addEventListener ( "click", lampOn );
turnOff.addEventListener ( "click", lampOff );
lamp.addEventListener ( "mouseover", lampOn );
lamp.addEventListener ( "mouseleave", lampOff );
lamp.addEventListener ( "dblclick", lampBroken );