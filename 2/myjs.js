// #1

// let admin;
// let name;
// name = 'John';
// admin = name;
// alert(admin);


// #2

// let planetEarth;
// let currentUser;

// let userName = prompt("What is your name?","");

// alert(`Your name is ${userName}`);
// document.getElementById("Output").textContent = userName;


// let age = Number("Любая строка вместо числа");

// alert(age);

let login = prompt("Write down your login","");
let message;

message = (login == "Staff") ? "Hi there":
          (login == "Director") ? "Hello sir":
          (login == "") ? "No login":
          "";
          
alert(message);