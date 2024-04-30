/*
details = { }; // main object
console.log("run");
async function ck() {
console.log("func");
section={};

for (let wt = 0; wt < 2; wt++) {
console.log("loop1");
await new Promise(r => setTimeout(r,2000));
var section={};
for(i = 0; i < 10; i++) {
console.log("loop2");

 section['section'+i]
         ={  
             ["link"+i]:'somethingelse',
             ["category"+i]: 'something'
           };
 
}//for
details['week'+wt]=section;
console.log(details);
//console.log(section);

}//for
}//fun
ck();
*/

details = { }; // main object
console.log("run");
async function ck() {
console.log("func");
section={};

for (let wt = 0; wt < 2; wt++) {
console.log("loop1");
await new Promise(r => setTimeout(r,2000));
var section={};
for(i = 0; i < 10; i++) {
console.log("loop2");

  details['link'+wt+i]="g"+wt+i;
  details['category'+wt+i]='g'+wt+i;
}//for

console.log(details);


}//for
}//fun
ck();
