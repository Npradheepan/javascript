class HttpError extends Error{
    constructor (response){
        super(`${reponse.status} for  ${response.url}`);
        this.name = `HttpError`;
        this.reponse = response;
    }
}
let loadJSON = async () =>{
let response = await fetch(url);
    if(!response.ok){
        throw new HttpError (response);
    }else{
        return await response.json();
    }
}
let User = async ()=> {
    let user;
     while (true) {
         let name = prompt("Enter your userr Name")
         try {
             user = await loadJSON(`${name}.Json`);
             break;
            }catch (e ){
                if(e instanceof  HttpError && e.response.status==404){
                    alert("No such User, Please  Reenter!")
                }else {
                    throw e;
                }
            };
        } 
    alert(`Full Name : ${user.name}Locattion = $ {  user.addrres.loacation}  `);
    return user;
}
User();
