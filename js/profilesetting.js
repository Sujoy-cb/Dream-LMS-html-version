// Profile setting js//
let abc = document.querySelector(".abc")
let profilepicture = document.querySelector(".profilepicture")
let privacysetting = document.querySelector(".privacysetting")
let myList = document.querySelector(".my-list")
let active = document.querySelector(".active")
let udfile = document.querySelector(".up")
let propic = document.querySelector(".pp")
let proset = document.querySelector(".ps")
let a = document.querySelector(".a")
let b = document.querySelector(".b")
let c = document.querySelector(".c")

let udemyProf = () => {
  if (active.classList.contains("active")) {
    udfile.classList.add("active")
    propic.classList.remove("active")
    proset.classList.remove("active")
    a.classList.add("abc")
    b.classList.remove("profilepicture")
    c.classList.remove("privacysetting")
  }
}

let profic = () => {
  if (active.classList.contains("active")) {
    propic.classList.add("active")
    proset.classList.remove("active")
    udfile.classList.remove("active")
    b.classList.add("profilepicture")
    a.classList.remove("abc")
    c.classList.remove("privacysetting")
  }
}

let privSetting = () => {
  if (active.classList.contains("active")) {
    proset.classList.add("active")
    propic.classList.remove("active")
    udfile.classList.remove("active")
    c.classList.add("privacysetting")
    b.classList.remove("profilepicture")
    a.classList.remove("abc")
  }
}
