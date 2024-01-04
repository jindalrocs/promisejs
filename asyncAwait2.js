console.log('person 1 shows the ticket');
console.log('person 2 shows the ticket');



const preMovie = async () =>{

const wifebringsTicket = new Promise((resolve,reject)=>{
setTimeout(()=>{
    resolve('ticket');
},3000)
})
const getpopcorn =new Promise((resolve,reject)=>resolve('popcorn'))
const getbutter =new Promise((resolve,reject)=>resolve('butter'))
const getcolddrink = new Promise((resolve,reject)=>resolve('coldrink'))
let ticket = await wifebringsTicket;
// console.log('wife : i have tickets');
// console.log('husband : we should go in');
// console.log('wife : no i m hungry');

// let popcorn = await getpopcorn;
// console.log(`husband : i got some ${popcorn}`);
// console.log('husband : we should go in');
// console.log('wife : i need some butter');


// let butter = await getbutter;
// console.log(`husband : i got some ${butter}`);
// console.log('husband : we should go in');
// console.log('wife : i need some colddrink');


// let coldrink = await getcolddrink;
// console.log(`husband : i got some ${coldrink}`);
// console.log('husband : we should go in');
let[popcorn,butter,coldrink] = await Promise.all([getpopcorn,getbutter,getcolddrink]);
console.log(`${popcorn},${butter},${coldrink}`);





return ticket;
}

preMovie().then((m)=> console.log(`person 3 shows ${m}`))




console.log('person 4 shows the ticket');
console.log('person 5 shows the ticket');

