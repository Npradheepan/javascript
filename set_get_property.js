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
        var obj1 = {
            firstname :"abc",
            lastname :"prc",
           get fullname (){
               return this.firstname+" "+this.lastname;
            }
        };
        console.log(obj1.fullname);
    
        var obj1 = {
            firstname :"abc",
            lastname :"prc",
            language :" ",
            set lang(v){
                this.language =v;
            }
        };
        obj1.lang="eng"
        console.log(obj1.language);
    </script>
</body>
</html>
