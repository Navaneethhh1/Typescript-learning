let x:number = 5
console.log(x);

function HelloWorld(firstname:string){
    console.log("Hello"+firstname);
}

HelloWorld("Navaneeth")

function Add(a : number , b: number){
    console.log(a+b);
}

Add(3,5)


function delayed( fn : ()=> void){
    setTimeout(fn , 1000);
}

function Hello(){
    console.log("Hello");
}

delayed(Hello);