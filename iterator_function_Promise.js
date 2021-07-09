function iterator(){
            var a = [1,2];
            return {
                next:function(){
                if(a.length){
                    return Promise.resolve ( {
                        value: a.shift(),
                        done:false
                    });
                }else{
                    return Promise.resolve ({
                        done:true
                    });
                }         
                }
            };
        }
       var i = iterator();
        i.next().then(console.log);
        i.next().then(console.log);
        i.next().then(console.log);
