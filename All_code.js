

//worked - combination of three buttons , select which is present
const try_start_resume_btn = document.querySelector('a[aria-labelledby ="Try again"]') || document.querySelector('button[aria-labelledby="Start assignment"]') || document.querySelector('button[aria-labelledby="Resume assignment"]') ;
try_start_resume_btn.click();
console.log("opened");

//worked- quiz start button
const start_btn = document.querySelector('button[aria-labelledby="Start assignment"]');
start_btn.click();
console.log("opened");

//worked1 - opened quiz modal
const resume_btn = document.querySelector('button[aria-labelledby="Resume assignment"]');
resume_btn.click();
console.log("opened");


//worked2 - agreed
const agree_btn = document.querySelector('span[id="agreement-checkbox-base-label-text"]');
agree_btn.click();
console.log("agreed");

//worked-delyed submission
setTimeout(function submitting() {
 
    const submit_btn = document.querySelector('button[data-test="submit-button"]');
submit_btn.click();
console.log("submitted");
    
 } , 1000);

//worked3-submitted
const submit_btn = document.querySelector('button[data-test="submit-button"]');
submit_btn.click();
console.log("submitted");

 document.querySelector('input[type="radio"]').click();
 
 
document.querySelector('input[type="radio"]').nextElementSibling.click();
 
 
 class="rc-Option"
 data-testid="cml-viewer"
 
 const op = document.querySelector('div[data-testid="cml-viewer"]');
 console.log(op);
op.click();
 op.querySelector('div[class="rc-Option"]');

//worked4-getting text
const op = document.querySelector('div[class="css-1mkdutb"]').textContent;
 console.log(op);
op.click();


const opt= document.getElementsByTagName("p").innerHTML;
if(op==opt){ opt.click();}

rc-Option__input-text

const op = document.querySelector('div[class="rc-Option__input-text"]').textContent;
 console.log(op);

QpopdD-legend

var form = document.querySelector('#QpopdD-legend');
var elements = form.elements;
console.log(elements[1]);


var form_in = document.querySelectorAll("input");
console.log(form_in);

var x = document.getElementsByClassName("ReactModalPortal");
var y = x.querySelectorAll('[role="group"]');
console.log(x);
console.log(y);

('[id="c2"]')

/* ... */
//worked5- selected every question
var questions = document.querySelectorAll('[role="group"]');
console.log(questions);
//worked6- loop through question
questions.forEach( (question) => { 
console.log("question"); 
console.log(question); 
//got all four options
   var options= question.querySelectorAll("input");
    console.log(options);
   
    for (let i = 0; i < options.length; i++) {
    console.log("option"+i);
    console.log(options[i]);
    options[i].parentElement.click(); //worked-seleted options
    }//for
  
  });//foreach
/* ... */


var q=questions[0];
console.log(q);

for (let i = 1; i <= questions.length; i++) {
    console.log('question' + i);
}



var form_in = q.querySelectorAll("input");
console.log(form_in);

var form_in = elements.querySelectorAll("input");
console.log(form_in);


let option = document.querySelectorAll('input:nth-child(2)');


let elements = Array.from(questions);
console.log(elements);
 
 //duplicate
 /* ... */
//worked5- selected every question
var questions = document.querySelectorAll('[role="group"]');
console.log(questions);
//worked6- loop through question
questions.forEach( (question) => { 
console.log("question"); 
console.log(question); 
//got all four options
   var options= question.querySelectorAll("input");
    console.log(options);
  
  var points= question.querySelector(".rc-FormPartsQuestion__pointsCell");
    console.log(points);
  
  
 //worked-seperated input type
 if(options[0]){
    if(options[0].getAttribute("type")=="radio"){
    console.log("radio");
     }else if(options[0].getAttribute("type")=="checkbox"){
         console.log("checkbox");
         //for checkbox select all and get all feedback at once
     }//elseif
     
  }else{ console.log("textarea"); }//else
  
    for (let i = 0; i < options.length; i++) {
    console.log("option"+i);
    console.log(options[i]);
    options[i].parentElement.click(); //worked-seleted options
    }//for
  
  });//foreach
/* ... */


var questions = document.querySelectorAll('[role="group"]');
console.log(questions);
//worked6- loop through question
questions.forEach( (question) => { 
console.log("question"); 
console.log(question); 

//worked - got feedback
  const feedback = question.querySelector('div[data-testid="GradeFeedback-caption"]').textContent;
// console.log(feedback);
if(feedback.includes("Correct")){
    console.log(feedback);
}//if

//got all four options
   var options= question.querySelectorAll("input");
    console.log(options);
    
    // worked-got options text
     var options_text = options[0].parentElement.textContent;
    console.log(options_text);
    
    
    
  //worked-got points
  var points= question.querySelector(".rc-FormPartsQuestion__pointsCell").getElementsByTagName("span")[0].textContent;
  console.log(points);
  if( points.includes("0 / 1")){
      console.log("point 0");
  }//if
  if( points.includes("1 / 1")){
      console.log("point 1");
  }//if
  
  });//foreach
  
 // worked- tryagain 
