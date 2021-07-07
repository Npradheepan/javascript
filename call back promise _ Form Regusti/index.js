const p1 = new Promise((resolve,reject)=>{
    const obj = new XMLHttpRequest();
    obj.open('GET','form,html');
    obj.onload=()=>{
        if(readystate == 4 && status == 200){
            resolve(obj.responseText);
        }else{
            reject('File Not Fond!');
        }
    };
    obj.send();

});
let displayForm = (value)=>{
    document.getElementById('frm').innerHTML=value;
}
let displayError= ()=>{
    document.getElementById('err').innerHTML=value;
}
p1.then((value)=>{
    displayForm (value);
}).catch((value)=>{
 displayError(value);
});
