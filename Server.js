<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <center>
        <h1>Studenten Grade List To Display</h1> <hr>
        <button id="btn">Click</button>
        <div id="plc">

        </div>
    </center>
    <script>
            var fll =document.getElementById("btn");
            fll.addEventListener("click", clk);
            function clk(){
                var srv = XMLHttpRequest();
                srv.open("GET","one.json",true);
                srv.onreadystatechange = function(){
                   if(this.readyState == 4 && this.status == 200){
                    var txt = JSON.parse(srv.responseText);
                    var cld = txt.class;
                    var Emtv = "";
                    for(var i = 0; i<cld.length; i++){
                        Emtv ="<br>" + "Name ="+cld[1].Name || "Grade ="+cld[i].grade+ "<hr>";
                    }
                    document.getElementById("plc").innerHTML=Emtv;
                   } 
                }; 
                srv.send();
            }



    </script>
</body>
</html>
