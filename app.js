
                       
                          // question no 1 start 

// let num1 = 6;
// function number (){
//     let num2 = 13;
//     return function (){
//         console.log(num2 + num1)
//     }
// }
// let innerfunction = number();
// innerfunction();

   
                             // question no 1 end



                             // question no 2 start



// let array1 = [1,2,3,4,5,6,7,8,9];

// let length = array1.length;

// let a = 0;

// let find = +prompt("enter your number");

// function search (a,length,b ){
//     if (a > length)
//     return false;             

//     if (array1[a] == b){
//         return true;
//     }
//     return search (a +1 ,length,b)
// }

// let final = console.log(search(a, length,find));


                             // question no 2 end



                            ////  question n0 3 start
 
// function button (){
//     let myPara = document.getElementById("my-para");  
//     myPara.innerText = prompt("writ a status");
// };


                            ////  question n0 3 end



                            ////  question n0 4 start



//     function appendLi()
// {
//   let ul = document.getElementById("list");
//   let li = document.createElement("li");
//   let text = document.createTextNode("PHP", "java", "node", "js");  // done with question number 4    
//   li.appendChild(text);
//   ul.appendChild(li);
// }


                            ////  question n0 4 end


                            ////  question n0 5 start





    //    function change1 (){
    //      let   myColor = document.getElementById("change");
    //     myColor.innerHTML = "<b><i>Dota-2 for life</i></b>";
                        
    //       let color = Math.round(Math.random() *1000000);
    //      myColor.style.backgroundColor ="#" + color;
                               
    //                            }         

                            ////  question n0 5 end



                         ////  question n0 6 start


//  let students = [];
//  function providedStudents (){
//     let std = {
//         name : prompt("enter your full name "),
//         fatherName : prompt("enter your father name"),   
//         cnic : +prompt("enter your cnci number"),
//         className : prompt("enter your class name"),

//     }
//     students.push(std);
//     console.log(students);
//     let stringify = JSON.stringify(students);
//     localStorage.setItem("students" , stringify); 
//  }

        
             ////  question n0 6 end


             ////  question n0 7 start



//  let prevStudents = localStorage.getItem("students");



// let prevStudents = localStorage.getItem("students"); 
// let students = prevStudents ? JSON.parse(prevStudents) : [];
//  function providedStudents (){
//     let std = {
//         name : prompt("enter your full name "),
//         fatherName : prompt("enter your father name"),    
//         cnic : +prompt("enter your cnci number"),
//         className : prompt("enter your class name"),

//     }
//     students.push(std);
//     console.log(students);
//     let stringify = JSON.stringify(students);
//  }

             ////  question n0 7 end

            
             ////  question n0 8 start



//              let Eml = [];
// function providedStudents (name1,father1,jobTitle1){
//     return store = {
//         name:name1,
//         father:father1,
//         jobtitle:jobTitle1,

//     };
// }
// let student = [

//     providedStudents("Nazeer", "ahmed" , " junior graphic designer") 

// ]


// console.log(Eml);
// localStorage.setItem("empdata", JSON.stringify(store));







             ////  question n0 8 end
            





// let firstNumber = 12;
// function result (){   // parent scope 
//     let secondNumber = 20; // arguments
//     return function (){
//         console.log(firstNumber + secondNumber);
 
//     }
// }

// let innerfunction = result();
// innerfunction();

// let numbers = ["babar", "Nazeer " , " faisal ", "hamza" , "adnan" ,"ahmed"];

// function number (result){
//     console.log(result)

// }
// number(10);

// function result (
//     first , B
// ){
//     if (first  > B)
//     {
//         return
//     }
//     console.log(result);
//     result(first + 1);
// }

// result(1,5)
// function countDown(fromNumber) {
//     console.log(fromNumber);
//     countDown(fromNumber-1);
// }

// countDown(3);\


// function countDown(fromNumber) {
//     console.log(fromNumber);

//     let nextNumber = fromNumber - 1;

//     if (nextNumber > 0) {
//         countDown(nextNumber);
//     }
// }
// countDown(10);

// let countDown = function f(fromNumber) {
//     console.log(fromNumber);

//     let nextNumber = fromNumber - 1;

//     if (nextNumber > 0) {
//         f(nextNumber);
//     }
// }

// let newYearCountDown = countDown;
// countDown = null;
// newYearCountDown(10);
// let total = [10,9 ,8,6,7,4];
// function countDown (
//     number, total
// ){
//     console.log(number) // display the num 
//     let newNumber = number - 1; // decrese the number valve 
//      if (newNumber == 0 ){
//         countDown(newNumber);
//      }

