prices=[120,60,899];
const total=prices.reduce((a,p)=>a+p,0);
console.log(total);

students=[
    {name:"jaahid",marks:90},
    {name:"hari",marks:80},
    {name:"kevin",marks:70},
    {name:"kiran",marks:89}
];
const ki=students.find((S)=>S.name==="kiran")
console.log(ki ? ki.marks : "not found"); 

const Greeter=(greet)=>(name)=>
{
    return greet + " "+name
}
let greet=Greeter("Hello")("Asha")
console.log(greet);

async function loaduser()
{
    try{
        const res=await fetch("https://jsonplaceholder.typicode.com/users")
        const users=await res.json()
        console.log(users)
        const result=users.map((x)=>x.name)
        console.log(result)
    }
    catch(error){
        console.log(error);
    }
    
}
loaduser();