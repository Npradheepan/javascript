
        Promise.allSettled(
            [  
        Promise.resolve(5),
        new Promise ((res,rej)=>{
            setTimeout(()=>{
                res(10);
            },2000);
        }),
        Promise.reject(new Error("Rejected")),
        new Promise((res,rej)=>{
            setTimeout(()=>{
                res(20)
            },4000);
        }),
        Promise.resolve(50)
        ]
        ).then((val)=>{
           // console.log(val);
           val.forEach((object)=> {
               if(object.status == "fulfilled"){
                   console.log(`status = ${object.status} value= ${object.value}`);
               }else{
                   console.log(`status = ${object.status} reason = ${object.reason}`);
               }
           });
        });
