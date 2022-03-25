const prefix = '🐉 ';

//  Custom type
type ProductType = {

  id: number,
  name: string,
  icon?: string
}


export default async function updateOutput(id: string){


}


runTheLearningSamples()


//  Function definitions
function runTheLearningSamples(){

    function displayProductInfo(id: number, name: string){

        console.log(`${prefix} typed parameters`);
        console.log(`product id: ${id} and name: ${name}`);
    }

    displayProductInfo(19, 'hello');

    //
    console.log(`${prefix} function declaration to be hoisted`);
    console.log(addNUmbersDeclaration(7,11));
    
    function addNUmbersDeclaration(x: number, y: number){

        const sum = x+ y;
        return sum;
    }




    //  Function expression: can't be hoisted
    const addNumbersExpression = function(x: number, y: number){

      const sum = x + y;
      return sum;
    }

    console.log(`${prefix} function expression can't be hoisted`);
    console.log(addNumbersExpression(20,11));



    //  Return types
    const sampleProducts = [
      {
          id: 10,
          name: 'Pizza slice',
          icon: 'fas fa-pizza-slice'

      },

      {
          id: 20,
          name:'Ice cream',
          icon: 'fas fa-ice-cream'

      },
      
      {
          id: 30,
          name:'Cheese',
          icon: 'fas fa-cheese'
      }
    ];

    
    function getProductName(): string[]{

        return sampleProducts.map( (i) => i.name );
    }


    //  
    console.log(`${prefix} return array (with fn return type instead of implicit)`);
    console.log( getProductName() );
    

    //  Use custom data type (ProductType)
    function getProductById(id: number): ProductType | undefined{

        return sampleProducts.find( i => id === i.id )
    }

    console.log(`${prefix} retun custom ProductType`);
    console.log(getProductById(10));
    
    
    //  Return void from function
    function displayProducts(products: ProductType[]) : void{

        const productNames = products.map( (i) => {

            const name = i.name.toLocaleLowerCase();
            return name;
        });

        const msg = `Sample products include ${productNames.join(', ')}`;

        console.log(`${prefix} return void`);
        console.log(msg);

    }


    displayProducts(sampleProducts)
}


//  
