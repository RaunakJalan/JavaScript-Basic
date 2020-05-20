

try{
	something();
}
catch(error){
	console.log(error);
}
finally{
	console.log("Executes no matter what");
}







function getClients(){
	console.log("Downloading....");

	setTimeout(function(){
			console.log('Complete...');
		},3000);
}

getClients();
