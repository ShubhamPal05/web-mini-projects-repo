const playbtn = document.querySelector('.playbtn');
const pausebtn = document.querySelector('.pausebtn');
const stopbtn = document.querySelector('.stopbtn');
const number = document.querySelector('.number');

let timePassed=0;

//if declared outside then not working
let hours= Math.floor(timePassed/3600000)%60;
let minutes= Math.floor(timePassed/60000)%60;
let sec = Math.floor(timePassed/1000)%60;
let milisec = timePassed%999;

const Started = () =>{
    playbtn.style.display='none';
    playbtn.disabled=true;
    pausebtn.style.display='block';

    const startTime=Date.now()-timePassed;

    Intervalms = setInterval(() => {
        timePassed =Date.now()-startTime;
        hours= Math.floor(timePassed/3600000)%60;
        minutes= Math.floor(timePassed/60000)%60;
        sec = Math.floor(timePassed/1000)%60;
        milisec = timePassed%999;
        number.innerText=`${hours}:${minutes}:${sec}:${milisec}`;
    }, 1);
}

const Paused = () =>{
    playbtn.disabled=false;
    pausebtn.style.display='none';
    playbtn.style.display='block';
    clearInterval(Intervalms);
}

const Stopped = () =>{
    Paused();
    timePassed=0;
    playbtn.disabled=false;
    number.innerText='00:00:00:000';
}

playbtn.addEventListener('click', Started);
pausebtn.addEventListener('click', Paused);
stopbtn.addEventListener('click', Stopped);

document.addEventListener('keypress', (e) =>{
    console.log(e);
    if(e.key==" "){
        if(playbtn.disabled==false){
            Started();
        }
        else
            Paused();
    }
    else if(e.key=="Enter"){
        Stopped();
    }
});