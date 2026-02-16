interface User{
    Name : string,
    age : number,
    address : {
        city : string,
        pincode : number
    }
}


let emp1 : User ={
    Name : "Navaneeth",
    age : 21,
    address :{
        city : "Hyderabad",
        pincode : 500100
    }

}


function isLegal() : boolean {
    if(emp1.age >= 18){
        return true;
    }
    else{
        return false;
    }
}

console.log(isLegal())