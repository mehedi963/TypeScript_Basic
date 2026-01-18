// Generics Function
const createArrayWithString = (value : string) => [value];

const createArrayWithNumber = (value : number) => [value];

const createArrayWithObject = (value : {id:string, name:string}) => {
    return [value];
}

const arrStr = createArrayWithString("Apple");
const arrNub = createArrayWithNumber(234);
const arrObj = createArrayWithObject({
    id: "344",
    name : "asam"
});
console.log(`Fuction normally Output :
     ${arrStr}......${arrNub}........${arrObj}`)

///same jinis tai alada alada type declear na kore gemeric korte pari

const createArrayWithGeneric = <T> (value : T) => {
    return [value];
}

const arrStre = createArrayWithGeneric("Apple");
const arrNube = createArrayWithGeneric(234);
const arrObje = createArrayWithGeneric({
    id: "344",
    name : "asam"
});

console.log(`Generics Output : ${arrStre}......${arrNube}........${arrObje}`)


//tuple
const createArrayWithTuple = (param1: number, param2:string) =>{
    return [param1,param2]
};
const createArrayWithTuple1 = (param1: string, param2:string) =>{
    return [param1,param2]
};
const res = createArrayWithTuple(222, "makal");
const res1 = createArrayWithTuple1("123", "fol");
console.log(`Withput generic output: ${res}......${res1}`)

//Generics tuple
const createArrayWithGenericTuple = <X,Y> (p1:X, p2:Y) => [p1,p2];

const res3 = createArrayWithGenericTuple(120, "makal");
const res4 = createArrayWithGenericTuple(123, 234);
console.log(`With generic output: ${res3}......${res4}`)

