class Rut {
    public nroCarnet : string;

    constructor(nroCarnet:string){
        this.nroCarnet = nroCarnet;
    }

    public validate( ):boolean{

        const regRut :RegExp = /\d|k$/gi;
    
        const numCarnet :Array<string>= this.nroCarnet.match(regRut)||[];

        const lastCharacter : string = this.nroCarnet.substring(this.nroCarnet.length-1, this.nroCarnet.length);
        const nCarnet: Array<number> = (numCarnet.slice(0,-1)).reverse().map( (r : string) => parseInt(r)) ;
        const valueToCalculate: Array<number> = [2,3,4,5,6,7,2] ;
    
        let guion  : string = "" ;
        let sumRut : number = 0;
        
        if( nCarnet.length == 8 ) valueToCalculate.push(3) ;
        
        for (const key in nCarnet) {
            const valueCarnet : number = nCarnet[key];
            const valueSumToCalculate : number = valueToCalculate[key];
            sumRut += (valueCarnet * valueSumToCalculate);
            guion = (11-(sumRut%11)).toString();
        };
        if(guion === "10") guion = 'k';
        if(guion === "11") guion = "0" ;
        
        return (guion == (lastCharacter.toLowerCase()))?true : false;
     
    }
}

const yo = new Rut('7689240-7');

console.log(yo.validate())