function validateForm(){
    let name = document.forms["myForm"]["fname"].value;

    if(name == ""){
        alert("Name must be written!!");
        return false;
    };
}

function validateAPI(){
    let inputObj = document.getElementById("id1");

    if(!inputObj.checkValidity()){
        document.getElementById("res1").innerHTML = inputObj.validationMessage;
        
    }else{
        document.getElementById("res1").innerHTML = "Input Is OK";
    };
}