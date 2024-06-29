let goToGoa=(successs,failure)=>{
    let bank_bal=15000;
    if(bank_bal>10000){
        successs('Go to Goa and Enjoy')
    }
    else{
        failure('Go to ProStack!!')
    }
}
goToGoa((msg)=>{console.log(msg)},(err)=>console.log(err))