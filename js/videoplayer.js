// Video Player Jquery //

const player = new Plyr('video', {captions: {active: true}});

// Expose player so it can be used from the console
window.player = player;




// Video description functions //

let ov = document.querySelector(".overview")
let active = document.querySelector(".active")


let videoinfo = document.querySelector(".info")
let videoreview = document.querySelector(".review")


let videoInfo = ()=>{
    if(active.classList.contains("active")){
        videoinfo.classList.add("active")
        videoreview.classList.remove("active")
    }
}

let videoReivew = ()=>{
    if(active.classList.contains("active")){
        videoreview.classList.add("active")
        videoinfo.classList.remove("active")
    }
}


