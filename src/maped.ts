//Mapped Type loop in typescript

// only map
const arrOfNum :number[] = [1,4,6];

const arrOfStr : string[] = ['1','2','5','7'];

const arrOfStringUsingMap : string[] = arrOfNum.map(num => num.toString());
console.log(arrOfStringUsingMap)

//map type

type AreaOfNub = {
    hight : number;
    width : number;
}

type hight = AreaOfNub["hight"]

// type AreaOfString = {
//     hight : string;
//     width : string;
// }
//AreaOfString type ta map type use kore korbo

type Area<T> = {
    [key in keyof T] : T[key];

    //key >> hight
    //key >> width
};

/*
key in keyof T
keyof T >>> "hight" | "width"
  

T mane hoilo >>> {hight : string, width : string}


T[key] mane aita bujay mane Hight r tpye ta bujay T['width'] : string  
*/

const arear1 : Area<{hight : string, width : number}> = {
    hight : "56",
    width : 23
} 
