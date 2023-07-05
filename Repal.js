
let store=process.argv[2]
let a=Number(process.argv[3])
let b=Number(process.argv[4])

const sum=()=>{
    let temp=a+b;
    console.log(temp);
}

const sub=()=>{
    let temp=a-b;
    console.log(temp);
}

const multi=()=>{
    let temp=a*b;
    console.log(temp);
}

const divi=()=>{
    let temp=a/b;
    console.log(temp);
}

const modulo=()=>{
    let temp=a%b;
    console.log(temp);
}



if(store=="sum"){
    sum()
}
else if(store=="sub"){
    sub()
}
else if(store=="multi"){
    multi()
}
else if(store=="divi"){
    divi()
}
else if(store=="modulo"){
    modulo()
}
else{
    console.log("please entr the sum,sub,multi,divi or modulo any calculetor method");
}