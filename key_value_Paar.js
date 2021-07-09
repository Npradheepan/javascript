  let obj = {
            name:"abc",
            age:25
        };
        let arr = Object.entries(obj);
        for(let[key,value] of arr){
            console.log(`key =${key} value = ${value}`);
        }
