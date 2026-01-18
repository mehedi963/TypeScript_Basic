// Explore Conditional Type  ==>> jei type condition opor dependent kore

type A = null;
type B = undefined;

type C = A extends number ? true : B extends string ? true : false

type RichPeopleVehecle = {
    bike : string,
    car : string,
    ship : string,
};

type CheckVehical<T> = T extends keyof RichPeopleVehecle ? true : false

type hasBike = CheckVehical<"bike">