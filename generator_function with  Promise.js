var i = {
            [Symbol.iterator]:function* gererator(){
                const promises = [Promise.resolve(1),Promise.resolve(2)];
                while(promises.length){
                    yield promises.shift();
                }
            }
        };
         for(let item of  i){
             item.then(console.log);    
         }
