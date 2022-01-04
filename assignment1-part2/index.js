function display(){
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    console.log(firstName);
    if(firstName===""||lastName===""){
        document.getElementById("output").innerHTML = "Null values not accepted";
    }
    else{
        let result = (firstName,lastName)=>{ return firstName.charAt(0)+lastName.charAt(0)};
        document.getElementById("output").innerHTML ="Short Name is " + result(firstName,lastName).toUpperCase();
    }
}