  function * generator(){
            var a =[1,2];
            while(a.length){
                yield a.shift();
            }
        }
        /*
        var i = generator ();
        console.log(i.next());
        console.log(i.next());
        console.log(i.next());
        */
        var i =generator();
        for(let iterm of i){
            console.log(iterm);
        }
