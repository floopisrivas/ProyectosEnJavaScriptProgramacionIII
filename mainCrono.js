
window.onload = ()=>{ h = 0;m = 0;s = 0;mls = 0;tiempoInicio= 0; 
    inicio = document.getElementById("tiempoInicial");btnInicio = document.getElementById("buttonCron1");
    btnParar = document.getElementById("buttonCron2");btnCont = document.getElementById("buttonCron3");
    btnRein = document.getElementById("buttonCron4"); btnBorrar = document.getElementById("buttonCron5"); 
    eventos();
};
function eventos(){
    btnInicio.addEventListener("click", iniciar);
    btnParar.addEventListener("click", parar);
    btnCont.addEventListener("click", continuar);
    btnRein.addEventListener("click", reiniciar);
    btnBorrar.addEventListener("click", borrar);
}

    function leerValor(){
        let mt,st,mlst;
        mls++;

        if(mls > 99){
            s++;
            mls=0;
        }if(s > 59){
            m++;
            s=0;
        }if(m > 59){
            h++;
            m=0;
        }if(h > 24){
            h=0;
        }

        mlst = ('0' + mls).slice(-2);
        st = ('0' + s).slice(-2);
        mt = ('0' + m).slice(-2);
        ht = ('0' + h).slice(-2);
        inicio.innerHTML = `${ht}:${mt};${st}.${mlst}`;
        let registros = JSON.parse(localStorage.getItem('registro'));
        localStorage.setItem('registro',JSON.stringify(inicio.innerHTML = `${ht}:${mt};${st}.${mlst}`));


    }
    function borrarRegistroLocalStorage(){
        if(document.getElementById("buttonCron5").addEventListener("click", () =>
        { 
            var mensaje = confirm("¿Estas seguro de eliminar el registro?");
            if(mensaje){
                localStorage.clear();
                alert("¡Se eliminó correctamente!");
            }
        }));
    }
    function borrar(){
        borrarRegistroLocalStorage();
    }
    

    function iniciar(){
        leerValor();
        tiempoInicio = setInterval(leerValor, 10);
        btnInicio.removeEventListener("click", iniciar);
    }
    function parar(){
        clearInterval(tiempoInicio);
        btnInicio.addEventListener("click", iniciar);
        
    
    }

    function continuar(){
        leerValor();
        tiempoInicio = setInterval(leerValor, 10);
        btnCont.removeEventListener("click", iniciar);
    
    }
    function reiniciar(){
        clearInterval(tiempoInicio);
        inicio.innerHTML = "00:00:00.00";
        h=0;
        m = 0;
        s = 0;
        mls = 0;
        btnInicio.addEventListener("click", iniciar);
        
    }
