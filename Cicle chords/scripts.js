var Acordes ={
    C: "DO(C)",
    D: "RE(D)",
    E: "MI(E)",
    F: "FA(F)",
    G: "SOL(G)",
    A: "LA(A)",
    B: "SI(B)",
    CS: "DO Sotenido(C#) o RE Bemol(Db)",
    DS: "RE Sostenido(D#) o MI Bemol(Eb)"
}
function Limpiar(){
    var mensaje = document.getElementById('mensaje');
    var mensaje2 = document.getElementById('mensaje2');
     mensaje.innerHTML = `<p></p>`;
     mensaje2.innerHTML = `<p></p>`;

}
function MostrarAumentado(acorde){
    var acorde1 = document.getElementById('Acorde').value;
    var mensaje2 = document.getElementById('mensaje2');
    var Mensaje = `<p>${acorde1}: <br> Es ${acorde} </p>`;
    mensaje2.innerHTML = Mensaje;
}
function MostrarDisminuido(acorde){
    var acorde1 = document.getElementById('Acorde').value;
    var mensaje = document.getElementById('mensaje');
    var Mensaje = `<p>${acorde1}: <br> Es ${acorde} </p>`;
    mensaje.innerHTML = Mensaje;
}
function ProcesosDisminuir(){
    var acorde = document.getElementById('Acorde').value;
    if(acorde=="C" || acorde=="c"){
        MostrarDisminuido(Acordes.B);
    }
    
    if(acorde=="C#" || acorde=="c#"){
        MostrarDisminuido(Acordes.C);
    }
    if(acorde=="Db" || acorde=="db"){
        MostrarDisminuido(Acordes.C);
    }
    if(acorde=="D" || acorde=="d"){
        MostrarDisminuido(Acordes.DS);
    }
}
function ProcesosAumentar(){
    var acorde = document.getElementById('Acorde').value;
    if(acorde=="C" || acorde=="c"){
        MostrarAumentado(Acordes.CS);
    }
    
    if(acorde=="C#" || acorde=="c#"){
        MostrarAumentado(Acordes.D);
    }
    if(acorde=="Db" || acorde=="db"){
        MostrarAumentado(Acordes.D);
    }
    if(acorde=="D" || acorde=="d"){
        MostrarAumentado(Acordes.DS);
    }
}