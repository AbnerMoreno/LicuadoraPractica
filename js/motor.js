let estadoLicuadora = "apagada";
let sonido = document.getElementById("blender-sound");
let sonidoBoton = document.getElementById("blender-button-sound");
let licuadora = document.getElementById("blender");

function controlarLicuadora(){
    if( estadoLicuadora == "apagada"){
        estadoLicuadora = "encendido"; 
        reproductorSonido();
        licuadora.classList.add("active");
        console.log("me prendiste");
    }else{
        estadoLicuadora = "apagada";
        reproductorSonido();
        licuadora.classList.remove("active");
        console.log("me apagaste");
    }
}

function reproductorSonido(){
    if(sonido.paused){
        sonidoBoton.play();
        sonido.play();
    }else{
        sonidoBoton.play();
        sonido.pause();
        sonido.currentTime = 0;
    }
}