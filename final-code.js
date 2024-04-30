//worked1 - opened
const start_btn = document.querySelector('button[aria-labelledby="Resume assignment"]');
start_btn.click();
console.log("opened");

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
  
 //worked-seperated
 if(options[0]){
    if(options[0].getAttribute("type")=="radio"){
    console.log("radio");
     }else if(options[0].getAttribute("type")=="checkbox"){
         console.log("checkbox");
     }//elseif
     
  }else{ console.log("textarea"); }//else
  
    for (let i = 0; i < options.length; i++) {
    console.log("option"+i);
    console.log(options[i]);
    options[i].parentElement.click(); //worked-seleted options
    }//for
  
  });//foreach


