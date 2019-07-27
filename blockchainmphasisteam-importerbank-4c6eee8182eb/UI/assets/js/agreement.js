$(document).ready(function(){
	var ipAdd=ipAddress();
	var port=portNo();

		 var tempLists=[];
		 var dataSets=[];
		
		// alert(ipAdd);
		  $.get("/getAllOffers", function(response){

	 			$.each(response.records, function(i, item) {
	 				var agreementStatus=item.agreementStatus;
	 				
	 					
	 				
	 						var assetName=item.assetName;
	 						var quantity=item.quantity+' '+item.unit;
	 						var createdBy=item.exporter;
	 						var exporterBank=item.exporterBank;
	 						
	 						var buyer=item.importer;
	 				var unixtimestamp = item.createdAt.toString().slice(0,-9);
					//var unixtimestamp = item.timeStamp;
					// Months array
					var months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

					// Convert timestamp to milliseconds
					var date = new Date(unixtimestamp*1000);

					// Year
					var year = date.getFullYear();

					// Month
					var month = months_arr[date.getMonth()];

					// Day
					var day = date.getDate();

					// Hours
					var hours = date.getHours();

					// Minutes
					var minutes = "0" + date.getMinutes();

					// Seconds
					var seconds = "0" + date.getSeconds();

					// Display date time in MM-dd-yyyy h:m:s format
					var convdataTime = month+'-'+day+'-'+year+' '+hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
	 			
					if(agreementStatus=="Created"){
	 					var statusValue="Purchase_Order_Created_By_Importer";
	 					tempLists.push(i+1,item.agreementId,createdBy,buyer,"",'<a href=offerPlaced.html?agreementId='+item.agreementId+'&status='+statusValue+'>Purchase Order Created.','','<a href=agreementHistory.html?agreementId='+item.agreementId+'>View History');

						dataSets.push(tempLists);
						tempLists=[];
	 				}
					if(agreementStatus=="Available"){
	 					var statusValue="Pending_Validation_From_Exporter.";
	 					tempLists.push(i+1,item.agreementId,createdBy,buyer,"",'<a href=placedOffer.html?agreementId='+item.agreementId+'&status='+statusValue+'>Pending Exporter Validation.','','<a href=agreementHistory.html?agreementId='+item.agreementId+'>View History');

						dataSets.push(tempLists);
						tempLists=[];
	 				}
	 				if(agreementStatus=="Pending Approval"){
	 					var statusValue="Awaiting_Agreement_Document_From_Importer";
	 					tempLists.push(i+1,item.agreementId,createdBy,buyer,exporterBank,'<a href=offerAcceptedStatic.html?agreementId='+item.agreementId+'&status='+statusValue+'>Purchase Order Accepted.Pending Importer Validation.','','<a href=agreementHistory.html?agreementId='+item.agreementId+'>View History');

						dataSets.push(tempLists);
						tempLists=[];
	 				}
	 				
	 				if(agreementStatus=="Contract Accepted"){
	 					var statusValue="Pending_LOC_Draft_Approval_From_Exporter."
	 					tempLists.push(i+1,item.agreementId,createdBy,buyer,exporterBank,'<a href=contractAcceptedNew.html?offerId='+item.offerId+'&agreementId='+item.agreementId+'&status='+statusValue+'>Pending LOC Draft Approval By Exporter','','<a href=agreementHistory.html?agreementId='+item.agreementId+'>View History');

						dataSets.push(tempLists);
						tempLists=[];
	 				}
	 				if(agreementStatus=="Draft Approved By Exporter"){
	 					var statusValue="Waiting_For_LOC_from_Importer_Bank"

		 					tempLists.push(i+1,item.agreementId,createdBy,buyer,exporterBank,'LOC Draft Approved By Exporter','<a href=contractAccepted.html?agreementId='+item.agreementId+'&status='+statusValue+'>Upload LOC','<a href=agreementHistory.html?agreementId='+item.agreementId+'>View History');

						dataSets.push(tempLists);
						tempLists=[];
	 				}
	 				if(agreementStatus=="LOC Issued"){
	 					var statusValue="Pending_LOC_Validation_from_Exporter_Bank";
	 					tempLists.push(i+1,item.agreementId,createdBy,buyer,exporterBank,'<a href=locIssued.html?agreementId='+item.agreementId+'&status='+statusValue+'>LOC Issued','','<a href=agreementHistory.html?agreementId='+item.agreementId+'>View History');

						dataSets.push(tempLists);
						tempLists=[];
	 				}
	 				
	 				if(agreementStatus=="Ready To Trade"){
	 					var statusValue="LOC_Issued";
	 					tempLists.push(i+1,item.agreementId,createdBy,buyer,exporterBank,'<a href=offerReady.html?agreementId='+item.agreementId+'&status='+statusValue+'>LOC Issued','','<a href=agreementHistory.html?agreementId='+item.agreementId+'>View History');

						dataSets.push(tempLists);
						tempLists=[];
	 				}
	 				
	 			
	 						 
	 					  
					//alert(dataSet);		               
					 			        	
				});
					//$('#res').dataTable();

			//alert(dataSet);
	 					setTimeout(function(){
	 						$('#hol').hide();
		 					$('#prel').hide();
			$('#allAgreement').DataTable( {
				data: dataSets,
				columns: [
				    { title: "SNo" },
				    { title: "Request ID" },
				  
				    { title: "Seller" },
				    { title: "Buyer" },
				    { title: "Exporter Bank" },
				    { title: "Status" },
				    { title: "Action" },
				    { title: "History" }
				    
				    
				    
				    
				    

				  
				]
	    		} );
	 					
	 					},1700);
	        } );
	 		
//	}
	
		 
});


      