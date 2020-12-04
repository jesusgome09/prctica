function Login(){ 
    var done=0; 
    var usuario=document.login.usuario.value; 
    var password=document.login.password.value; 
    if (usuario=="admin" && password=="admin") { 
    window.location="jajaja.html"; 
    } 
    if (usuario=="USUARIO2" && password=="CONTRASEÑA2") { 
    window.location="TU_PAGINA_WEB.HTML"; 
    } 
    if (usuario=="" && password=="") { 
    alert("no escribiste nada !");
    } 
    } 
    
    document.oncontextmenu = function(){return false} 
    // End -->