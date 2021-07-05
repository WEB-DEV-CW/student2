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

    document.getElementById('form').textContent = result;

    

    

 //   document.write("Name: "+name) 
 //   document.write("E-mail: "+email)
 //   document.write("Subject: "+subject)
 //   document.write("Details: "+details)

  }
  var content=document.getElementById('form')
  function edit(content){
    var content=document.getElementById('form')
    document.getElementById('form').textContent = content;

  }