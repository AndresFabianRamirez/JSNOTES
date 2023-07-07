
  function dirReduc(arr){
    let arr1 = arr.map(element => element.toUpperCase());
    for(let i =1;i<= parseInt(arr1.length /2)+1;i++){
      for(let i =0;i<arr1.length - 1;i++){
        if ((arr1[i]=="NORTH" && arr1[i+1]=="SOUTH")|| (arr1[i]=="SOUTH" && arr1[i+1]=="NORTH") ){
           arr1.splice(i,2);
        }
        if ((arr1[i]=="EAST" && arr1[i+1]=="WEST")||(arr1[i]=="WEST" && arr1[i+1]=="EAST")){
          arr1.splice(i,2);
       }
      }
    }
    return arr1;
  }

console.log(dirReduc(['North', 'South', 'South', 'East', 'West', 'North', 'West']));