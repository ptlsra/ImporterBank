$(document).ready(function(){
	
	 /*
	 var ip=ipAddress();
	 var port=portNo();*/
	  $("#registerBank").click(function(){
       
		 var bankname= $("#bankname").val();
		 
		// alert(bankName);
		 var jqxhr = $.post( "/registerBank?bankName="+bankname, function() {
			  alert( "success" );
			})
			  .done(function() {
			    alert( "second success" );
			  })
			  .fail(function(ts) {
			    alert( "error" );
			    alert(JSON.stringify(ts))
			  })
			  .always(function() {
			    alert( "finished" );
			  });
			 
			// Perform other work here ...
			 
			// Set another completion function for the request above
			jqxhr.always(function() {
			  alert( "second finished" );
			});
 		
		      
		  
	  });
});