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
         class car {
             name;
             year;
             constructor(name,year){
                 this.name = name;
                 this.year = year;
             }
             display(){
                 return 'Name =${this.name} Year =${this.year}';
             }
             age(currentyear){
                 
                 return currentyear - this.year;
             }
         }
         let currentyear = new Date();
          const obj1=new car("ford",2009);
         const obj2=new car("Audi",2015);
         console.log('${obj1.display()} Age  ${obj1.age(currentyear)}');
         console.log('${obj2.display()} Age = ${obj2.age(currentyear)}');

         
    </script>
 </body>
 </html>
