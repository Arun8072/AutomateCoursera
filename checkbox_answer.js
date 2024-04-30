//worked - combination of three buttons , select which is present
const try_start_resume_btn = document.querySelector('a[aria-labelledby ="Try again"]') || document.querySelector('button[aria-labelledby="Start assignment"]') || document.querySelector('button[aria-labelledby="Resume assignment"]') ;
try_start_resume_btn.click();
console.log("opened");

//answer = [[],[],[],[],[],[],[],[],[],[]];
//worked- selected all questions
var questions = document.querySelectorAll('[role="group"]');
 answer=[];
console.log(questions);
//worked6- loop through question
for (let l= 0; l < questions.length; l++) { 
//console.log("questions"); 
console.log(questions[l]); 

//got all four options
   var options= questions[l].querySelectorAll("input");
    console.log(options);

 //worked-seperated input type
 if(options[0]){
    if(options[0].getAttribute("type")=="checkbox"){
         console.log("checkbox");
         for (let i = 0; i < options.length; i++) {
            console.log("option"+i);
            console.log(options[i]);
            options[i].parentElement.click(); //worked-seleted options
             
           }//for

     }//if
  }//if
  }//for

//worked2 - agreed
const agree_btn = document.querySelector('span[id="agreement-checkbox-base-label-text"]');
agree_btn.click();
console.log("agreed");

//worked-delyed submission

 
    const submit_btn = document.querySelector('button[data-test="submit-button"]');
submit_btn.click();
console.log("submitted");
    
//feedback loop

 //var questions = document.querySelectorAll('[role="group"]');
 // answer=[]; 
for (let j= 0; j < questions.length; j++) {
 var ans=[]; answer.push(ans);
console.log("questions"+j); console.log(questions[j]); 
var options= questions[j].querySelectorAll("input");
console.log("options"+j); console.log(options[j]); 
//worked - got feedback
  var feedback = questions[j].querySelectorAll('div[data-testid="GradeFeedback-caption"]');
  console.log("feedback"); console.log(feedback);
if(options[0]){
    if(options[0].getAttribute("type")=="checkbox"){

for (let k = 0; k < options.length; k++) {
   console.log("option"+k);
   console.log("feedback_text");  console.log(feedback[k].textContent);
if(feedback[k].textContent.includes("Correct")){
  
        // worked-got options text
    var options_text = options[k].parentElement.textContent;
    console.log("options_text"); console.log(options_text);
    //store answers in object
    answer[j].push(options_text);
   console.log("answer_array"); console.log(answer);
}//if
}//for
     }//if
  }//if
  }//for
answer.length=questions.length;


 // worked- attempt tryagain
var attempt_btn = document.querySelector('div[data-e2e="AttemptPageTopBanner"]').querySelector("button");
    console.log(attempt_btn);
    attempt_btn.click();
    
    
//worked- clicked try again
 var try_again = document.querySelector('a[aria-labelledby ="Try again"]');
 try_again.click();
 
 
 
 
