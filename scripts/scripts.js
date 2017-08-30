//business logic
var userNumber;
// for (var i = 0; i < 10; i++) {
//   array[i]
// }
var numberArr = []; //make an array for the loop to store its values

var pingPong = function(userInput) {
for (var index = 1; index <= userInput; index++){
//the for loop is run with regards to user input
//the if statement tells the program when to replace numbers with the desired output
  if ((index % 3 === 0) && (index % 5 === 0)) {
    numberArr.push("pingpong");      //returns ping pong for multiples of 3
  } else if (index % 5 === 0){
    numberArr.push("pong");           //returns pong for multiples of 5
  } else if (index % 3 === 0) {
    numberArr.push("ping");          //returns ping for multiples of 3
  } else {
    numberArr.push(index);          //returns the number as it is
  }
}
return numberArr;
};


    function test(val){
      console.log(val);
    }

//user interface logic
$(document).ready(function() {



  alert("Welcome to Ping-Pong!!")
  $("form#pong-number").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#ping-pong").val());
    var results = pingPong(userInput);

    $("#results").text("");
    $("#results").append("<ul>"); //this is used to append the results from the loop and the for function
    results.forEach(function(result) {
      $("#results").append('<li>' + result + '</li>');
    });
    $("#results").append("</ul>");

    $("#results").fadeIn(3000).fadeOut(10000)
  });

});
