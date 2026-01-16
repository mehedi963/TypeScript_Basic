//Genericd Interface

interface Developer<T>{
    name: string;
    salary : number;
    device : {
        brand : string;
        model : string;
        released : string;
    };
    smartwatch : T;
}

const poorDev : Developer<{
    heartRate : string;
    stopwatch : boolean;
}> = {
    name: "Mr.X",
    salary : 20,
    device : {
        brand : "lenevo",
        model : "A21",
        released : "2021"
    },
    smartwatch : {
        heartRate : "200",
        stopwatch : true,
    }

};

//new aro akta user nijer isce moto type change kore object extand korte partesi ager sob change kora lagtese na
const richDev : Developer<{
    heartRate : string;
    call : boolean;
    calculator : boolean;
    AiFeatures : boolean;
}> = {
    name: "Mr.X",
    salary : 20,
    device : {
        brand : "Apple",
        model : "17pro",
        released : "2025"
    },
    smartwatch : {
        heartRate : "180",
        call : true,
        calculator : true,
        AiFeatures : true,
    }

};