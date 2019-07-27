$(document).ready(function(){
	var ipAdd=ipAddress();
	var port=portNo();
	
	 var tempLists=[];
	 var dataSets=[];
	
	
	
	//	$.get("http://"+ipAdd+":"+port+"/getAssetDetailsForAssetPage", function(response){
		$.get("/getAllAssets", function(response){

			 // alert(JSON.stringify(response));
	 			$.each(response.records, function(i, item) {
	 				var status=item.assetStatus;
	 				var message=item.message;
	 				var assetId=item.assetId;
		 					 var agreementId=parseInt(item.offerId);
	 					 
	 					  var timeValue=item.createdAt.toString();
	 						
	 						 var unixtimestamp = timeValue.slice(0,-9);

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
	 					  
	 				 
	 				//alert(assetId);
	 				/*
	 				$.get("http://"+ipAdd+":"+port+"/getPortValidationDetailsByAssetId?assetId="+assetId, function(responseData){
	 					
	 					
	 					var isValidatedByExporter=responseData.isValidatedByExporter;
	 					var isValidatedByExporterPort=responseData.isValidatedByExporterPort;
	 					var isValidatedByImporter=responseData.isValidatedByImporter;
	 					var isValidated=responseData.isValidated;
	 					
	 					var isValidatedByExporterAtImporterPort=responseData.isValidatedByExporterAtImporterPort;
	 					var isValidatedByImporterPort=responseData.isValidatedByImporterPort;
	 					var isValidatedByImporterAtImporterPort=responseData.isValidatedByImporterAtImporterPort;
	 					var isValidatedImporterPort=responseData.isValidatedImporterPort;
	 					*/
	 
	 				
	 				
	 				var statusNew=status.replace(/_/g, ' ');
	 				//message=message.replace(/_/g, ' ');
					var importerBank=item.exporterBank;
	 				
	 				if(status=="Asset_Created"){
	 					var message="Asset_Created.Updation_Pending_From_Exporter.";
	 					//message=message.replace(/_/g, ' ');
	 					tempLists.push(i+1,item.assetId,convdataTime,item.assetLocation,importerBank,statusNew,'<a href=assetCreated.html?assetId='+item.assetId+'&message='+message+'>View Details','');

						dataSets.push(tempLists);
						tempLists=[];
	 				}
	 				
	 				if(status=="Order_Received"){
	 					var message="Pending_Document_Upload_By_Shipper";
	 					tempLists.push(i+1,item.assetId,convdataTime,item.assetLocation,importerBank,statusNew,'<a href=uploadDocs.html?assetId='+item.assetId+'&message='+message+'>Document Upload Pending From Shipper','');

						dataSets.push(tempLists);
						tempLists=[];
	 				}
	 				
	 				if(status=="Ready_To_Ship"){
	 					var message="Documents_Uploaded_By_Shipper.Confirmation_Pending.";
	 					tempLists.push(i+1,item.assetId,convdataTime,item.assetLocation,importerBank,statusNew,'<a href=confirmShipping.html?assetId='+item.assetId+'&message='+message+'>Confirmation Pending From Shipper','');

						dataSets.push(tempLists);
						tempLists=[];
	 				}
	 				
	 				if(status=="Shipped_to_Exporter_Port"){
	 					//ref
	 					var message="Asset_Shipped.Pending_Arrival_At_Exporter_Port";
	 					tempLists.push(i+1,item.assetId,convdataTime,"In Transit",importerBank,statusNew,'<a href=confirmShippingDone.html?assetId='+item.assetId+'&message='+message+'>Pending Arrival','');

						dataSets.push(tempLists);
						tempLists=[];
	 				}
	 				
	 				if(status=="Arrived_at_Exporter_Port"){
	 					//ref
	 					var message="Asset_Arrived_At_Exporter_Port.Pending_Document_Upload.";
	 					tempLists.push(i+1,item.assetId,convdataTime,item.assetLocation,importerBank,statusNew,'<a href=confirmShippingDone.html?assetId='+item.assetId+'&message='+message+'>View Details','');

						dataSets.push(tempLists);
						tempLists=[];
	 				}
	 				if(status=="BillOfLading_Uploaded"){
	 					//ref
	 					var message="Custom_Docs_Uploaded.Final_Approval_Pending_From_Exporter.";
	 					tempLists.push(i+1,item.assetId,convdataTime,item.assetLocation,importerBank,'Custom Docs Uploaded','<a href=generic.html?assetId='+item.assetId+'&message='+message+'>View Details','');

						dataSets.push(tempLists);
						tempLists=[];
	 				}
	 				if(status=="validated_at_exporter_port"){
	 					//ref
	 					var message="Goods_Released_To_Importer_Port.Pending_Arrival";
	 					tempLists.push(i+1,item.assetId,convdataTime,'In Transit',importerBank,'Goods Released To Importer Port','<a href=generic.html?assetId='+item.assetId+'&message='+message+'>Pending Arrival At Importer Port','');

						dataSets.push(tempLists);
						tempLists=[];
	 				}
	 				if(status=="Arrived_at_Importer_Port"){
	 					//ref
	 					var message="Goods_Arrived_At_Importer_Port";
	 					tempLists.push(i+1,item.assetId,convdataTime,item.assetLocation,importerBank,'Pay and Retrieve BOL','Goods At Importer Port','<a href=requestBOL.html?assetId='+item.assetId+'&message='+message+'>View Details');

						dataSets.push(tempLists);
						tempLists=[];
	 				}
	 				if(status=="issued_BOL_to_importer_bank"){
	 					//ref
	 					var message="BOL_recieved";
	 					tempLists.push(i+1,item.assetId,convdataTime,item.assetLocation,importerBank,'BOL Recieved','<a href=generic2.html?assetId='+item.assetId+'&message='+message+'>View Details','');

						dataSets.push(tempLists);
						tempLists=[];
	 				}
	 				if(status=="exporter_bank_approves_payment"){
	 					//ref
	 					var message="Exporter_Bank_Approves_Payment.";
	 					tempLists.push(i+1,item.assetId,convdataTime,item.assetLocation,importerBank,'Exporter Bank Provides Approval','<a href=generic2.html?assetId='+item.assetId+'&message='+message+'>Importer Pending Approval','');

						dataSets.push(tempLists);
						tempLists=[];
	 				}
	 				if(status=="issued_BOL_to_importer"){
	 					//ref
	 					var message="BOL_Issued_To_Importer.Importer_Port_Approval_Pending.";
	 					tempLists.push(i+1,item.assetId,convdataTime,item.assetLocation,importerBank,'BOL Issued To Importer','<a href=generic2.html?assetId='+item.assetId+'&message='+message+'>Importer Port Approval Pending','');

						dataSets.push(tempLists);
						tempLists=[];
	 				}
	 				if(status=="issued_BOL_to_importerPort"){
	 					//ref
	 					var message="BOL_Issued_To_Importer_Port.Final_Approval_Pending.";
	 					tempLists.push(i+1,item.assetId,convdataTime,item.assetLocation,importerBank,'BOL Issued To Importer Port','<a href=generic2.html?assetId='+item.assetId+'&message='+message+'>Final Approval Pending','');

						dataSets.push(tempLists);
						tempLists=[];
	 				}
	 				if(status=="issued_goods_to_importer"){
	 					//ref
	 					var message="Goods_Released_To_Importer.Pending_Arrival.";
	 					tempLists.push(i+1,item.assetId,convdataTime,"In Transit",importerBank,'Goods Released to Importer','<a href=generic2.html?assetId='+item.assetId+'&message='+message+'>Pending Arrival.','');

						dataSets.push(tempLists);
						tempLists=[];
	 				}
	 				if(status=="Arrived_at_Importer"){
	 					//ref
	 					var message="Goods_At_Importer.Pending_Document_Upload_By_Importer.";
	 					tempLists.push(i+1,item.assetId,convdataTime,item.assetLocation,importerBank,'Goods At Importer','<a href=generic2.html?assetId='+item.assetId+'&message='+message+'>Pending Document Upload.','');

						dataSets.push(tempLists);
						tempLists=[];
	 				}
	 				
	 				
	 				
	 				if(status=="DELIVERED"){
	 					//ref
	 					var message="Asset_Delivered_To_Importer.";

	 					tempLists.push(i+1,item.assetId,convdataTime,item.assetLocation,importerBank,'Final Validation Complete  ','<a href=goodsDocs.html?assetId='+item.assetId+'&message='+message+'>Asset Delivered','');

							dataSets.push(tempLists);
							tempLists=[];
	 				}
	 				
	 				
	 				
	 				
	 				
	 			
	 					//alert(dataSet);		               
	 			});
 				setTimeout(function(){
 					$('#hol').hide();
 					$('#prel').hide();
	 			$('#allAssets').dataTable( {
					data: dataSets,
					columns: [
					    { title: "SNo" },
					    { title: "Proposal ID" },
					    { title: "Created At" },
					    { title: "Location" },
					    { title: "Exporter Bank" },
					    { title: "Status" },
					    { title: "Message" },
					    { title: "Action" },
					    
					    
					    
					    
					    

					  
					]
		    		} );
	 			
	 			},1500);
	 			
		//});
		
	 			
	 			
		 });	
	 
});

function goBack() {
    window.history.back();
}
      