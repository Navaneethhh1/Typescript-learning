interface Employee  {
    name : string,
    age : number
}

interface Manager {
    name : string,
    department : string
}

type teamled = Employee & Manager

// here this is a Intersection operation not a union 
// union is using | (or operation) Employee | Manager

let tm : teamled =  {
    name : "Navaneeth",
    age : 22,
    department : "Computer science"

}
