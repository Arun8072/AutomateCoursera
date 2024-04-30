
//worked- found category
const reading_txts = document.querySelectorAll('.rc-WeekItemAnnotations');
console.log(reading_txts);
for( var i=0;i<reading_txts.length;i++){
var reading_txt = reading_txts[i].textContent;
if(reading_txt.includes("Reading")){
console.log("reading section");


}//if
}//for




var link = "/learn/what-is-the-metaverse/lecture/ldoe8/welcome-to-the-metaverse";

var iframe_window = document.createElement("iframe");
	iframe_window.src=link;
	//setting attributes
	iframe_window.width = "70%"; 
	iframe_window.height = "30%";
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
 iframe_content = iframe_window.contentWindow.document;

iframe_window.onload = function() {
console.log("loaded");
setTimeout(function() {
  

const media = iframe_content.querySelector("video");
// time is calculated in seconds
media.currentTime = Math.floor(media.duration)-3;
console.log(media.currentTime);
media.play();
//  ifr_fun();
}, 3000);
};//onload

function ifr_fun() {
const media = iframe_content.querySelector("video");
// time is calculated in seconds
media.currentTime = Math.floor(media.duration)-3;
console.log(media.currentTime);
media.play();
}