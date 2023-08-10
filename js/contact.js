function isValid(str) {
   str = str.trim();
   if (str === "" || str === null || str === undefined) {
      return false;
   } 
   else{
      return true;   
   }
}
function validateForm(){

let fullName = document.forms["contactform"]["fullName"].value;
let subject = document.forms["contactform"]["subject"].value;
let myNumber = document.forms["contactform"]["phone"].value;
let myEmail = document.forms["contactform"]["email"].value;
let message = document.forms["contactform"]["message"].value;
   
   
  if (!isValid(fullName)) {
       alert("Full Name must be filled.");
       return false;
  }
  else if (!isValid(subject)) {
       alert("Subject must be choosen.");
       return false;
  }
   else if (!isValid(myNumber)) {
       alert("Phone Number must be entered.");
       return false;
  }
   else if (!isValid(myEmail)) {
       alert("Email must be entered.");
       return false;
  }
   else if (!isValid(message)) {
       alert("Message must be entered.");
       return false;
  }
   alert('Thank you for the information');
}

