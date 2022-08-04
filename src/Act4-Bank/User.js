class Users{
    
    name;
    balance;
    numAccount;
    
    constructor(name){
        this.name = name;
        this.setNumAccount(this.generateNumberAccount());
        this.balance = 0 ;
    };

    setNumAccount (accountNumber ){
        this.numAccount = accountNumber ;
    };

    generateNumberAccount(){
        const numbers  = '0123456789'; 
        let accountNumber  = ""; 

        for(let i  = 0; i < 12 ; i++){
            accountNumber += numbers.charAt( Math.random()*numbers.length);
        };
        return accountNumber ;
    };
    depositBalance= deposit =>{
        this.balance =+ deposit 
    };
    
    draftBalance= draft =>{
        this.balance =- draft ; 
    };
};