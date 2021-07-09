let obj ={
                name:"abc",
                age:26
            };
            let arr = Object.entries(obj);
            let object = Object.fromEntries(arr);
            console.log(object);
