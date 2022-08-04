const getStorage = key => JSON.parse( localStorage.getItem(key) ) ;
const setStorage = (key, value) => localStorage.setItem(key,JSON.stringify(value)) ;
let users = getStorage('users') ||[];

const addUserStorage = user => { 
    users.push(user);
    setStorage('users' , users);
};

/*const validate = e =>{
    users.forEach(user =>{
        console.log(user);
    })
} */

const logginUser = name => {
        if(name == ''){
            alert('Debe ingresar un nombre valido')
        }else{
            const user = new Users(name);
            addUserStorage(user);
            alert(`¡Welcome! \n\n  Saldo:  $${user.balance} \n  Titular:  ${user.name} \n  N° Cuenta:  ${user.numAccount}`)
        };
};

const showUser = () =>{ 
    let usersNames='';
    if(users.length == 0){
        return 'No se han encontrado usuarios'
    }else{
        users.sort((a, b)=>{
            if(a.name.toLowerCase() < b.name.toLowerCase())return-1;
            if(a.name.toLowerCase() > b.name.toLowerCase())return 1;
            if(a.name.toLowerCase() == b.name.toLowerCase())return 0;
        })
        users.forEach(user => {
            usersNames += `${user.name} \n`;
        });
        return usersNames
    }
};

const transfer = ()=>{
    if(users.length <= 1){
        alert('No se puede realízar esta acción')
    }else{
        const orig = prompt(`Selecciona una cuenta de origen:\n${showUser()}`);
        const dest = prompt(`Selecciona una cuenta de destino:\n${showUser()}`);
        const mount =prompt('Ingrese el monto a transferir');
        
        const userOrig = users.find((user)=>{return user.name == orig});
        const userDest = users.find((user)=>{return user.name == dest});
        
        if(userOrig.balance < mount){
            return alert('Saldo insuficiente')
        }else{
            userOrig.balance -= parseInt(mount);
            userDest.balance += parseInt(mount);
            setStorage('users' , users);
        }        
    }
};