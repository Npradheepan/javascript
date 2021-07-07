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
        const p1 = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(`p1`),3000
            });
        });
        p1.then((value)=>{
            alert(value);
        }).catch((value)=>{
            alert(value);
        });
    </script>
</body>
</html>
