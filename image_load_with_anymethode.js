function  fetchanddecode(url){
            return fetch(url).then((response)=>{
                if(!response.ok){
                    throw new Error (`HTTP Error! status : ${response.status}`);
                }else{
                    return response.blob();
                }
            });
        }
        const coffee = fetchanddecode(`img_1.png`);
        const Tea =  fetchanddecode(`img_2.png`);
        Promise.any([img_1.png,img_2.png]).then((value)=>{
            let objecturl = URL.createObjectURL(value);
            let image = document.createElement(`img`);
            image.src = objecturl;
            image.height = 250;
            image.width = 500;
            document.body.appendChild(image);
        }).catch((value)=>{
            console.log(value.message);
        });
