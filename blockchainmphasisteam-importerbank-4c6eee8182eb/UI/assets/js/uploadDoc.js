				 
		    
$("form#uploaddocform").submit(function(e) {
    e.preventDefault();

    var formData = new FormData(this);

    $.ajax({
        url: "/uploadLocDocument",
        type: 'POST',
        data: formData,
        success: function (result) {
       
            document.getElementById("txHashstatus").innerHTML = result.txId;
           setTimeout(function(){ 
             
			 window.location.href="agreement.html";
			  $("#txSuccessModal").modal();
			 return false;
      
          }, 1000);
        },
        cache: false,
        contentType: false,
        processData: false
    });
});

