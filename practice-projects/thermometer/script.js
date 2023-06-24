{/* <span id='temp' class="fa"> </span> */}

const tempLoad = () => {
    let temp = document.getElementById('temp');
    temp.innerHTML="&#xf2cb";
    temp.style.color="White";

    setTimeout( () => {
        temp.innerHTML = "&#xf2ca";
        temp.style.color="#B7BC19";
    }, 1000);

    setTimeout( () => {
        temp.innerHTML = "&#xf2c9";
        temp.style.color="#CF8D1C";
    }, 2000);

    setTimeout( () => {
        temp.innerHTML = "&#xf2c8";
        temp.style.color="#AE4018";
    }, 3000);

    setTimeout( () => {
        temp.innerHTML = "&#xf2c7";
        temp.style.color="#FF0000";
    }, 4000);



}

tempLoad();

setInterval(tempLoad,5000)
