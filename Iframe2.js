// worked - got all topics and their category
const link_pelement= document.querySelectorAll('div[role="presentation"]');
console.log(link_pelement);
const category_txts = document.querySelectorAll('.rc-WeekItemAnnotations');
console.log(category_txts);

var links = []; 
var iframe_window=[];
for(var k=0; k<category_txts.length;k++){

var link_url= link_pelement[k+4].childNodes[0].getAttribute("href");
var link_txt=category_txts[k].previousSibling.textContent;
links.push(link_url);
console.log(k+link_txt);
console.log(links[k]);
var category = category_txts[k].textContent;
if(category.includes("Video")){
    console.log("video");
    create_iframe(links[k],k,"V");
}else if(category.includes("Reading")){
  create_iframe(links[k],k,"R");
console.log(k+"reading");
}else if(category.includes("Quiz")){
    console.log("Quiz");
}else{
 console.log("Other");
}//else
} //for

function create_iframe(link,k,c){
//  console.log(link);
setTimeout(function() {
  console.log(link);
  console.log("time1"+k);
  console.log(100+(k*30));
 iframe_window[k] = document.createElement("iframe");
	iframe_window[k].src=link;
	//setting attributes
	iframe_window[k].width = "45%"; 
	iframe_window[k].height = "25%";
	iframe_window[k].frameBorder = "0";
	iframe_window[k].scrolling = "0";
	//setting style 
	iframe_window[k].style.border= "1px solid grey";
	iframe_window[k].style.background = "white";
iframe_window[k].style.backgroundImage= "url('https://www.google.com/imgres?imgurl=https%3A%2F%2Fpng.pngtree.com%2Fpng-clipart%2F20220604%2Foriginal%2Fpngtree-stickers-that-say-made-with-love-png-image_7931149.png&tbnid=I2skzUu1VAsZGM&vet=1&imgrefurl=https%3A%2F%2Fpngtree.com%2Fso%2Fmade-with-love&docid=O5jsmNUpDHAPWM&w=1200&h=1200&hl=en-US&source=sh%2Fx%2Fim%2F2')";
	iframe_window[k].style.position = "fixed";
  iframe_window[k].style.overflow = "auto";
  iframe_window[k].style.zIndex = 1+k;
	iframe_window[k].style.left = 20+(k*10)+"px";
  iframe_window[k].style.bottom = "20%";
//	iframe_window.style.width = "100%";
//	iframe_window.style.height = "100%";
	
//document.body.appendChild(substack); //this line works but it away from the display in this site

document.querySelector('[data-test="rc-periodPage"]').appendChild(iframe_window[k]);
//const iframe_content = iframe_window.contentWindow.document;

iframe_window[k].onload = function() {
  console.log("iframe opened");
 setTimeout(function() {
   console.log("time2"+k);
const iframe_content = iframe_window[k].contentWindow.document;
console.log(iframe_content);
if(c=="V") {
//worked - seeking time of the video
const media = document.querySelector("video");
//The HTMLMediaElement API is used for video controls
// time is calculated in seconds
media.currentTime = Math.floor(media.duration)-3;
console.log(media.currentTime);
media.play();
}else if(c=="R"){
const read_btn = iframe_content.querySelector('button[data-testid="mark-complete"]');
//read_btn.click();
console.log("marked as read");
}

 }, 8000+(k*1000)); 

};//onload
return;
}, 12000+(k*1000)); 
} //func create_iframe
