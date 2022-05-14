window.addEventListener('DOMContentLoaded', (event) => {
    menuBoton();
    // window.scrollY = 0;
    var altura = screen.height;

    // const hero = document.getElementById("inicio");
    // hero.style.height = altura+"px";
    // const historia = document.getElementById("historia");
    // historia.style.height = altura+"px";
    // const celeb = document.getElementById("celeb");
    // celeb.style.height = altura+"px";
    // const itinerario = document.getElementById("itinerario");
    // itinerario.style.height = altura+"px";
    // const mesa = document.getElementById("mesa");
    // mesa.style.height = altura+"px";
});
let scrollPoint = 0;


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
        if((e.target.id != "m-boton" && e.target.id != "m-opcion") && (boton.classList).contains("open")){
            boton.classList.remove("open");
            boton.style.backgroundColor = "rgba(255, 255, 255, 0)";
            lista.classList.remove("open");
        }
    });
}




// Scroll

// window.addEventListener("scroll", (e)=>{
//     if(window.scrollY > scrollPoint){
        
//         console.log("Down");
        
//         window.scroll(window.screenY, 
//             findPosition(document.getElementById("historia")));
//     }
//     else{
//         console.log("Up");
//     }
// });

// function findPosition(obj) {
//     var currenttop = 0;
//     if (obj.offsetParent) {
//         do {
//             currenttop += obj.offsetTop;
//         } while ((obj = obj.offsetParent));
//         return [currenttop];
//     }
// }