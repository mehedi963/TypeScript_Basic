// Static 
// class Counter{
//     count: number = 0;

//     increment(){
//         return (this.count = this.count +1) ;
//     }
//     decrement(){
//         return (this.count = this.count - 1);
//     }
// }

// const instance1 = new Counter();    // different memory te kaj kore
// console.log(instance1.increment()); //1
// console.log(instance1.increment()); //2
// console.log(instance1.increment()); //3

// const in2 = new Counter();   //aitaw different memory te kaj korbe
// console.log(in2.increment()); //1
// console.log(in2.increment()); //2



// aitar jonno static use korte pari jate kore same memory thake kaj kore
class Counter{
   static count: number = 0;

    increment(){
        return (Counter.count = Counter.count +1) ;
    }
    decrement(){
        return (Counter.count = Counter.count - 1);
    }
}

const instance1 = new Counter();    
console.log(instance1.increment()); 
console.log(instance1.increment()); 
console.log(instance1.increment()); 

const in2 = new Counter();   
console.log(in2.increment()); 
console.log(in2.increment()); 

const i3 = new Counter();
console.log(i3.decrement());
console.log(i3.decrement());

