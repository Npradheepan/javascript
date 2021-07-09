function iterator(){
            var a = [1,2];
            return {
                next:function(){
                if(a.length){
                    return{
                        value: a.shift(),
                        done:false
                    };
                }else{
                    return{
                        done:true
                    };
                }         
                }
            };
        }
        var i = iterator ();
        console.log(i.next());
        console.log(i.next());
        console.log(i.next());
