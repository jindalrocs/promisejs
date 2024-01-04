const posts = [{title: 'POST1'} ];
const time = [{createdAt: new Date().getTime()}];








const preMovie = async () =>{


    const task = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('using async await');
        },3000)
        })
    let ticket = await task;


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

    let createPost2 = await create2ndPost();
    let updatelastactivity= await updatelastactivitytime();
    let createPost3 = await create3rPost();
    let updatelastactivity1= await updatelastactivitytime();
    

    return task;

}
preMovie().then((m)=> console.log(`person 3 shows ${m}`))