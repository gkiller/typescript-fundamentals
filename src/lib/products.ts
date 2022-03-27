import { productsURL } from './config';
import { Product } from './interfaces';


//  *New: updated Promise return type to the Product interface 
export async function getProducts(): Promise<Product[]> {

    const response: Response = await fetch(productsURL);

    //  New: removed destructured object {id: number, ...} and replaced with interface
    //  since this is repeated througout
    const products: Product[] = await response.json();
    
    return products;
}
