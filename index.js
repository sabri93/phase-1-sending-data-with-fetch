// Add your code here
 function submitData(userName,userEmail){
       
    const configurationObject ={
        method: "POST",
        headers: {
            "content-Type":'application/json',
            Accept: "application/json",
            
        },
        body: JSON.stringify({
         name : userName,
         email : userEmail

        })
    }
    
   return fetch("http://localhost:3000/users",configurationObject)
   .then(response=>response.json())  
   .then(function(object){
    console.log(object.id)
      let elem = document.createElement("p")
     elem.innerHTML = object.id
   document.body.append(elem)
  


   })
   .catch(function (error) {
    console.log(error.message);
    
    let el = document.createElement("p")
   el.innerHTML = error.message
   document.body.append(el)
     
   })
 

 }

 
 


   

  



