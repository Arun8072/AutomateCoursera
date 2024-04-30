//shorten console.log
var c = console.log.bind(document);
c("text");

//css for iframe
.container {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
}

/* Then style the iframe to fit in the container div with full height and width */
.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

<iframe id="frame" 
            src="./iframe_window.html" 
            frameborder="1">
  </iframe>
    
const box = document.createElement("div"); box.id = "box";
 document.body.appendChild(box);

const box = `
  <div id='box'>
    <button id='button-1'>Button</button>
  </div>`;

document.body.innerHTML = box;

 href="/learn/what-is-the-metaverse/lecture/ldoe8/welcome-to-the-metaverse

https://www.coursera.org/learn/what-is-the-metaverse/home/week/6
https://www.coursera.org/learn/what-is-the-metaverse/lecture/2YgIw/future-technology


var iframe = document.getElementById("myFrame");
var elmnt = iframe.contentWindow.document.getElementsByTagName("H1")[0];
elmnt.style.display = "none";

//worked 
const links = document.querySelectorAll('div[data-test="WeekSingleItemDisplay-lecture"]');
console.log(links);
var new_array = []; 
var new_array2 = []; 
for(var k=0; k<links.length;k++){
var link_element= links[k].childNodes[0];
		new_array.push(link_element);
var link_url= link_element.getAttribute("href");
new_array2.push(link_url);
console.log(new_array[k]);
console.log(new_array2[k]);
new_array.
}//for
	
//worked - got all topic link
const link_pelement = document.querySelectorAll('div[data-test="WeekSingleItemDisplay-lecture"]');
console.log(link_pelement);
var links = []; 
for(var k=0; k<link_pelement.length;k++){

var link_url= link_pelement[k].childNodes[0].getAttribute("href");
links.push(link_url);
console.log(links[k]);
} //for

//worked-opened iframe
//var links="/learn/what-is-the-metaverse/lecture/7dRj9/this-is-the-metaverse";
var links = "/learn/what-is-the-metaverse/supplement/S7xQm/field-trip-the-creator-economy";
//var links = "/learn/what-is-the-metaverse/lecture/tmXVH/educational-potential-in-the-metaverse";

var iframe_window = document.createElement("iframe");
	iframe_window.src=links;
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
read_btn.click();
console.log("marked as read");
 }, 7000); 
  
};//onload




//worked - got all topic link

//const link_pelement = document.querySelectorAll('.rc-WeekItemAnnotations').previousSibling;
//console.log(link_pelement);
const reading_txts = document.querySelectorAll('.rc-WeekItemAnnotations');
console.log(reading_txts);
var links = []; 
for(var k=0; k<reading_txts.length;k++){

// var link_url= link_pelement[k].childNodes[0].getAttribute("href");
var link_url=reading_txts[k].previousSibling.textContent;
links.push(link_url);
console.log(k+links[k]);
var reading_txt = reading_txts[k].textContent;
if(reading_txt.includes("Video")){
    console.log("video");
}else if(reading_txt.includes("Reading")){
console.log("reading");
}else if(reading_txt.includes("Quiz")){
    console.log("Quiz");
}else{
 console.log("Other");
}//else
} //for

//worked-opened iframe
//var links="/learn/what-is-the-metaverse/lecture/7dRj9/this-is-the-metaverse";
 var links = "/learn/what-is-the-metaverse/supplement/S7xQm/field-trip-the-creator-economy";
setTimeout(function() {
var iframe_window = document.createElement("iframe");
	iframe_window.src=links;
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
read_btn.click();
console.log("marked as read");
 }, 8000*(k+1)); 

};//onload
}, 12000 *(k+1)); 



// worked - got all topics and their category
const link_pelement= document.querySelectorAll('div[role="presentation"]');
console.log(link_pelement);
const reading_txts = document.querySelectorAll('.rc-WeekItemAnnotations');
console.log(reading_txts);
var links = []; 
for(var k=0; k<reading_txts.length;k++){

var link_url= link_pelement[k+4].childNodes[0].getAttribute("href");
var link_txt=reading_txts[k].previousSibling.textContent;
links.push(link_url);
console.log(k+link_txt);
console.log(links[k]);
var reading_txt = reading_txts[k].textContent;
if(reading_txt.includes("Video")){
    console.log("video");
}else if(reading_txt.includes("Reading")){
  create_iframe(links[k]);
console.log(k+"reading");
}else if(reading_txt.includes("Quiz")){
    console.log("Quiz");
}else{
 console.log("Other");
}//else
} //for

function create_iframe(links){
  console.log(links);
setTimeout(function() {
  console.log(links);
var iframe_window = document.createElement("iframe");
	iframe_window.src=links;
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
 }, 8000*(k+1)); 

};//onload
return;
}, 12000 *(k+1)); 
} //func create_iframe