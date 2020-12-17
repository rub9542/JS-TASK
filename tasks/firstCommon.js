A = [1,2,4,6,7,8];

B=[5,9,6,8,1];

C=[...A, ...B];

D={};

C.forEach((i)=>{
    D[i] = D[i] ? (D[i]+=1):1; 
}  );

const filteredValue = Object.fromEntries(Object.entries(D).filter(([key,value])=> value >1))


E=[];

for(var key in filteredValue){
    E.push(key)
}
console.log(E[0]);
