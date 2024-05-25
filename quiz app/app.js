
  var firebaseConfig = {
    apiKey: "AIzaSyCYr947426h8KHpdJSbSDn6BBeGRbZ1spE",
    authDomain: "quiz-3ba18.firebaseapp.com",
    databaseURL: "https://quiz-3ba18-default-rtdb.firebaseio.com",
    projectId: "quiz-3ba18",
    storageBucket: "quiz-3ba18.appspot.com",
    messagingSenderId: "1005363740516",
    appId: "1:1005363740516:web:00f8e140bb3eaea8574471",
    measurementId: "G-2VK7Y1NG2Q"
  };

  // Initialize Firebase
  var app = firebase.initializeApp(firebaseConfig);
  
  
  var questions = [  
    {
      question: "1) HTML Stands for",
      option1: "Hyper Text Markup Language",
      option2: "Hyper Tech Markup Language",
      option3: "Hyper Touch Markup Language",
      corrAnswer: "Hyper Text Markup Language",
    },
    {
      question: "2) CSS Stands for",
      option1: "Cascoding Style Sheets",
      option2: "Cascading Style Sheets",
      option3: "Cascating Style Sheets",
      corrAnswer: "Cascading Style Sheets",
    },
    {
      question: "3) Which tag is used for most large heading",
      option1: "<h6>",
      option2: "<h2>",
      option3: "<h1>",
      corrAnswer: "<h1>",
    },
    {
      question: "4) Which tag is used to make element unique ",
      option1: "id",
      option2: "class  ",
      option3: "label",
      corrAnswer: "id",
    },
    {
      question: "5) Any element assigned with id, can be get in css ",
      option1: "by # tag",
      option2: "by @ tag",
      option3: "by & tag",
      corrAnswer: "by # tag",
    },
    {
      question: "6) CSS can be used with ______ methods ",
      option1: "8",
      option2: "3",
      option3: "4",
      corrAnswer: "3",
    },
    {
      question: "7) In JS variable types are ____________ ",
      option1: "6",
      option2: "3",
      option3: "8",
      corrAnswer: "8",
    },
    {
      question: "8) In array we can use key name and value ",
      option1: "True",
      option2: "False",
      option3: "None of above",
      corrAnswer: "False",
    },
    {
      question: "9) toFixed() is used to define length of decimal ",
      option1: "True",
      option2: "False",
      option3: "None of above",
      corrAnswer: "True",
    },
    {
      question: "10) push() method is used to add element in the start of array ",
      option1: "True",
      option2: "False",
      option3: "None of above",
      corrAnswer: "False",
    },
  ];
  
  var ques = document.getElementById("ques");
  var opt1 = document.getElementById("opt1");
  var opt2 = document.getElementById("opt2");
  var opt3 = document.getElementById("opt3");
  var timer = document.getElementById("timer");
  var index = 0;
  var score = 0;
  var min = 1;
  var sec = 59;
  
  setInterval(function () {
    timer.innerHTML = `${min}:${sec}`;
    sec--;
    if (sec < 0) {
      min--;
      sec = 59;
      if (min < 0) {
        min = 1;
        sec = 59;
        nextQuestion();
      }
    }
  }, 1000);
  
  function nextQuestion() {
    var getOptions = document.getElementsByName("option");
  
    for (var i = 0; i < getOptions.length; i++) {
      if (getOptions[i].checked) {
        var selectedValue = getOptions[i].value;
        var selectedQues = questions[index - 1].question;
        var selectedAns = questions[index - 1][`option${selectedValue}`];
        firebase.database().ref(`correctans/question${[index]}` ).set({
            ans: selectedAns
          });
        var correctAnswer = questions[index - 1]["corrAnswer"];
  
        if (selectedAns == correctAnswer) {
          score++;
        }
      }
  
      getOptions[i].checked = false;
    }
    btn.disabled = true;
  
    if (index > questions.length - 1) {
      Swal.fire({
        title: "Good job!",
        text:
          "your percetnage is: " + ((score / questions.length) * 100).toFixed(2),
        icon: "success",
      });
    } else {
      ques.innerText = questions[index].question;
      opt1.innerText = questions[index].option1;
      opt2.innerText = questions[index].option2;
      opt3.innerText = questions[index].option3;
      index++;
      min = 1;
      sec = 59;
    }
  }
     
  function target() {
    var btn = document.getElementById("btn");
  
    btn.disabled = false;
  }
  