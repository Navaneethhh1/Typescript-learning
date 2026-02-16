interface People  {
    Name : string 
    age : number
    greet?: ()=> string 
}

let p1: People = {
    Name : "Nava",
    age : 22,
    greet() : string {
        return "Hello "+this.Name
    },
}

console.log(p1.Name);

let greeting = p1.greet! ();
console.log(greeting);