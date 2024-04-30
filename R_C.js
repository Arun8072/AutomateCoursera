answer=[];
var try_start_resume_btn,questions,options,option_type,agree_btn,submit_btn,feedback,options_text,attempt_btn;
var l,h,k,j,m,o;

function modal(i,category) {
console.log("loop"+i);
 try_start_resume_btn = document.querySelector('a[aria-labelledby ="Try again"]') || document.querySelector('button[aria-labelledby="Start assignment"]') || document.querySelector('button[aria-labelledby="Resume assignment"]') ;
try_start_resume_btn.click();

setTimeout(function submitting() {
  console.log("opened");
//worked- selected all questions
 questions = document.querySelectorAll('[class="rc-FormPartsQuestion"]');
 
console.log(questions);
//worked6- loop through question
for ( l= 0; l < questions.length; l++) { 
//console.log("questions"); 
console.log(questions[l]); 

//got all four options
    options= questions[l].querySelectorAll("input");
    console.log(options);

 //worked-seperated input type
 if(options[0]){
   option_type=options[0].getAttribute("type");
 //  radio>=checkbox=>true so for checkbox loop radio also gain one additional chance
    if(option_type>=category){
   // console.log("radio");
      if (option_type=="radio") {
        h=i; 
        console.log("radio");
      }else if(option_type=="checkbox"){
        h=(options.length)-1;
        console.log("checkbox");
      }
    //for checkbox it select all options
    //for radio it select option behalf of the count of loop
      for ( k= 0; k <= h; k++) {
      
            console.log("option"+k);
            console.log(options[k]);
            options[k].parentElement.click(); //worked-seleted options
       }
          

     }//if
  }//if
  }//for


//worked2 - agreed
 agree_btn = document.querySelector('span[id="agreement-checkbox-base-label-text"]');
agree_btn.click();
console.log("agreed");

//worked-delyed submission

 
 submit_btn = document.querySelector('button[data-test="submit-button"]');
submit_btn.click();
console.log("submitted");
    
//feedback loop
setTimeout(function feedbacking() {
 //var questions = document.querySelectorAll('[role="group"]');
 // answer=[]; 
for ( j= 0; j < questions.length; j++) {
 
console.log("questions"+j); // console.log(questions[j]); 
 options= questions[j].querySelectorAll("input");
 
//console.log("options"); console.log(options); 
//worked - got feedback
  
if(options[0]){
option_type=options[0].getAttribute("type");
      if(option_type>=category){
 feedback = questions[j].querySelectorAll('div[data-testid="GradeFeedback-caption"]');
  console.log("feedback"); console.log(feedback);
  //for radio it has only one total feedback but checkbox has feedback for every option 
  if (option_type=="radio") {
        n=0; // make loop once
        console.log("radio");
      }else if(option_type=="checkbox"){
        n=(options.length)-1;
        console.log("checkbox");
      }
 for ( m = 0; m <= n; m++) { 

   if(option_type=="checkbox"){ o=m; 
  //   for checkbox selected specific feedback feedback[m] and specific option options[m]
   }else if(option_type=="radio"){
  //   for radio selected first feedback feedback[n] and specific option options[i]
     o=n; m=i;} 
 
   console.log("option"+m);
   console.log("feedback_text");  console.log(feedback[o].textContent);
if(feedback[o].textContent.includes("Correct")){
  
        // worked-got options text
     options_text = options[m].parentElement.textContent;
    console.log("options_text"); console.log(options_text);
   if (!answer.includes(options_text)) {
         //store answers in object
     answer.push(options_text);
   }
   

}//if
}//for
     }//if
  }//if
  }//for
// }//for
console.log("answer_array"); console.log(answer);
/* if(answer.length!==questions.length){
  console.log("answer count mistake"); } //if

// worked- attempt tryagain
var attempt_btn = document.querySelector('div[data-e2e="AttemptPageTopBanner"]').querySelector("button");
    console.log(attempt_btn);
    attempt_btn.click();
*/

  } , 5000); //feedbacking
 } , 6000); //submitting
return answer;
}//func 

Promise.resolve()
  .then(() => modal(0,"checkbox"))
  .then(() => delay(13000))
  .then(() => modal(0,"radio"))
  .then(() => delay(13000))
  .then(() => modal(1,"radio"))
  .then(() => delay(13000))
  .then(() => modal(2,"radio"))
  .then(() => delay(13000))
  .then(() => modal(3,"radio"));
function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}
