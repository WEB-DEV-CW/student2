function validateForm() {
  var name=document.getElementById('name').value
  var email=document.getElementById('email').value
  var subject=document.getElementById('subject').value
  var details=document.getElementById('details').value


    if (name=="" ||email=="" ||subject==""||details=="") {
      alert("Fields must not be empty");
      return false;
    }
  }

  function results(){
    var name=document.getElementById('name').value
    var email=document.getElementById('email').value
    var subject=document.getElementById('subject').value
    var details=document.getElementById('details').value
    var  result= "Name: "+name +"  "+"E-mail: "+email+"Subject: "+subject+"Details: "+details

    document.getElementById("form").style.visibility="hidden";

    document.getElementById('1').textContent = "Name : "+name;
    document.getElementById('2').textContent = "E-mail :"+email;
    document.getElementById('3').textContent = "Subject : "+subject;
    document.getElementById('4').textContent = "Details : "+details;

    document.getElementById("check").style.visibility="hidden";
    document.getElementById("viewquery").style.visibility="hidden";

  

    

 //   document.write("Name: "+name) 
 //   document.write("E-mail: "+email)
 //   document.write("Subject: "+subject)
 //   document.write("Details: "+details)

  }
  
  function edit(){
  //  var content=document.getElementById('form')
    document.getElementById('form').style.visibility="visible";
    document.getElementById("check").style.visibility="visible";
    document.getElementById("viewquery").style.visibility="visible";

  }