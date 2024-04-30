var link_pelement,category_txts,crumbs,w_now,s_now,p;
var w,x;
//var l,h,k,j,m,o,s;
details = { };
//worked - looped through all weeks
const weeks = document.querySelectorAll('a[data-test="rc-WeekNavigationItem"]');
//const weeks = document.querySelector('div[title="Course Material"]').querySelectorAll('li');
console.log(weeks);

async function ck() {

for ( w = weeks.length-1 ; w>=0 ; w--) {
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
 // console.log(category_txts[x]);
  //when selecting [role="presentation"] it has some other extra elements ,to eliminate that start from four by se+4
    details["link"+w+x]= link_pelement[x+4].childNodes[0];
    details["category"+w+x]=category_txts[x].textContent.split("•",1)[0];
    details["name"+w+x]=link_pelement[x+4].childNodes[0].querySelector("p[data-test='rc-ItemName']").textContent;
  
}//for

console.log(details);

}//for-weeks



//console.log(details["link00"]);

details["link00"].click();
//selecting the section from the same week opened, does change the whole html so it stays in the page so you can continue inspect element

await new Promise(r => setTimeout(r,2000));

crumbs=document.getElementsByClassName('breadcrumb-item');
w_now=crumbs[1].textContent.match(/\d+/);
w_now=w_now[0]-1; //-1 to start from zero index
s_now=crumbs[2].textContent;
//console.log(w_now);
console.log(s_now);

for (p = 0;p < category_txts.length;p++) {
  if(s_now==details["name"+w_now+p]){
    break;
  }//if
}//for

console.log(p);
console.log(details["name"+w_now+p]);

    if(details["category"+w_now+p]=="Video"){
      console.log(details["category"+w_now+p]);
      return;
    }else if(details["category"+w_now+p]=="Reading"){
      console.log(details["category"+w_now+p]);
    }else if(details["category"+w_now+p]=="Quiz"){
      console.log(details["category"+w_now+p]);
    }//if

}//fun
ck();

