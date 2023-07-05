// Video description JS //

let myList = document.querySelector(".my-list")
let active = document.querySelector(".onactive")

let vinfo = document.querySelector(".vinfo")
let vreview = document.querySelector(".vreview")

let des = document.querySelector(".description")
let allreview = document.querySelector(".allreview")


let videoInfo= ()=>{
        vinfo.classList.add("onactive")
        vreview.classList.remove("onactive")
        des.classList.add("show")
        allreview.classList.remove("show")
    
}


let videoReview= ()=>{
        vreview.classList.add("onactive")
        vinfo.classList.remove("onactive")
        allreview.classList.add("show")
        des.classList.remove("show")
    
}


