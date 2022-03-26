import { productsURL } from "../lib";

const prefix = '🐉 ';

//  Custom type
type ProductType = {

  id: number,
  name: string,
  icon?: string
}


export default async function updateOutput(id: string){

    //  Get products and await for response
    const products = await getProducts();

    //  Output
    const output    = document.querySelector(`#${id}`);
    const html      = layoutProducts(products);

    //  
    if( output && html ){

        output.innerHTML = html;
    }
}


//  Output to DOM
function layoutProducts(products: ProductType[]){

    //  Can use destructuring to get the properties that are needed
    const items = products.map( ( {id, icon, name} ) => {

        const productHTML = `

            <span class="card-id">#${id}</span>
            <i class="card-icon ${icon} fa-lg"></i>
            <span class="card-name">${name}</span>
        `;

        const cardHTML= `

            <li>
                <div class="card">
                    <div class="card-content">
                        <div class="content">
                            ${productHTML}
                        </div>
                    </div>
                </div>
            </li>
        `;

        return cardHTML;
    });


    //  Add to ul
    let productsHTML = `<ul>${items.join('')}</ul>`;

    return productsHTML;
}       




//  Async/await call
//  await will wait for the response in the fetch call
//  This requires the function to be prefixed with async.
//
//  Note how getProducts is a Promise of ProductType[] defined below.
//  Even though it is implicitly known, it will be added explicitly to getProducts
async function getProducts(): Promise<ProductType[]>{

    //  Type is Promise of type Response
    const response: Response = await fetch(productsURL);

    //  Hover over json() and it is a Promise of type any.  This
    //  indicates that it is asynchronous and needs an await
    const products: ProductType[] = await response.json();

    return products;
}



//  Output sample code
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


    displayProducts(sampleProducts);


    //  Ch. 7: Optional params
    //  Using object desctructuring
    const {floor, random} = Math;
    const getRandomInt = (max:number) => floor(random() * max);

    //  By default this returns an object, but will be modified to return
    //  a ProductType.
    function createProduct(name: string, icon?: string): ProductType{

        const id = getRandomInt(1000);

        return{
            id, name, icon
        }
    }


    console.log(`$prefix} Optional params`);

    let pineapple   = createProduct('pineapple', 'pineapple.jpg');
    let mango       = createProduct('mango');

    console.log(pineapple, mango);
    
    
    //  Ch.9: Rest params
    function buildAddress(street: string, city: string, ...restOfAddress: string[]){

        console.table(...restOfAddress);

        const address = `${street} ${city} ${restOfAddress.join(' ')}`;
        return address;
    }

    const thisAddress = buildAddress('123 Any St', 'Anycity', 'Suite 100', '90210', 'USA');

    console.log(`${prefix} Rest parameters`);
    console.log(thisAddress);



    //  Ch. 10: Parameter destructuring { ... }
    //  See other examples above.
    function displayProduct({id, name}: ProductType) : void{

        console.log(`${prefix} Destructuring parameters`);
        console.log(`Product id: ${id} and name: ${name}`);
    }
    
    //  Get product
    const thisProduct = getProductById(10);
    
    if( thisProduct ){

        displayProduct(thisProduct)
    }
}


//  