var attempt_btn = document.querySelector('div[data-e2e="AttemptPageTopBanner"]').querySelector("button");
    console.log(attempt_btn);
    attempt_btn.click();
   
 
//worked - reading
const read_btn = document.querySelector('button[data-testid="mark-complete"]');
read_btn.click();
console.log("marked as read");
//worked-checked completed
const completed_txt = document.querySelector('div[data-testid="completed-text"]');
if(completed_txt.textContent=="Completed"){ console.log("completed reading"); }
//then close the iframe}

//worked- found category
const reading_txts = document.querySelectorAll('.rc-WeekItemAnnotations');
console.log(reading_txts);
for( var i=0;i<reading_txts.length;i++){
var reading_txt = reading_txts[i].textContent;
if(reading_txt.includes("Video")){
    console.log("video");
}else if(reading_txt.includes("Reading")){
console.log("reading");
}else if(reading_txt.includes("Quiz")){
    console.log("Quiz");
}else{
 console.log("Other");
}//else
}//for





//worked - looped through all weeks
//const weeks = document.querySelector('div[id="cds-react-aria-106-accordion-panel"]').querySelectorAll('li');
const weeks = document.querySelector('div[title="Course Material"]').querySelectorAll('li');
for(var j=0;j<weeks.length;j++){

    console.log(weeks[j]);
    weeks[j].childNodes[0].click();
    
}//for


  var slider = document.querySelector('[aria-label ="Video Progress"]');
  console.log(slider);
  slider.setAttribute("aria-valuenow","100");

var slider_time=document.querySelector('[class ="current-time-display"]').innerText;
 console.log(slider_time);
var slider_time = document.querySelector('[class ="duration-display"]').innerText;
  console.log(slider_time);
  slider_time.setAttribute("aria-valuemin","100");


document.querySelector('[class ="current-time-display"]').innerText = document.querySelector('[class ="duration-display"]').innerText;
 
var slider = document.querySelector('[aria-label ="Video Progress"]');
  slider.setAttribute("aria-valuenow","100");
  
var slider = document.querySelector('[aria-label ="Video Progress"]');
  slider.setAttribute("aria-valuetext","3 minutes 00 seconds");
  
  
  var slider = document.querySelector('[class ="progress-track"]');
  slider.style.width="100%";
  
  var slider = document.querySelector('[class ="progress-handle"]');
  slider.style.left="100%";
  
  var slider = document.querySelector('[class ="rc-ProgressBarTimeBadge"]');
  slider.style.left="100%";
  console.log(slider);
  
  
// element.classList.add("hovering");
//var slider = document.querySelector('[class ="base-track"]');
//  console.log(slider);
 // slider.classList.add("hovering");
 
setTimeout(function() {
var slider1 = document.querySelector('[class ="base-track"]');
slider1.click();
var slider = document.querySelector('[class ="rc-ProgressBarTimeBadge"]');
  slider.style.left="100%";
  console.log(slider);
}, 3000);


var h = document.createElement("div");
 h.setAttribute("class","rc-ProgressBarTimeBadge");
	h.style.left = "100%"; 
	h.innerText= document.querySelector('[class ="duration-display"]').innerText;
var slider1 = document.querySelector('[class ="base-track"]');
slider1.appendChild(h);

document.querySelector('[class ="current-time-display"]').innerText = document.querySelector('[class ="duration-display"]').innerText;
 
var slider = document.querySelector('[aria-label ="Video Progress"]');
  slider.setAttribute("aria-valuenow","100");
  
var slider = document.querySelector('[aria-label ="Video Progress"]');
  slider.setAttribute("aria-valuetext","3 minutes 00 seconds");
  
  
  var slider = document.querySelector('[class ="progress-track"]');
  slider.style.width="100%";
  
  var slider = document.querySelector('[class ="progress-handle"]');
  slider.style.left="100%";
  
  var slider =document.querySelector('[class ="vjs-progress-holder"]');
  var slider = document.querySelector('[class ="vjs-load-progress"]');
  slider.parentElement.setAttribute("aria-valuenow","100");
  
  
  
  var slider = document.querySelector('[class ="vjs-play-progress"]');
  slider.style.width="100%";
  
  
//worked - seeking time of the video
const media = document.querySelector("video");
//The HTMLMediaElement API is used for video controls
// time is calculated in seconds
media.currentTime = Math.floor(media.duration)-3;
console.log(media.currentTime);
media.play();




//worked- clicked try again
 var try_again = document.querySelector('a[aria-labelledby ="Try again"]');
 try_again.click();


//worked - got options text but already coded
/*
var options_text= question.querySelectorAll(".rc-Option");
    console.log(options_text);
console.log(options_text[i].textContent);
*/