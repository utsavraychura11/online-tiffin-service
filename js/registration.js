const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const uname = document.getElementById("uname");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const cpass = document.getElementById("cpass");
const phone = document.getElementById("phone");
const add = document.getElementById("add");
const displayData = document.getElementById("displayData")

let str

const registerBtn = document.getElementById("registerBtn");


registerBtn.addEventListener("click", function(event) {
    event.preventDefault();
    if (pass.value == cpass.value) {

        document.getElementsByTagName("header")[0].style.display = "none"
        document.getElementsByClassName("container-box")[0].style.display = "none"

        str = "First Name: " + fname.value
        let pnode1 = document.createElement("p")
        let txtnode1 = document.createTextNode(str)
        pnode1.appendChild(txtnode1)
        pnode1.style.fontSize = "20px"
        str = "Last Name: " + lname.value
        let pnode2 = document.createElement("p")
        let txtnode2 = document.createTextNode(str)
        pnode2.appendChild(txtnode2)
        pnode2.style.fontSize = "20px"

        str = "Username: " + uname.value
        let pnode3 = document.createElement("p")
        let txtnode3 = document.createTextNode(str)
        pnode3.appendChild(txtnode3)
        pnode3.style.fontSize = "20px"

        str = "Email: " + email.value
        let pnode4 = document.createElement("p")
        let txtnode4 = document.createTextNode(str)
        pnode4.appendChild(txtnode4)
        pnode4.style.fontSize = "20px"

        str = "Phone no: " + phone.value
        let pnode5 = document.createElement("p")
        let txtnode5 = document.createTextNode(str)
        pnode5.appendChild(txtnode5)
        pnode5.style.fontSize = "20px"

        str = "Address: " + add.value
        let pnode6 = document.createElement("p")
        let txtnode6 = document.createTextNode(str)
        pnode6.appendChild(txtnode6)
        pnode6.style.fontSize = "20px"

        document.body.insertBefore(pnode1, displayData)
        document.body.insertBefore(pnode2, displayData)
        document.body.insertBefore(pnode3, displayData)
        document.body.insertBefore(pnode4, displayData)
        document.body.insertBefore(pnode5, displayData)
        document.body.insertBefore(pnode6, displayData)

        let anode = document.createElement("a")
        let linkText = document.createTextNode("Home")
        anode.setAttribute("href", "home.html")
        anode.style.color = "blue"
        anode.style.fontSize = "22px"
        anode.appendChild(linkText)

        document.body.insertBefore(anode, displayData)
    } else {
        alert("Password And Confirm Password are not Matching !")
    }

})