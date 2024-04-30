var links = "/learn/what-is-the-metaverse/lecture/tmXVH/educational-potential-in-the-metaverse";

var iframe_window = document.createElement("iframe");
	iframe_window.src=links;
	//setting attributes
	iframe_window.width = "50%"; 
	iframe_window.height = "25%";
	iframe_window.frameBorder = "0";
	iframe_window.scrolling = "0";
	//setting style 
	iframe_window.style.border= "none";
	iframe_window.style.backgroundImage= "url('https://www.google.com/imgres?imgurl=https%3A%2F%2Fpng.pngtree.com%2Fpng-clipart%2F20220604%2Foriginal%2Fpngtree-stickers-that-say-made-with-love-png-image_7931149.png&tbnid=I2skzUu1VAsZGM&vet=1&imgrefurl=https%3A%2F%2Fpngtree.com%2Fso%2Fmade-with-love&docid=O5jsmNUpDHAPWM&w=1200&h=1200&hl=en-US&source=sh%2Fx%2Fim%2F2')";
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
const media = iframe_content.querySelector("video");
console.log(media);
//The HTMLMediaElement API is used for video controls
// time is calculated in seconds
//media.currentTime = Math.floor(media.duration)-3;
console.log(media.currentTime);
media.play();
 }, 10000); 
  
};//onload