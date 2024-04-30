var link_pelement,category_txts,crumbs,w_now,s_now,read_btn,media,completed_txt;
var w,x,p;
details = { };
answers=[];
var try_start_resume_btn,questions,options,option_type,agree_btn,submit_btn,feedback,options_text,attempt_btn,spans,NOanswer;
var l,h,k,j,m,o,s;
q_count=0,q_other=0, repeated=false;

//worked - looped through all weeks
const weeks = document.querySelectorAll('a[data-test="rc-WeekNavigationItem"]');
//const weeks = document.querySelector('div[title="Course Material"]').querySelectorAll('li');
console.log(weeks);

async function complete() {
//weeks.length-1
for ( w = 0; w>=0 ; w--) {
weeks[w].click();
await new Promise(r => setTimeout(r,2500));

  console.log("weeks "+ w);
   // weeks[j].childNodes[0].click();

// worked - got all topics and their category
 link_pelement= document.querySelectorAll('div[role="presentation"]');
//console.log(link_pelement);
 category_txts = document.querySelectorAll('.rc-WeekItemAnnotations');
//console.log(category_txts);
  
 
for ( x = 0; x < category_txts.length; x++) {
 // console.log(link_pelement[x+4]);
 // console.log(category_txts[x]);
  //when selecting [role="presentation"] it has some other extra elements ,to eliminate that start from four by se+4
    details["link"+w+x]= link_pelement[x+4].childNodes[0];
    details["category"+w+x]=category_txts[x].textContent.split("•",1)[0];
    details["name"+w+x]=link_pelement[x+4].childNodes[0].querySelector("p[data-test='rc-ItemName']").textContent;
  
}//for

console.log(details);

}//for-weeks



//console.log(details["link00"]);

details["link00"].click();
//selecting the section from the same week opened, does change the whole html so it stays in the page so you can continue inspect element
solve();
async function solve() {

//8000
await new Promise(r => setTimeout(r,9000));

crumbs=document.getElementsByClassName('breadcrumb-item');
w_now=crumbs[1].textContent.match(/\d+/);
w_now=w_now[0]-1; //-1 to start from zero index
s_now=crumbs[2].textContent;
//console.log(w_now);
//console.log(s_now);

for (p = 0;p < category_txts.length;p++) {
  if(s_now==details["name"+w_now+p]){
    break;
  }//if
}//for

console.log(p);
console.log(details["name"+w_now+p]);

next_btn=document.querySelector("a[aria-label='Next Item']");

    if(details["category"+w_now+p]=="Video"){
      console.log("Video");
       media = document.querySelector("video");
       console.log(media);
       media.play();
     await new Promise(r => setTimeout(r,1500));
      //The HTMLMediaElement API is used for video controls
      // time is calculated in seconds
console.log(media.currentTime);
console.log(media.duration);
      media.currentTime = Math.floor(media.duration-50);
  await new Promise(r => setTimeout(r,500));
      media.currentTime = Math.floor(media.duration);
      console.log("Video played");
await new Promise(r => setTimeout(r,2000));
      next_btn.click();
      solve();
    }else if(details["category"+w_now+p]=="Reading"){
      console.log("Reading");
       read_btn = document.querySelector('button[data-testid="mark-complete"]');
       if(read_btn){
       read_btn.click();
       }
        completed_txt = document.querySelector('div[data-testid="completed-text"]');
       if(completed_txt){
         console.log("Completed reading"); }
       
       next_btn.click();
       solve();
    }else if(details["category"+w_now+p].includes("Quiz")){
      console.log("Quiz");
      quiz();
      
    }else {
      console.log("other");
      next_btn.click();
      solve();
    }//if
    

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
        if(options[k]){
            console.log("option"+k);
            console.log(options[k]);
            options[k].parentElement.click(); //worked-seleted options
        }else if(k==(options.length-1)){
          // if there is no option select last option it will helps if it lessthan 4 options
          options[k].parentElement.click();
        }//elseif
      }//for

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
 // answers=[]; 
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
   if (!answers.includes(options_text)) {
         //store answers in object
     answers.push(options_text);
   }
   

}//if
}//for
     }//if
  }//if
  }//for
// }//for
console.log("answer_array"); console.log(answers);
/* if(answers.length!==questions.length){
  console.log("answers count mistake"); } //if

// worked- attempt tryagain
var attempt_btn = document.querySelector('div[data-e2e="AttemptPageTopBanner"]').querySelector("button");
    console.log(attempt_btn);
    attempt_btn.click();
*/

  } , 5000); //feedbacking
 } , 6000); //submitting
return answers;
}//func-modal


function select_answer() {
console.log("answer submission");
console.log(answers);
 q_other=0; // said to 0 to neutralize for every quiz loop
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

        if (answers.includes(options_text)) {
          console.log(options_text); 
          options[k].parentElement.click(); //worked-seleted options
          NOanswer=false;  // if there is no answer until last  NOanswer=true so next if runs
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
agree_btn.click();
console.log("agreed");

//worked-delyed submission

 submit_btn = document.querySelector('button[data-test="submit-button"]');
submit_btn.click();
console.log("submitted");


 } , 6000); //submitting
}//func-ans


function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

function quiz() {

Promise.resolve()
  .then(() => modal(0,"checkbox"))
  .then(() => delay(13000))
  .then(() => modal(0,"radio"))
  .then(() => delay(13000))
  .then(() => modal(1,"radio"))
  .then(() => delay(13000))
  .then(() => modal(2,"radio"))
  .then(() => delay(13000))
  .then(() => modal(3,"radio"))
  .then(() => delay(13000))
  .then(() => select_answer())
  .then(() => delay(9000))
  .then(function() {
  
console.log("repeated function");
//repeated == false at starting if all the possible questions are not graded , loop continues to second time and  set repeated==true to prevent from more than two loop
  if(repeated==false){
console.log("repeated");
    spans = document.querySelectorAll("div>span");
 //   grade is in span at top section so we get it few loop
for (s= 0;s < spans.length;s++) {
  
 if(spans[s].textContent=="Latest Submission Grade"){
   console.log(spans[s].textContent);
 //  grade is next sibling to current text so it must be i+1
   percent_got=parseFloat(spans[s+1].textContent);
   // we got our latest grade 
   console.log(percent_got);
   break;
 } //if
}//for

console.log(q_count+","+q_other);
// to know what is the percentage of textbox questions
percent_other=((q_other * 100) / q_count).toFixed(2) ;
console.log(percent_got+","+percent_other);
/*
to check all the questions other than text box are answerd, if not repeat whole loop
the loop will not repeat if it met two conditions
>percentage of checkbox and radio questions equal to the percentage we got 
>percentage we got is above than 80
*/
console.log( (!(percent_got==(100-percent_other)))&&(percent_got<80) );
if((!(percent_got==(100-percent_other)))&&(percent_got<80)){
  repeated=true;
  quiz();
}//if  //else{ next_btn.click(); }
}//if
})
.then( );
  
}//func-quiz


}//func-solve
}//fun
complete();

