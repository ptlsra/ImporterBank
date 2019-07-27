$(document).ready(function(){
	var ipAdd=ipAddress();
	var port=portNo();
	
	var ipfsIpAdd=ipfsIpAddress();
	var ipfsPort=ipfsPortNo();
	

		
		
		var imp=[];
		var impAdd=[];
		
	
		
		 $.get("/getAllBanks", function(response){
			 // alert(JSON.stringify(response));
			 $.each(response.bank_list, function(i, item) {
				
				
					 //importerName=item.bankName;
					 imp.push(item.bankName);
					 impAdd.push(item.bankAddress);
				 
			 });
		
			var importerBank=impAdd[1];
			var exporterBank=impAdd[0];
			  document.getElementById('importerBankName').innerHTML=imp[1];
			  document.getElementById('exporterBankName').innerHTML=imp[0];
			 
			  $.get("/getBalance?ownerAddress="+importerBank, function(responseDataNewValueTwo){
				
				  document.getElementById('currentBlance').innerHTML=responseDataNewValueTwo.balance;
			 
				 
			  });
			  
			  $.get("/getAllowance?ownerAddress="+importerBank+"&spenderAddress="+exporterBank, function(responseDataNewValueTwoNew){
					 // alert(JSON.stringify(response));
				
					//"exporterBankName":web3.toUtf8(getBankDetails[2]),
					//"importerBankName":web3.toUtf8(getBankDetails[3])
				  document.getElementById('allowance').innerHTML=responseDataNewValueTwoNew.allowance;
			 
				 
			  });
			 
	  });
		 
		  $.get("/getAllExporters", function(responseDataNewValueTwoNew){
				 // alert(JSON.stringify(response));
			
				
			  document.getElementById('exporterName').innerHTML=responseDataNewValueTwoNew.exporter_list[0].exporter;
		 
			 
		  });
		  $.get("/getAllImporters", function(responseDataNewValueTwoNew){
				 // alert(JSON.stringify(response));
			
				
			  document.getElementById('importerName').innerHTML=responseDataNewValueTwoNew.importer_list[0].importer;
		 
			 
		  });
		  
		  
		
		//$('#assetId').hide();
	
	 
	
});
function goBack() {
    window.history.back();
}