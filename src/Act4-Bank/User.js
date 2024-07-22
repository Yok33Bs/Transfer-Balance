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
        let accountNumber  = ""; 

        for(let i  = 0; i < 12 ; i++){
            accountNumber += (Math.random()*9).toString();
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
