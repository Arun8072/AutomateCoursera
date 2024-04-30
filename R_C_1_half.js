answer=[];
var option_type,h;

function modal(i,category) {
console.log("loop"+i);
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
   option_type=options[0].getAttribute("type");
    if(option_type<=category){
   // console.log("radio");
      if (option_type=="radio") {
        h=i; 
        console.log("radio");
      }else if(option_type=="checkbox"){
        h=(options.length)-1;
        console.log("checkbox");
      }
    
      for (let  k= 0; k <= h; k++) {
      
            console.log("option"+k);
            console.log(options[k]);
            options[k].parentElement.click(); //worked-seleted options
       }
          

     }//if
  }//if
  }//for
}

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
