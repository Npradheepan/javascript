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
        var volvo = {
            model:"B11R",
            get brand(){
                return "volvo";
            }
        };
        var srs = {
            owner :"ABC",
            location :"Bangalore",
            get Transport() {
                return "srs Transport";
            }
        };
        Object.setPrototypeOf(srs,volvo);

    </script>
</body>
</html>
