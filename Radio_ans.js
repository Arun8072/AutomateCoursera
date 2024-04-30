//worked - combination of three buttons , select which is present


answer=[];
function modal(i) {
console.log("loop"+i);
const try_start_resume_btn = document.querySelector('a[aria-labelledby ="Try again"]') || document.querySelector('button[aria-labelledby="Start assignment"]') || document.querySelector('button[aria-labelledby="Resume assignment"]') ;
try_start_resume_btn.click();

setTimeout(function submitting() {
  console.log("opened");
//worked- selected all questions
var questions = document.querySelectorAll('[class="rc-FormPartsQuestion"]');
 
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
    if(options[0].getAttribute("type")=="radio"){
    console.log("radio");
      
      
            console.log("option"+i);
            console.log(options[i]);
            options[i].parentElement.click(); //worked-seleted options
      
          

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
setTimeout(function feedbacking() {
 //var questions = document.querySelectorAll('[role="group"]');
 // answer=[]; 
for (let j= 0; j < questions.length; j++) {
 
console.log("questions"+j); // console.log(questions[j]); 
var options= questions[j].querySelectorAll("input");
//console.log("options"); console.log(options); 
//worked - got feedback
  
if(options[0]){
    if(options[0].getAttribute("type")=="radio"){
var feedback = questions[j].querySelector('div[data-testid="GradeFeedback-caption"]');
  console.log("feedback"); console.log(feedback);

   console.log("option"+i);
   console.log("feedback_text");  console.log(feedback.textContent);
if(feedback.textContent.includes("Correct")){
  
        // worked-got options text
    var options_text = options[i].parentElement.textContent;
    console.log("options_text"); console.log(options_text);
   if (!answer.includes(options_text)) {
         //store answers in object
     answer.push(options_text);
   }
   console.log("answer_array"); console.log(answer);
}//if

     }//if
  }//if
  }//for
// }//for
if(answer.length!==questions.length){
  console.log("answer count mistake"); } //if


 // worked- attempt tryagain
var attempt_btn = document.querySelector('div[data-e2e="AttemptPageTopBanner"]').querySelector("button");
    console.log(attempt_btn);
    attempt_btn.click();
    
    

  } , 5000); //feedbacking
 } , 6000); //submitting
return answer;
}//func 

Promise.resolve()
  .then(() => modal(0))
  .then(() => delay(13000))
  .then(() => modal(1))
  .then(() => delay(13000))
  .then(() => modal(2))
  .then(() => delay(13000))
  .then(() => modal(3));
function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}
