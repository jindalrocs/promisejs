const posts = [{title: 'POST1'} ];
const time = [{createdAt: new Date().getTime()}];

function printPost() {
    posts.forEach((post) => {
        console.log(post.title)
    })
}



//Do not touch this function
function create2ndPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST2'});
                console.log(posts[1].title)
            
            
            resolve()
        }, 1000)
    }) 
    
}
//Do not touch this function
function create3rPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST3'});
            console.log(posts[2].title)
            
            resolve();
        }, 1000)
    }) 
}


function updatelastactivitytime()  {
    return new Promise((resolve,reject)=>{
        setTimeout( () => {
            const lasttime = new Date().getTime();
        console.log(lasttime)
           
            resolve(lasttime)
        },1000)
    })
}
//create2ndPost()
//updatelastactivitytime().then((lasttime)=>{
  //  console.log(lasttime)
//})

Promise.all([create2ndPost(), updatelastactivitytime()])
Promise.all([create3rPost(), updatelastactivitytime()])

