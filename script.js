var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = ul.querySelectorAll("li");

function InputValue(){
    return input.value.length;
}


function createNewList(){
     var li = document.createElement("li");
     li.addEventListener("click", toggleDone);
   
  
     var delbutton = document.createElement("button");
     delbutton.innerHTML = "Delete"; 
     delbutton.addEventListener("click", removeItem);
      li.appendChild(document.createTextNode(input.value + " "));
     li.appendChild(delbutton);
     ul.appendChild(li);  
    
     input.value = "";
 } 

 function toggleDone(event){
        event.target.classList.toggle("done");
     }
     function removeItem(event){
        event.target.parentNode.remove();
     }

button.addEventListener("click", function(){
    if (InputValue() > 0) {
     createNewList();
 } else
    alert("please enter the items");
})

input.addEventListener("keypress",function(event){
        if (InputValue() > 0 && event.keyCode === 13) {
        createNewList();
    }
})

 


li.forEach(function(item){
    item.addEventListener("click", toggleDone);
    item.querySelector("button").addEventListener("click", removeItem);
});








