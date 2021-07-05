var ptn = document.querySelector("#parent");
var chld = document.querySelector("#child");
ptn.addEventListener("click",function(){
console.log("PARANDT")
},true);
chld.addEventListener("click",function(){
    console.log("CHILD");
})
