//assertion
let anything : any

anything = "Mehedi"


const kgToGmConvertor = (input: string | number) =>{
    if(typeof input === 'number'){
        return input * 1000;
    } 
    else if (typeof input === 'string'){
        const [value] = input.split(" ");
        return `Convert output : ${Number(value) * 1000}`
    }
}

const result1 = kgToGmConvertor(2);
const result2 = kgToGmConvertor("2 kg")
console.log(result1)
console.log((result2))
