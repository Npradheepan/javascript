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
        class verhicle {
            gear;
            speed;
            constructor(gear,speed){
                this.gear =gear;
                this.speed =speed;
            }
            display_a(){
                return 'No of Gear = ${this.gear} speed = ${this.speed}';
            }   
        }
        class BMW extends verhicle{
            wheels
            constructor(gear,speed,wheels){
                super(gear,speed);
                this.wheels = wheels;
            }
            display_b(){
                return '${super.display_a()} No of Wheels = ${this.wheels()}'
            }
        }
        let obj1 = new BMW(6,240,4);
        obj1.display_b();
        console.log('${obj1.display_b()}');
    </script>
</body>
</html>
