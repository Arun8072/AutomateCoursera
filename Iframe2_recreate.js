var link_pelement,category_txts;
var w,x;
//var l,h,k,j,m,o,s;
details = { };
//worked - looped through all weeks
const weeks = document.querySelectorAll('a[data-test="rc-WeekNavigationItem"]');
//const weeks = document.querySelector('div[title="Course Material"]').querySelectorAll('li');
console.log(weeks);

async function ck() {

for ( w = 0; w < weeks.length; w++) {
weeks[w].click();
await new Promise(r => setTimeout(r,5000));

  console.log("weeks "+ w);
   // weeks[j].childNodes[0].click();

// worked - got all topics and their category
 link_pelement= document.querySelectorAll('div[role="presentation"]');
//console.log(link_pelement);
 category_txts = document.querySelectorAll('.rc-WeekItemAnnotations');
//console.log(category_txts);
 
for ( x = 0; x < category_txts.length; x++) {
 // console.log(link_pelement[x+4]);
//  console.log(category_txts[x]);
  //when selecting [role="presentation"] it has some other extra elements ,to eliminate that start from four by se+4
    details["link"+w+x]= link_pelement[x+4];
    details["category"+w+x]=category_txts[x];
           
  
}//for

console.log(details);

}//for-weeks


/*
for ( w = 0; w < weeks.length; w++) {

await new Promise(r => setTimeout(r,5000));

  console.log("weeks "+ w);
for ( x = 0; x < category_txts.length; x++) {
 
  //when selecting [role="presentation"] it has some other extra elements ,to eliminate that start from four by se+4
   console.log(details["link"+w+x]);
   console.log(details["category"+w+x]);
}//for

console.log(details);

}//for-weeks
*/
console.log("details");
console.log(details["link53"]);
el=details["link53"];
el.childNodes[0].click();

}//fun
ck();



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