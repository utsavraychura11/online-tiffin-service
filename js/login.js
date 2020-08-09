const uname = document.getElementById("uname");
const pass = document.getElementById("pass");
const displayData = document.getElementById("displayData")

let str

const loginBtn = document.getElementById("loginBtn");


loginBtn.addEventListener("click", function(event) {
    event.preventDefault();


    document.getElementsByTagName("header")[0].style.display = "none"
    document.getElementsByClassName("box")[0].style.display = "none"

    str = "Username: " + uname.value
    let spnode1 = document.createElement("p")
    spnode1.style.fontStyle = "18px"
    let txtnode1 = document.createTextNode(str)
    spnode1.appendChild(txtnode1)
    document.body.insertBefore(spnode1, displayData)
    document.body.style.fontSize = "25px"

    let anode = document.createElement("a")
    let linkText = document.createTextNode("Home")
    anode.setAttribute("href", "home.html")
    anode.style.color = "blue"
    anode.style.fontSize = "30px"
    anode.appendChild(linkText)
    document.body.insertBefore(anode, displayData)


})