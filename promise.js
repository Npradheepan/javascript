<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <script>

    const person =true;
    const p = new Promise((resolve,reject)=>{
        if(person){
            resolve("Success");   
        }else {
            reject("Failed");
        }
    });
    p.then((message)=>{
        console.log("then" + message);
    }).catch((message) => {
        console.log("Chatch" +message);
    })

    </script>
</body>
</html>
