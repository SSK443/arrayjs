// months=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec','66'];
// console.log('months:',months);
// console.log('length of arry :',months.length);
// console.log(typeof months);
// console.log('first elment:',months[0]);
// console.log('last elment:',months[months.length-1]);
// console.log('last elment:',months[months.length-2]);

// console.log('display arra elements using for loop');
// for(index=0;index<months.length;index++){
//   console.log(months[index])
// }
// console.log('display arra elements using for in loop');
// for(let month of months){
//   console.log(month)
// }

// //push
// months.push('ki');
// //unshift
// months.unshift('hi');
// console.log('months:',months);
// //pop
// months.pop(months);
// //shift
// months.shift(months);
// console.log('months:',months);
// //check a number present in a array 40
// Array=[10,20,20,30,40,50,60,70,80,90,100];
// n=300;
// let count=0
// let ispresent=false;
// for(let num of Array){
//   count++
//   if(num==n){
//     ispresent=true;
    
//     break;
//   }
//   else{
//     ispresent=false;
    
//   }
// }
// console.log(ispresent?n+' is present in array':n+' is not present in array');
// console.log('count:',count);
// //ALGORTHIM
// //create A effecient search
// //1.sort the array
// //2.find the  middle element=low+high/2
// //3.search==middle element,founded,break
// ///4.search>middle element,low=middle+1
// //5.search<middle element,high=middle-1
fruit=['apple','banana','orange','pineapple','strawberry'];
// console.log(fruit);
// console.log('fruit',fruit[0])
// console.log('fruit',fruit[fruit.length-1])
// cconsole.log('fruit',typeof fruit)
// onsole.log('fruit',fruit.length)
// console.log('fruit',fruit[fruit.length-2])
for(index=0;index<fruit.length;index++){
  console.log(fruit[index])
}
for(let fr of fruit){
  console.log(fr)
}
fruit.push('kiwi');
fruit.unshift('ff');
fruit.pop('kiwi');
fruit.shift('ff');

console.log(fruit);

arry=[1,23,4,5,6,7,8,9,10];
search=23;
let present=false
let count=0;
for(let n of arry){
  count++
  if(n==search){
    present=true
    break
  }
  else{
     present=false
  }
}
console.log(present?'search is present in array'+search:'search is not present in array'+search);
console.log(count);
  