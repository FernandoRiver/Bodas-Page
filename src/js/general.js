


function changeIMG(){
    const banner = document.getElementById('imgBanner');
    let i = 1;
    setInterval(()=>{
        setTimeout(()=>{
            console.log("Time out")
            banner.classList.add("img");
            banner.classList.remove("img-effect");
        },0);
        setTimeout(()=>{
            console.log("Quitar")
            banner.classList.remove("img");
            banner.classList.add("img-effect");
        },3500);
        banner.src = `./src/img/scl-${i}.jpg`; 
           
        if(i+1 > 3) i = 1;
        else    i++; 
    },4000);
    banner.src = `./src/img/scl-3.jpg`;
}

changeIMG();