function snail(arrT){
  let l =[];
 while (true){ 
    l = l.concat(arrT[0]);
    arrT.shift();
    if (arrT ==0){
      break; 
    } 
    let i =0;
    let vars = arrT.length -1;
     while(i<vars){
      l = l.concat(arrT[i].at(-1));
      arrT[i].pop();
      i++;
    }
     l = l.concat(arrT.at(-1).reverse()); 
    arrT.pop();
    if (arrT ==0){
      break; 
    } 
   
    arrT.reverse();
    for (y in arrT){
      let f =arrT[y].at(0);
      l = l.concat(f);
      arrT[y].shift();
    }
    arrT.reverse();    
  } 
  return l;
}
  

console.log(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]])); 
 
