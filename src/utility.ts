//Explore Utility Type


type Product = {
    id : number;
    name : string;
    price : number;
    stock : number;
    color?: string;
}

//Goal to product summary make kora with id,name,pricce only
//Alta product r list amount of information jante chasci 

//Pick<kon type r product , "kon kon feature">
type ProductSummary = Pick<Product, "id" | "name" | "price">

//Omit >>Jei information dorkar nai omit maddome bat dibo
type ProductWithoutStock = Omit<Product, "stock" | "color">

//Requred >> optional hok ba onno kicu must be require hoite hobe
type ProductColor = Required<Product>

const product1 : ProductColor = {
    id: 555,
    name : 'Mouse',
    price : 45,
    stock : 75,
    color : "blavl"
}

//Partial >> all info are optional
type ProductOptional = Partial<Product>

//Read Only >> only for read
type productReadOnly = Readonly<Product> 

//Record >> Empty object declear jonno use kori

const emptObj : Record<string, unknown> = {}

const Product2 = {
    id: 555,
    name : 'Mouse',
    price : 45,
}