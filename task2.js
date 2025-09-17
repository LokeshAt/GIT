//using arrow function
let name="swathi";
let age=24
calculateResult=(TAMIL,ENGLISH,MATHS,SCIENCE,SOCIAL)=>{
    console.log("name :" + name)
    console.log("age :" + age)
console.log((TAMIL+ENGLISH+MATHS+SCIENCE+SOCIAL)/500*100)
}
calculateResult(90,85,97,96,100)
if (calculateResult>100) {
    console.log("distincton")
    
} else if(calculateResult<100) {
    console.log("excellent")
    
}
else{
    console.log("very good")
}