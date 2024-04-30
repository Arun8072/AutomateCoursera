answer=["Some health diagnostics might take place virtually.", "Opportunities will increase to incorporate physical activity and fitness into our lives. ", "Some group and individual therapy sessions could take place virtually.", "Companies will focus on calculating engagement rather than conversion rate.", "Shopping will likely be more about discovery and less about destination.", "A one-of-a-kind digital record that proves an object’s authenticity", "All of the above"];
//answer=[];
var try_start_resume_btn,questions,options,option_type,agree_btn,submit_btn,feedback,options_text,attempt_btn,spans,NOanswer;
var l,h,k,j,m,o,s;
q_count=0,q_other=0, repeated=false;


function select_answer() {
console.log("answer loop");
console.log(answer);
 try_start_resume_btn = document.querySelector('a[aria-labelledby ="Try again"]') || document.querySelector('button[aria-labelledby="Start assignment"]') || document.querySelector('button[aria-labelledby="Resume assignment"]') ;
try_start_resume_btn.click();

setTimeout(function submitting() {
  console.log("opened");
//worked- selected all questions
 questions = document.querySelectorAll('[class="rc-FormPartsQuestion"]');
 q_count=questions.length;
// console.log(questions);
//worked6- loop through question
for ( l= 0; l < questions.length; l++) { 
  console.log("question "+l); 
//console.log(questions[l]); 

//got all four options
    options= questions[l].querySelectorAll("input");
 // console.log(options);

 //worked-seperated input type
 if(options[0]){
NOanswer=true;
      for ( k= 0; k < options.length; k++) {
console.log("option "+k);
options_text = options[k].parentElement.textContent;

        if (answer.includes(options_text)) {
          console.log(options_text); 
          options[k].parentElement.click(); //worked-seleted options
          NOanswer=false; 
            // if there is no answer until last  NOanswer=true so next if runs
        }else if(k==(options.length-1) && NOanswer==true){
          console.log("No answer"); 
          // if there is no answer until last option select last option it will helps if it 5 options
          options[k].parentElement.click();
        }

      }//for

  }else{
    q_other+=1;
  }
  }//for


//worked2 - agreed
 agree_btn = document.querySelector('span[id="agreement-checkbox-base-label-text"]');
//agree_btn.click();
console.log("agreed");

//worked-delyed submission

 
 submit_btn = document.querySelector('button[data-test="submit-button"]');
//submit_btn.click();
console.log("submitted");
console.log(q_count+","+q_other);
return q_count,q_other;

 } , 6000); //submitting
}//func
select_answer();
