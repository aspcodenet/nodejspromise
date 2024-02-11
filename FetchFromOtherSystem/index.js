
function myFetch(url){
    const myPromise = new Promise((resolve, reject) => { 
        // Simulating an asynchronous operation 
        setTimeout(() => { 
            resolve({
                name: 'Foppa',
			    jersey:21,
			    age:52
            }); 
           }, 10000); 
        }); 
    return myPromise

        
}


module.exports={
    myFetch
}