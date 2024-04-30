//worked - looped through all weeks
const weeks = document.querySelector('div[title="Course Material"]').querySelectorAll('li');
 for(var j=0;j<weeks.length;j++){
    console.log(weeks[j]);
   // weeks[j].childNodes[0].click();
    


// worked - got all topics and their category
const link_pelement= document.querySelectorAll('div[role="presentation"]');
console.log(link_pelement);
const category_txts = document.querySelectorAll('.rc-WeekItemAnnotations');
console.log(category_txts);

var links = []; 
var iframe_window=[];
var iframe_content=[];
var media=[];
var link_url,link_txt,category;
run(j);
async function run(j) {
  
//await new Promise(r => setTimeout(r,120000*j));
console.log("week "+j);
for(var k=0; k<category_txts.length;k++){
console.log("category "+k);
//await new Promise(r => setTimeout(r,1000*k));
 link_url= link_pelement[k+4].childNodes[0].getAttribute("href");
 link_txt=category_txts[k].previousSibling.textContent;
links.push(link_url);
console.log(k+link_txt);
console.log(links[k]);
category = category_txts[k].textContent;

 cf(links[k],k,j);


} //for-category
await new Promise(r => setTimeout(r,120000*j));
}//async
}// for-weeks

//  console.log(link);

 // console.log(link);
 function cf(link,k,j){
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

	iframe_window[k].style.position = "fixed";
  iframe_window[k].style.overflow = "auto";
  iframe_window[k].style.zIndex = 1+k;
	iframe_window[k].style.top = 20+(k*20)+"px";
  iframe_window[k].style.left = 20+(j*20)+"px";
//	iframe_window.style.width = "100%";
//	iframe_window.style.height = "100%";
	
//document.body.appendChild(substack); //this line works but it away from the display in this site

document.querySelector('[data-test="rc-periodPage"]').appendChild(iframe_window[k]);
//const iframe_content = iframe_window.contentWindow.document;
   return iframe_window[k];
}