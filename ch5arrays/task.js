// //q1
let marks=[85,97,44,37,76,60]
 let sum =0;
  for(let val of marks){
    sum=sum+val;  //sum+= val
    console.log(sum)
  }
  let avg =sum/marks.length
  console.log(avg)

//Q 2 
  let item= [250,645,300,900,50]
let idx=0;
  for(let val of item )
  {
    console.log(`val at index ${idx} ${val}`);
    let offer = val/10;
    item[idx]=item [idx]-offer;
    console.log(`val after offer ${idx} ${item[idx]}`);  // in this we want to print statment inside the for of loop
    idx++;
   
  }

// by for loop
for (let i=0;i<item.length;i++){
  let offer= item[i]/10;
  item[i]=item[i]-offer;

}
console.log(`val after discount is ${item}`);