// }
// countDown(4);

// // program to count down numbers to 1
// function countDown(number) {

//     // display the number
//     console.log(number);

//     // decrease the number value
//    let newNumber = number - 1;

//     // base case
//     if (newNumber > 0) {
//         countDown(newNumber);
//     }
// }

// countDown(4);

// function searchRecursive(arr, target) {
//     if(arr.length === 0)
//       return -1;
      
//     if (arr[0] === target)
//         return 0;
  
//     const res = searchRecursive(arr.slice(1), target);
//     return res === -1 ? res : 1 + res;
//   }
  
//   console.log(searchRecursive([1, 5], 3)); // 2

// function providedStudents (){
// //     return
// //    {
// //         name: prompt("enter your name"),
// //         fatherName : prompt("enter your father name"),
// //         className : prompt("enter your class name"),

// //     }

// }
// student.push(studentDetails);
// console.log(student);


// let totalStudent =[];
//  function provide (){
//     let student = {
//         name : prompt("enter your name"),
//         fatherName: prompt("enter your father name"),
//     };
//  }
//  totalStudent.push(student)
//  console.log(totalStudent);
//  let stringify = JSON.stringify(totalStudent    );
//  localStorage.setItem("totalStudent", stringify);

// let students = [];
//  function provide (){
//     let std = {
//         fullName: prompt("enter your name"),
//         fatherName: prompt("enter your father name"),
//         classNum: prompt("enter your class"),
//     };
//     students.push(std);
//     console.log(students);
//     let stringify = JSON.stringify(students);
//     localStorage.setItem("students", stringify);
// }
 
// let students= localStorage.getItem("studentsdetails");


// let prevStudents = localStorage.getItem("studentsdetails");
// let student = prevStudents ? JSON.parse(prevStudents) : [] ;


// function providedStudents (){

//     let studentsDetails  ={
//         name : prompt("enter your full name "),
//         fatherName : prompt("enter your father name"),
//         cnic : +prompt("enter your cnci number"),
//         className : prompt("enter your class name"),


//     }

//     student.push(studentsDetails);
//     console.log(student);
//     let stringify = JSON.stringify(student);
//     localStorage.setItem("studentsdetails" , stringify);
// }



// let prevDetails = localStorage.getItem("studentsdetails")
// let pushData = prevDetails ? JSON.parse(prevDetails) : [];
// function information (){
//     let detailsStudents ={
//         name : prompt("enter your full name "),
//         fatherName : prompt("enter your father name"),
//         cnic : +prompt("enter your cnci number"),
//         className : prompt("enter your class name"),

//     };
    
//     pushData.push(detailsStudents);
//     console.log(pushData);
//     let stringify = JSON.stringify(pushData);
//     localStorage.setItem("pushda" , stringify);
    
// }

 
//  let students = [];
//  function providedStudents (){
//     let std = {
//         name : prompt("enter your full name "),
//         fatherName : prompt("enter your father name"),    /////   done with question 6
//         cnic : +prompt("enter your cnci number"),
//         className : prompt("enter your class name"),

//     }
//     students.push(std);
//     console.log(students);
//     let stringify = JSON.stringify(students);
//     localStorage.setItem("students" , stringify); // students = key, stringify = valve
//  }








// let totalEmloyee = [];





// function store (name1,fatherName1 ,jobTitle1){
//         return
//     {
//     name:name1;
//     fatherName:fatherName1;
//     jobTitle:jobTitle1;
            
            
        

    
//     }
// }
// let totalEmloyee =
//                 store [("BABAR", "NAZEER", "GRAPHIC DESIGNER"),
//                 store ("FAISAL", "NAZEER", " JUNIOR GRAPHIC DESIGNER"),
//                 store ("NAZEER", "AHMED", " SUNIOR GRAPHIC DESIGNER")];

// console.log(totalEmloyee);





// let numOfEmployee = {employee1, employee2, employee3};
//  totalEmloyee.push(numOfEmployee);
//  console.log(totalEmloyee.name);
//  let stringify = JSON.stringify(totalEmloyee);
//  localStorage.getItem("totalemployes"  , stringify)















// function change1 (){
//     let   myColor = document.getElementById("change");
//     myColor.innerHTML = "<b><i>Dota-2 for life</i></b>";   done with question number 8
    
//        let color = Math.round(Math.random() *1000000);
//        myColor.style.backgroundColor ="#" + color;
   
//    }


