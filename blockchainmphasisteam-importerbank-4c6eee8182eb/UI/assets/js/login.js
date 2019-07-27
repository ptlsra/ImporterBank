
						 
		    
$("form#form1").submit(function(e) {
    e.preventDefault();
   var UserName= $('#UserName').val();
   

   $.ajax({
   	
       dataType:"json",
       contentType: 'application/json; charset=UTF-8',
       url:"/login?importerBank="+UserName,		

       type:"POST",
       global:false,
       async:false, 
       success: function(result){
   
    	   var message=result.message;
    	   var Name=result.Name;
    	   var WalletAddress=result.WalletAddress;
    	   if(message=="Existing"){

    		   localStorage.setItem("importerBankName",Name);
    		   localStorage.setItem("importerBank",WalletAddress);
    		   
    		 
    		   document.getElementById("modalTitle").innerHTML = "Login successful"; 

    		   document.getElementById("loginText").innerHTML = "Welcome "+Name; 
    		   $("#loginModal").modal();
    		   
    		   setTimeout(function(){ 
                   
    	              window.location.href="admin.html";
    	              return false;
    	           }, 2000);
    		   			
    	   }else if(message=="NotExisting"){
    		  // alert("incorrect credentials")
    		   document.getElementById("modalTitle").innerHTML = "Login Failed"; 

    		   document.getElementById("loginText").innerHTML = "incorrect credentials "; 
    		   
    		   $("#loginModal").modal();
    		   setTimeout(function(){ 
                   
 	              window.location.href="index.html";
 	              return false;
 	           }, 2000);
    		   
    	   }
			
			
			
           
         
    	}
    });
});