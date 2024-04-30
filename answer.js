answer=["An embodied internet", "The next generation of the internet", "A series of interconnected, immersive digital spaces ", "Interoperability", "It might give us the opportunity to reduce our impact on the environment by giving us options to avoid or reduce commuting or traveling.", "It might give us the opportunity to reduce negative environmental effects of construction and design.", "Open-source platforms", "Decentralization", "Through the use of avatars"];
var try_start_resume_btn,questions,options,option_type,agree_btn,submit_btn,feedback,options_text,attempt_btn;
var l,h,k,j,m,o;

function select_answer() {
console.log("answer loop");
console.log(answer);
 try_start_resume_btn = document.querySelector('a[aria-labelledby ="Try again"]') || document.querySelector('button[aria-labelledby="Start assignment"]') || document.querySelector('button[aria-labelledby="Resume assignment"]') ;
try_start_resume_btn.click();

setTimeout(function submitting() {
  console.log("opened");
//worked- selected all questions
 questions = document.querySelectorAll('[class="rc-FormPartsQuestion"]');
 
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

      for ( k= 0; k < options.length; k++) {
console.log("option "+k);
options_text = options[k].parentElement.textContent;

        if (answer.includes(options_text)) {
          console.log(options_text); 
          options[k].parentElement.click(); //worked-seleted options
        }//if

      }//for

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


 
 } , 6000); //submitting
}//func
select_answer();
