// My learning JS //

let myList = document.querySelector(".my-list")
let active = document.querySelector(".active")

// click items //
let all = document.querySelector(".all")
let ar = document.querySelector(".ar")

// Showing options //

let allc = document.querySelector(".allc")
let arc = document.querySelector(".arc")



// Functions//

let allCourse = ()=>{
    if(active.classList.contains("active")){
        all.classList.add("active")
        ar.classList.remove("active")
        allc.classList.add("activeoption")
        arc.classList.remove("activeoption")
    }
}

let archived = ()=>{
    if(active.classList.contains("active")){
        ar.classList.add("active")
        all.classList.remove("active")
        arc.classList.add("activeoption")
        allc.classList.remove("activeoption")
    }
}