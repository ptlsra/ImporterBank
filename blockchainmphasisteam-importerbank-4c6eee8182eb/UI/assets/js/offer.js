$(document).ready(function(){
	var ipAdd=ipAddress();
	var port=portNo();

		 var tempLists=[];
		 var dataSets=[];
		
		// alert(ipAdd);
		  $.get("/getAllOffers", function(response){
			//  alert(response);
			 // alert(JSON.stringify(response));
	 			$.each(response.records, function(i, item) {
	 				var status=item.offerStatus
	 				
	 			
	 				if(status=="Available"){
	 					tempLists.push(i+1,item.offerId,'<a href=offerPlaced.html?offerId='+item.offerId+'>Offer Placed','');

						dataSets.push(tempLists);
						tempLists=[];
	 				}
	 				if(status=="Not Available"){
	 					tempLists.push(i+1,item.offerId,'<a href=placedOffer.html?offerId='+item.offerId+'>Not Available','');

						dataSets.push(tempLists);
						tempLists=[];
	 				}
	 				
	 				
	 			/*
	 				
	 				if(status=="Booked"){
	 					tempLists.push(i+1,item.offerId,'<a href=offerAcceptedStatic.html?offerId='+item.offerId+'>Offer Request Accepted','');

						dataSets.push(tempLists);
						tempLists=[];
	 				}
	 				
	 				if(status=="Ready_For_Trade"){
	 					tempLists.push(i+1,item.offerId,'<a href=offerAcceptedStatic.html?offerId='+item.offerId+'>Offer Request Accepted','');

						dataSets.push(tempLists);
						tempLists=[];
	 				}
	 				*/

					//alert(dataSet);		               
					 			        	
				});
					//$('#res').dataTable();

			//alert(dataSet);
			$('#allOffers').DataTable( {
				data: dataSets,
				columns: [
				    { title: "SNo" },
				    { title: "Offer ID" },
				    { title: "Status" },
				    { title: "Action" },
				    
				    
				    
				    
				    

				  
				]
	    		} );
	        } );
//	}
	
	 
});
      