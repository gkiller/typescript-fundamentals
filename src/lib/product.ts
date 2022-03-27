//  Import interface to enforce definition upon the base class
import { Product } from './interfaces';


//  Create a base class that will be extended by other classes
//  New: set to abstract to prevent it from being instantiated/modified
//  New: Product base will *implement* the interface
abstract class ProductBase implements Product{

    //  Provides a constructor to class(removed from FoodProduct)
    //  New: The params and method below also conform to the definition defined in the interface
    constructor(public id: number, public name: string, public icon: string){ }

    //  Provides methods to other classes
    //  *Make sure types === what are defined in interface.  ex. Boolean (wrapper object) != boolean (primitive)
    validate(): boolean{
                
        //  Check to see if values are present (true) or not (false)
        throw new Error('Not implemented');
    }
}


//  Revised class extends base class
export class FoodProduct extends ProductBase{


    //  Properties/Fields: Assign initial values since strict setting are defined in tsconfig
    // id    = 0;
    // name  = '';
    // icon  = '';


    //  Constructor: Auto implemented properties (negates need for properties defined above 
    //  and this objects below)


    //  "map" param values to properies
    // this.id = id;
    // this.name = name;
    // this.icon = icon

 
    //  Methods
    validate(): boolean{
            
      //  Check to see if values are present (true) or not (false)
      return !!this.id  && !!this.name && !!this.icon
    }
    
}


//  Class that 'fits' the ProductBase model
export class SportingGoods extends ProductBase{

    //  If class has a constructor of its own and is extending a parent class, must use super()
    constructor(id: number, name: string, icon: string){

        //  Provide any necessary arguments
        // super(100, 'Super', 'Extends ProductBase');

        //  OR - Pass up arguments from constructor params
        super(id, name, icon);
    }
}



//  Instantiate
let fp = new SportingGoods(100, 'eee', 'www');
