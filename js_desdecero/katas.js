function numerosI(str){
  let a = str.split("");
  console.log(a);
  let b = a.filter(x=> parseInt(x)==Number(x)).join("");
  console.log(b);
}
numerosI("dsfgasdrg545a6"); 
 
