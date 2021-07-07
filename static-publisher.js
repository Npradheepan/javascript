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
        class Article {
            static publisher = "ABC";
            constructor(title,date){
                this.title = title;
                this.date  = date;
            }
        
        static compare(article_A,article_B){
            return article_A.date-article_B.date;
            }
        }
        let articles = [
            new Article ("HTML",new Date(2929,1,22)),
            new Article ("CSS",new Date(2929,0,07)),
            new Article ("Php",new Date(2929,12,02)),
            new Article ("js",new Date(2929,4,17)),
            new Article ("SQL",new Date(2929,2,31)),
            new Article ("Mongo",new Date(2929,5,22)),
        ];
        articles.sort(Article.compare);
        console.log(`Publisher = {Article.publisher}`);
        articles.forEach((value)=>{
            console.log(`${value.title}`);
        });

    </script>
</body>
</html>
