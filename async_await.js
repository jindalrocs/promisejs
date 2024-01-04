console.log('person 1 shows the ticket');
console.log('person 2 shows the ticket');

const wifebringsTicket = new Promise((resolve,reject)=>{
setTimeout(()=>{
    resolve('ticket');
},3000)
})


const getpopcorn = wifebringsTicket.then((t)=>{
console.log('wife : i have tickets');
console.log('husband : we should go in');
console.log('wife : no i m hungry');
return new Promise((resolve,reject)=>resolve(`${t} popcorn`))


});

const getbutter = getpopcorn.then((t)=>{
    console.log('husband : i got som popcorn');
    console.log('husband : we should go in');
    console.log('wife : i need some butter');
    return new Promise((resolve,reject)=>resolve(`${t} butter`))
    
    
    });
getbutter.then((t)=>console.log(t));
console.log('person 4 shows the ticket');
console.log('person 5 shows the ticket');
