var message = '';
var student;
var search;
var foundStudents = [];
var macthe;



function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}
/* to build this function first we make the funtion and add the paramenter we need in this case I used the word report
then I set the var also called report(its a local variable) to equal the first part of our final output message
then I built the message up with the += for every value in the student key
then I return the report and the function is ready
*/
function buildReport( report) {
  var report = '<h2>Student: ' + student.name + '</h2>';
  report += '<p>Track: ' + student.track + '</p>';
  report += '<p>Points: ' + student.points + '</p>';
  report += '<p>Achievements: ' + student.achievements + '</p>';
  return report;
}

// first I make an infinite loop
while (true) {
  //then I use the search variable declaired up top to prompt the user for input
  search = prompt("Please search students by name or type 'quit' to exit");
  //if the user input is equal to 'quit' in any case they type it or to null(nothing) then
  if ( search.toLowerCase() === 'quit' || search === null) {
    alert("Thank you. Have a great day") // this alert will show
    break;
      } 
  // make a variable with boolean set to false it will be chanaged to true if an item is found
      matches = false;
  // if they type in a name we got into this loop. This loop goes through the array of objects
      for (var i = 0; i < students.length; i += 1) {
        student = students[i]; 
//it gets the students information. Each item in 0 index in the array so first loop is array[0]
        if (student.name.toLowerCase() === search.toLowerCase()) {
//if a student is found it will change the matches variable from false to true and keep going
          matches = true;
//the found student information will be put into a new array          
          foundStudents.push(student);
// the message variable is concactinated with the buildreport function and the found student array passed through it          
          message += buildReport(foundStudents)
          print(message);//the final message is printed out
        } 
       }
//if not student is found the matches variable will not change to true        
       if (!matches) {//there for if matches is false after the loop runs once it will print this and continue 
         alert("no student found");
       }
   }
          
        







