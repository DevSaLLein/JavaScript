window.onload = function() {
    
    window.resizeTo("200" , "200")
    window.open("form.html" , "formulario" , width="300" , heigth="100" );
    /*
    alert(window.navigator.platform); // tambeém pode ser apenas "window.navigator" e acessa a plataforma que estamos
    alert(window.navigator.userAgent);
    alert(window.navigator.language);

    var plugins = navigator.plugins;
    var p = "";
    for(i = 0 ; i<plugins.length ; i++){
        p += plugins[i].name + "\n";
    }
    alert(p);
    */
}