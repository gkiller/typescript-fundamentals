export interface Product{

    id: number,
    name: string,
    icon: string,
    description?: string,
    validate(): boolean
}

//  Type alias with union
type ProductAlias = string | {

    id: number,
    name: string,
    icon: string,
    description?: string
}


//  Init
let tProduct: ProductAlias = {

    id: 1,
    name: 'string',
    icon: 'yo',
    description: 'oeodhf'
}


//  Init string only
let ta: ProductAlias = 'yyuu';


//  Alternative to enums
//  Variables must be in the list noted below
type EnumAlt = 'Option' | 'No Option';

let p: EnumAlt = 'No Option'