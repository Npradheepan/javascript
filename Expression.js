 // regular Expressions
 var check = "javascript is easy to Lerning";
 var char = /a/g; //globle;
 console.log(check.match(char));

  // regular Expressions
  var check = "javascript is easy to Lerning";
  var char = /A/i; //caseinsensitive.
  console.log(check.match(char));

   // regular Expressions
 var check = "javascript is easy to Lerning";
 var char = /is/ig; //globle;
 console.log(check.search(char));

  // regular Expressions
  var check = "javascript is easy to Lerning";
  var char = new RegExp("A","i"); //globle/ insentive;
  console.log(check.match(char));


  // regular Expressions
  var check = "javascript is easy to Lerning";
  var char = new RegExp("a","m"); //Multy line;
  console.log(check.match(char));

  // regular Expressions
  var check = "javascript is easy to Lerning";
  var char = /[e]/g; //Multy line;
  console.log(check.match(char));

  // regular Expressions
  var check = "javascript is easy to Lerning";
  var char = /[^e]/g; //Multy line;
  console.log(check.match(char));

  // regular Expressions
  var check = "$javascript%is%easy%to%Lerning";
  var char = /\w/g; //meta charectors;
  console.log(check.match(char));

  // regular Expressions
  var check = "$javascript%is%eas 1 to 2 Lerning";
  var char = /\d /g; //Digite;
  console.log(check.match(char));

  // regular Expressions
  var check = "$javascript%is%easy%to%Lerning";
  var char = /\D/g; //without number/;
  console.log(check.match(char));

  // regular Expressions
  var check = "$javascript%is%easy%to%Lerning";
  var char = /\s/g; //wide space;
  console.log(check.match(char));

  // regular Expressions
  var check = "$javascript%is%easy%to%Lerning";
  var char = /\w/g; //Multy line;
  console.log(check.match(char));

  // regular Expressions
  var check = "$javascript%is%easy%to%Lerning";
  var char = /\b/g; //beginning;
  console.log(check.match(char));

  // regular Expressions
  var check = "$javascript%is%easy%to%Lerning";
  var char = /\bEa/g; //beginning of the word;
  console.log(check.match(char));

  // regular Expressions
  var check = "$javascript%is%easy%to%Lerning";
  var char = /\rb/b; //End of the wprd;
  console.log(check.match(char));
