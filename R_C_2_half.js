answer=[];
var try_start_resume_btn,questions,options,option_type,agree_btn,submit_btn,feedback,options_text,attempt_btn;
var l,h,k,j,m;

 
function modal(i,category) {
console.log("loop"+i);
questions = document.querySelectorAll('[class="rc-FormPartsQuestion"]');
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
  if (option_type=="radio") {
        n=0; 
        console.log("radio");
      }else if(option_type=="checkbox"){
        n=(options.length)-1;
        console.log("checkbox");
      }
 for ( m = 0; m <= n; m++) { 
   if(option_type=="checkbox"){ o=m; 
   }else if(option_type=="radio"){ o=n; m=i;} 
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
   console.log("answer_array"); console.log(answer);

}//if
}//for
     }//if
  }//if
  }//for
// }//for

/* if(answer.length!==questions.length){
  console.log("answer count mistake"); } //if
*/


    

  } , 5000); //feedbacking
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
