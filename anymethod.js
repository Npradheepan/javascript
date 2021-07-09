const p1 = new Promise((resolve,reject)=>{
            reject("Alwaays Fails");

        });
        const p2 = new Promise((resolve,reject)=>{
            setTimeout(resolve,500,"Slow");

        });
        const p3 = new Promise((resolve,reject)=>{
            setTimeout(resolve,200,"Fast");
            
        });
        //Self inworking function
        (async()=>{
            const promises =[p1,p2,p3];
            await Promise.any(promises)
            .then((value)=>console.log(value))
            .catch((value)=>{console.log(value)})
            .finally((value)=>alert("Function finish!"));
         })();
         alert("Welcome!");
