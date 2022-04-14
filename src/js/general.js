window.addEventListener('DOMContentLoaded', (event) => {
    changeIMG();
    menuBoton();
    registro();
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
    document.addEventListener("click", (e)=>{
        console.log(e.target.id);
        if((e.target.id != "m-boton" && e.target.id != "m-opcion") && (boton.classList).contains("open")){
            boton.classList.remove("open");
            boton.style.backgroundColor = "rgba(255, 255, 255, 0)";
            lista.classList.remove("open");
        }
    });
}

const registro = () => {
    const registroDiv = document.getElementById("registro");
    
    for(let i = 1; i<=9; i++){
        const container = document.createElement('DIV');
        const img = document.createElement('IMG');
        container.classList.add("registro-card");
        img.src = `./src/img/reg-${i}.png`;

        container.appendChild(img);
        registroDiv.appendChild(container);
    }
}
