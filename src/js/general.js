window.addEventListener('DOMContentLoaded', (event) => {
    changeIMG();
    menuBoton();
});


function changeIMG(){
    const banner = document.getElementById('imgBanner');
    let i = 1;
    setInterval(()=>{
        setTimeout(()=>{
            banner.classList.add("img");
            banner.classList.remove("img-effect");
        },0);
        setTimeout(()=>{
            banner.classList.remove("img");
            banner.classList.add("img-effect");
        },3500);
        banner.src = `./src/img/scl-${i}.jpg`; 
           
        if(i+1 > 3) i = 1;
        else    i++; 
    },4000);
    banner.src = `./src/img/scl-3.jpg`;
}

const menuBoton = () => {
    const boton = document.getElementById("m-boton");
    const lista = document.getElementById("m-lista");

    boton.addEventListener("click", ()=>{
        if((boton.classList).contains("open")){
            boton.classList.remove("open");
            boton.style.backgroundColor = "rgba(255, 255, 255, 0)";
            lista.classList.remove("open");
        }
        else{
            boton.classList.add("open");
            boton.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
            lista.classList.add("open");
        }
    });
}

