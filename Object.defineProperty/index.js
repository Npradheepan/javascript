var obj1 = {
    counter : 0,
};
Object.defineProperty(obj1, "add",{
    set:function(value){
        this.counter +=value;
    }
});
Object.defineProperty(obj1,"sub",{
    set:function(value){
        this.counter -=value;
    }
});
Object.defineProperty(obj1,"incr", {
    get:function(){
        this.counter++;
    }
});
Object.defineProperty(obj1,"dec", {
    get:function(){
        this.counter--;
    }
});
Object.defineProperty(obj1,"res", {
    get:function(){
        this.counter= 0;
    }
});
document.getElementById("h1").innerHTML =obj1.counter;
function add(){
    obj1.add =parseInt(document.getElementById("i1").value);
    document.getElementById("h1").innerHTML =obj1.counter;
}
function sub(){
    obj1.sub = parseInt(document.getElementById("i2").value);
    document.getElementById(h1).innerHTML = obj1.counter;
}
function incr(){
    obj1.incr;
    document.getElementById("h1").innerHTML = obj1.counter;
}
function dec(){
    obj1.dec;
    document.getElementById("h1").innerHTML = obj1.counter;
}
function res(){
    obj1.res;
    document.getElementById("h1").innerHTML = obj1.counter;

}
