function vertabla() {
    const tabla = document.getElementById("valortab").value;
    if(tabla> 0){
        for (i = 1; i <= 10; i++) {
            document.getElementById(i).innerHTML = tabla + " x " + i + "= " + tabla * i;  
        }
        
    }else{
        alert('Por favor ingrese un valor');
    return;
    }
    
}




