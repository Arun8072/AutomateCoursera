// worked - got all topics and their category
const link_pelement= document.querySelectorAll('div[role="presentation"]');
console.log(link_pelement);
const category_txts = document.querySelectorAll('.rc-WeekItemAnnotations');
console.log(category_txts);
var links = []; 
for(var k=0; k<category_txts.length;k++){

var link_url= link_pelement[k+4].childNodes[0].getAttribute("href");
var link_txt=category_txts[k].previousSibling.textContent;
links.push(link_url);
console.log(k+link_txt);
console.log(links[k]);
var category = category_txts[k].textContent;
if(category.includes("Video")){
    console.log("video");
}else if(category.includes("Reading")){
  create_iframe(links[k]);
console.log(k+"reading");
}else if(category.includes("Quiz")){
    console.log("Quiz");
}else{
 console.log("Other");
}//else
} //for

function create_iframe(link){
  console.log(link);
setTimeout(function() {
  console.log(link);
var iframe_window = document.createElement("iframe");
	iframe_window.src=link;
	//setting attributes
	iframe_window.width = "50%"; 
	iframe_window.height = "25%";
	iframe_window.frameBorder = "0";
	iframe_window.scrolling = "0";
	//setting style 
	iframe_window.style.border= "none";
	iframe_window.style.background = "white";
	iframe_window.style.position = "fixed";
  iframe_window.style.overflow = "auto";
  iframe_window.style.zIndex = "1";
	iframe_window.style.left = "30%";
  iframe_window.style.bottom = "20%";
//	iframe_window.style.width = "100%";
//	iframe_window.style.height = "100%";
	
//document.body.appendChild(substack); //this line works but it away from the display in this site

document.querySelector('[data-test="rc-periodPage"]').appendChild(iframe_window);
//const iframe_content = iframe_window.contentWindow.document;

iframe_window.onload = function() {
  console.log("iframe opened");
 setTimeout(function() {
const iframe_content = iframe_window.contentWindow.document;
console.log(iframe_content);
const read_btn = iframe_content.querySelector('button[data-testid="mark-complete"]');
//read_btn.click();
console.log("marked as read");
 }, 8000+(k*1000)); 

};//onload
return;
}, 12000+(k*1000)); 
} //func create_iframe
