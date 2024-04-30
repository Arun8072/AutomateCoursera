
//worked- found category
const reading_txts = document.querySelectorAll('.rc-WeekItemAnnotations');
console.log(reading_txts);
for( var i=0;i<reading_txts.length;i++){
var reading_txt = reading_txts[i].textContent;
if(reading_txt.includes("Reading")){
console.log("reading section");


}//if
}//for


=======================================

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


// we can get the reference to the inner window
    let iframeWindow = iframe_window.contentWindow; // OK
    try {
      // ...but not to the document inside it
      let doc = iframe_window.contentDocument; // ERROR
    } catch(e) {
      alert(e); // Security Error (another origin)
    }

    // also we can't READ the URL of the page in iframe
    try {
      // Can't read URL from the Location object
      let href = iframe_window.contentWindow.location.href; // ERROR
    } catch(e) {
      alert(e); // Security Error
    }

var x = document.getElementsByTagName("iframe");
x[0].querySelector("video");
var y = (x.contentWindow || x.contentDocument);
if (y.document){y = y.document;}
var test = y.getElementsByTagName("video");

var s= parent.iframe_window.document;
console.log(s);
var media = s[0].document.getElementsByTagName("video");

console.log(media.innerHTML);
media.play();




 iframe_content = iframe_window.contentWindow.document;

console.log(iframe_content);



iframe_window.onload = function() {
console.log("loaded");

setTimeout(function() {
  
}, 3000);
};//onload

function ifr_fun() {

}