function init() {

var startButton, details, select, selectAll, author, t, name, regNo, school, dept, submitButton, elapsedTime, questions, qAnswers, answer, answers, userSelect, userSelected, unchecked,  answerSection, correctAns, answersButton, answerCon, backButton, tick;
  select = document.querySelector.bind(document);
  selectAll = document.querySelectorAll.bind(document);
  
  /*author = document.createElement("span");
  author.innerHTML = "&copy;<a href='#'>Coded Writer</a>2021";
  author.setAttribute("class", "author");*/
  
name = select("#name");
regNo = select("#regNo");
school = select("#school");
dept = select("#dept");

details = selectAll(".reg");
startButton = select("#start");
 startButton.addEventListener("click", ()=>{
  details.forEach((inp)=>{
      if(inp.value.trim =="" || !(inp.value)) {
      inp.style["border-bottom-color"] = "#aa311b";
    } else if(name.value =="" || name.value == " ") {
      name.style["border-bottom-color"] = "#aa311b";
    } else if(regNo.value =="" || regNo.value == " ") {
      regNo.style["border-bottom-color"] = "#aa311b";
    } else if(school.value =="" || school.value == " ") {
      school.style["border-bottom-color"] = "#aa311b";
    } else if(dept.value =="" || dept.value == " ") {
      dept.style["border-bottom-color"] = "#aa311b";
    } else {
      setTimeout(()=>{
        select(".sign-in").style.display = "none";
       select(".question-body").style.display = "block";
       select(".header-text").style.display = "none";
     
    elapsedTime = new Date().getTime() + 600000;
      }, 1700);
   startButton.innerHTML = "<span><i class='spinning fas fa-spinner'></i></span>  Start Quiz";
     }
   });
  });
      name.onfocus = ()=>{
        name.style["border-bottom-color"] = "#dab817";
      };
      name.onblur = ()=>{
        name.style["border-bottom-color"] = "#fff";
      };
      regNo.onfocus = ()=>{
        regNo.style["border-bottom-color"] = "#dab817";
      };
      regNo.onblur = ()=>{
        regNo.style["border-bottom-color"] = "#fff";
      };
      school.onfocus = ()=>{
        school.style["border-bottom-color"] = "#dab817";
      };
      school.onblur = ()=>{
        school.style["border-bottom-color"] = "#fff";
        school.value = school.value.toUpperCase();
      };
      dept.onfocus = ()=>{
        dept.style["border-bottom-color"] = "#dab817";
      };
      dept.onblur = ()=>{
        dept.style["border-bottom-color"] = "#fff";
        dept.value = dept.value.toUpperCase();
      };
      
 
   
       
  questions = [{ques:"When an investigator uses data which have already been collected by others, such data is called?", options:["Primary data", "Secondary data", "Tertiary data", "Borrowed data"], ans:"Secondary data"}, {ques:"What technique is used to ensure that a sample is a representative of a population?", options:["Framing", "Targeting", "Randomization", "Sampling"], ans:"Randomization"}, {ques:"Which one of the following is not an example of Ordinal data?", options:["Rank", "Volume", "Statistics grade", "Satisfaction level"], ans:"Volume"}, {ques: "A subgroup that is  a representative of a population is called?", options:["A category", "Data", "A sample", "Census"], ans: "A sample"}, {ques: "Two types of statistical variables are?", options:["Categorical and Descriptive", "Categorical and Numerical", "Descriptive and Numerical", "Constant and Numerical"], ans:"Categorical and Numerical"}, {ques: "What name is given to data which can be ranked?", options:["Categorical data", "Ordinal data", "Interval data", "Ratio data"], ans:"Ordinal data"}, {ques: "What name is given to data which is on a continuous scale with a neutral zero?", options:["Interval data", "Ranked data", "Ratio data", "Ordinal data"], ans:"Ratio data"}, {ques: "What is the first stage in statistics?", options:["Analyze data", "Collect data", "Organize data", "Identify the group of people to be studied"], ans:"Identify the group of people to be studied"}, {ques: "Which of these is an example of a categorical variable?", options:["Flavor of soft drink ordered by each customer at a fast food restaurant", "Height, measured in inches, for each student in a class", "Points scored by each player on a team", "Color of a car"], ans:"Height, measured in inches, for each student in a class"}, {ques: "Numerical and pictorial information about variables are called?", options: ["Analytical Statistics", "Descriptive Statistics", "Inferential Statistics", "Parametric Statistics"], ans:"Descriptive Statistics"}, {ques: "The entire group of interest for a statistical conclusion is called?", options:["The data","The population", "The sample", "The Statistic"], ans:"The population"}, {ques: "Statistical Inference is?", options:["the process of estimates and conclusions carefully based on data from a sample", "the process of estimates and conclusions carefully based on data from an entire population", "a pictorial display that summarizes data", "a tabluation of data"], ans:"the process of estimates and conclusions carefully based on data from a sample"}, {ques:"Variables whose measurement is done in terms such as weight, height and length are classified as?", options: ["Continuous Variables", "Measuring Variables", "Flowchart Variables", "Discrete Variables"], ans:"Continuous Variables"}, {ques: "Focus groups, individual respondents and panels of respondents are classified as?", options: ["Pointed data sources", "Itemized data sources", "Secondary data sources", "Primary data sources"], ans:"Primary data sources"}, {ques: "Analysis of labor turnover rates, performance appraisal, training programs and planning of incentives are examples of role of?", options: ["Statistics in personnel management", "Statistics in finance", "Statistics in marketing", "Statistics in production"], ans:"Statistics in personnel management"}, {ques: "Data on gender is categorized as?", options: ["Ratio data", "Ordinal data", "Nominal data", "Interval data"], ans:"Nominal data"}, {ques: "All but one is a method of sampling", options: ["Random Sampling", "Cluster Sampling", "Stratified Sampling", "Hierarchical Sampling"], ans:"Hierarchical Sampling"}, {ques:"Which one of the following is a statistic?", options:["Sample mean", "Population variance", "Population mean" , "None of the above"], ans:"Sample mean"}, {ques: "Which of the following points do not reflect statistics?", options:["It is a while subject of study", "They can be inferential", "It describes methods of collecting quantitative data", "It describes ways of analyzing qualitative data"], ans:"It is a while subject of study"}, {ques: "Sample statistics are denoted by?", options: ["Upper case Greek letter", "Associated Roman alphabets", "Roman letters", "Lower case Greek letter"], ans:"Roman letters"}];
  
  let questionCon = select(".question-wrapper");
  for(a=0; a< questions.length; a++) {
  let b = a + 1;
   
   let eachCon = document.createElement("div");
    
  eachCon.setAttribute("class", "each-q");
  
 var questionSection = "<span id='questions"+a+"' class='quiz-questions'>"+ b+". "+  questions[a].ques +"</span><br><br>";
  for(c =0; c < questions[a].options.length; c++) {

    questionSection += "<span class='quiz-options'><label><input type='radio' name="+'opt'+a+" class='radio' value='"+questions[a].options[c]+"'/>"+questions[a].options[c] + "<span class='check'></span></label></span>";
  }
   
    eachCon.innerHTML += questionSection;
    questionCon.appendChild(eachCon);
    
  }
  submitButton = document.createElement("button");
  submitButton.innerHTML = "Submit";
  submitButton.setAttribute("class", "submit-button");
  questionCon.appendChild(submitButton);
  

   function submit() {
   // select(".pop-up").classList.add("fade-in");
    //select(".pop-up").classList.remove("fade-out");
    popUp();
     select(".pop-up").style.opacity = "1";
     select(".bg").style.opacity = "0.4";
     select(".bg").style.brightness = "75%";
     select(".pop-up").style.display= "block";
     submitButton.removeEventListener("click", submit);
     select(".yes").addEventListener("click", yes);
     select(".no").addEventListener("click", no);
   }
   
   const popUp = ()=>{
    select(".pop-up").classList.toggle("fade-in");
  };
   
   function yes() {
  // select(".pop-up").classList.toggle("fade-in");
  //   select(".pop-up").classList.add("fade-out");
     select(".pop-up").style.display = "none";
     select(".bg").style.opacity = "1";
     select(".bg").style.brightness = "100%";
     submitButton.addEventListener("click", submit);
     score();
   }
   
   function no() {
     popUp();
      //  select(".pop-up").classList.toggle("fade-in");
   //  select(".pop-up").classList.add("fade-out");
    select(".pop-up").style.display= "none";
     select(".bg").style.opacity = "1";
     select(".bg").style.brightness = "100%";
     submitButton.addEventListener("click", submit);
   }
   
select(".yes").removeEventListener("click", yes);
select(".no").removeEventListener("click", no);
submitButton.addEventListener("click", submit);
  
  function score() {
    var scores = 0;
    let quizEnd = select(".result");
    select(".question-body").style.display = "none";
    select(".header-text").style.display = "none";
    quizEnd.style.display = "block";
   select(".author-result").style.display = "block";
   select(".author-answer").style.display = "non";
    clearInterval(t);
   for(i=0; i< questions.length; i++) {
     userSelect = document.getElementsByName("opt"+i);
  
for(j=0; j< userSelect.length; j++){
    if (userSelect[j].checked) 
        answer = userSelect[j].value;
        
   }
     correctAns = questions[i].ans;
        if (answer == correctAns){
           scores ++;
        }
   
   }
   
   var percentScore = Math.floor((scores / questions.length)* 100);
   
   quizEnd.innerHTML = "<span class='result-text'>Congratulations <span class='result-name'>"+ name.value+ "</span> you got "+scores+ " out of "+questions.length+" questions</span><br><br><span class='result-text score'>Your score: <br><br>"+percentScore+"%</span><br><br>";
   
 
  quizEnd.appendChild(answersButton);
  
} 

answersButton = document.createElement("button");
  answersButton.innerHTML = "View Answers";
  answersButton.setAttribute("class", "answers-button");
  
  
backButton = document.createElement("span");
  backButton.innerHTML = "<i class='fas fa-angle-double-left'></i> Back";
  backButton.setAttribute("class", "back");
 
tick = document.createElement("span");
  tick.setAttribute("class", "tick");
  
  
   function checkAnswers() {
     select(".result").style.display = "none";
     select(".header-text").style.display = "none";
     select(".answers").style.display = "block"
   select(".author-result").style.display = "none";
   select(".author-answer").style.display = "block";

   qAnswers = select(".answers");
  qAnswers.appendChild(backButton);
  for(x=0; x < questions.length; x++) {
     let z = x + 1;
      answerCon = document.createElement("div");
       answerCon.setAttribute("class", "each-a");
  
  
 var answerSection = " <span id='answers"+x+"' class='quiz-answers'>"+ z+". "+  questions[x].ques +"</span><br><br>";
   userSelected = document.getElementsByName("opt"+x);
  
  for(y =0; y < userSelected.length; y++) {
     if (userSelected[y].checked) {
        answers = userSelected[y].value;
     }
   
  }
     
    answerSection += "<span class='answer-value'><span class='ans'>Ans:</span> "+questions[x].ans+"  "+"<br><span class='ans val'>You chose</span>: "+answers+" </span></span>";
    
 if(questions[x].ans == answers) {
      tick.classList.remove("wrong");
      tick.classList.add("right");
     
  } else {
   tick.classList.remove("right");
   tick.classList.add("wrong");
    }
   answerCon.appendChild(tick);
   
  
    answerCon.innerHTML += answerSection;
    qAnswers.appendChild(answerCon);
   }
 }
 

  function goBack() {
   select(".result").style.display = "block";
   select(".answers").style.display = "none";
   select(".answers").innerHTML = "";
 /*for(n =0; n < userSelected.length; n++) {
       if (userSelected[n].checked) 
        answers = userSelected[n].value;
  } */
   }
/*
window.addEventListener("click", checkAnswers);*/
answersButton.addEventListener("click", checkAnswers);
backButton.addEventListener("click", goBack);

  function timer() {

  let currentTime = new Date().getTime();
   let now = elapsedTime - currentTime;
    function addZero(zero) {
      return (zero < 10)? "0"+String(zero):String(zero);
    }
    
     let hours = addZero(Math.floor((now % 86400000 ) / 3600000));
		let minutes = Math.floor( (now % 3600000 ) / 60000);
		let seconds = Math.floor((now % 60000)/ 1000);
    
      if(now < 0)
         score();
    
   select(".time").innerHTML = "Time left: "+ addZero(minutes) + ":" + addZero(seconds);
     }
   t = setInterval(timer,1000);
}

window.addEventListener("DOMContentLoaded", init);