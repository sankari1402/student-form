var regForm = document.getElementById ("regForm")
const name = document.getElementById("name")
var age = document.getElementById("age")
var course = document.getElementById("course")
var email = document.getElementById("email")
var btn = document.getElementById("btn")
var data = document.getElementById("data")

btn.addEventListener("click",function(event){
    event.preventDefault();
    var selectedgender = document.querySelector(".gender:checked");
    var gendervalue = selectedgender ? selectedgender.value: "Not selected";
    var row = document.createElement("tr")
    row.innerHTML=
    "<td>" + name.value +"</td>" +
    "<td>" + age.value+"</td>" +
    "<td>" + gendervalue+"</td>" +
    "<td>" + course.value+"</td>" +
     "<td>" + email.value+"</td>" +
    "<td><button onclick='deleteRow(this)'>Delete</button></td>"
   data.append(row);
    })
 function deleteRow(button) {
  const row = button.closest("tr"); 
  row.remove();
 }